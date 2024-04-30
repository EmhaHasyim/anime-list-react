import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Fetcher from "@/utils/Fetcher/Fetcher"
import AnimeListVertikal from "@/components/layouts/Animelist/Vertikal/AnimeListVertikal"
import SearchAnime from "@/utils/Interface/SearchAnime"
import AnimeListVertikalSkeleton from "@/components/layouts/Animelist/Vertikal/AnimeListVertikalSkeleton"

const Search = () => {
    // params
    const params = useParams()

    // mengambil params dari valueSearch
    const valueSearch: string | undefined = params.valueSearch

    // data untuk search anime
    const [dataSearchAnime, setDataSearchAnime] = useState<null | SearchAnime>(null)

    // kondisi untuk error
    const [error, setError] = useState<boolean>(false)

    // kondisi untuk loading
    const [isLoading, setIsLoading] = useState<boolean>(true)

    // mengambil data saat halaman dimasuki
    useEffect(() => {
        const fetchDataSearch = async () => {
            try {
                // mengambil data dari api
                const res = await Fetcher(`/anime?q=${valueSearch}&type=tv`)

                res.data.sort((a: { members: number }, b: { members: number }) => b.members - a.members)

                console.log(res)
                // mengset data dari api
                setDataSearchAnime(res)
            } catch (err) {
                // merubah kondisi error
                setError(true)
            } finally {
                // merubah kondisi loading
                setIsLoading(false)
            }
        }
        fetchDataSearch()
    }, [valueSearch])

    // kondisi error
    if (error) { return <>Reaload Page</> }

    // kondisi loading
    if (isLoading == true) {
        return (
            <>
                <AnimeListVertikalSkeleton valueSearch={valueSearch} />
            </>
        )
    }


    return (
        <>
            <AnimeListVertikal anime={dataSearchAnime} valueSearch={valueSearch}/>
        </>
    )
}

export default Search