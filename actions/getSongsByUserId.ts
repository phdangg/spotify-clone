import {Song} from  "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getSongsByUserID = async (): Promise<Song[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    });
    const {
        data: sessionData, 
        error:sessionError
    } = await supabase.auth.getSession();
    if (sessionError){
        console.log(sessionError.message);
        return []
    }
    
}

export default getSongsByUserID;