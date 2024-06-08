import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import AnimeListVertikal from "@/components/layouts/Animelist/Vertikal/AnimeListVertikal"
import SearchAnime from "@/utils/Interface/SearchAnime"
import AnimeListVertikalSkeleton from "@/components/layouts/Animelist/Vertikal/AnimeListVertikalSkeleton"
import axios from "axios"

const apiUrl = import.meta.env.VITE_API_URL

const Search = () => {
    const params = useParams()
    const [searchParams] = useSearchParams()

    const valueSearch: string | undefined = params.valueSearch
    const valueType = searchParams.get('type')
    const [dataSearchAnime, setDataSearchAnime] = useState<null | SearchAnime>(null)

    const [error, setError] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    useEffect(() => {
        const fetchDataSearch = async () => {
            try {
                const res = await (await axios.get(`${apiUrl}/anime?q=${valueSearch}&type=${valueType}`)).data
                res.data.sort((a: { members: number }, b: { members: number }) => b.members - a.members)
                setDataSearchAnime(res)
            } catch (err) {
                setError(true)
            } finally {
                setIsLoading(false)
            }
        }
        fetchDataSearch()
    }, [valueSearch, valueType])

    const valueSearchFix = (): string | undefined => {
        return valueSearch?.replace(/%/g, "")
    }
    if (error) { return <>Reaload Page</> }
    if (isLoading) {
        return (
            <>
                <h1 className="w-full text-center py-2 text-2xl md:text-3xl">Search Result: <span className="font-bold">{valueSearchFix()}</span></h1>
                <AnimeListVertikalSkeleton />
            </>
        )
    }

    return (
        <>
            <h1 className="w-full text-center py-2 text-2xl md:text-3xl">Search Result: <span className="font-bold">{valueSearchFix()}</span></h1>
            <AnimeListVertikal anime={dataSearchAnime} />
        </>
    )
}

export default Search