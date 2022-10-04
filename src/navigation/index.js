import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "../screens/main";
import Chat from "../screens/chatScreen";
const Stack = createNativeStackNavigator()

const Navigation = (props) => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="main">
                <Stack.Screen
                    name="main"
                    component={Main}
                />
                <Stack.Screen
                    name="chat"
                    component={Chat}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;