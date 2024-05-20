import DetailAnime from "@/utils/Interface/DetailAnime"
import DetailInformation from "./DetailInformation"

const Information = ({anime}: {anime: null | DetailAnime}) => {


    return (
        <>
        <section className="flex items-start justify-evenly flex-col px-2 h-12 rounded w-full bg-light-background-secondary dark:bg-dark-background-secondary sm:h-14 md:h-16 lg:h-1/5">
            <h1 className="text-lg truncate md:text-xl lg:text-2xl">{anime?.data.title}</h1>
            <h2 className="text-sm truncate dark:text-light-background-secondary md:text-base lg:text-lg">{anime?.data.title_english}</h2>
        </section>
        <DetailInformation anime={anime}/>
        </>
    )
}

export default Information