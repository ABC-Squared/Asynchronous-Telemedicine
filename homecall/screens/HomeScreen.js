import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Appointment from './components/Appointment';

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
      {/* Title for upcoming appointments */}
      <View style={styles.upcomingWrapper}>
        <Text style={styles.sectionTitle}>Upcoming Appointments</Text>

        <View style={styles.upcomingItems}>
          {/* This is where the upcoming appointments will go */}
          <Appointment text={'Check-Up'} />
          <Appointment text={'Physical'}/>
          <Appointment text={'Lab Results'}/>
        </View>
      </View>

      {/* Title for upcoming appointments */}
      <View style={styles.recentWrapper}>
        <Text style={styles.sectionTitle}>Recent Appointments</Text>

        <View style={styles.recentItems}>
          {/* This is where the upcoming appointments will go */}
          <Appointment text={'Follow-Up (Non-Urgent)'} />
          <Appointment text={'Lab Results'}/>
          <Appointment text={'Check-Up'}/>
        </View>
      </View>
    </View>
    );
}

export default HomeScreen;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  upcomingWrapper: {
    paddingTop: 120,
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
