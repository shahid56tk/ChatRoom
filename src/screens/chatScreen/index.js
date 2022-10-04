import { useState } from "react"
import { Button, TextInput, View, StyleSheet } from "react-native"
import { COLOR_BACKGROUND, COLOR_SECONDARY_TEXT } from "../../../res/drawables/colors"

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
                />
                <Button
                    title="send"
                    onPress={()=> {alert(message)}}
                > </Button>
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
        bottom:10,
    },
    chatInput:{
        width:'83%',
        height:45,
        color: COLOR_SECONDARY_TEXT,
        fontSize:20,
        borderWidth:1,
        borderRadius:5,
        elevation:0.01,
        textAlign:'center',
        marginRight:5,
    }
})
export default Chat;