import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Appointment from '../components/Appointment';
import firebase from 'firebase/compat/app';


function HomeScreen() {
  const [appointment, setAppointment] = useState([]);
  let currentUserUID = firebase.auth().currentUser.uid;

  function convertToDate(seconds){
    var normalDate = new Date(1970, 0, 1); // Epoch
    normalDate.setSeconds(seconds);
    return normalDate.toDateString()
  }

  useEffect(() => {
    const ref = firebase.firestore().collection('appointments');

    // Create a query against the collection where we can match the userID
    const queryRef = ref.where('userID', '==', currentUserUID);

      queryRef.get().then((querySnapshot) => {
        // total matched documents
        const matchedDocs = querySnapshot.size
        if (matchedDocs) {
          querySnapshot.docs.forEach(doc => {
            setAppointment(appointment => [...appointment, doc.data()]);
          })
        } else {
          console.log("0 documents matched the query")
        }
      })
  }, [])

  return (  
    <View style={styles.container}>
       <View style={styles.upcomingWrapper}>
          <Text style={styles.sectionTitle}>Upcoming Appointments</Text>
          <View style={styles.upcomingItems}> 
            {appointment.map((obj) => (
              <Appointment text={obj.name} date={convertToDate(obj.apptDate.seconds)} />
            ))}
      </View>
      </View>
    </View>
  );
    
    // return(
    //   <View style={styles.container}>
    //     {/* Title for upcoming appointments */}
    //     <View style={styles.upcomingWrapper}>
    //       <Text style={styles.sectionTitle}>Upcoming Appointments</Text>
  
    //       <View style={styles.upcomingItems}>
    //         {/* This is where the upcoming appointments will go */}
    //         <Appointment text={'Check-Up'} />
    //         <Appointment text={'Physical'}/>
    //         <Appointment text={'Lab Results'}/>
    //       </View>
    //     </View>
  
    //     {/* Title for upcoming appointments */}
    //     <View style={styles.recentWrapper}>
    //       <Text style={styles.sectionTitle}>Recent Appointments</Text>
  
    //       <View style={styles.recentItems}>
    //         {/* This is where the upcoming appointments will go */}
    //         <Appointment text={'Follow-Up (Non-Urgent)'} />
    //         <Appointment text={'Lab Results'}/>
    //         <Appointment text={'Check-Up'}/>
    //       </View>
    //     </View>
    //   </View>
    //);
  }

export default HomeScreen;

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