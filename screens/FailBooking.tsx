import React from 'react';
import {View,Text, Image, TouchableOpacity, StyleSheet} from "react-native";
import { backToHome } from '../components/ReturnToHome';
import {vStyles} from '../styles';


export function failBooking(props: any){
const {navigation} = props;

    return(
        <View style={vStyles.container}>
            <View>{backToHome(props)}</View>          
            <View>  
                <Text style={vStyles.headingText}>ERROR</Text>
            </View>
            <View>    
               <Text style={vStyles.text}>Your booking could not be made. Please call the restaurant</Text>
            </View>        
        </View>
        

    );
}