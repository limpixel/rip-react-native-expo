import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity} from "react-native";
import React from "react";

const Welcome = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />

            <View style={styles.boxillustration}>
                 <View style={styles.bg}>
                <Image  style={styles.img } 
                resizeMode={'contain'} 
                source={{ uri: 'https://logos-world.net/wp-content/uploads/2020/10/Free-Symbol.png'}} 
                alt="new"/>

                <Image  style={styles.img2 } 
                resizeMode={'contain'} 
                source={{ uri: 'https://stories.freepiklabs.com/storage/14075/pair-programming-rafiki-3057.png'}} 
                alt="new"/>

                <Text style={styles.Text}>
                    KODEIN
                </Text>
                <Text style={styles.Text2}>
                    SEKOLAH DEVELOPER INDONESIA
                </Text>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Home')}
                    style={styles.button}
                >
                    <Text style={styles.buttonText} >Selanjutnya</Text>
                </TouchableOpacity>
                </View>
            </View>

        </View>
    )
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },

    Text: {
        marginTop: 30,
        fontWeight: "bold",
        fontSize: 30,
        color: '#2146C7'
    },

    Text2: {
        fontWeight: "bold",
        fontSize: 17,
        color: '#0D4C92'
    },

    bg: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
    },

    img: {
        height: 150,
        width: 150,
        marginVertical: 4,
        borderRadius: 12,
        alignSelf: "center"
    },

    img2: {
        marginTop: 60,
        height: 300,
        width: 300,
        marginVertical: 4,
        borderRadius: 12,
    },

    button: {
        marginTop: 50,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
        width: 250,
        height: 40,
        backgroundColor: '#59C1BD',
        borderRadius: 10 
    },

    buttonText: {
        color: '#FFFFFF',
        fontSize: 20
    },

    boxillustration: {
        flex: 3,
        alignSelf: "center",
        position: 'relative'
    }
});

export default Welcome;