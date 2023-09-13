export function daysBeforeNewYear(today){
    let year = today.getFullYear()+1;
    let newYear = new Date(year,0,1,0,0,0,0);
    return Math.ceil((newYear-today)/86400000);
}