import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Latihan2 = (props) => {
    const [counter, setCounter] = useState(1);
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
        flex:1,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
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

export default Latihan2;