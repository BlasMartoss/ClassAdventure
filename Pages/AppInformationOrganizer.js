import { StatusBar } from 'expo-status-bar';
import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Modal } from 'react-native';

export default function Home({ navigation }) {


  return (
    <View style={styles.container}>
            <View style={styles.HeaderContainer}>
                    <View style={styles.upgradeContainer} >
                        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('ProfileSettingsOrganizer')}>
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
                source={require('../images/UpdateIcon.png')}
                style={styles.iconInfo}
            />
        </View>
        <View style={styles.line}></View>
        <View style={styles.updatesView}> 
            <Text style={styles.updatesText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.</Text>
        </View>
        <View style={styles.infoContainer}>
            <Text style={styles.userProfileText}>Any Issues? Contact Us</Text>
            <Image
                source={require('../images/ContactUsIcon.png')}
                style={styles.iconInfo}
            />
        </View>
        <View style={styles.updatesView}> 
            <View style={styles.line}></View>
            <Text style={styles.updatesText}>+34 999 999 999</Text> 
            <Text style={styles.updatesText}>classadventure.support@gmail.com</Text> 
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
  updatesView: {
    width: '100%',
    paddingRight: '10%'
  },
  updatesText: {
    fontSize: 15,
    marginLeft: '5%',
    marginBottom: '2%'
  },

});
