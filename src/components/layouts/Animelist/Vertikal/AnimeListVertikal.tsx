import SearchAnime from "@/utils/Interface/SearchAnime"
import { Star,User } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

const AnimeListVertikal = ({ anime, valueSearch }: { anime: SearchAnime | null , valueSearch: string | undefined}) => {

    // membernarkan members
    const membersFix = (members: number): string => {
        return members.toLocaleString();
    }

    // menghilangkan %
    const valueSearchFix = (valueSearch: string | undefined): string | undefined => {
        return valueSearch?.replace(/%/g, "")
    }

    return (
        <>
            <section className="overflow-y-auto">
                <h1 className="text-2xl w-full text-center py-2">Hasil Untuk: <span className="font-bold">{valueSearchFix(valueSearch)}</span></h1>
                <ul className="grid grid-cols-3 gap-2">
                    {anime?.data.map((anime) => {
                        return (
                            <li key={anime.mal_id}>
                                <section className="relative h-64 w-full aspect-[2/3] overflow-hidden rounded">
                                <Link to={`/anime/${anime.mal_id}`} className="absolute bg-transparent dark:bg-transparent w-full h-full left-0 top-0" />
                                <img src={anime.images.webp.large_image_url} alt='poster' loading="lazy"/>
                                <section className="absolute bg-black bg-opacity-70 bottom-0 left-0 h-10 w-full flex flex-col py-0.5 px-1 text-xs justify-center text-white items-left">
                                        {/* {tagRank(rank, anime.rank)} */}
                                        <section className="title">
                                            <h1 className="font-medium truncate">
                                                {anime.title}
                                            </h1>
                                        </section>
                                        <section className="flex items-center gap-[3px]">
                                            <p className="flex items-center text-[10px]">
                                                {anime.type}({anime.episodes})
                                            </p>
                                            <span className="flex gap-[1px] items-center text-[10px]">
                                                <Star size={13} /> {anime.score}
                                            </span>
                                            <span className="flex gap-[1px] items-center text-[10px]">
                                                <User size={13} weight="fill" /> {membersFix(anime.members)}
                                            </span>
                                        </section>
                                    </section>
                                </section>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </>
    )
}

export default AnimeListVertikal