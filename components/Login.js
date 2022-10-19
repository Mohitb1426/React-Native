import React, { useState } from 'react';
import {
  ActivityIndicator,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import app from '../database/firebase';
import { useNavigation } from '@react-navigation/native';
import backArrow from '../assests/images/kindpng_193306.png';

const Login = ({ showLoginPage, setShowLoginPage }) => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onPressLogin = async () => {
    if (email === '' && password === '') {
      alert('Enter details to signin!');
    } else {
      setLoading(true);
      try {
        await app.auth().signInWithEmailAndPassword(email, password);
        console.log('User logged-in successfully!');
        setTimeout(() => {
          setLoading(false);
          navigation.navigate('Home');
        }, 1000);
      } catch (error) {
        setLoading(false);
        alert(error);
      }
    }
  };

  return (
    <View style={styles.mainWrapper}>
      <View style={styles.modalWrapper}>
        <Text style={styles.loginText}>Login Here</Text>
        <TextInput
          style={styles.inputWrapper}
          onChangeText={text => setEmail(text)}
          value={email}
          placeholder="Email Address"
        />
        <TextInput
          style={styles.inputWrapper}
          onChangeText={text => setPassword(text)}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity>
          <Button
            style={styles.goButton}
            onPress={onPressLogin}
            title="Go"
            color="#841584"
          />
        </TouchableOpacity>
        <View style={styles.textFlex}>
          <Text style={styles.loginSubText}>Don't have an Account?</Text>
          <TouchableOpacity>
            <Text
              style={styles.loginPageText}
              onPress={() => navigation.navigate('SignUp')}>
              SignUp Here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {loading && (
        <View style={styles.container}>
          <ActivityIndicator
            animating={loading}
            color="#bc2b78"
            size="large"
            style={styles.activityIndicator}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  modalWrapper: {},
  inputWrapper: {
    marginBottom: 20,
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    placeholderTextColor: 'black',
  },
  container: {
    marginTop: 40,
  },
  mainWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  goButton: {
    padding: 40,
  },
  loginText: {
    paddingVertical: 20,
    fontSize: 20,
    color: '#000000',
  },
  loginSubText: {
    fontSize: 15,
    color: '#000000',
  },
  textFlex: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
  },
  loginPageText: {
    fontSize: 15,
    color: 'green',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
export default Login;
