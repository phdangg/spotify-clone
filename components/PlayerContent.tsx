"use client";

import { Song } from "@/types";
import MediaItem from "./MediaItem";
import LikeButton from "./LikeButton";

interface PlayerContent {
    song: Song;
    songUrl: string;
}

const PlayerContent: React.FC<PlayerContent> = ({
    song,
    songUrl
}) => {
    return (
        <div className="grid grid-cols md:grid-cols-3 h-full">
            <div className="
                flex
                w-full
                justify-start
            ">
                <div className="flex items-center gap-x-4">
                    <MediaItem data={song}/>
                    <LikeButton songId={song.id}/>
                </div>
            </div>
        </div>
    )
}
export default PlayerContent;