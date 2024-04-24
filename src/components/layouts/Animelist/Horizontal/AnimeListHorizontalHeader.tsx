import { Link } from "react-router-dom"

const AnimeListHorizontalHeader = () => {
    return(
        <>
            <section className="w-full flex items-center justify-between px-2 py-0.5">
                <h1 className="font-medium">Top Anime</h1>
                <Link to={'topanime'} className="font-medium text-theme-light hover:text-theme-dark dark:text-theme-dark dark:hover:text-theme-light underline">See More</Link>
            </section>
        </>
    )
}

export default AnimeListHorizontalHeader