import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Appointment = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemText}>
                {/* Appointment Name */}
                <Text>{props.text}</Text>
                <Text>{props.date.toString()}</Text>
            </View>
            <View style={styles.chatButton}></View>
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
        width: 12,
        height: 12,
        backgroundColor: '#F75050',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    itemText:{
        
    },
});

export default Appointment;