import React, {useState, createRef, createContext} from 'react';
import {
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import * as CONSTANT from '../../constant/Constant';
import bgimage from '../../assets/backgroundColor.png';

function LoginScreen({navigation}) {
  const [userEmail, setUserLogin] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [jwtToken, jwtSetToken] = useState('');
  const [jwtID, jwtSetID] = useState('');

  const passwordInputRef = createRef();

  const [data, setData] = useState({
    secureTextEntry: true,
  });

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <KeyboardAvoidingView enabled style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <View style={styles.container} animation="fadeInRight">
          {/* <ImageBackground source={bgimage} style={styles.Backgroundimage}> */}
          <View style={styles.main}>
            <View style={{paddingTop: 60}}>
              <Image
                style={styles.logo}
                source={require('../../assets/AureliaLogo.png')}
              />
            </View>
            <View style={{paddingTop: 160}}>
              <View>
                <Text style={styles.accText}>Login</Text>
              </View>
              <View style={styles.text}>
                <TextInput
                  autoCapitalize="none"
                  style={styles.input}
                  onChangeText={UserLogin => setUserLogin(UserLogin)}
                  returnKeyType="next"
                  onSubmitEditing={() =>
                    passwordInputRef.current && passwordInputRef.current.focus()
                  }
                  underlineColorAndroid="#f000"
                  blurOnSubmit={false}
                />
              </View>
              <View style={{paddingTop: 20}}>
                <View>
                  <Text style={styles.accText}>Password</Text>
                </View>
                <View style={styles.text}>
                  <TextInput
                    minLength={8}
                    maxLength={15}
                    secureTextEntry={data.secureTextEntry ? true : false}
                    autoCompleteType="password"
                    style={styles.input}
                    onChangeText={UserPassword => setUserPassword(UserPassword)}
                    ref={passwordInputRef}
                    onSubmitEditing={Keyboard.dismiss}
                    blurOnSubmit={false}
                    underlineColorAndroid="#f000"
                    returnKeyType="next"
                  />
                  <TouchableOpacity onPress={updateSecureTextEntry}>
                    {data.secureTextEntry ? (
                      <Image
                        source={require('../../assets/eyeOff.png')}
                        style={styles.iconsText}
                      />
                    ) : (
                      <Image
                        source={require('../../assets/eyeOn.png')}
                        style={styles.iconsText}
                      />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{paddingTop: 20}}>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() =>
                  // Alert.alert("You're login now", 'Welcome to Aurelia')
                  navigation.navigate('MainScreen')
                }>
                <View style={styles.signIn}>
                  <Text style={styles.signInText}>LOGIN</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{paddingVertical: 40, width: 200}}>
              <Text
                style={{
                  color: CONSTANT.whiteColor,
                  fontSize: 24,
                  textShadowColor: CONSTANT.blackColor,
                  textShadowRadius: 0,
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  fontFamily: 'BunkenTechSansPro-Light',
                }}>
                {CONSTANT.slogan}
              </Text>
            </View>
          </View>
          {/* </ImageBackground> */}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CONSTANT.secondaryColor,
  },
  iconsText: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 35,
    height: 35,
    tintColor: CONSTANT.blackColor,
  },
  accText: {
    color: 'white',
    fontFamily: 'HelveticaNeueLTStd-Th',
  },
  signinText: {
    color: CONSTANT.blackColor,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    display: 'flex',
  },
  text: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 320,
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
    borderRadius: 4,
    height: 50,
    borderWidth: 2,
    paddingHorizontal: 20,
    marginVertical: 6,
    display: 'flex',
  },
  input: {
    color: CONSTANT.blackColor,
    flex: 1,
    backgroundColor: 'transparent',
  },
  main: {
    flex: 1,
    resizeMode: 'contain',
    display: 'flex',
    alignItems: 'center',
  },
  Backgroundimage: {
    flex: 1,
    resizeMode: 'cover',
  },
  logo: {
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  signIn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: CONSTANT.primaryColor,
    marginTop: 20,
    borderRadius: 4,
    width: 120,
    shadowColor: CONSTANT.blackColor,
    shadowOpacity: 0.75,
    shadowRadius: 13.5,
    elevation: 25,
    height: 40,
  },
  signInText: {
    fontFamily: 'HelveticaNeueLTStd-Th',
    marginRight: 'auto',
    marginLeft: 'auto',
    color: 'white',
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '100',
  },
});

export default LoginScreen;
