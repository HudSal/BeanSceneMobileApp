import React from 'react';
import {View,Text} from "react-native";
import {vStyles} from '../styles';
import { backToHome } from '../components/ReturnToHome';


export function successfulBooking(props: any){
    return(
        <View style={vStyles.container}>
            <View>{backToHome(props)}</View>
            <View>  
                <Text style={vStyles.headingText}>Booking Succesful!</Text>
            </View> 
            <View>                
               <Text style={vStyles.text}>Please call the restaurant if you need to amend the booking</Text>
            </View>        
        </View>
        

    );
}