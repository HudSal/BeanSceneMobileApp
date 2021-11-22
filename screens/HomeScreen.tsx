import React from 'react';
import {View,Text, Image, TouchableOpacity, StyleSheet} from "react-native";
import {vStyles} from '../styles';

export function HomeScreen(props: any){

            const {navigation} = props;

            function onMenuButtonPress(){
                navigation.navigate('MenuX');
            }

            function onReservationPress(){
                navigation.navigate('Sitting');
            }

            function onResvnPress(){
                navigation.navigate('AllReservation')
            }

    return(
        <View style={vStyles.container}>
            {/* <View style={styles.imageCont}>              
                <Image
                style={{width:140, height:40}}
                 source={require('../assets/images/BeanSceneLogo4.png')}/>              
            </View> */}
            <View>
                <TouchableOpacity style={styles.container} onPress={onMenuButtonPress}>
                    <View style={vStyles.linkButton}>
                        <Text style={vStyles.buttonText}>Menu</Text>
                    </View>                                            
                </TouchableOpacity>
                <TouchableOpacity style={styles.container}onPress={onReservationPress} >
                    <View style={vStyles.linkButton}>
                        <Text style={vStyles.buttonText}>  BOOKING  </Text>
                    </View>                                            
                </TouchableOpacity>
                <TouchableOpacity style={styles.container}onPress={onResvnPress} >
                    <View style={vStyles.linkButton}>
                        <Text style={vStyles.buttonText}>Reservation List</Text>
                    </View>                                            
                </TouchableOpacity>
            </View>
            <View >
                <Text style={vStyles.headingText}>
                    <br/>
                    Welcome to BeanScene
                </Text>
            </View>
            <View>
                <Text style={vStyles.text}>
                    We are the best restaurant in Sydney. 
                    We cater bookings for wedding, hens night, birthday, etc
                </Text>
            </View>
        </View>

    );
}


export const styles = StyleSheet.create({
    imageCont:{

    },
    container:{
        flexDirection: 'column',
        flex: 1,
        
    },
  
}

);
