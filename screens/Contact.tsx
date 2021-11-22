import React from "react";
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {vStyles} from '../styles';
import { backToHome } from '../components/ReturnToHome'; 

export function Contact(props:any){
    return(
        <View style={vStyles.container}>
            <View>
                {backToHome(props)}
            </View>
            <Text style={vStyles.headingText}>Contact Us</Text>
            <Text style={vStyles.text}>Location: 99 Bean av, Sydney, NSW 2000</Text>
            <Text style={vStyles.text}>Tel: +61400 000 000</Text>
            <Text style={vStyles.text}>Email: beanscene@beanscene.com.au</Text>
                <br/>
            <Text style={vStyles.headingText}>Opening hours:</Text>
            <Text style={vStyles.text}>7:00 a.m. to 10:30 p.m</Text>
        </View>
    );
}