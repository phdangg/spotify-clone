import getSongsByTitle from "@/actions/getSongsByTitle";
import Header from "@/components/Header";

interface SearchProps {
    searchParams: {
        title: string;
    }
}

const Search = async ({searchParams}: SearchProps) => {
    const songs = getSongsByTitle(searchParams.title);
    return (
        <div className="
            bg-neutral-900
            rounded-lg
            h-full
            w-full
            overflow-hidden
            overflow-y-auto
        ">
            <Header className="from-bg-neutral-900">
                Search
            </Header>
        </div>
    )
}
export default  Search;