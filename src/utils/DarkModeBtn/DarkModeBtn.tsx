import { MoonStars, SunDim } from "@phosphor-icons/react"
import { useState, useEffect } from "react"

const DarkModeBtn = () => {

    // mengambil nilai isDark pada localstroge
    const localIsDark = JSON.parse(localStorage.getItem('isDark') || 'true');

    // nilai untuk darkmode
    const [isDark, setIsDark] = useState<boolean>(localIsDark)

    // logika untuk setiap kali isDark diubah
    useEffect(() => {

        // mentarget element html
        const htmlTag = document.documentElement

        // memberikan add n remove pada element html
        if (isDark) {
            htmlTag.classList.add('dark')
        } else {
            htmlTag.classList.remove('dark')
        }

        // set local storage
        localStorage.setItem('isDark', JSON.stringify(isDark));
    }, [isDark])

    // function untuk mengubah darkmode
    const handleBtnDarkBtn = () => {
        setIsDark(isDark ? false : true)
    }

    // untuk isi btn toggle dark
    const displayInBTnDarkBtn = () => {
        return isDark ? (
            <SunDim size={32} weight="bold" className="animate-pulse" />
        ) : (
            <MoonStars size={32} weight="bold" className="animate-pulse" />
        );
    }


    return (
        <>
            <button className="flex justify-center items-center h-8 w-8 rounded-full md:h-9 md:w-9"
                onClick={() => handleBtnDarkBtn()}>
                {displayInBTnDarkBtn()}
            </button>
        </>
    )
}

export default DarkModeBtn