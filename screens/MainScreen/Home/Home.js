import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from '../../../components/Header';

const Home = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Header />
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Home1')}>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
