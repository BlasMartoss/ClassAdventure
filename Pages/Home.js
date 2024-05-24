import { StatusBar } from 'expo-status-bar';
import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home({ navigation }) {
 

  return (
    <View style={styles.container}>
        <View style={styles.HeaderContainer}>
            <View style={styles.upgradeContainer} >
                <TouchableOpacity style={styles.upgradeContainer} onPress={() => navigation.navigate('UpgradePlan')}> 
                    <Image
                        source={require('../images/UpgradeImage.png')}
                        style={styles.image}
                    />
                     <Text style={styles.upgradeText}>Upgrade Plan</Text>
                </TouchableOpacity>
               
            </View>
                 <Image
                    source={require('../images/iconUser.png')}
                    style={styles.image}
                />
        </View>
        <Image
          source={require('../images/ClassAdventureLogo.png')}
          style={styles.ClassAdventureImage}
      />
      
        <Image
            source={require('../images/mapIcon.png')}
            style={styles.mapImage}
        />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('GymkhanaMain')}>
            <LinearGradient colors={['#89BBE9', '#3E9CF3']} style={styles.linearGradient} >
            <Text style={styles.buttonText}>CREATE</Text>
            </LinearGradient>
        </TouchableOpacity>
        <Text style={styles.text}>Start creating your own Gymkhana</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  upgradeContainer: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    width: '80%',
    padding: '2%',
    paddingLeft: '3%',
  },
  upgradeText: {
    fontSize: 20,
    marginLeft: '5%',
  },
  HeaderContainer: {
    marginTop:'12%',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignContent: 'center',
    marginBottom: '5%',
  },
  image: {
    height: 50,
    width: 50,
  },
  ClassAdventureImage: {
    height: 300,
    width: 300,
    marginBottom: '10%',
    
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
  }
});
