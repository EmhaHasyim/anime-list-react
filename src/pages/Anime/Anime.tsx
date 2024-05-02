import Fetcher from "@/utils/Fetcher/Fetcher"
import DetailAnime from "@/utils/Interface/DetailAnime"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Trailer from "./TrailerVideo/Trailer"
import Information from "./Information/Information"


const Anime = () => {
    // params
    const params = useParams()

    // nilai id anime
    const idAnime = params.id

    // data untuk detail anime
    const [dataDetailAnime, setDataDetailAnime] = useState<DetailAnime | null>(null)

    // kondisi untuk error
    const [error, setError] = useState<boolean>(false)

    // kondisi untuk loading
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchDataDetailAnime = async () => {
            try {
                const res = await Fetcher(`/anime/${idAnime}/full`)
                setDataDetailAnime(res)
            } catch (err) {
                setError(true)
            } finally {
                setIsLoading(false)
            }
        }
        fetchDataDetailAnime()
    }, [idAnime])

    if (error) return <>Reload Page</>
    if (isLoading) return <>Loading....</>

    return (
        <>
        <Trailer LinkVideo={dataDetailAnime?.data.trailer.embed_url} title={dataDetailAnime?.data.title}/>
        <Information anime={dataDetailAnime}/>
        </>
    )
}

export default Anime