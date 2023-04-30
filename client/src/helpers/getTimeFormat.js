export const getTime = function (enterDate) {
    var dt = new Date(enterDate);

    const timeStr = dt.getHours() + ":" + ('0' + dt.getMinutes()).slice(-2);

    return timeStr;
}