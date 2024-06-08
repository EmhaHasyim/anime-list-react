import { Star } from "@phosphor-icons/react"

const StatisticsAnime = ({ statistics }: { statistics: any }) => {
    return (
        <>
            <section className="flex justify-start items-start flex-col w-full bg-light-background-secondary dark:bg-dark-background-secondary px-2 py-1 rounded-sm">
                <h1 className="text-center w-full text-light-text-secondary dark:text-dark-text-secondary font-bold text-lg">Statistics</h1>
                <div className="flex justify-around items-stretch w-full h-full">
                    <div className="flex flex-col justify-between">
                        <p className="text-light-text-secondary dark:text-dark-text-secondary"><strong>Watching:</strong> {statistics?.data.watching}</p>
                        <p className="text-light-text-secondary dark:text-dark-text-secondary"><strong className="text-green-500">Completed:</strong> {statistics?.data.completed}</p>
                        <p className="text-light-text-secondary dark:text-dark-text-secondary"><strong className="text-yellow-500">On Hold:</strong> {statistics?.data.on_hold}</p>
                        <p className="text-light-text-secondary dark:text-dark-text-secondary"><strong className="text-red-500">Dropped:</strong> {statistics?.data.dropped}</p>
                        <p className="text-light-text-secondary dark:text-dark-text-secondary"><strong className="text-gray-500">Plan To Watch:</strong> {statistics?.data.plan_to_watch}</p>
                        <p className="text-light-text-secondary dark:text-dark-text-secondary"><strong>Watching:</strong> {statistics?.data.watching}</p>
                    </div>
                    <ul className="flex flex-col-reverse">
                        {statistics?.data.scores.map((score: any) => {
                            let scoreColor = 'text-green-500'
                            if (score.score < 4) {
                                scoreColor = 'text-red-500'
                            } else if (score.score < 7) {
                                scoreColor = 'text-yellow-500'
                            }
                            return (
                                <>
                                    <li key={score.score}>
                                        <p className="text-light-text-secondary dark:text-dark-text-secondary flex gap-1"><strong className="flex justify-center items-center"><Star weight="fill" className={scoreColor} />({score.score})</strong> {score.votes} ({score.percentage} %)</p>
                                    </li>
                                </>
                            )
                        })}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default StatisticsAnime