import { MagnifyingGlass } from "@phosphor-icons/react"
import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"

const SearchBar = () => {

    const navigate = useNavigate()
    const searchRef = useRef<HTMLInputElement>(null)
    const [bodyHeight , setBodyHeight] = useState<number>(0)


    const handelResize = () => {
        setBodyHeight(document.body.scrollHeight - 96)
    }
 
    const handleBtnToDisplaySearchBarInput = () => {
        handelResize()
        const searchBarInput = document.getElementById('searchBarInput')
        searchBarInput?.classList.toggle('hidden')
        const coverBlack = document.getElementById('coverBlack')
        coverBlack?.classList.toggle('hidden')
    }

    const handleBtnSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {  // Gunakan tipe event yang benar
        if (event.key === 'Enter' && searchRef.current) {  // Periksa jika ref bukan null
            navigate(`/search/${searchRef.current.value}`, {relative: 'path'})  // Gunakan nilai dari input
        }
    }
    
    return (
        <>
            <button onClick={() => handleBtnToDisplaySearchBarInput()}>
                <MagnifyingGlass size={32} weight="bold" />
            </button>
            <section id="searchBarInput" className="z-[1] hidden absolute duration-75 w-full h-12 left-0 top-12 flex justify-center items-center bg-theme-light dark:bg-theme-dark border-t-2 border-theme-light ease-in-out transition-all">
                <label htmlFor="searchValue" className="w-8/12 relative">
                    <input onKeyDown={handleBtnSearch} ref={searchRef} type="text" placeholder="Search..." className="w-full px-2 py-0.5 h-8 focus:outline-none bg-transparent border-2 rounded  dark:border-dark-background-primary border-light-background-primary" form="searchValue" />
                    <button onClick={() => console.log('search')} className="absolute right-0 w-8 h-8 border-y-2 border-r-2 rounded-r bg-dark-background-primary dark:border-dark-background-primary">
                        <MagnifyingGlass size={23} weight="bold" className="mx-auto" />
                    </button>
                </label>
            </section>
            <section id="coverBlack" style={{minHeight: bodyHeight}} className={`hidden z-[21] absolute w-full bg-black bg-opacity-45 left-0 top-24`}>

            </section>
        </>
    )
}

export default SearchBar