import { useEffect, useState } from "react"
import { TextInput, View, StyleSheet, TouchableOpacity, Text, FlatList } from "react-native";
import { COLOR_BACKGROUND, COLOR_PRIMARY, COLOR_BTN_TEXT, COLOR_ACCENT, COLOR_DIVIDER, COLOR_MY_MSG } from "../../../res/drawables/colors";
import {collection, query, onSnapshot, doc, getFirestore} from "firebase/firestore";
const db = getFirestore(app)
import app from "../../../api/firebase";
import MsgItem from "../../components/msgItem";
import {sendMessage} from "../../services/firebaseServices";
import { CHAT_ROOM_DATABASE } from "../../../res/strings";
  //const DATA = [];
const Chat = (props)=>{

    const {userName} = props.route.params;
    const [message, setMessage] = useState(null);
    const [messages, setMessages]= useState(null);
    const onSendPressed = async () =>{
        if(userName && message){
            let payload = {userName, message}
            console.log(payload)
            let res= await sendMessage(payload);
            setMessage(null)
        }else{
            alert('PleaSe Enter Message')
        }
    };
    const getMessages = async() =>{
        const qry = query(collection(db, CHAT_ROOM_DATABASE))
        try{
            onSnapshot(qry, (querySnapshoot) =>{
                let DATA = [];
                querySnapshoot.forEach((doc) =>{
                    DATA.push(doc.data())
                })
                //console.log(DATA)
                setMessages(DATA)
                //console.log(messages)
            })
        }
        catch(e){
            alert(e.message)
        }
    }
    useEffect(()=>{
        getMessages()
     },[])




      const renderItem = ({ item }) => (
        item.userName==userName? 
        <MsgItem 
        style={styles.listItemMe}
        userName = {"Me"}
        msg = {item.message}
        onPress = {()=> alert(item.message)}
        />:
        <MsgItem 
        style={styles.listItem}
        userName = {item.userName}
        msg = {item.message}
        onPress = {()=> alert(item.message)}
        />
        
      );
    return(
        <View style= {styles.container}>
            <FlatList style= {{marginTop:15}}
                data={messages}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <View style = {styles.chatEditor}>
                <TextInput
                    style= {styles.chatInput}
                    placeholder="Enter Message"
                    onChangeText={(t)=> {setMessage(t)}}
                    multiline={true}
                    value= {message}
                />
                <TouchableOpacity
                onPress={()=> onSendPressed()}
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
    },
    listItemMe:{
        backgroundColor: COLOR_MY_MSG,
        alignSelf:'flex-end',
    },
})
export default Chat;