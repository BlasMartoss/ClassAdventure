import { StatusBar } from 'expo-status-bar';
import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home({ navigation }) {


  return (
    <View style={styles.container}>
            <View style={styles.HeaderContainer}>
                    <View style={styles.upgradeContainer} >
                        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('ProfileOrganizer')}>
                            <Text style={styles.backText}>&lt;</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        <View style={styles.viewOptions}>
            <Text style={styles.userProfileText}>Settings</Text>
           
        </View>
        <Image
          source={require('../images/iconUser.png')}
          style={styles.userIcon}
        />
        {/*ROLE*/}
        <Text style={styles.username}>Joan</Text>
        {/*ROLE*/}
        <Text style={styles.role}>Organizer</Text>
        <View style={styles.line}></View>
    
        <TouchableOpacity style={styles.configurationView} onPress={() => navigation.navigate('')}> 
            <Image
                source={require('../images/EditProfileIcon.png')}
                style={styles.icon}
            />
            <Text style={styles.text}>Edit Profile</Text>
        </TouchableOpacity>

       <TouchableOpacity style={styles.configurationView} onPress={() => navigation.navigate('')}> 
            <Image
                source={require('../images/ChangePasswordIcon.png')}
                style={styles.icon}
            />
            <Text style={styles.text}>Change Password</Text>
        </TouchableOpacity>

       <TouchableOpacity style={styles.configurationView} onPress={() => navigation.navigate('UpgradePlan')}> 
            <Image
                source={require('../images/Diamond Premium.png')}
                style={styles.icon}
            />
            <Text style={styles.text}>Update Plan</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.configurationView} onPress={() => navigation.navigate('AppInformationOrganizer')}> 
            <Image
                source={require('../images/AppInformationIcon.png')}
                style={styles.icon}
            />
            <Text style={styles.text}>App Information</Text>
        </TouchableOpacity>

            <TouchableOpacity style={styles.logoutView} onPress={() => navigation.navigate('')}> 
                <Image  
                    source={require('../images/LogoutIcon.png')}
                    style={styles.iconlogout}
                />
                <Text style={styles.text}>Log Out</Text>
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
    width: '100%',
    marginBottom: '5%'
  },

  userProfileText: {
    fontSize: 20,
    marginLeft: '5%'
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
  configurationView: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft:'10%',
    marginTop: '4%',
  },
  logoutView: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft:'10%',
    marginTop: '15%',
  },
  icon: {
    height: 50,
    width: 50, 
  },
  iconlogout: {
    height: 40,
    width: 40, 
  },
  text: {
    color: '#888',
    fontSize: 18,
    textAlign: 'center',
    marginLeft: '5%',
  },
});
