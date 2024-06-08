import { useEffect, useState } from "react"
import AnimeListHorizontal from "@/components/layouts/Animelist/Horizontal/AnimeListHorizontal";
import AnimeListHorizontalHeader from "@/components/layouts/Animelist/Horizontal/AnimeListHorizontalHeader";
import AnimeListHorizontalSkeleton from "@/components/layouts/Animelist/Horizontal/AnimeListHorizontalSkeleton";
import TopAnime from "@/utils/Interface/TopAnime";
import SeasonsNow from "@/utils/Interface/SeasonsNow";
import YearAndSeason from "@/utils/YearAndSeason/YearAndSeason";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL

const Home = () => {
    const [year, season] = YearAndSeason()

    const [dataTopAnime, setDataTopAnime] = useState<TopAnime | null>(null)
    const [dataSeasonsNow, setDataSeaasonNow] = useState<SeasonsNow | any>(null)
    const [dataPopularAnime, setDataPopularAnime] = useState<any>(null)

    const [error, setError] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    useEffect(() => {
        const fetchAllData = async () => {
            try {

                const fetchDataTopAnime: TopAnime = await (await axios.get(`${apiUrl}/top/anime`)).data
                fetchDataTopAnime?.data.sort((a, b) => a.rank - b.rank)
                setDataTopAnime(fetchDataTopAnime)

                const fetchDataSeasonsNow = await (await axios.get(`${apiUrl}/seasons/now`)).data
                fetchDataSeasonsNow.data = fetchDataSeasonsNow.data.filter((anime: { year: number; }) => anime.year >= 2024)
                setDataSeaasonNow(fetchDataSeasonsNow)

                const fetchDataPopularAnime = await (await axios.get(`${apiUrl}/anime?order_by=popularity`)).data
                fetchDataPopularAnime.data.sort((a: { members: number; }, b: { members: number; }) => b.members - a.members)
                setDataPopularAnime(fetchDataPopularAnime)
            } catch (err) {
                setError(true)
            } finally {
                setIsLoading(false)
            }
        }

        fetchAllData()
    }, [])

    if (error) return <section>Reload Page</section>

    const skeletonLoading = (isLoading: boolean) => {
        return isLoading ? (
            <>
                <section className="flex flex-col justify-left items-left gap-3">
                    <AnimeListHorizontalSkeleton />
                    <AnimeListHorizontalSkeleton />
                    <AnimeListHorizontalSkeleton />
                </section>
            </>
        ) : (
            <>
                <section>
                    <AnimeListHorizontalHeader title={'Top Anime'} path={'/topanime'} />
                    <AnimeListHorizontal anime={dataTopAnime} rank={true} path={'/topanime'} />
                </section>
                <section className="mt-3">
                    <AnimeListHorizontalHeader title={`${season} ${year} Anime`} path={'/seasonnow'} />
                    <AnimeListHorizontal anime={dataSeasonsNow} rank={false} path={'/seasonnow'} />
                </section>
                <section className="mt-3">
                    <AnimeListHorizontalHeader title={'Most Popular Anime'} path={'/popular'} />
                    <AnimeListHorizontal anime={dataPopularAnime} rank={false} path={'popular'} />
                </section>
            </>
        )
    }

    return (
        <>
            {skeletonLoading(isLoading)}
        </>
    )
}

export default Home