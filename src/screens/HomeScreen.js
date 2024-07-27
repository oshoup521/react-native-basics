import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { Header } from 'react-navigation-stack';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="Go to Components Demo"
          onPress={() => navigation.navigate('Components')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="Go to List Demo"
          onPress={() => navigation.navigate('List')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="Go to Image Demo"
          onPress={() => navigation.navigate('Image')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="Go to Instagram Demo"
          onPress={() => navigation.navigate('Instagram')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="Go to Counter Demo"
          onPress={() => navigation.navigate('Counter')}
        />
      </View>
    </View>
  );
};

HomeScreen.navigationOptions = {
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 10,
  },
  button: {
    padding: 10,
  },
});

export default HomeScreen;