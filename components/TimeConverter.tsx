//This component returns time into hh:mm am/pm format

export function TimeConverter(rawDate:any){
    let date = new Date(rawDate);
    let hour = convertTo12(date.getHours());
     let hour2 = addZero(date.getHours());
    let minute = addZero(date.getMinutes());
    let ampm = hour2 >= 12 ? ' PM' : ' AM';
    let time = hour + ":" + minute + ampm;
    
    return `${time} `;
}

function addZero(i:any) {
    if (i < 10) { i = "0" + i }
    return i;
}

function convertTo12(hours:number){
    if (hours > 12) {
        hours = hours - 12; //problem with 2 digit
    }
    return hours;
}