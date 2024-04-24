import TopAnime from "@/utils/Interface/TopAnime"
import { Link } from "react-router-dom"
import { TagSimple, Star, User } from "@phosphor-icons/react"

const AnimeListHorizontal = ({ anime, rank }: { anime: TopAnime | null, rank: boolean }) => {


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
            <section className="overflow-x-auto">
                <ul className="whitespace-nowrap flex gap-2">
                    {anime ? anime.data.map((anime) => {
                        return (
                            <li key={anime.mal_id}>
                                <section className="relative h-56 w-full aspect-[2/3] bg-cover bg-center bg-no-repeat overflow-hidden rounded"
                                    style={{
                                        backgroundImage: `url(${anime.images.webp.large_image_url})`,
                                    }}>
                                    <Link to={`/anime/${anime.mal_id}`} className="absolute bg-transparent dark:bg-transparent w-full h-full left-0 top-0" />
                                    <section className="absolute bg-black bg-opacity-70 bottom-0 left-0 h-10 w-full flex flex-col py-0.5 px-1 text-xs text-white justify-center items-left">
                                        {tagRank(rank, anime.rank)}
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
                    }) : null}
                </ul>
            </section>
        </>

    )
}

export default AnimeListHorizontal