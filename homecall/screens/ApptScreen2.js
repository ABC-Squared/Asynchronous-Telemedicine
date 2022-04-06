import SimpleSelectButton from 'react-native-simple-select-button';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Dimensions, FlatList, Button } from 'react-native';
function ApptScreen2() {
    const [choice, setChoice] = useState('');

    const button_list = [
      { label: "I have a cough", value: "1" },
      { label: "Runny Nose", value: "2" },
      { label: "I have a fever ", value: "3" },
      { label: "I have diarrhea", value: "4" },
    ];

    function onPressNext(){
        // Should move to the next screen
    }
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={{
          marginVertical: 100,
          width: (Dimensions.get('screen').width),
        }}>
          <FlatList
            data={button_list}
            keyExtractor={item => item.value}
            extraData={choice}
            renderItem={
              ({ item }) => 
                <SimpleSelectButton
                  onPress={() => setChoice(item.value)}
                  isChecked={choice === item.value}
                  text={item.label}
                  textSize={30}
                  iconColor="#fff"
                  buttonDefaultColor="#DA3030"
                  buttonSelectedColor="#580606"
                  textDefaultColor="#fff"
                  textSelectedColor="#fff"
                />
            }
          />
          <TextInput
            placeholder="Write in your symptoms" />
        </View>
        <View backgroundColor="#FF0000"> 
            <Button
            onPress={onPressNext}
            title="Next"
            color="#ffff"
            disabled={choice == null}
/>
        </View>
      </View>
    );
}

export default ApptScreen2;

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


