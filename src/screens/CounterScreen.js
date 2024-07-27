import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const CounterScreen = () => {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button title="Increase" onPress={() => setCount(count + 1)} />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Decrease" onPress={() => setCount(count - 1)} />
            </View>
            <Text style={styles.text}>Current Count: {count}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        padding: 20,
    },
    buttonContainer: {
        marginVertical: 10,
        width: '60%',
    },
    text: {
        fontSize: 20,
        marginVertical: 20,
    },
});

export default CounterScreen;