import {useEffect} from "react";
import {fetcher} from "@/app/ui/fetchers/axiosFetcher";
import useSWR from "swr";
import {Advocate} from "@/app/ui/interfaces/advocates";

export const useAdvocates = (setFilteredAdvocates: (advocates: Advocate[]) => void) => {
    // Fetch the advocates data using SWR
    const { data, error, isLoading } = useSWR<{
        data: Advocate[];
        error: Error | undefined;
    }>('/api/advocates', fetcher);

    useEffect(() => {
        if (data?.data) {
            setFilteredAdvocates(data.data);
        }
    }, [data, setFilteredAdvocates]);

    // Handle the loading state and error
    return {
        advocates: data?.data ?? [],
        isLoading,
        error,
    };
};