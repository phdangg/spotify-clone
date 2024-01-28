"use client";

import useLoadingImage from "@/hooks/useLoadingImage";
import {Song} from "@/types";

interface MediaItemProps {
    data: Song;
    onClick?: (id: string) => void;
}

const MediaItem: React.FC<MediaItemProps> = ({
    data,
    onClick
}) => {
    const imageUrl = useLoadingImage(data);
    const handleClick=  () => {
        
    }
    return (
        <div>Media</div>
    );
}
export default MediaItem;