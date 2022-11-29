
import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Bentuk = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.number}>1</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.number}>2</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'space-between',
        alignItems:  'center',
        flexDirection: 'row',
    },

    square: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 100/2, 
        backgroundColor: '#000000',
    },
    number: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fffff',
    },
    
});

export default Bentuk;