import {createBottomTabNavigator} from 'react-navigation/bottom-tabs';

import HomeScreen from "../screens/HomeScreen";
import UserScreen from "../screens/UserScreen";
import ApptScreen1 from "../screens/ApptScreen1";

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator> 
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Profile" component={UserScreen} />
            <Tab.Screen name="Appointment" component={ApptScreen1} />
        </Tab.Navigator>
    )

}

export default Tabs;