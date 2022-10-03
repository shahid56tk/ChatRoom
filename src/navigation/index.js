import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "../screens/main";

const Stack = createNativeStackNavigator()

const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="main">
                <Stack.Screen
                    name="main"
                    component={Main}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;