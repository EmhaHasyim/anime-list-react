const Season = (): string => {

    const currentMonth = new Date().getMonth(); // Bulan dimulai dari 0 (Januari) hingga 11 (Desember)

    let season: string;

    if (currentMonth >= 2 && currentMonth <= 4) {
        season = 'Spring';
    } else if (currentMonth >= 5 && currentMonth <= 7) {
        season = 'Summer';
    } else if (currentMonth >= 8 && currentMonth <= 10) {
        season = 'Autumn';
    } else {
        season = 'Winter';
    }

    return season

}

export default Season