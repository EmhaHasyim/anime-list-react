import { MagnifyingGlass } from "@phosphor-icons/react"
import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"

const SearchBar = () => {

    // navigate
    const navigate = useNavigate()

    // nilai untuk search
    const searchRef = useRef<HTMLInputElement>(null)

    const typeRef = useRef<HTMLSelectElement>(null)

    // nila dari tinggi body
    const [bodyHeight, setBodyHeight] = useState<number>(0)

    // untuk mengatur tinggi cover black
    const handelResize = () => {
        setBodyHeight(document.body.scrollHeight - 96)
    }

    // untuk menampilan funsi search
    const handleBtnToDisplaySearchBarInput = () => {
        handelResize()
        const searchBarInput = document.getElementById('searchBarInput')
        searchBarInput?.classList.toggle('hidden')
        searchBarInput?.classList.toggle('flex')
        const coverBlack = document.getElementById('coverBlack')
        coverBlack?.classList.toggle('hidden')
    }

    // untuk search saat tekan enter
    const handleInputSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && searchRef.current && typeRef.current) {
            navigate(`/search/${searchRef.current.value}?type=${typeRef.current.value}`, { relative: 'path' })
            handleBtnToDisplaySearchBarInput()
        }
    }

    // untuk search saat button ditekan
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
            <button onClick={() => handleBtnToDisplaySearchBarInput()}>
                <MagnifyingGlass size={32} weight="bold" />
            </button>
            <section id="searchBarInput" className="z-[1] hidden absolute duration-75 w-full px-10 h-12 left-0 top-12 justify-around items-center bg-theme-light dark:bg-theme-dark border-t-2 border-theme-dark dark:border-theme-light ease-in-out transition-all">
                <label htmlFor="typeValue" className="w-1/4 ">
                    <select name="typeValue" id="" ref={typeRef} className="px-2 w-full h-7 bg-theme-dark dark:bg-theme-light rounded focus:outline-none  focus:border-none">
                        <option value="TV">TV</option>
                        <option value="Movie">Movie</option>
                        <option value="Ova">Ova</option>
                        <option value="Ona">Ona</option>
                        <option value="Special">Special</option>
                    </select>
                </label>
                <label htmlFor="searchValue" className="w-8/12 relative">
                    <input onKeyDown={handleInputSearch} ref={searchRef} type="text" placeholder="Search..." className="w-full px-2 py-0.5 h-8 focus:outline-none bg-transparent border-2 rounded  dark:border-dark-background-primary border-light-background-primary" form="searchValue" />
                    <button id="btnSearch" onClick={() => handleBtnSearch()} className="absolute right-0 w-8 h-8 border-y-2 border-r-2 rounded-r dark:bg-dark-background-primary dark:border-dark-background-primary bg-light-background-primary border-light-background-primary">
                        <MagnifyingGlass size={23} weight="bold" className="mx-auto" />
                    </button>
                </label>
            </section>
            <section id="coverBlack" style={{ minHeight: bodyHeight }} className={`hidden z-[21] absolute w-full bg-black bg-opacity-60 left-0 top-24`}>

            </section>
        </>
    )
}

export default SearchBar