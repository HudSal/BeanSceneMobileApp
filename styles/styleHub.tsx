import React from "react";
import { StyleSheet } from "react-native";

export const vStyles = StyleSheet.create({
    container:{
        flex: 1,
        // backgroundColor: '#c9a671',
        backgroundColor: 'blanchedalmond',
        alignItems: "center",   
    },
    linkButton:{
        backgroundColor:'#1f1300',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 5,
        margin: 5,
        minWidth: 140,
        marginTop:20,
        alignItems:'center',
    },
    linkButton2:{
        backgroundColor:'white',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 5,
        margin: 2,
        minWidth: 300,
        maxWidth:300,
    },
    linkButton3:{
        backgroundColor:'#c9a671',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 5,
        margin: 2,
        minWidth: 300,
        maxWidth:300,
    },
    buttonText:{
        color:'#c9a671',
        textAlign:'center',
        flex: 1,
        padding:5,
        fontWeight:'bold',
        fontSize:17,
    },
    buttonText2:{
        color:'#1f1300',
        textAlign:'center',
        fontSize:15,
        flex: 1,
        
    },
    buttonText3:{
        color:'#1f1300',
        textAlign:'center',
        flex: 1,
        padding:5,
        fontWeight:'bold',
        fontSize:17,
    },
    input:{
        borderRadius: 4,
        backgroundColor: '#ffdeab',
        padding: 2,
        margin: 5,
      
    },
    label:{
        minWidth: 95,
        maxWidth: 95,
        fontWeight: 'bold',
        fontSize:15,       
        padding:5,
    },
    form:{
        backgroundColor: 'white',
        // borderStartColor: 'blue',
        margin: 10,
        padding: 25,
        borderRadius:5,
        borderColor:'black' ,
        borderStyle:"solid",
        borderEndWidth: 'thin',
        borderBottomWidth:'thin',
    },
    dataContainer:{
        flexDirection:"row",
        flex: 3,
    },
    headingText:{
        fontWeight: 'bold',
        fontSize:25,
        justifyContent: 'center',
        textAlign:'center',
        padding:5,
    },
    text:{
        fontWeight: 'bold',
        fontSize:15,
        justifyContent: 'center',
        textAlign:'center',
        padding:5,
    },
    labelDetails:{
        fontWeight: 'bold',
        fontSize:15,
        padding:5,
    },
    textDetails:{
        fontWeight: 'normal',
        fontSize:15,
        padding:10,
        
    },
}

);
