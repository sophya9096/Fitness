import React from 'react';
import {StatusBar, StyleSheet, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen/SplashScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import MainScreen from './screens/MainScreen/MainScreen';
import Home1 from './screens/MainScreen/Home/Home1';
import OnboardingScreen from './screens/OnboardingScreen/OnboardingScreen';
import * as CONSTANT from './constant/Constant';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {Platform.OS === 'android' ? (
        <StatusBar
          backgroundColor={CONSTANT.primaryColor}
          barStyle="light-content"
        />
      ) : (
        <StatusBar hidden />
      )}
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="Home1" component={Home1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
