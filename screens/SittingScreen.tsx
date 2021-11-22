import React, { useState } from "react";
import { View,Text,TouchableOpacity,Image } from "react-native";
import { backToHome } from "../components";
import {vStyles} from '../styles';

//This function will return screen that allows the user to select which type of sitting they want to book
export function Sitting(props: any){

    const {navigation} = props;
    // this function navigates to the booking "PreCreate Screen" page, taking the parameter sittingTypeId (1,2,3, or 4) and passing it to the "PreCreate Screen" Booking page
    function onPressSitting(sittingType: number){
        navigation.navigate('Booking',{sittingType});
    }

    return(
        <View style={vStyles.container}>
            {/* <View>
                <Image 
                  style={{width:140, height:40}}
                  source={require('../assets/images/BeanSceneLogo4.png')}/>
            </View>  */}
            <View style={vStyles.container}>
                 <View>{backToHome(props)}</View>
                <Text style={vStyles.text}>
                    Please choose one of the sitting below :
                </Text>
                <TouchableOpacity onPress={() => onPressSitting(1)}>
                    <View style={vStyles.linkButton}>
                        <Text style={vStyles.buttonText}> Breakfast </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => onPressSitting(2)}>
                    <View style={vStyles.linkButton}>
                        <Text style={vStyles.buttonText}> Lunch </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => onPressSitting(3)}>
                    <View style={vStyles.linkButton}>
                        <Text style={vStyles.buttonText}> Dinner </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => onPressSitting(4)}>
                    <View style={vStyles.linkButton}>
                        <Text style={vStyles.buttonText}> Special </Text>
                    </View>
                </TouchableOpacity>
            </View> 
        </View>

    );
}