import { useState } from "react"
import { Button, TextInput, View, StyleSheet, TouchableOpacity, Text, FlatList } from "react-native"
import { COLOR_BACKGROUND, COLOR_SECONDARY_TEXT, COLOR_PRIMARY, COLOR_BTN_TEXT, COLOR_ACCENT, COLOR_DIVIDER, COLOR_DARK_PRIMARY, COLOR_PRIMARY_TEXT, COLOR_MY_MSG } from "../../../res/drawables/colors"
const DATA = [
    {
      username: 'Qasim',
      msg: 'Aoa',
    },
    {
      username: 'Majid',
      msg: 'Wa',
    },
    {
      username: 'Waqas',
      msg: 'How r u?',
    },
    {
        username: 'Qasim',
        msg: 'Aoa',
      },
      {
        username: 'Majid',
        msg: 'Wa',
      },
      {
        username: 'Waqas',
        msg: 'How r u?',
      },
      {
        username: 'Qasim',
        msg: 'Aoa',
      },
      {
        username: 'Majid',
        msg: 'Wa',
      },
      {
        username: 'Waqas',
        msg: 'How r u?',
      },
      {
          username: 'Qasim',
          msg: 'Aoa',
        },
        {
          username: 'Majid',
          msg: 'Wa',
        },
        {
          username: 'Waqas',
          msg: 'How r u?',
        },
  ];
  
const Chat = (props)=>{

    const {userName} = props.route.params
    const [message, setMessage] = useState(null)


      const renderItem = ({ item }) => (
        item.username==userName?<TouchableOpacity onLongPress={()=> alert(item.msg)}>
            <View style= {styles.listItemMe}>
                <Text style= {{...styles.msgText, fontWeight:'bold'}}>Me</Text>
                <Text style= {styles.msgText}>{item.msg}</Text>
            </View>
        </TouchableOpacity>: 
        <TouchableOpacity onLongPress={()=> alert(item.msg)}>
            <View style= {styles.listItem}>
            <Text style= {{...styles.msgText, fontWeight:'bold'}}>{item.username}</Text>
            <Text style= {styles.msgText}>{item.msg}</Text>
        </View>
        </TouchableOpacity>
      );
    return(
        <View style= {styles.container}>
            <FlatList style= {{marginTop:15}}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
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
        justifyContent:'space-between'
    },
    chatEditor:{
        flexDirection:'row',
        width:'98%',
        justifyContent:'center',
        marginBottom:10
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
    },
    listItem:{
        backgroundColor: COLOR_ACCENT,
        margin:10,
        padding:10,
        width:'60%',
        borderRadius:10,
    },
    listItemMe:{
        backgroundColor: COLOR_MY_MSG,
        margin:10,
        padding:10,
        width:'60%',
        borderRadius:10,
        alignSelf:'flex-end',
        textAlign:'left'
    },
    msgText:{
        fontSize:14,
    }
})
export default Chat;