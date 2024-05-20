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
        <section className="w-full grid grid-cols-4 grid-rows-subgrid gap-1.5">
            <div className="h-full lg:py-1 row-start-1 row-end-1 col-start-1 col-end-5 sm:row-start-4 sm:row-end-5 sm:col-start-1 sm:col-end-3 lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-5">
            <Trailer LinkVideo={dataDetailAnime?.data.trailer.embed_url} title={dataDetailAnime?.data.title} />
            </div>
            <div className="flex flex-col justify-center items-center lg:aspect-video row-start-2 row-end-3 col-start-1 col-end-5 sm:row-start-1 sm:row-end-2 lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-3">
            <Information anime={dataDetailAnime} />
            </div>
            <div className="row-start-3 row-end-4 col-start-1 col-end-5 sm:row-start-2 sm:row-end-3">
            <Synopsis synopsis={dataDetailAnime?.data.synopsis} background={dataDetailAnime?.data.background} />
            </div>
            <div className="row-start-4 row-end-5 col-start-1 col-end-5 sm:row-start-3 sm:row-end-4">
            <CharaterDetail character={dataCharacterDetail} />
            </div>
        </section>
        </>
    )
}

export default Anime