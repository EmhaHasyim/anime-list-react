const AnimeListVertikalSkeleton = ({ valueSearch }: { valueSearch: string | undefined }) => {

    // menghilangkan %
    const valueSearchFix = (valueSearch: string | undefined): string | undefined => {
        return valueSearch?.replace(/%/g, "")
    }

    return (
        <>
            <section className="overflow-y-auto">
                <h1 className="text-2xl w-full text-center py-2">Hasil Untuk: <span className="font-bold">{valueSearchFix(valueSearch)}</span></h1>
                <ul className="grid grid-cols-3 gap-2">
                    {Array(25).fill(0).map((_, index) => (
                        <li key={index}>
                            <div className='w-full h-64 aspect-[2/3] rounded dark:bg-skeleton-dark bg-skeleton-light animate-pulse'></div>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}

export default AnimeListVertikalSkeleton