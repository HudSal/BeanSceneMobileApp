import React,{useState} from "react";

export function GetPerson(personId: number){
    const [person, setPerson] = useState<any>('');

    fetch(`https://localhost:44377/API/People/${personId}`)
    .then(response => response.json())
    .then(data => setPerson(data));
    // console.log(person);
    return(person);
    
}