import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const MsgItem = (props) =>{
    return(
        <TouchableOpacity onLongPress={props.onPress}>
            <View style= {{...props.style, ...styles.item}}>
                <Text style= {{...props.msgText, fontWeight:'bold'}}>{props.userName}</Text>
                <Text style= {styles.txt}>{props.msg}</Text>
            </View>
        </TouchableOpacity>
        
    )
};

const styles = StyleSheet.create({
    item:{
        margin:5,
        padding:10,
        width:'70%',
        borderRadius:10,
    },
    txt:{
        //fontSize:12,
    }
})
export default MsgItem