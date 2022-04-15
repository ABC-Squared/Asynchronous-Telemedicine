import React from 'react'
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Appointment = (props) => {
    const navigation = useNavigation()
    return (
        <View style={styles.item}>
            <View>
                {/* Appointment Name */}
                <Text style={{fontSize: 15}}>{props.text}</Text>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>{props.date}</Text>
            </View>

            {/* Chat Button */}
            <View style={styles.chatTouch}>
            <TouchableOpacity  style={styles.chatButton} onPress={() => navigation.navigate('Chat')} >
                    <Icon color="white" size={25} name="comment" />
            </TouchableOpacity>
            </View>
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
        width: 35,
        height: 35,
        backgroundColor: '#F75050',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    chatTouch : {
        justifyContent: 'flex-end',
        alignItems: 'flex-end'

    }
});

export default Appointment;