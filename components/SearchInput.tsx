"use client";

import qs from "query-string";
import useDebounce from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchInput = () => {
    const router = useRouter();
    const [value,setValue] = useState<string>("");
    const debounceValue = useDebounce<string>(value,500);
    return (
        <div></div>
    )
}

export default SearchInput;