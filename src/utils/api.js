const seed = (seed) => {
    const m = 2 ** 35 - 31;
    const a = 185852;
    let s = seed % m;
    return () => {
        return (s = (s * a) % m) / m;
    };
};

export const fetchAPI = (date) => {
    let response = [];
    const random = seed(date.getDate());

    for (let i = 9; i < 23; ++i) {
        const isIncludeCurrentHour = random() > 0.5;
        if (isIncludeCurrentHour) {
            const isIncludeHalfPastHour = random() > 0.5;
            if (isIncludeHalfPastHour) {
                response.push(`${i}:30`);
            } else {
                response.push(`${i}:00`);
            }
        }
    }

    return response;
};

export const submitAPI = (formData) => {
    return true;
};