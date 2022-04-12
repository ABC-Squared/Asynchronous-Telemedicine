import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ApptScreen1 from "../screens/ApptScreen1";
import ApptScreen2 from "../screens/ApptScreen2";
import UploadScreen from "../screens/UploadScreen";


const Stack = createStackNavigator()

const MainStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Page 1" component={ApptScreen1} />
            <Stack.Screen name="Page 2" component={ApptScreen2} />
            <Stack.Screen name="Page 3" component={UploadScreen} />

        </Stack.Navigator>
    );
}

export {MainStackNavigator}