import TopAnime from "@/utils/Interface/TopAnime"
import { Link } from "react-router-dom"
import { TagSimple, Star, User, DotsThreeOutline } from "@phosphor-icons/react"

const AnimeListHorizontal = ({ anime, rank, path }: { anime: TopAnime | null, rank: boolean, path: string }) => {


    // kondisi jika rank true
    const tagRank = (rank: boolean, rankNum: string | number) => {
        return rank ? (
            <section className="absolute -top-[34px] h-10 w-11 -left-2  flex items-center justify-center">
                <p className="z-10 font-bold text-lg">{rankNum}</p>
                <TagSimple size={46} className="absolute left-0 dark:text-theme-dark text-theme-light abo" weight="fill" />
            </section>
        ) : null
    }

    // membernarkan members
    const membersFix = (members: number): string => {
        return members.toLocaleString();
    }

    return (
        <>
            <section className="">
                <ul className="whitespace-nowrap overflow-x-auto flex gap-2">
                    {anime ? anime.data.map((anime, index) => {
                        if (index > 14) {
                            return null
                        }
                        return (
                            <li key={anime.mal_id}>
                                <section className="relative h-56 w-full aspect-[2/3] overflow-hidden rounded sm:h-60 md:h-64 lg:h-72">
                                    <img className="h-full w-full" src={anime.images.webp.image_url} alt='poster' loading="lazy" />
                                    <Link to={`/anime/${anime.mal_id}`} className="absolute bg-transparent dark:bg-transparent w-full h-full left-0 top-0" />
                                    <section className="absolute bg-black bg-opacity-70 bottom-0 left-0 h-10 w-full flex flex-col py-0.5 px-1 text-xs text-white justify-center items-left md:text-sm md:py-1">
                                        {tagRank(rank, anime.rank)}
                                        <section className="title flex items-center justify-start">
                                            <h1 className="font-medium truncate">
                                                {anime.title}
                                            </h1>
                                        </section>
                                        <section className="flex justify-start items-center gap-[3px] sm:gap-1 md:gap-[5px] lg:gap-[6px] text-[10px] sm:text-[11px] md:text-[12px] lg:text-sm">
                                            <p className="flex items-center">
                                                {anime.type}({anime.episodes})
                                            </p>
                                            <span className="flex gap-[1px] items-center justify-center">
                                                <Star size={13} /> {anime.score}
                                            </span>
                                            <span className="flex gap-[1px] items-center justify-center">
                                                <User size={13} weight="fill" /> {membersFix(anime.members)}
                                            </span>
                                        </section>
                                    </section>
                                </section>
                            </li>
                        )
                    }) : null}
                    <li>
                        <section className="relative h-56 w-full aspect-[2/3] flex items-center justify-center rounded dark:bg-dark-background-secondary bg-light-background-secondary sm:h-60 md:h-64 lg:h-72">
                            <Link to={path} className=" text-xl flex items-center justify-center flex-col text-center text-theme-light dark:text-theme-dark hover:text-theme-dark dark:hover:text-theme-light underline">
                                <DotsThreeOutline size={45} />
                                See More</Link>
                        </section>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default AnimeListHorizontal