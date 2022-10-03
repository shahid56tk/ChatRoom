import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {COLOR_BACKGROUND} from "../../../res/drawables/colors"

const Main = ()=>{
    return(
        <View style = {styles.container}>
            <Text> Main Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: COLOR_BACKGROUND,
        alignItems:'center',
        justifyContent:'center',
    
    }
})

export default Main