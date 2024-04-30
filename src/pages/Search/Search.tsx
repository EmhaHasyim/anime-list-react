import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Fetcher from "@/utils/Fetcher/Fetcher"

const Search = () => {
    // params
    const params = useParams()

    // mengambil params dari valueSearch
    const valueSearch: string | undefined = params.valueSearch

    // data untuk search anime
    const [dataSearchAnime, setDataSearchAnime] = useState<any>(null)

    // kondisi untuk error
    const [error, setError] = useState<boolean>(false)

    // kondisi untuk loading
    const [isLoading, setIsLoading] = useState<boolean>(true)

    // mengambil data saat halaman dimasuki
    useEffect(() => {
        const fetchDataSearch = async () => {
            try{
                // mengambil data dari api
                const res = await Fetcher(`/anime?q=${valueSearch}`)

                // mengset data dari api
                setDataSearchAnime(res)
            }catch(err){
                // merubah kondisi error
                setError(true)
            }finally{
                // merubah kondisi loading
                setIsLoading(false)
            }
        }
        fetchDataSearch()
    },[valueSearch])

    // kondisi error
    if(error){<>Reaload Page</>}

    // kondisi loading
    if(isLoading){<>Loading...</>}

    return (
        <>
            <h1>Search Page</h1>
        </>
    )
}

export default Search