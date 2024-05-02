import DetailAnime from "@/utils/Interface/DetailAnime"
import DetailInformation from "./DetailInformation"

const Information = ({anime}: {anime: null | DetailAnime}) => {


    return (
        <>
        <section className="flex items-start justify-items flex-col px-2 h-12 rounded bg-light-background-secondary dark:bg-dark-background-secondary mt-1.5">
            <h1 className="text-lg truncate">{anime?.data.title}</h1>
            <h2 className="text-sm- truncate dark:text-light-background-secondary">{anime?.data.title_english}</h2>
        </section>
        <DetailInformation anime={anime}/>
        </>
    )
}

export default Information