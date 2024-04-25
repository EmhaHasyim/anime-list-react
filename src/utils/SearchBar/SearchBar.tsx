import { MagnifyingGlass } from "@phosphor-icons/react"

const SearchBar = () => {
 
    const handleBtnToDisplaySearchBarInput = () => {
        const searchBarInput = document.getElementById('searchBarInput')
        searchBarInput?.classList.toggle('left-full')
        searchBarInput?.classList.toggle('left-0')
    }


    return (
        <>
            <button onClick={() => handleBtnToDisplaySearchBarInput()}>
                <MagnifyingGlass size={32} weight="bold" />
            </button>
            <section id="searchBarInput" className="z-10 absolute w-full h-12 left-full top-12 flex justify-center items-center bg-theme-light dark:bg-theme-dark border-t-2 border-theme-light ease-in-out transition-all">
                <label htmlFor="searchValue" className="w-1/2 relative">
                    <input type="text" placeholder="Search..." className="w-full px-2 py-0/.5 h-8 focus:outline-none bg-transparent border-2 rounded  dark:border-dark-background-primary border-light-background-primary" form="searchValue" />
                    <button onClick={() => console.log('search')} className="absolute right-0 w-8 h-8 border-y-2 border-r-2 rounded-r bg-dark-background-primary dark:border-dark-background-primary">
                        <MagnifyingGlass size={23} weight="bold" className="mx-auto" />
                    </button>
                </label>
            </section>
        </>
    )
}

export default SearchBar