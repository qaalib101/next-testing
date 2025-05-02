import {
    DataGrid,
    GridColDef,
} from "@mui/x-data-grid";
import {Advocate} from "@/app/ui/interfaces/advocates";
import {Box} from "@mui/system";
import {Alert} from "@mui/material";

export const AdvocatesTable = (props: {
    filteredAdvocates: Advocate[];
    isLoading: boolean;
    error: Error | undefined;
}) => {
    const { filteredAdvocates, isLoading, error } = props;
    const columns: GridColDef[] = [
        { field: 'firstName', headerName: 'First Name', flex: 1 },
        { field: 'lastName', headerName: 'Last Name', flex: 1 },
        { field: 'city', headerName: 'City', flex: 1 },
        { field: 'degree', headerName: 'Degree', flex: 1 },
        {
            field: 'specialties',
            headerName: 'Specialties',
            flex: 2,
            renderCell: (params) => (
                <div className="whitespace-pre-wrap">
                    {Array.isArray(params.value) ? params.value.join(', ') : ''}
                </div>
            ),
        },
        { field: 'yearsOfExperience', headerName: 'Years of Experience', type: 'number', flex: 1 },
        { field: 'phoneNumber', headerName: 'Phone Number', flex: 1 },
    ];

    const rows = filteredAdvocates.map((advocate, index) => ({
        ...advocate,
        id: advocate.id.toString(),
    }));

    if (error) {
        return (
            <Box className="p-4">
                <Alert severity="error">Error fetching advocates: {error.message}</Alert>
            </Box>
        );
    }

    return (
        <div style={{ height: "auto", width: '100%' }} className="bg-white rounded shadow">
            <DataGrid
                rows={rows}
                columns={columns}
                pagination
                sx={{
                    '& .MuiDataGrid-columnHeaders': {
                        backgroundColor: '#E5E7EB',
                        fontWeight: 'bold',
                    },
                }}
                loading={isLoading}
            />
        </div>
    );
}
