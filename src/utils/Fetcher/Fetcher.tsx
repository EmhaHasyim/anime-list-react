import TopAnime from "../Interface/TopAnime"

const Fetcher = async (url: string): Promise<TopAnime | null> => {
    try{
        const res = await fetch(`${import.meta.env.VITE_API_URL}${url}`)
        const data = await res.json()
        return data
    }catch(err){
        return null
    }
}

export default Fetcher