

interface Theme {
    "openings":
    [
        "string"
    ],
    "endings":
    [
        "string"
    ]
}

const ThemeMusic = ({ theme }: { theme: Theme | undefined }) => {
    return (
        <>
            <section className="flex flex-col gap-2 w-full bg-light-background-secondary dark:bg-dark-background-secondary px-2 py-1 rounded-sm">
                <div>
                    <h1 className="text-light-text-secondary dark:text-dark-text-secondary font-bold bg-theme-light dark:bg-theme-dark px-2 w-fit rounded-full">Opening</h1>
                    <ul>
                        {theme?.openings.map((opening, index) => {
                            return (
                                <li key={index}>
                                    {opening}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <h1 className="text-light-text-secondary dark:text-dark-text-secondary font-bold bg-theme-light dark:bg-theme-dark px-2 w-fit rounded-full">Ending</h1>
                    <ul>
                        {theme?.endings.map((endings, index) => {
                            return (
                                <li key={index}>
                                    {endings}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default ThemeMusic