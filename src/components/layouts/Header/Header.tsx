import DarkModeBtn from "@/utils/DarkModeBtn/DarkModeBtn"

const Header = () => {
    return (
        <>
            <section className="h-12 px-5 flex items-center justify-between dark:bg-theme-dark bg-theme-light">
                <a className="font-bold text-3xl sm:text-red-500">AnimeList</a>
                <section className="flex items-center justify-center gap-1">
                    <DarkModeBtn />
                </section>
            </section>
        </>)
}

export default Header