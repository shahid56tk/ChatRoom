import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from "react-native";
import {COLOR_BACKGROUND, COLOR_BTN_TEXT, COLOR_PRIMARY, COLOR_PRIMARY_TEXT, COLOR_SECONDARY_TEXT} from "../../../res/drawables/colors"

const Main = (props)=>{

    const [userName, setUserName] = useState(null)
    return(
        <View style = {styles.container}>
            <TextInput
                style={styles.tInput}
                placeholder=" User Name"
                onChangeText={(t) =>{setUserName(t)}}
            />
            <TouchableOpacity
                title="Submit"
                onPress={() => {props.navigation.navigate('chat',{userName:userName})}}
            >
                <View style={styles.btn}>
                    <Text style= {styles.btnText}>Submit</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: COLOR_BACKGROUND,
        alignItems:'center',
        justifyContent:'center',
    
    },
    tInput:{
        width:'95%',
        height:60,
        color: COLOR_SECONDARY_TEXT,
        fontSize:25,
        borderWidth:1,
        borderRadius:5,
        elevation:0.01,
        textAlign:'center'
    },
    btn:{
        height:55,
        minWidth:'40%',
        borderWidth:1,
        justifyContent:'center',
        marginTop:20,
        backgroundColor: COLOR_PRIMARY,
        elevation:5,
        borderRadius:10
    },
    btnText:{
        color: COLOR_BTN_TEXT,
        fontSize:23,
        textAlign:'center',
        textAlignVertical:'center'
    }
})

export default Main