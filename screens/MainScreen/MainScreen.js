import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import Home1 from './Home/Home1';
import Exercise from './Exercise/Exercise';
import Diet from './Diet/Diet';
import Home from './Home/Home';
import Weight from './Weight/Weight';
import Tasks from './Tasks/Tasks';
import * as CONSTANT from '../../constant/Constant';

const Tab = createBottomTabNavigator();

const MainScreen = ({navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeBackgroundColor={CONSTANT.primaryColor}
      inactiveBackgroundColor={CONSTANT.primaryColor}
      screenOptions={{
        headerShown: false,
        keyboardHidesTabBar: true,
        tabBarStyle: {
          postion: 'absolute',
          height: hp('10%'),
          backgroundColor: CONSTANT.primaryColor,
        },
      }}>
      <Tab.Screen
        name="Exercise"
        component={Exercise}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: '10%',
              }}>
              <Image
                source={require('../../assets/trolley11.png')}
                resizeMode="contain"
                style={{
                  width: wp('15%'),
                  height: hp('15%'),
                  tintColor: focused
                    ? CONSTANT.whiteColor
                    : CONSTANT.secondaryColor,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Diet"
        component={Diet}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: '10%',
              }}>
              <Image
                source={require('../../assets/sent11.png')}
                resizeMode="contain"
                style={{
                  width: wp('15%'),
                  height: hp('15%'),
                  tintColor: focused
                    ? CONSTANT.whiteColor
                    : CONSTANT.secondaryColor,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: '10%',
              }}>
              <Image
                source={require('../../assets/home11.png')}
                resizeMode="contain"
                style={{
                  width: wp('15%'),
                  height: hp('15%'),
                  tintColor: focused
                    ? CONSTANT.whiteColor
                    : CONSTANT.secondaryColor,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Weight"
        component={Weight}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: '10%',
              }}>
              <Image
                source={require('../../assets/user11.png')}
                resizeMode="contain"
                style={{
                  width: wp('15%'),
                  height: hp('15%'),
                  tintColor: focused
                    ? CONSTANT.whiteColor
                    : CONSTANT.secondaryColor,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Tasks"
        component={Tasks}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: '10%',
              }}>
              <Image
                source={require('../../assets/user11.png')}
                resizeMode="contain"
                style={{
                  width: wp('15%'),
                  height: hp('15%'),
                  tintColor: focused
                    ? CONSTANT.whiteColor
                    : CONSTANT.secondaryColor,
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainScreen;
