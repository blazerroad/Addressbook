import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { randomColor } from "../../components/utilities"

const ContactRow = props => {
    const { item, navigation } = props
    const { id, firstName, lastName, phoneNo } = item
    return (
        <TouchableOpacity style={styles.container} onPress={() => { navigation.navigate("contactDetail", { id: id }) }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={[styles.imageHolder, { backgroundColor: randomColor() }]}>
                    <Text>{firstName.substring(0, 1)} {lastName.substring(0, 1)}</Text>
                </View>
                <View>
                    <Text style={styles.name}>{firstName}  {lastName}</Text>
                    <Text>{phoneNo}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ContactRow

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
        backgroundColor: "white"
    },
    imageHolder: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginRight: 10

    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingTop: 5,
        paddingBottom: 5,

    }

})