import { StatusBar } from 'expo-status-bar';
import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home({ navigation }) {


  return (
    <View style={styles.container}>
            <View style={styles.HeaderContainer}>
                    <View style={styles.upgradeContainer} >
                        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('HomeParticipant')}>
                            <Text style={styles.backText}>&lt;</Text>
                        </TouchableOpacity>
                    </View>

            </View>
        <View style={styles.viewOptions}>
            <Text style={styles.userProfileText}>Profile</Text>
            <TouchableOpacity  style={styles.configurationImage} onPress={() => navigation.navigate('ProfileSettingsParticipant')}>
              <Image
                      source={require('../images/Settings.png')}
                      style={styles.configurationImage}
                  />
            </TouchableOpacity>
        </View>
        <Image
          source={require('../images/iconUser.png')}
          style={styles.userIcon}
        />
        {/*ROLE*/}
        <Text style={styles.username}>Blas</Text>
        {/*ROLE*/}
        <Text style={styles.role}>Participant</Text>
        <View style={styles.line}></View>
         {/*ROLE*/}
         <Text style={styles.email}>email@gmail.com</Text>
          {/*STARS*/}
            <Image
            source={require('../images/UpgradeImage.png')}
            style={styles.star}
            />
             <Text style={styles.role}>3</Text>
             <Text style={styles.message}>You will recive one Star each time you win a Gincana!</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeParticipant')}>
            <LinearGradient colors={['#89BBE9', '#3E9CF3']} style={styles.linearGradient} >
                <Text style={styles.buttonText}>Play</Text>
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
    paddingTop: '10%'
  },
     upgradeContainer: {
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center',
        alignItems: 'center',
        width: '80%',
        padding: '2%',
        paddingLeft: '5%',
    },
       // Back Button Style
       HeaderContainer: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignContent: 'center',
    },
    backText: {
        fontSize: 18,
        padding: '2%',
        paddingRight: '5%',
        paddingLeft: "5%",
    },
    backButton: {
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    // end back button
  viewOptions: {
    paddingRight: '10%',
    paddingLeft: '5%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: '5%'
  },
  configurationImage: {
    height: 40,
    width: 40,  
    marginLeft: '15%'
  },
  userProfileText: {
    fontSize: 20,
    marginRight: '15%'
  },
  userIcon: {
    height: 150,
    width: 150,  
  },
  role: {
    color: '#888',
    fontSize: 18,
    textAlign: 'center',
  },
  username: {
    color: 'black',
    fontSize: 30,
    textAlign: 'center',
  },
  line: {
    width: "90%",
    marginTop: '5%',
    height: 0.8,
    marginBottom:'4%',
    backgroundColor: 'black'
  },
  email: {
    color: '#888',
    fontSize: 15,
  },
  star: {
    height: 70,
    width: 70,
    marginTop: '20%'  
  },
  message: {
    color: '#888',
    fontSize: 20,
    textAlign: 'center',
    padding: '5%',
    paddingTop: 5

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
});
