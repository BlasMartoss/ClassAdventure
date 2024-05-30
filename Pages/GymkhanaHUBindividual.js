import { StatusBar } from 'expo-status-bar';
import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function GymkhanaHUBindividual({ navigation }) {
 


  return (
 
      <View style={styles.container}>
        
        <View style={styles.HeaderContainer}>
          <View style={styles.upgradeContainer}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('HomeParticipant')}>
              <Text style={styles.backText}>X</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Image
          source={require('../images/ClassAdventureLogo.png')}
          style={styles.ClassAdventureLogo}
        />

        <View style={styles.textContainer}>
          <Text style={styles.title}>GYMKHANA NAME</Text>
          <Text style={styles.text}>Waiting for people to start playing the Gymkhana</Text>
      
        </View>
      
        <Text style={styles.text}>INDIVIDUAL MODE</Text>

     
        <View style={styles.viewScoreboard}>
          <ScrollView style={styles.scoreboardScroll}>
            <Text style={styles.usersText}>Users in the Gymkhana</Text>
            <View style={styles.userView}>
              <Image
                source={require('../images/ProfilePictureIcon.png')}
                style={styles.profileIcon}
              />
              <Text style={styles.userName}>Name</Text>
            </View>
          </ScrollView>
        </View>
        <StatusBar style="auto" />
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '10%',
    paddingBottom: '15%'
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
    paddingLeft: '5%',
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
  ClassAdventureLogo: {
    height: 180,
    width: 180,
  },
  button: {
    marginTop: '5%',
    width: '50%',
    borderRadius: 5,
    marginBottom: '10%',
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
  },
  title: {
    fontSize: 30,
  
  },
 
  textContainer: {
    width: '100%',
    alignItems: 'center',
  },
  scrollView: {
    zIndex: 1,
  },
  viewScoreboard: {
    width: '85%',
    height: 350,
    borderWidth: 0.5,
    borderColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 10,
    marginTop: '10%'
  },
  scoreboardScroll: {
    width: '100%',
    height: '100%',
    zIndex: 1
  },
  usersText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: '2%',
    marginBottom: '2%'
  },
  userView: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingLeft: '10%',
    paddingTop: '3%',
    paddingBottom: '3%',
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
  
  },
  profileIcon: {
    height: 50,
    width: 50,
  },
  userName: {
    fontSize: 18,
    marginLeft: '5%',
  },

});
