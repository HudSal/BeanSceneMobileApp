import React, {useState} from 'react';
import {View,Text, Image, TouchableOpacity, FlatList} from "react-native";
import { TimeConverter } from '../components/TimeConverter';
import {vStyles} from '../styles';
import { dateConverter } from '../components/DateConverter';
import { sittingChecker } from '../components/SittingChecker';
import { backToHome } from '../components/ReturnToHome';


//this is function for the screen that creates list of timeslots for user to choose
export function TimeSlot(props: any){
const {navigation, route} = props;
const [sitting, setSitting] = useState<any>('');
var sittingId = route.params.id;// the excatly sitting Id like 112--> Breakfast on 1-1-2022
let timeArray:any = []; //array to store the timeslots

function onSubmitPress(id:number, timeslot:any){
    navigation.navigate('Create',{id,timeslot});
}

//fetching the sitting based on the sittingId// using this Action in API ReservationsController "GetSittingById" and retrieve only one sitting
fetch(`https://localhost:44377/API/Reservations/Sitting/${sittingId}`)
  .then(response => response.json())
  .then(data => setSitting(data));

//getting the startTime of the sitting, converting it to DateTime object
  let starterString = sitting.startTime;
  let starterDT:Date = new Date(starterString);

//getting the endTime of the sitting, converting it to DateTime object
  let enderString = sitting.endTime;
  let enderDT:Date = new Date(enderString);
  enderDT.setMinutes(enderDT.getMinutes() - 60); //minus 60minutes because minimum booking duration is 60min (we dont want customer to book right at closing time)

  let diff = enderDT.valueOf() - starterDT.valueOf(); //checking time difference between start and end-60
  let arrayLength = (diff / 3600000) * 4 //divide by 3600000 to get amount of hours, then multiply by 4 to get 15 mins interval (1 hr = four of 15mins)


  for (var i = 0; i < arrayLength + 1; i++) 
    {  //for loop to push all the timeslots into the array
        let myDate = starterDT;
        let newDate = new Date(myDate);
        newDate.setMinutes(newDate.getMinutes() + (i * 15));

        let newTime = TimeConverter(newDate);
        timeArray.push(newTime);
    }
    

    return(
        <View style={vStyles.container}>
            <View>{backToHome(props)}</View>
            <View>
                 <Text  style={vStyles.text}>You are booking for: </Text>
            </View>
            <View>
                <Text  style={vStyles.headingText}><b>{sittingChecker(sitting.sittingTypeId)} on {dateConverter(sitting.startTime)}</b> </Text>
            </View>
            <View >                  
                <Text style={vStyles.text}>Please Choose your Booking time:</Text>
                <Text></Text>
                <FlatList
                data={timeArray}
                renderItem={({ item }) => (  
                    <TouchableOpacity onPress={()=>onSubmitPress(sittingId,item)} >
                        <View style={vStyles.linkButton3} >
                        <Text style={vStyles.buttonText3}>{item}</Text>
                        </View>
                    </TouchableOpacity>                                              
                )}
            />
            </View>   
            
        </View>
        

    );
}