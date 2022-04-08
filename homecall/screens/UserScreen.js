import { color } from '@rneui/base';
import {StyleSheet, Text, View } from 'react-native';


function UserScreen() {
  return(
    <View style={styles.container}>
      {/* Title for upcoming appointments */}
      <View style={styles.upcomingWrapper}>
        <Text style={styles.sectionTitle}>MITCHELL, Abby</Text>

        <View style={styles.upcomingItems}>
          {/* This is where the upcoming appointments will go */}
          <Text>Chronic Diagnoses</Text>
          <Text>Previous Acute Diagnoses</Text>
          <Text>View all Previous Diagnoses</Text>
          
        </View>
      </View>
    </View>
  );
}

export default UserScreen;

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