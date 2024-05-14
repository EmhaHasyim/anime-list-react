import DarkModeBtn from "@/utils/DarkModeBtn/DarkModeBtn"
import SearchBar from "@/utils/SearchBar/SearchBar"

const Header = () => {
    return (
        <>
            <header className="absolute top-0 w-full left-0 h-12 px-5 flex items-center justify-between dark:bg-theme-dark bg-theme-light sm:px-6 md:px-9 md:h-14">
                <a className="font-bold text-3xl sm:text-red-500 md:text-green-500 lg:text-yellow-500 md:text-4xl" href="/">AnimeList</a>
                <section className="flex items-center h-full justify-center gap-3 overflow-hidden sm:gap-0 sm:w-3/5 md:w-[55%] lg:w-2/5">
                    <DarkModeBtn />
                    <SearchBar/>
                </section>
            </header>
        </>)
}

export default Header