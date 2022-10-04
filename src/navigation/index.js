import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "../screens/main";
import Chat from "../screens/chatScreen";
import { COLOR_DARK_PRIMARY, COLOR_PRIMARY } from "../../res/drawables/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";
const Stack = createNativeStackNavigator()

const Navigation = (props) => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="main">
                <Stack.Screen
                    name="main"
                    component={Main}
                    options= {{headerStyle:{backgroundColor: COLOR_DARK_PRIMARY}}}
                />
                <Stack.Screen
                    name="chat"
                    component={Chat}
                    options= {{headerStyle:{backgroundColor: COLOR_DARK_PRIMARY}}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;