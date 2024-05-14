import { Link } from "react-router-dom"

const AnimeListHorizontalHeader = ({title, path}: {title: string, path: string}) => {
    return(
        <>
            <section className="w-full flex items-center justify-between h-6 px-2 py-1 mb-1 text-base sm:text-lg sm:h-7 md:text-xl md:h-8 lg:text-2xl lg:h-9">
                <h1 className="font-medium">{title}</h1>
                <Link to={path} className="font-medium text-theme-light hover:text-theme-dark dark:text-theme-dark dark:hover:text-theme-light underline">See More</Link>
            </section>
        </>
    )
}

export default AnimeListHorizontalHeader