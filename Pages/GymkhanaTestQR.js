import { StatusBar } from 'expo-status-bar';
import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image,  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function GymkhanaHUBindividual({ navigation }) {
 


  return (
 
      <View style={styles.container}>
              <Text style={styles.gymkhanaName}>Gymkhana Name</Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non</Text>
              <View style={styles.imageContainer}>
                    <Image
                        source={require('../images/image.png')}
                        style={styles.images}
                    />
                    <Image
                        source={require('../images/image.png')}
                        style={styles.images}
                    />
              </View>

              <Text style={styles.scan}>SCAN QR</Text>
              <TouchableOpacity>
                <Image
                          source={require('../images/SCANQR.png')}
                          style={styles.qrimage}
                      />
             </TouchableOpacity>
             <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('')}>
                <LinearGradient colors={['#89BBE9', '#3E9CF3']} style={styles.linearGradient} >
                  <Text style={styles.buttonText}>COMPLETE TASK</Text>
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
    paddingTop: '20%',
    paddingBottom: '15%'
  },
  gymkhanaName: {
    fontSize: 30,
    marginBottom: '10%'
  },
  description: {
    marginRight: '10%',
    marginLeft: '10%',
    fontSize: 14,
    textAlign: 'justify',
    marginBottom: '5%'
  },
  imageContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  images: {
    margin: '2%',
    height: 150,
    width: 150
  },
  scan:{
    fontSize: 20,
    marginTop: '10%',
    marginBottom: '5%'
  },
  qrimage: {
    height: 80,
    width: 80
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
    fontSize: 18,
  },
});
