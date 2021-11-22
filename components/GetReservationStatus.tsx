export function GetReservationStatus(statusId: number){
    if(statusId==1){
        return "Pending";
    }
    else if(statusId==2){
        return "Confirmed";
    }
    else if(statusId==3){
        return "Cancelled";
    }
    else if(statusId==4){
        return "Seated";
    }
    else if(statusId==5){
        return "Complete";
    }
}