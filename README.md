# React Native Basics

Welcome to the **React Native Basics** repository! This repository is designed to help you get started with React Native by covering the fundamental concepts and components needed to build mobile applications.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Running the App](#running-the-app)
- [Debugging](#debugging)
- [Basic Components](#basic-components)
- [Styling](#styling)
- [State and Props](#state-and-props)
- [Handling Events](#handling-events)
- [Navigation](#navigation)
- [Resources](#resources)

## Introduction

React Native is a popular framework for building mobile applications using JavaScript and React. It allows you to create natively-rendered mobile apps for iOS and Android using a single codebase.

## Getting Started

To get started with React Native, you'll need to set up your development environment. Follow the official [React Native Getting Started guide](https://reactnative.dev/docs/environment-setup) to install the necessary tools and create your first React Native project.

## Project Structure

This project uses a basic navigation setup with several screens:

- `HomeScreen`
- `ComponentsScreen`
- `ListScreen`
- `ImageScreen`
- `InstagramScreen`
- `CounterScreen`

The navigation is managed using `react-navigation` and `react-navigation-stack`.

## Running the App

To run the app, follow these steps:

1. **Install Dependencies**: 
   Run `npm install` to install all required dependencies.

2. **Start the App**:
   Use one of the following commands to start the app:
   - `npm start` - Starts the Expo development server.
   - `npm run android` - Runs the app on an Android emulator or device.
   - `npm run ios` - Runs the app on an iOS simulator or device.
   - `npm run web` - Runs the app in a web browser.

3. **Expo Go App**:
   For testing on a real Android or iOS device:
   - Install the Expo Go app from the Google Play Store or Apple App Store.
   - After starting the app with `npm start`, scan the QR code displayed in the terminal using the Expo Go app.
   - The development version of your app will open in the Expo Go app on your mobile device.

## Debugging

React Native provides several tools for debugging, including:

1. **Expo Developer Tools**:
   - Expo provides a web-based interface to manage your development build, including logs and device connections.
   
2. **React Developer Tools**:
   - You can use React Developer Tools to inspect React components.
   
3. **React Native Debugger**:
   - A standalone app that includes the React Developer Tools and Redux DevTools.
   
4. **Console Logging**:
   - Use `console.log` statements in your code to output debug information to the console.

## Basic Components

### Text

The `Text` component is used to display text in your app. It supports various styles and touch handling.

### View

The `View` component is a container for other components and can be used to style and layout child components.

### Image

The `Image` component is used to display images, either from local resources or from a URL.

### TextInput

The `TextInput` component is used to create text input fields, allowing users to enter text.

### Button

The `Button` component is used to create buttons for user interactions, such as submitting forms or navigating to different screens.

## Styling

In React Native, you can style components using JavaScript objects or stylesheets, similar to CSS in web development. Styles can be applied inline or through a `StyleSheet` object.

## State and Props

React Native uses state and props to manage and pass data within components. State is used to handle data that changes over time, while props are used to pass data from parent to child components.

## Handling Events

You can handle various events in React Native, such as button presses, text input changes, and touch events, to create interactive applications.

## Navigation

To navigate between different screens in your app, you can use libraries like React Navigation, which provides a robust navigation solution for React Native apps.

## Resources

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [React Navigation](https://reactnavigation.org/)
- [React Native Elements](https://reactnativeelements.com/)
- [React Native Paper](https://callstack.github.io/react-native-paper/)
