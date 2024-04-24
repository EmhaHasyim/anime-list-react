import { useEffect, useState } from "react"
import AnimeListHorizontal from "@/components/layouts/Animelist/Horizontal/AnimeListHorizontal";
import Fetcher from '@/utils/Fetcher/Fetcher';
import TopAnime from "@/utils/Interface/TopAnime";
import AnimeListHorizontalHeader from "@/components/layouts/Animelist/Horizontal/AnimeListHorizontalHeader";


const Home = () => {

    // data untuk top anime
    const [dataTopAnime, setDataTopAnime] = useState<TopAnime | null>(null)

    // nilai untuk kondisi error
    const [error, setError] = useState<boolean>(false)

    // nilai untuk kondisi loading
    const [isLoading, setIsLoading] = useState<boolean>(true)

    // Fetcher
    const fetchData = async (url: string): Promise<TopAnime| null> => {
        try{
            const data = await Fetcher(url)
            console.log(data)
            return data
        }catch(err){
            return null
        }
    }

    // mengambil data dari api
    useEffect(() => {
        const fetchAllData = async () => {
            try {
    
                // mengambil data untuk top anime
                const fetchDataTopAnime = await fetchData('/top/anime')

                // mengurutkan kembali anime berdasarkan rank tertinggi
                const fetchDataTopAnimeFix =fetchDataTopAnime?.data.sort((a, b) => a.rank - b.rank)

                // membuat object baru untuk data Top Anime
                const dataTopAnimeFix = {data: fetchDataTopAnimeFix, pagination: fetchDataTopAnime?.pagination}

                // memasukan nilai kedalam DataTopAnime
                setDataTopAnime(dataTopAnimeFix? fetchDataTopAnime : fetchDataTopAnime)
                
    
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

    if (error) return <>website error</>
    if (isLoading) return <>Loading....</>

    return (
        <>
            <section className="">
                <AnimeListHorizontalHeader/>
                <AnimeListHorizontal anime={dataTopAnime} rank={true}/>
            </section>
        </>
    )
}

export default Home