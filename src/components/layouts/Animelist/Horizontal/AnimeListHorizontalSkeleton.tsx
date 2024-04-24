const AnimeListHorizontalSkeleton = () => {
    return (
        <section>
        <section className='w-full h-7'>
            <div className='dark:bg-skeleton-dark bg-skeleton-light h-full w-full rounded animate-pulse'></div>
        </section>
        <section className="overflow-x-auto h-56 mt-2">
            <ul className="whitespace-nowrap flex gap-2">
                {Array(25).fill(0).map((_, index) => (
                    <li key={index}>
                        <div className='w-full h-56 aspect-[2/3] rounded dark:bg-skeleton-dark bg-skeleton-light animate-pulse'></div>
                    </li>
                ))}
            </ul>
        </section>
        </section>
    );
};

export default AnimeListHorizontalSkeleton;
