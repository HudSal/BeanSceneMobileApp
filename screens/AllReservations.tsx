import React from 'react';
import {useState} from 'react';
import {View,Text, Image, TouchableOpacity, FlatList} from "react-native";
import {vStyles} from '../styles';
import { backToHome } from '../components/ReturnToHome'; //a component to create a button that will navigate back to home page


// This page is to return All reservations that is available in the database 
export function AllReservations(props: any){
const {navigation} = props;
const [allResv, setAllResv ] =  useState<any[]>([]);

// when this function is executed, it will navigate to the Details page, passing the ID from the selected reservation
function PassID(id: number, firstName:any, lastName:any){
    navigation.navigate('ReservationDetails', {id},{firstName},{lastName});
}

//fetching all the reservations in the database. ALL OF THEM
fetch(`https://localhost:44377/API/Reservations`)
  .then(response => response.json())
    .then(data => setAllResv(data) )
    return(
        <View style={vStyles.container}>
            <View>
                {backToHome(props)}
            </View>
            <View>  
                <Text style={vStyles.text}>
                    All Reservation
                </Text>
                <Text>
                    <FlatList 
                    data={allResv}
                    renderItem={({ item }) => (  
                        <View >
                            <TouchableOpacity style={vStyles.linkButton3} onPress={()=>PassID(item.id,item.person.firstName,item.person.lastName)}> 
                                <Text  style={vStyles.buttonText3}>Reservation Id: {item.id}</Text>
                                <Text  style={vStyles.buttonText3}>Person Name:  {item.person.firstName} {item.person.lastName} </Text>
                                <Text  style={vStyles.buttonText3}>Sititng: {item.sitting.id}</Text>                                                              
                            </TouchableOpacity>       
                        </View>                                       
                )}
            />
                </Text>
            </View>        
        </View>
        

    );
}