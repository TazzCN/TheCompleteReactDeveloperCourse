export const setTextFilter = (text = "") => ({
    type: 'SET_TEXT_FILTER',
    text
});

export const sortByAmount = (text = "amount") => ({
    type: 'SORT_BY',
    text
});

export const sortByDate = (text = "date") => ({
    type: 'SORT_BY',
    text
});

export const setEndDate = (date = undefined) => ({
    type: 'SET_END_DATE',
    date
});

export const setStartDate = (date = undefined) => ({
    type: 'SET_START_DATE',
    date
});