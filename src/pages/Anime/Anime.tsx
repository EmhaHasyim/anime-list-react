import Fetcher from "@/utils/Fetcher/Fetcher"
import DetailAnime from "@/utils/Interface/DetailAnime"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Trailer from "./TrailerVideo/Trailer"
import Information from "./Information/Information"
import Synopsis from "./Synopsis/Synopsis"
import CharaterDetail from "./CharacterDetail/CharacterDetail"
import AnimeCharacter from "@/utils/Interface/AnimeCharacter"


const Anime = () => {
    // params
    const params = useParams()

    // nilai id anime
    const idAnime = params.id

    // data untuk detail anime
    const [dataDetailAnime, setDataDetailAnime] = useState<DetailAnime | null>(null)

    // data untuk detail character
    const [dataCharacterDetail, setDataCharacterDetail] = useState<AnimeCharacter | null>(null)

    // kondisi untuk error
    const [error, setError] = useState<boolean>(false)

    // kondisi untuk loading
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchDataDetailAnime = async () => {
            try {
                // mengambil data dari api
                const res = await Fetcher(`/anime/${idAnime}/full`)

                // mengatur nilai untuk data detail anime
                setDataDetailAnime(res)

                // mengambil data dari api
                const res2 = await Fetcher(`/anime/${idAnime}/characters`)

                res2.data.sort((a: { favorites: number }, b: { favorites: number }) => b.favorites - a.favorites)

                // mengatur nilai untuk data character
                setDataCharacterDetail(res2)
            } catch (err) {
                // mengatur nilai error
                setError(true)
            } finally {
                // mengatur nilai loading
                setIsLoading(false)
            }
        }
        fetchDataDetailAnime()
    }, [idAnime])

    if (error) return <>Reload Page</>
    if (isLoading) return <>Loading....</>

    return (
        <>
            <Trailer LinkVideo={dataDetailAnime?.data.trailer.embed_url} title={dataDetailAnime?.data.title} />
            <Information anime={dataDetailAnime} />
            <Synopsis synopsis={dataDetailAnime?.data.synopsis} background={dataDetailAnime?.data.background} />
            <CharaterDetail character={dataCharacterDetail} />
        </>
    )
}

export default Anime