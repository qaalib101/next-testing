
export const fetcher = async (url: string) => {
    // Fetch data from the given URL. Works with both GET and POST requests.
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) {
        throw new Error(data?.message || 'Error fetching data');
    }

    return data;
};