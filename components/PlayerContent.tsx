"use client";

import { Song } from "@/types";

interface PlayerContent {
    song: Song;
    songUrl: string;
}

const PlayerContent: React.FC<PlayerContent> = ({
    song,
    songUrl
}) => {
    return (
        <div>

        </div>
    )
}
export default PlayerContent;