import React,{useState} from 'react';
import {View,Text, Image, TouchableOpacity, TextInput} from "react-native";
import { dateConverter } from '../components/DateConverter';
import { backToHome } from '../components/ReturnToHome';
import { sittingChecker } from '../components/SittingChecker';
import {vStyles} from '../styles';

export function Create(props: any){
   
const {navigation,route} = props; 
const [sitting,setSitting] = useState<any>('');  //variable to store sitting object
const [guest,setGuest] = useState('');
const [firstName,setFirstName] = useState('');
const [lastName,setLastName] = useState('');
const [email,setEmail] = useState('');
const [phone,setPhone] = useState('');
const [specialRequirement,setSpecialRequirement] = useState('');

let sittingId = route.params.id;// the excatly sitting Id like 112--> Breakfast on 1-1-2022
let timeSlot = route.params.timeslot;// the excatly TimeSlot like 11:00 am

//fetching the sitting that the user have selected by passing the sittingId// using this Action in API ReservationsController "GetSittingById" and retrieve only one sitting
fetch(`https://localhost:44377/API/Reservations/Sitting/${route.params.id}`)
.then(response => response.json())
.then(data => setSitting(data))

//When this function executed, it will create a reservationData object and post it to webAPI
function onSubmitPress(){
   // creating an object for dTO in webAPI
    const reservationData=  { Guest: guest, SittingId: sittingId, 
        Email: email, TimeSlot: timeSlot, FirstName: firstName, LastName: lastName, Phone: phone , SpecialRequirement:specialRequirement };
 
//fetch to POST the object that was just created to webAPI
fetch(`https://localhost:44377/API/Reservations/Create`, {
     method: 'POST', // or 'PUT'
     headers: {
    'Content-Type': 'application/json',
    },
  body: JSON.stringify(reservationData),
    })
    .then(response => {
        if (!response.ok) {
            navigation.navigate('Fail'); //if failed, return to fail page
        }
        else{
            navigation.navigate('Succeed'); //if succeesful, return to succeed page
        }

      });
   
} 
  
    return(
        <View style={vStyles.container}>
            {/* <View>
                <Image 
                  style={{width:140, height:40}}
                  source={require('../assets/images/BeanSceneLogo4.png')}/>
            </View>   */}
            <View>{backToHome(props)}</View>
            <View>
                <Text style={vStyles.text}>You are booking for:</Text> 
            </View>
            <View>
                <Text style={vStyles.headingText}>{sittingChecker(sitting.sittingTypeId)}<br/> On: {dateConverter(sitting.startTime)} / at: {timeSlot}</Text>
            </View>
            <View style={vStyles.form}>              
                <Text style={vStyles.text}>  
                    Please Complete The Form Below:
                </Text>             
                <View style={{flexDirection: 'row'}}>
                    <Text style={vStyles.label}> Guest(s):</Text>
                    <TextInput style={vStyles.input} value={guest} onChangeText={setGuest} />             
                </View>           
                <View style={{flexDirection: 'row'}}>
                    <Text style={vStyles.label}> First Name:</Text>
                    <TextInput style={vStyles.input} value={firstName} onChangeText={setFirstName}/>             
                </View>    
                <View style={{flexDirection: 'row'}}>
                    <Text style={vStyles.label}> Last Name:</Text>
                    <TextInput style={vStyles.input}value={lastName} onChangeText={setLastName}/>             
                </View>    
                <View style={{flexDirection: 'row'}}>
                    <Text style={vStyles.label}> Email:</Text>
                    <TextInput style={vStyles.input} value={email} onChangeText={setEmail} />             
                </View>    
                <View style={{flexDirection: 'row'}}>
                    <Text style={vStyles.label}> Phone:</Text>
                    <TextInput style={vStyles.input} value={phone} onChangeText={setPhone} />             
                </View>   
                <View style={{flexDirection: 'row'}}>
                    <Text style={vStyles.label}>Special Request:</Text>
                    <TextInput style={vStyles.input} value={specialRequirement} onChangeText={setSpecialRequirement} />             
                </View>    
                <TouchableOpacity onPress ={onSubmitPress}>
                    <View style={vStyles.linkButton}>
                        <Text style={vStyles.buttonText}>SUBMIT</Text>
                    </View>
                </TouchableOpacity>
            </View>    

            
        </View>
        

    );
}