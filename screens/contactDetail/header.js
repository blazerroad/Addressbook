import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { randomColor } from "../../components/utilities"

const Header = props => {
    const { firstName, lastName } = props.contact
    return (
        <View style={styles.container}>
            < View style={[styles.imageHolder, { backgroundColor: randomColor() }]} >
                <Text>{firstName.substring(0, 1)} {lastName.substring(0, 1)}</Text>
            </View >
            <Text style={styles.name}>{firstName} {lastName}</Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageHolder: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginRight: 10

    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
        padding : 20

    }
})