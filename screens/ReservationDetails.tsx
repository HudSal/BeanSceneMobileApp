import React, {useState} from 'react';
import {View, Text, Image} from "react-native";
import { vStyles } from '../styles';
import { dateConverter, TimeConverter, backToHome, GetReservationStatus, GetReservationOrigin, GetPerson} from '../components';


export function Details(props: any) {

    const { navigation, route } = props;
    const [resDetails, setResDetails] = useState<any>(''); //variable to store a particular reservation object
    var newId = route.params.id;
    //fetching a reservation based on its id
    fetch(`https://localhost:44377/API/Reservations/${newId}`)
        .then(response => response.json())
        .then(data => setResDetails(data))

    let dayDMY = dateConverter(resDetails.startTime); //in another component - to format the Date into dd-mm-yy
    let startTimeHM = TimeConverter(resDetails.startTime);// format hh:mm ap/pm
    let endTimeHM = TimeConverter(resDetails.endTime);
    let person = GetPerson(resDetails.personId);
    console.log(person);
    return (
        <View style={vStyles.container}>
            <View>
                {backToHome(props)}
            </View>
            <Text style={vStyles.headingText}>Booking Details:</Text>
            <View style={vStyles.form}>
                <Text style={vStyles.labelDetails}>Reservation Id: <Text style={vStyles.textDetails} >{route.params.id}</Text> </Text> 
                <Text style={vStyles.labelDetails}>Date:  <Text style={vStyles.textDetails} > {dayDMY} </Text></Text>
                <Text style={vStyles.labelDetails}>Start time: <Text style={vStyles.textDetails} > {startTimeHM}</Text></Text>
                <Text style={vStyles.labelDetails}>End time: <Text style={vStyles.textDetails} > {endTimeHM}</Text></Text>
                <Text style={vStyles.labelDetails}>Person Name: <Text style={vStyles.textDetails} > {person.firstName} {person.lastName}</Text></Text>
                <Text style={vStyles.labelDetails}>Reservation Status: <Text style={vStyles.textDetails} >{GetReservationStatus(resDetails.reservationStatusId)} </Text></Text>
                <Text style={vStyles.labelDetails}>Reservation Origin: <Text style={vStyles.textDetails} >{GetReservationOrigin(resDetails.reservationOriginId)} </Text></Text>  
                <Text style={vStyles.labelDetails}>Number of guests: <Text style={vStyles.textDetails} > {resDetails.guests}</Text></Text>    
                <Text style={vStyles.labelDetails}>Special Requirements:<Text style={vStyles.textDetails} >{resDetails.specialRequirement}</Text></Text>
            </View>
        </View>

    );
}