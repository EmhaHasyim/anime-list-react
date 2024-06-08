import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import DetailAnime from "@/utils/Interface/DetailAnime"
import Trailer from "./TrailerVideo/Trailer"
import Information from "./Information/Information"
import Synopsis from "./Synopsis/Synopsis"
import CharaterDetail from "./CharacterDetail/CharacterDetail"
import AnimeCharacter from "@/utils/Interface/AnimeCharacter"
import ThemeMusic from "./ThemeMusic/ThemeMusic"
import RelationAnime from "./RelationsAnime/RelationsAnime"
import PicturesAnime from "./PicturesAnime/PicturesAnime"
import PicturesAnimeIN from "@/utils/Interface/PicturesAnime"
import PopDetailInformation from "./Information/PopDetailInformation/PopDetailInformation"
import StatisticsAnime from "./StatisticsAnime/StatisticsAnime"

const apiUrl = import.meta.env.VITE_API_URL


const Anime = () => {
    const params = useParams()
    const idAnime = params.id

    const [dataDetailAnime, setDataDetailAnime] = useState<DetailAnime | null>(null)
    const [dataCharacterDetail, setDataCharacterDetail] = useState<AnimeCharacter | null>(null)
    const [dataPicturesAnime, setDataPicturesAnime] = useState<PicturesAnimeIN | null>(null)
    const [dataStatisticsAnime, setDataStatsticsAnime] = useState<any>(null)

    const [error, setError] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchDataDetailAnime = async () => {
            try {
                const res = await (await axios.get(`${apiUrl}/anime/${idAnime}/full`)).data
                setDataDetailAnime(res)

                const res2 = await (await axios.get(`${apiUrl}/anime/${idAnime}/characters`)).data
                res2.data.sort((a: { favorites: number }, b: { favorites: number }) => b.favorites - a.favorites)
                setDataCharacterDetail(res2)

                setTimeout(async () => {
                    const res3 = await (await axios.get(`${apiUrl}/anime/${idAnime}/pictures`)).data
                    setDataPicturesAnime(res3)

                    const res4 = await (await axios.get(`${apiUrl}/anime/${idAnime}/statistics`)).data
                    setDataStatsticsAnime(res4)
                }, 1000);
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
                <div className="h-full lg:py-1 row-start-1 row-end-1 col-start-1 col-end-5 sm:row-start-4 sm:row-end-5 sm:col-start-1 sm:col-end-3 md:row-start-7 md:row-end-8 lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-5">
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
                <div className="row-start-5 row-end-6 col-start-1 col-end-5 sm:row-start-4 sm:row-end-5 sm:col-start-3 md:row-start-4 md:row-end-5 md:col-start-1 md:col-end-5 lg:row-start-4 lg:row-end-5">
                    <ThemeMusic theme={dataDetailAnime?.data.theme} />
                </div>
                <div className="row-start-6 row-end-7 col-start-1 col-end-5 md:row-start-5 md:row-end-6 lg:row-start-5 lg:row-end-6">
                    <RelationAnime relation={dataDetailAnime?.data.relations} />
                </div>
                <div className="row-start-7 row-end-8 col-start-1 col-end-5 md:row-start-7 md:row-end-8 md:col-start-3 lg:row-start-6 lg:row-end-7">
                    <StatisticsAnime statistics={dataStatisticsAnime} />
                </div>
                <div className="row-start-8 row-end-9 col-start-1 col-end-5 md:row-start-8 md:row-end-9 md:col-start-1 lg:row-start-6 lg:row-end-7 lg:col-start-1 lg:col-end-3">
                    <PicturesAnime pictures={dataPicturesAnime} />
                </div>
                <div className="lg:-mt-1.5 row-start-9 row-end-10 col-start-1 col-end-5 lg:row-start-7 lg:row-end-8 lg:col-start-1 lg:col-end-3">
                    <PopDetailInformation anime={dataDetailAnime} />
                </div>
            </section>
        </>
    )
}

export default Anime