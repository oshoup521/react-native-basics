import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
    const name = 'Osho';
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Getting started with React Native</Text>
            <Text style={styles.subHeaderText}>My name is {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    subHeaderText: {
        fontSize: 20,
        color: 'blue',
    },
});

export default ComponentsScreen;