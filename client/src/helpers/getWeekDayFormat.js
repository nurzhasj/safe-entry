export const getWeekDay = function (enterDate) {
    var dt = new Date(enterDate);

    const weekday = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(dt);

    return weekday;
}