import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as CONSTANT from '../constant/Constant';
import Texts from './Texts';

const Header = () => {
  return (
    <View style={styles.header}>
      {/* <Image
        style={styles.logo}
        source={require('../assets/AureliaLogo.png')}
      /> */}
      {/* <Text style={{color: CONSTANT.whiteColor}}>Header</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: CONSTANT.secondaryColor,
    height: hp('10%'),
    width: wp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: hp('10%'),
    resizeMode: 'contain',
  },
});

export default Header;
