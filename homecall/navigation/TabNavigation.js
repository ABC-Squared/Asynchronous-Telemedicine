import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator, HomeStackNavigator } from "./StackNavigation";
import UserScreen from "../screens/UserScreen";
import { MaterialIcons } from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
    return (
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen 
                name="Book Appointment" 
                component={MainStackNavigator} 
                options={{
                    tabBarIcon: () => (
                        <Icon name="pencil" size={35} color="#F75050" />
                    )
                }}/>
            <Tab.Screen 
                name="Home" 
                component = {HomeStackNavigator}
                options={{
                    tabBarIcon: () => (
                        <Icon name="home" size={35} color="#F75050" />
                    )
                }}
                 />
            <Tab.Screen 
                name="Profile" 
                component = {UserScreen} 
                options={{
                    tabBarIcon: () => (
                        <Icon name="user" size={35} color="#F75050" />
                    )
                }}
                
                />
        </Tab.Navigator>
    );
};


export default BottomNavigator;