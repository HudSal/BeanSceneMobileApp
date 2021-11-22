export function GetReservationOrigin(originId: number){
    if(originId==1){
        return "Phone";
    }
    else if(originId==2){
        return "Email";
    }
    else if(originId==3){
        return "Online";
    }
    else if(originId==4){
        return "In Person";
    }
    else if(originId==5){
        return "Mobile";
    }
}