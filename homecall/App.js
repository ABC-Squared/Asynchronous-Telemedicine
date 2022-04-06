import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeScreen from './screens/Home';
import ApptScreen1 from './screens/ApptScreen1';
import UserScreen from './screens/UserScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'heart'
                : 'heart-outline';
            } else if (route.name === 'Book Appointment') {
              iconName = focused ? 'pencil' : 'pencil-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#F75050',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Book Appointment" component={ApptScreen1} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={UserScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  upcomingWrapper: {
    paddingTop: 50,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold'
  },
  upcomingItems: {
    marginTop: 20,
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 5,  
    elevation: 3
  },
  recentWrapper: {
    paddingTop: 25,
    paddingHorizontal: 20
  },
  recentItems: {
    marginTop: 20,
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 5,  
    elevation: 3
  },
});
