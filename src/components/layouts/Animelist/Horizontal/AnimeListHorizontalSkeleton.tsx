const AnimeListHorizontalSkeleton = () => {
    return (
        <section>
        <section className='w-full h-6 sm:h-7 md:h-8 lg:h-9'>
            <div className='dark:bg-skeleton-dark bg-skeleton-light h-full w-full rounded animate-pulse'></div>
        </section>
        <section className="overflow-x-auto h-56 mt-1 sm:h-60 md:h-64 lg:h-72">
            <ul className="whitespace-nowrap flex gap-2">
                {Array(16).fill(0).map((_, index) => (
                    <li key={index}>
                        <div className='w-full h-56 aspect-[2/3] rounded dark:bg-skeleton-dark bg-skeleton-light animate-pulse sm:h-60 md:h-64 lg:h-72'></div>
                    </li>
                ))}
            </ul>
        </section>
        </section>
    );
};

export default AnimeListHorizontalSkeleton;
