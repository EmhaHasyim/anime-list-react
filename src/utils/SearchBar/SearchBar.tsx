import { MagnifyingGlass } from "@phosphor-icons/react"
import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"

const SearchBar = () => {
    const navigate = useNavigate()

    const searchRef = useRef<HTMLInputElement>(null)
    const typeRef = useRef<HTMLSelectElement>(null)

    const [bodyHeight, setBodyHeight] = useState<number>(0)

    const handelResize = () => {
        setBodyHeight(document.body.scrollHeight - 96)
    }

    const handleBtnToDisplaySearchBarInput = () => {
        handelResize()
        const searchBarInput = document.getElementById('searchBarInput')
        searchBarInput?.classList.toggle('hidden')
        searchBarInput?.classList.toggle('flex')
        const coverBlack = document.getElementById('coverBlack')
        coverBlack?.classList.toggle('hidden')
    }

    const handleInputSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && searchRef.current && typeRef.current) {
            navigate(`/search/${searchRef.current.value}?type=${typeRef.current.value}`, { relative: 'path' })
            handleBtnToDisplaySearchBarInput()
        }
    }

    const handleBtnSearch = () => {
        if (searchRef.current && typeRef.current) {
            const btnSearch: any = document.getElementById('btnSearch')
            btnSearch.disabled = true
            navigate(`/search/${searchRef.current.value}?type=${typeRef.current.value}`, { relative: 'path' });
            handleBtnToDisplaySearchBarInput()
            btnSearch.disabled = false
        }
    }

    return (
        <>
            <button onClick={() => handleBtnToDisplaySearchBarInput()} className="sm:hidden">
                <MagnifyingGlass size={32} weight="bold" />
            </button>
            <section id="searchBarInput" className="z-[1] hidden absolute duration-75 w-full px-10 h-12 left-0 top-12 justify-center gap-1 items-center bg-theme-light dark:bg-theme-dark border-t-2 border-theme-dark dark:border-theme-light ease-in-out transition-all sm:flex sm:s sm:static sm:border-none sm:h-full sm:px-0">
                <label htmlFor="typeValue" className="w-1/4 h-full flex items-center justify-center sm:w-1/5">
                    <select name="typeValue" id="" ref={typeRef} className="px-1 py-1 w-full h-8 bg-light-background-secondary dark:bg-dark-background-secondary rounded focus:outline-none focus:border-none md:h-9">
                        <option value="TV" className="py-1">TV</option>
                        <option value="Movie">Movie</option>
                        <option value="Ova">Ova</option>
                        <option value="Ona">Ona</option>
                        <option value="Special">Special</option>
                    </select>
                </label>
                <label htmlFor="searchValue" className="w-9/12 relative h-full flex items-center justify-center">
                    <input onKeyDown={handleInputSearch} ref={searchRef} type="text" placeholder="Search..." className="w-full px-2 py-0.5 h-8 focus:outline-none bg-transparent border-2 rounded  dark:border-dark-background-primary border-light-background-primary md:h-9" form="searchValue" />
                    <button id="btnSearch" onClick={() => handleBtnSearch()} className="absolute right-0 w-8 h-8 border-y-2 border-r-2 rounded-r dark:bg-dark-background-primary dark:border-dark-background-primary bg-light-background-primary border-light-background-primary">
                        <MagnifyingGlass size={23} weight="bold" className="mx-auto" />
                    </button>
                </label>
            </section>
            <section id="coverBlack" style={{ minHeight: bodyHeight }} className={`hidden z-[21] absolute w-full bg-black bg-opacity-60 left-0 top-24 sm:hidden`}>
            </section>
        </>
    )
}

export default SearchBar