import { MoonStars, SunDim } from "@phosphor-icons/react"
import { useState, useEffect } from "react"

const DarkModeBtn = () => {
    const localIsDark = JSON.parse(localStorage.getItem('isDark') || 'true');
    const [isDark, setIsDark] = useState<boolean>(localIsDark)

    useEffect(() => {
        const htmlTag = document.documentElement

        if (isDark) {
            htmlTag.classList.add('dark')
        } else {
            htmlTag.classList.remove('dark')
        }

        localStorage.setItem('isDark', JSON.stringify(isDark));
    }, [isDark])
    const handleBtnDarkBtn = () => {
        setIsDark(isDark ? false : true)
    }

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