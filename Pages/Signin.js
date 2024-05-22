import { StatusBar } from 'expo-status-bar';
import * as React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
       <Image
          source={require('../images/ClassAdventureLogo.png')}
          style={styles.image}
      />
      <Text style={styles.title}>Hello</Text>
      <Text style={styles.subTitle}>Sign in to your account!</Text>
      <TextInput style={styles.textInput} placeholder='Email Address' placeholderTextColor='#888' />
      <TextInput style={styles.textInput} placeholder='Password' secureTextEntry={true} placeholderTextColor='#888' />
      <Text>Forgot your password?</Text>

      <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Ok')}>
        <LinearGradient
          colors={['#89BBE9', '#3E9CF3']}
          style={styles.linearGradient}
        >
          <Text style={styles.buttonText}>SIGN IN</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signupText}>Already have an account?</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#344340',
  },
  subTitle: {
    fontSize: 20,
    color: 'gray',
    paddingBottom: 40,
  },
  textInput: {
    borderColor: 'gray',
    padding: 5,
    paddingStart: 20,
    width: '80%',
    height: 40,
    margin: 10,
    borderRadius: 30,
    backgroundColor: '#fff'
  },
  button: {
    marginTop: 20,
    width: '40%',
    borderRadius: 30,
    marginBottom: '15%',
  },
  linearGradient: {
    padding: 10,
    alignItems: 'center',
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
