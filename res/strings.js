export const CHAT_ROOM_DATABASE = 'CHAT_ROOM_DB'


export const getCurrentDate=()=>{
 
    const dd = new Date().getDate();
    const mm = new Date().getMonth() + 1;
    const yyyy = new Date().getFullYear();
    date = dd + '-' + mm + '-' + yyyy;
    return (date);
}
export const getCurrentTime=()=>{
 
    const hour = new Date().getHours();
    const min = new Date().getMinutes();
    const sec = new Date().getSeconds();
    time = hour + ':' + min + ':'+ sec;
    return (time);
}