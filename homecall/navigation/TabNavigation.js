import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator } from "./StackNavigation";
import HomeScreen from "../screens/Home";
import UserScreen from "../screens/UserScreen";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
    return (
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen name="Book Appointment" component={MainStackNavigator} />
            <Tab.Screen name="Home" component = {HomeScreen} />
            <Tab.Screen name="Profile" component = {UserScreen} />
        </Tab.Navigator>
    );
};


export default BottomNavigator;