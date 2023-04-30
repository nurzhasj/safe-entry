export const getDate = function (enterDate) {
    var dt = new Date(enterDate);
  
    const day = dt.getDate().toString().padStart(2, '0');
    const month = (dt.getMonth() + 1).toString().padStart(2, '0');
    const year = dt.getFullYear();
  
    const dateStr = `${day}.${month}.${year}`;
  
    return dateStr;
}  