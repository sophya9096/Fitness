import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as CONSTANT from '../../constant/Constant';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const SplashScreen = ({navigation}) => {
  const [animating, setAnimating] = useState(true);

  setTimeout(() => {
    navigation.replace('LoginScreen');
  }, 2000);

  return (
    <Animatable.View style={styles.container} easing="ease-out">
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: CONSTANT.secondaryColor,
        }}>
        <View>
          <Animatable.Image
            animation="slideInUp"
            source={require('../../assets/AureliaLogo.png')}
          />
        </View>
      </View>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Splash: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default SplashScreen;
