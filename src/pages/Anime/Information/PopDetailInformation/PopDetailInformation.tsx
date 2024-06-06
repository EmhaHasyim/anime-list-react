import DetailAnime from "@/utils/Interface/DetailAnime"
import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

const PopDetailInformation = ({ anime }: { anime: DetailAnime | null }) => {

    return (
        <>
            <section className="h-full flex flex-col justify-center items-center bg-light-background-secondary dark:bg-dark-background-secondary text-light-text-secondary dark:text-dark-text-secondary p-5 rounded">
                <h1 className="text-center w-full text-light-text-secondary dark:text-dark-text-secondary font-bold text-lg">Information</h1>
                <table className="table-auto text-xs md:text-sm lg:text-base">
                    <tbody className="w-full">
                        <tr className="">
                            <td className="text-right align-text-top px-1 text-light-text-primary dark:text-dark-text-primary">
                                Alternative <br /> Titles
                            </td>
                            <td className="text-left px-1">
                                <p className="text-light-text-primary dark:text-dark-text-primary">English</p>
                                <p>{anime?.data.title_english}</p>
                                <p className="text-light-text-primary dark:text-dark-text-primary">Japanese</p>
                                <p>{anime?.data.title_japanese}</p>
                            </td>
                        </tr>
                        <tr className="">
                            <td className="text-right align-text-top px-1 text-light-text-primary dark:text-dark-text-primary">
                                Type
                            </td>
                            <td className="text-left px-1">
                                <Link
                                    to={`/type/${anime?.data.type}`}
                                    className="text-theme-light hover:text-theme-dark dark:text-theme-dark dark:hover:text-theme-light font-medium"
                                >
                                    {anime?.data.type}
                                </Link>
                            </td>
                        </tr>
                        <tr className="">
                            <td className="text-right align-text-top px-1 text-light-text-primary dark:text-dark-text-primary">
                                Episodes
                            </td>
                            <td className="text-left px-1">
                                <Link
                                    to={`/episodes/${anime?.data.mal_id}`}
                                    className="text-theme-light hover:text-theme-dark dark:text-theme-dark dark:hover:text-theme-light font-medium"
                                >
                                    {anime?.data.episodes}
                                </Link>
                            </td>
                        </tr>
                        <tr className="">
                            <td className="text-right align-text-top px-1 text-light-text-primary dark:text-dark-text-primary">
                                Status
                            </td>
                            <td className="text-left px-1">{anime?.data.status}</td>
                        </tr>
                        <tr className="">
                            <td className="text-right align-text-top px-1 text-light-text-primary dark:text-dark-text-primary">
                                Aired
                            </td>
                            <td className="text-left px-1">{anime?.data.aired.from}</td>
                        </tr>
                        <tr className="">
                            <td className="text-right align-text-top px-1 text-light-text-primary dark:text-dark-text-primary">
                                Premired
                            </td>
                            <td className="text-left px-1 capitalize">
                                <Link
                                    to={`/`}
                                    className="text-theme-light hover:text-theme-dark dark:text-theme-dark dark:hover:text-theme-light font-medium"
                                >
                                    {anime?.data.season} {anime?.data.year}
                                </Link>
                            </td>
                        </tr>
                        <tr className="">
                            <td className="text-right align-text-top px-1 text-light-text-primary dark:text-dark-text-primary">
                                Broadcast
                            </td>
                            <td className="text-left px-1">{anime?.data.broadcast.string}</td>
                        </tr>
                        <tr className="">
                            <td className="text-right align-text-top px-1 text-light-text-primary dark:text-dark-text-primary">
                                Producers
                            </td>
                            <td className="text-left px-1 text-blue-600">
                                {anime?.data.producers.length
                                    ?
                                    anime?.data.producers.map((producers, index) => {
                                        return (
                                            <Fragment key={producers.mal_id}>
                                                {index > 0 && <>, </>}
                                                <a
                                                    href={`/producers/${producers.mal_id}`}
                                                    className="text-theme-light hover:text-theme-dark dark:text-theme-dark dark:hover:text-theme-light font-medium"
                                                >
                                                    {producers.name}
                                                </a>
                                            </Fragment>
                                        );
                                    })
                                    : <>Unknown</>}
                            </td>
                        </tr>
                        <tr className="">
                            <td className="text-right align-text-top px-1 text-light-text-primary dark:text-dark-text-primary">
                                Licensors
                            </td>
                            <td className="text-left px-1">
                                {anime?.data.licensors.length
                                    ?
                                    anime?.data.licensors.map((licensor, index) => {
                                        return (
                                            <Fragment key={licensor.mal_id}>
                                                {index > 0 && <>, </>}
                                                <a
                                                    href={`/licensors/${licensor.mal_id}`}
                                                    className="text-theme-light hover:text-theme-dark dark:text-theme-dark dark:hover:text-theme-light font-medium"
                                                >
                                                    {licensor.name}
                                                </a>
                                            </Fragment>
                                        )
                                    })
                                    : <>Unknown</>
                                }
                            </td>
                        </tr>
                        <tr>
                            <td className="text-right align-text-top px-1 text-light-text-primary dark:text-dark-text-primary">
                                Studios
                            </td>
                            <td className="text-left px-1">
                                {anime?.data.studios.length
                                    ?
                                    anime?.data.studios.map((studios, index) => {
                                        return (
                                            <Fragment key={studios.mal_id}>
                                                {index > 0 && <>, </>}
                                                <a
                                                    href={`/studios/${studios.mal_id}`}
                                                    className="text-theme-light hover:text-theme-dark dark:text-theme-dark dark:hover:text-theme-light font-medium"
                                                >
                                                    {studios.name}
                                                </a>
                                            </Fragment>
                                        );
                                    })
                                    : <>Unknown</>
                                }
                            </td>
                        </tr>
                        <tr>
                            <td className="text-right align-text-top px-1 text-light-text-primary dark:text-dark-text-primary">
                                Source
                            </td>
                            <td className="text-left px-1">{anime?.data.source}</td>
                        </tr>
                        <tr>
                            <td className="text-right align-text-top px-1 text-light-text-primary dark:text-dark-text-primary">
                                Genres
                            </td>
                            <td className="text-left px-1">
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
                            </td>
                        </tr>
                        <tr>
                            <td className="text-right align-text-top px-1 text-light-text-primary dark:text-dark-text-primary">
                                Themes
                            </td>
                            <td className="text-left px-1">
                                {anime?.data.themes.length
                                    ?
                                    anime?.data.themes.map((themes, index) => {
                                        return (
                                            <Fragment key={themes.mal_id}>
                                                {index > 0 && <>, </>}
                                                <a
                                                    href={`/themes/${themes.mal_id}`}
                                                    className="text-theme-light hover:text-theme-dark dark:text-theme-dark dark:hover:text-theme-light font-medium"
                                                >
                                                    {themes.name}
                                                </a>
                                            </Fragment>
                                        );
                                    })
                                    : <>Unknown</>}
                            </td>
                        </tr>
                        <tr>
                            <td className="text-right align-text-top px-1 text-light-text-primary dark:text-dark-text-primary">
                                Demographics
                            </td>
                            <td className="text-left px-1">
                                {anime?.data.demographics.length
                                    ?
                                    anime?.data.demographics.map((Demographics, index) => {
                                        return (
                                            <Fragment key={Demographics.mal_id}>
                                                {index > 0 && <>, </>}
                                                <a
                                                    href={`/genres/${Demographics.mal_id}`}
                                                    className="text-theme-light hover:text-theme-dark dark:text-theme-dark dark:hover:text-theme-light font-medium"
                                                >
                                                    {Demographics.name}
                                                </a>
                                            </Fragment>
                                        );
                                    })
                                    : <>Unknown</>
                                }
                            </td>
                        </tr>
                        <tr className="">
                            <td className="text-right align-text-top px-1 text-light-text-primary dark:text-dark-text-primary">
                                Duration
                            </td>
                            <td className="text-left px-1">{anime?.data.duration}</td>
                        </tr>
                        <tr className="">
                            <td className="text-right align-text-top px-1 text-light-text-primary dark:text-dark-text-primary">
                                Rating
                            </td>
                            <td className="text-left px-1">{anime?.data.rating}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </>
    )
}

export default PopDetailInformation