import SimpleSelectButton from 'react-native-simple-select-button';
import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const UploadScreen = ({navigation}) => {
  
  return (
    <View style={styles.container}>
      <Button 
            title="Upload Image"
            color="#F2F2F2"
            icon={
                <Icon
                  name="arrow-right"
                  size={30}
                  color="white"
                  />}
                  />
        </View>
  );
}

export default UploadScreen;

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
    item: {
        backgroundColor: '#F75050',
        padding: 15,
        borderRadius: 10,
        margin: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,  
        elevation: 3
    },

    nextButtonStyle:{
      margin: 10,
      width: 250,
      backgroundColor:"#FF0000",
      justifyContent:'center',
      alignSelf: 'center',
    }
  });


