export const fetchAPI = (date) => {
    let response = [];
    for (let i = 9; i < 23; ++i) {
        const isIncludeCurrentHour = Math.random() > 0.5;
        if (isIncludeCurrentHour) {
            const isIncludeHalfPastHour = Math.random() > 0.5;
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
    return Math.random() > 0.5;
};