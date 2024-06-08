function YearAndSeason(): [number, string] {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;

    let season: string;
    if (month >= 3 && month <= 5) {
        season = 'Spring';
    } else if (month >= 6 && month <= 8) {
        season = 'Summer';
    } else if (month >= 9 && month <= 11) {
        season = 'Autumn';
    } else {
        season = 'Winter';
    }

    return [year, season];
}

export default YearAndSeason
