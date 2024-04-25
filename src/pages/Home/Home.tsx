import { useEffect, useState } from "react"
import AnimeListHorizontal from "@/components/layouts/Animelist/Horizontal/AnimeListHorizontal";
import AnimeListHorizontalHeader from "@/components/layouts/Animelist/Horizontal/AnimeListHorizontalHeader";
import AnimeListHorizontalSkeleton from "@/components/layouts/Animelist/Horizontal/AnimeListHorizontalSkeleton";
import Fetcher from '@/utils/Fetcher/Fetcher';
import TopAnime from "@/utils/Interface/TopAnime";
import SeasonsNow from "@/utils/Interface/SeasonsNow";
import YearAndSeason from "@/utils/YearAndSeason/YearAndSeason";


const Home = () => {
    const [year, season] = YearAndSeason()
    
    // data untuk top anime
    const [dataTopAnime, setDataTopAnime] = useState<TopAnime | null>(null)

    // data untuk season now
    const [dataSeasonsNow, setDataSeaasonNow] = useState<SeasonsNow | any>(null)

    // data untuk popular anime
    const [dataPopularAnime, setDataPopularAnime] = useState<any>(null)

    // nilai untuk kondisi error
    const [error, setError] = useState<boolean>(false)

    // nilai untuk kondisi loading
    const [isLoading, setIsLoading] = useState<boolean>(true)

    // mengambil data dari api
    useEffect(() => {
        const fetchAllData = async () => {
            try {

                // mengambil data untuk top anime
                const fetchDataTopAnime: TopAnime = await Fetcher('/top/anime')

                // mengurutkan kembali anime berdasarkan rank tertinggi
                fetchDataTopAnime?.data.sort((a, b) => a.rank - b.rank)

                // memasukan nilai kedalam dataTopAnime
                setDataTopAnime(fetchDataTopAnime)

                // mengambil data untuk seasons now
                const fetchDataSeasonsNow = await Fetcher('/seasons/now')

                // mnegecualikan anime yang tidak rilis di tahun ini
                fetchDataSeasonsNow.data = fetchDataSeasonsNow.data.filter((anime: { year: number; }) => anime.year >= 2024)

                // memasukan nilai kedalam dataSeasonsNow
                setDataSeaasonNow(fetchDataSeasonsNow)

                // mengambil data untuk popular anime
                const fetchDataPopularAnime = await Fetcher('/anime?order_by=popularity')

                setDataPopularAnime(fetchDataPopularAnime)

            } catch (err) {
                // set error true jika mengambil data gagal
                setError(true)
            } finally {
                // set loading false karena sudah mengambil data
                setIsLoading(false)
            }
        }

        fetchAllData()
    }, [])

    if (error) return <> error reload page </>

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
                    <AnimeListHorizontalHeader title={'Top Anime'} path={'/topanime'}/>
                    <AnimeListHorizontal anime={dataTopAnime} rank={true} path={'/topanime'}/>
                </section>
                <section className="mt-3"> 
                    <AnimeListHorizontalHeader title={`${season} ${year} Anime`} path={'/seasonnow'} />
                    <AnimeListHorizontal anime={dataSeasonsNow} rank={false} path={'/seasonnow'}/>
                </section>
                <section className="mt-3">
                     <AnimeListHorizontalHeader title={'Most Popular Anime'} path={'/popular'} />
                     <AnimeListHorizontal anime={dataPopularAnime} rank={false} path={'popular'}/>
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