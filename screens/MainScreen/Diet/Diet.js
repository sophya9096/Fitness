import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from '../../../components/Header';

const Diet = () => {
  return (
    <View style={styles.mainContainer}>
      <Header />
      <View style={styles.container}>
        <TouchableOpacity>
          <Text>Diet</Text>
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

export default Diet;
