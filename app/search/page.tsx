import getSongsByTitle from "@/actions/getSongsByTitle";

interface SearchProps {
    searchParams: {
        title: string;
    }
}

const Search = async ({searchParams}: SearchProps) => {
    const songs = getSongsByTitle(searchParams.title);
    return (
        <div>

        </div>
    )
}
export default Search;