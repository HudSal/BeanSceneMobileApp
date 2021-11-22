import React, {useState} from 'react';
import {View,Text, Image, TouchableOpacity, ActivityIndicator, FlatList} from "react-native";
import { dateConverter } from '../components/DateConverter';
import { backToHome } from '../components/ReturnToHome';
import { sittingChecker } from '../components/SittingChecker';
import {vStyles} from '../styles';

//This screen is to return a page where the user click on which date they want
export function PreCreate(props: any){
const {navigation, route} = props;
const [sittingList, setSittingList] = useState<any[]>([]);

//when the user click submit they will be navigated to TimeSlot screen, passing the sittingId from the sitting they just click
function onSubmitPress(id:number){
    navigation.navigate('TimeSlot',{id});
}
//fetching all the sittings available for a particular sitting type, for example all breakfast sittings or all lunch sittings
//using this Action in API ReservationsController "GetSittingBySittingTypeId"
fetch(`https://localhost:44377/API/Reservations/Sittings/${route.params.sittingType}`)
  .then(response => response.json())
  .then(data => setSittingList(data));

    return(
        <View style={vStyles.container}>
            <View>{backToHome(props)}</View>
            {/* <View style={vStyles.container}> */}
                <View>
                    <Text style={vStyles.text}>You are booking for:</Text>
                </View>
                <View>
                    <Text style={vStyles.headingText}><b>{sittingChecker(route.params.sittingType)}</b></Text>
                </View>
            {/* </View> */}
            <br/>
            <View >  
                <FlatList
                data={sittingList}
                renderItem={({ item }) => (  
                    <TouchableOpacity onPress={()=>onSubmitPress(item.id)} >
                        <View style={vStyles.linkButton3} >
                            <Text style={vStyles.buttonText3}>{dateConverter(item.startTime)}</Text>
                            <Text style={vStyles.buttonText3}>Seats left: {item.vacancies}</Text>
                        </View>
                    </TouchableOpacity>                                              
                )}
            />
            </View>   
            
        </View>
        

    );
}