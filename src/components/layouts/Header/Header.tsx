import DarkModeBtn from "@/utils/DarkModeBtn/DarkModeBtn"
import SearchBar from "@/utils/SearchBar/SearchBar"

const Header = () => {
    return (
        <>
            <header className="h-12 px-5 flex items-center justify-between dark:bg-theme-dark bg-theme-light">
                <a className="font-bold text-3xl sm:text-red-500" href="/">AnimeList</a>
                <section className="flex items-center justify-center gap-3">
                    <DarkModeBtn />
                    <SearchBar/>
                </section>
            </header>
        </>)
}

export default Header