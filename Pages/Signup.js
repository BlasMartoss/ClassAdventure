import { StatusBar } from 'expo-status-bar';
import * as React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image, Switch } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState, } from 'react';

export default function Register({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);


  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
       <Image
          source={require('../images/ClassAdventureLogo.png')}
          style={styles.image}
      />
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subTitle}>Create your account!</Text>

      <TextInput 
        style={styles.textInput} 
        placeholder='Name' 
        placeholderTextColor='#888' 
      />
      <TextInput 
        style={styles.textInput} 
        placeholder='Email Address' 
        placeholderTextColor='#888' 
      />
      <TextInput 
        style={styles.textInput} 
        placeholder='Password' 
        placeholderTextColor='#888' 
        secureTextEntry={true}
      />
      <TextInput 
        style={styles.textInput} 
        placeholder='Confirm Password' 
        placeholderTextColor='#888' 
        secureTextEntry={true}
      />


      <View style={styles.switchContainer}>
          <Text style={styles.label} onPress={() => Alert.alert('Terms and Conditions')}>Accept Terms and Conditions</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#0F7BEE" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
      </View>
      <TouchableOpacity style={styles.button}>
        <LinearGradient
          colors={['#89BBE9', '#3E9CF3']}
          style={styles.linearGradient}
        >
          <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
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
    fontSize: 50,
    fontWeight: 'bold',
    color: '#344340',
  },
  subTitle: {
    fontSize: 15,
    color: 'gray',
    paddingBottom: '5%',
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
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    width: '60%',
    borderRadius: 30,
    marginBottom: '10%',
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

