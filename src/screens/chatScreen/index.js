import { useState } from "react"
import { Button, TextInput, View, StyleSheet, TouchableOpacity, Text } from "react-native"
import { COLOR_BACKGROUND, COLOR_SECONDARY_TEXT, COLOR_PRIMARY, COLOR_BTN_TEXT, COLOR_ACCENT, COLOR_DIVIDER, COLOR_DARK_PRIMARY, COLOR_PRIMARY_TEXT } from "../../../res/drawables/colors"

const Chat = (props)=>{

    const {userName} = props.route.params
    const [message, setMessage] = useState(null)
    return(
        <View style= {styles.container}>
            <View style = {styles.chatEditor}>
                <TextInput
                    style= {styles.chatInput}
                    placeholder="Enter Message"
                    onChangeText={(t)=> {setMessage(t)}}
                    multiline={true}
                />
                <TouchableOpacity
                title="Submit"
                onPress={()=> {alert(message)}}
            >
                <View style={styles.btn}>
                    <Text style= {styles.btnText}>Send </Text>
                </View>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: COLOR_BACKGROUND,
        alignItems:'center',
        justifyContent:'center'
    },
    chatEditor:{
        flexDirection:'row',
        width:'98%',
        justifyContent:'center',
        position:'absolute',
        bottom:17,
    },
    chatInput:{
        width:'78%',
        minHeight:45,
        color: COLOR_BTN_TEXT,
        backgroundColor: COLOR_DIVIDER,
        fontSize:20,
        borderWidth:1.5,
        borderRadius:15,
        textAlign:'center',
        marginRight:5,
    },
    btn:{
        minHeight:45,
        minWidth:'20%',
        borderWidth:1,
        justifyContent:'center',
        backgroundColor: COLOR_PRIMARY,
        elevation:5,
        borderRadius:15,
    },
    btnText:{
        color: COLOR_BTN_TEXT,
        fontSize:23,
        textAlign:'center',
        textAlignVertical:'center'
    }
})
export default Chat;