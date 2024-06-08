import DetailAnime from "@/utils/Interface/DetailAnime"
import { CaretRight, Star } from "@phosphor-icons/react"
import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import PopDetailInformation from "./PopDetailInformation/PopDetailInformation";
import { useState } from "react";

const DetailInformation = ({ anime }: { anime: DetailAnime | null }) => {

    const [bodyHeight, setBodyHeight] = useState<number>(0)

    const handelResize = () => {
        setBodyHeight(document.body.scrollHeight)
    }

    const membersFix = (members: number | undefined): string | undefined => {
        return members?.toLocaleString();
    }

    const handleBtnInformation = (): void => {
        handelResize()
        const popInfomation = document.getElementById('popInfomation')
        popInfomation?.classList.toggle('hidden')
        popInfomation?.classList.toggle('flex')
    }

    return (
        <>
            <section className="flex justify-center items-center gap-1.5 w-full mt-1.5 mx-2 sm:mx-0 md:text-lg lg:h-4/5 lg:text-xl">
                <img src={anime?.data.images.webp.large_image_url} loading="lazy" className="rounded aspect-[2/3] h-60 sm:h-64 md:h-72 lg:h-full" />
                <section className="flex justify-around items-start flex-col w-full h-60 rounded p-2 bg-light-background-secondary dark:bg-dark-background-secondary sm:h-64 md:h-72 lg:h-full">
                    <section className="flex justify-left items-center gap-1 text-2xl"><Star size={32} />{anime?.data.score} {`(#${anime?.data.rank})`}</section>
                    <section>{membersFix(anime?.data.members)} Users</section>
                    <section>{anime?.data.type} ({anime?.data.episodes})</section>
                    <section className="flex flex-col justify-center items-start">
                        <span className="dark:text-dark-text-secondary text-light-text-secondary">genres</span>
                        <section className="text-left">
                            {anime?.data.genres.length
                                ?
                                anime?.data.genres.map((genres, index) => {
                                    return (
                                        <Fragment key={genres.mal_id}>
                                            {index > 0 && <>, </>}
                                            <a
                                                href={`/genres/${genres.mal_id}`}
                                                className="text-theme-light hover:text-theme-dark dark:text-theme-dark dark:hover:text-theme-light font-medium"
                                            >
                                                {genres.name}
                                            </a>
                                        </Fragment>
                                    );
                                })
                                : <>Unknown</>
                            }
                        </section>
                    </section>
                    <section className="flex flex-col justify-center items-start">
                        <span className="dark:text-dark-text-secondary text-light-text-secondary">studios</span>
                        <section className="flex gap-1">
                            {anime?.data.studios.map((studio, index) => {
                                return (
                                    <>
                                        <Fragment key={studio.mal_id}>
                                            {index > 0 && <span className="text-theme-dark dark:text-theme-light">, </span>}
                                            <Link
                                                to={`/studios/${studio.mal_id}`}
                                                className="text-theme-dark dark:text-theme-light hover:text-theme-light dark:hover:text-theme-dark"
                                            >
                                                {studio.name}
                                            </Link>
                                        </Fragment>
                                    </>
                                )
                            })}
                        </section>
                    </section>
                    <button onClick={() => handleBtnInformation()} className="flex items-center text-theme-dark hover:text-theme-light dark:text-theme-light dark:hover:text-theme-dark"><CaretRight size={18} weight="fill" />More Information</button>
                </section>
            </section>
            <section id="popInfomation" style={{ minHeight: bodyHeight }} className="hidden z-20 absolute left-0 top-0 w-full items-start py-40 px-7 justify-center">
                <button onClick={() => handleBtnInformation()} className="-z-[1] absolute w-full h-full left-0 top-0 bg-black bg-opacity-50"></button>
                <PopDetailInformation anime={anime} />
            </section>
        </>
    )
}

export default DetailInformation