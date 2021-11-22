import React from 'react';
import {View,Text, Image, TouchableOpacity, StyleSheet} from "react-native";
import { backToHome } from '../components/ReturnToHome';
import {vStyles} from '../styles';


export function MenuScreen(props: any){

    return(
        <View style={vStyles.container}>
            <View>{backToHome(props)}</View>
            <View >  
                <Text style={vStyles.headingText}>
                    <br/>
                    <br/>
                   Soon.. :)
                </Text>
            </View>        
        </View>
        

    );
}