import React from 'react'
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Appointment = (props) => {
    const navigation = useNavigation()
    return (
        <View style={styles.item}>
            <View style={styles.itemText}>
                {/* Appointment Name */}
                <Text>{props.text}</Text>
                <Text>{props.date.toString()}</Text>
            </View>

            {/* Chat Button */}
            <TouchableOpacity onPress={() => navigation.navigate('Chat')} >
                <View style={styles.chatButton}>
                <Icon color="white" size={20} name="comment" />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#DBD9D9',
        padding: 15,
        borderRadius: 10,
        margin: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,  
        elevation: 3
    },
    chatButton:{
        width: 25,
        height: 25,
        backgroundColor: '#F75050',
        borderRadius: 30
    },
    itemText:{
        
    },
});

export default Appointment;