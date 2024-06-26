import DetailAnime from "../Interface/DetailAnime"
import SearchAnime from "../Interface/SearchAnime"
import SeasonsNow from "../Interface/SeasonsNow"
import TopAnime from "../Interface/TopAnime"

const Fetcher = async (url: string): Promise<SearchAnime | TopAnime | SeasonsNow | DetailAnime | null | any> => {
    try{
        const res = await fetch(`${import.meta.env.VITE_API_URL}${url}`)
        const data = await res.json()
        return data
    }catch(err){
        return null
    }
}

export default Fetcher