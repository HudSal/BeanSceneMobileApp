import React from "react";
import {View,Text, TouchableOpacity} from "react-native";
import {vStyles} from '../styles';

//This component will create a button that will navigate back to homepage
export function backToHome(props:any){
    
const {navigation} = props;

    function onHomeButtonPress(){
        navigation.navigate('Home');
    }

return(  
    <View>
        <TouchableOpacity onPress={onHomeButtonPress}>
            <View style={vStyles.linkButton} >
                <Text style={vStyles.buttonText}>  HOME  </Text>
            </View>
        </TouchableOpacity>
    </View>);
}