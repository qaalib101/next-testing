import {DataGrid, GridColDef} from "@mui/x-data-grid";
import {Advocate} from "@/app/ui/interfaces/advocates";


export const AdvocatesTable = (props: {
    filteredAdvocates: Advocate[];
    setFilteredAdvocates: (advocates: Advocate[]) => void;
    searchTerm: string;
    setSearchTerm: (searchTerm: string) => void;
}) => {
    const { filteredAdvocates, setFilteredAdvocates, searchTerm, setSearchTerm } = props;
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

// Make sure each row has a unique `id` field.
    const rows = filteredAdvocates.map((advocate, index) => ({
        ...advocate,
        id: advocate.id.toString(),
    }));

    return (
        <div style={{ height: 600, width: '100%' }} className="bg-white rounded shadow">
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
            />
        </div>
    );
}
