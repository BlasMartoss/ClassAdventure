import { StatusBar } from 'expo-status-bar';
import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home({ navigation }) {


  return (
    <View style={styles.container}>
            <View style={styles.HeaderContainer}>
                    <View style={styles.upgradeContainer} >
                        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('ProfileSettingsParticipant')}>
                            <Text style={styles.backText}>&lt;</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        <View style={styles.viewOptions}>
            <Text style={styles.userProfileText}>App Information</Text>
            <Image
                source={require('../images/AppInformationIcon.png')}
                style={styles.icon}
            />
        </View>

        <View style={styles.infoContainer}>
            <Text style={styles.userProfileText}>Updates</Text>
            <Image
                source={require('../images/AppInformationIcon.png')}
                style={styles.iconInfo}
            />
        </View>
        <View style={styles.line}></View>


      
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
    marginBottom: '5%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },

  userProfileText: {
    fontSize: 20,
    marginLeft: '5%',

  },
  icon: {
    height: 40,
    width: 40, 
    marginRight: '5%' 
  },
  iconInfo: {
    height: 40,
    width: 40, 
    marginRight: '10%' 
  },
  infoContainer: {
    marginTop: '10%',
    width: '100%',
    marginBottom: '2%',
    display: 'flex',
    justifyContent:'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    paddingRight: '10%'
  },
  line: {
    width: "80%",
    marginTop: '1%',
    marginRight: '20%',
    marginLeft: '5%',
    height: 0.8,
    marginBottom:'4%',
    backgroundColor: 'black'
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

});
