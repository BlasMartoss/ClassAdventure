import { StatusBar } from 'expo-status-bar';
import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home({ navigation }) {
 

  return (
    <View style={styles.container}>
       
        <Image
          source={require('../images/GreenCheckMark.png')}
          style={styles.check}
        />
        <View style={styles.textContainer}>
            <Text style={styles.title}>COMPLETED</Text>
            <Text style={styles.text}>Your gymkhana has been completely created and saved, start it whenever you want from the gymkhana section of your profile</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
            <LinearGradient colors={['#89BBE9', '#3E9CF3']} style={styles.linearGradient} >
            <Text style={styles.buttonText}>GO HOME</Text>
            </LinearGradient>
        </TouchableOpacity>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '30%'
  },
  image: {
    height: 50,
    width: 50,
  },
  check: {
    height: 250,
    width: 250,  
  },
  mapImage: {
    height: 100,
    width: 100,
  },
  button: {
    marginTop: 20,
    width: '50%',
    borderRadius: 5,
    marginBottom: '5%',
  },
  linearGradient: {
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  text: {
    color: '#888',
    fontSize: 15,
    textAlign: 'center',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '2%'
  },
  title: {
    fontSize: 35,
  },
  textContainer: {
    width: '100%', 
    alignItems: 'center'
  }
});
