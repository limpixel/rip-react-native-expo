import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const BelajarUseState = (props) => {
    const [counter, setCounter] = useState(1);
    
    return (
        
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.button}
                onPress={()=> setCounter(counter+1)}    
            >
                <Text style={styles.buttonText}>Click in here</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.button}
                onPress={()=> setCounter(0)}    
            >
                <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>

            <View style={styles.box}>
                <Text style={styles.number}>{counter}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'row',
    },

    button: {
        height : 45,
        width: 100,
        backgroundColor: '#0441BC',
        justifyContent : 'center',
        alignItems: 'center',
        borderRadius: 10,

    },
    buttonText :{
        fontSize:13,
        fontWeight: 'bold',
        color: '#ffffff',
    },  
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 150,
        borderRadius: 150/2,
        backgroundColor: "#000000",
    },
    number: {
        fontSize:40,
        fontWeight: 'bold',
        color: '#ffffff',
    }

});

export default BelajarUseState;