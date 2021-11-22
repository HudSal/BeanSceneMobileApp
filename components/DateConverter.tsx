//This component returns date into dd-mm-yy format

export function dateConverter(rawDate:any){
    let date = new Date(rawDate);
    let dateDMY = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} `;
    return dateDMY;
}
