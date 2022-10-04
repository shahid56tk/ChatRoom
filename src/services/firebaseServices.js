import app from "../../api/firebase";
import {collection, getDoc, getFirestore, addDoc} from 'firebase/firestore'
import { CHAT_ROOM_DATABASE } from "../../res/strings";
const db = getFirestore(app);
export const sendMessage = async (payload) => {
    try{
        await addDoc(collection(db, CHAT_ROOM_DATABASE),payload);
        return true;
    }
    catch(e){
        console.log(e.message);
        return false;
    }
}
