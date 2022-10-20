import React, { useState } from 'react';
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import app from '../database/firebase';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onPressSignUp = async () => {
    if (email === '' && password === '') {
      alert('Enter details to signup!');
    } else {
      setLoading(true);
      try {
        const response = await app
          .auth()
          .createUserWithEmailAndPassword(email, password);
        console.log(response, 'response');
        response.user.updateProfile({
          displayName: name,
        });
        setTimeout(() => {
          setLoading(false);
          navigation.navigate('Login');
        }, 1000);
      } catch (error) {
        setLoading(false);
        alert(error);
      }
    }
  };

  return (
    <View style={styles.mainWrapper}>
      <View>
        <Text style={styles.loginText}>SignUp Here</Text>
        <TextInput
          style={styles.inputWrapper}
          onChangeText={text => setName(text)}
          value={name}
          placeholder="Name"
        />
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
        />
        <TouchableOpacity>
          <Button
            style={styles.goButton}
            onPress={onPressSignUp}
            title="Go"
            color="#841584"
          />
        </TouchableOpacity>
        <View style={styles.textFlex}>
          <Text style={styles.loginSubText}>already have an Account?</Text>
          <TouchableOpacity>
            <Text
              style={styles.loginPageText}
              onPress={() => navigation.navigate('Login')}>
              Login Here
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
  modalWrapper: {
    // backgroundColor: 'white',
  },
  inputWrapper: {
    marginBottom: 20,
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    placeholderTextColor: 'black',
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
export default SignUp;
