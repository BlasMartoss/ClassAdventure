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
            <Text style={styles.userProfileText}>Your Gymkhanas</Text>
            <Image
                source={require('../images/GymkhanaFlag.png')}
                style={styles.icon}
            />
        </View>
        <Text style={styles.infoText}>You can create only 3 gymkhanas without Premium.</Text>

        <View style={styles.GymkhanaView}>
            <View style={styles.GymkhanaViewName}>
                <Text style={styles.GymkhanaName}>Gymkhana Name</Text>
            </View>
            <View style={styles.ButtonsView}>
                    <TouchableOpacity>
                        <Image
                                source={require('../images/TrashIconGymkhana.png')}
                                style={styles.buttonIcon}
                            />
                    </TouchableOpacity>
                    <TouchableOpacity >
                    <Image
                            source={require('../images/PlayIcon.png')}
                            style={styles.buttonIcon}
                        />
                    </TouchableOpacity>
            </View>
        </View>
        
        <View style={styles.GymkhanaView}>
            <View style={styles.GymkhanaViewName}>
                <Text style={styles.GymkhanaName}>Gymkhana Name</Text>
            </View>
            <View style={styles.ButtonsView}>
                    <TouchableOpacity>
                        <Image
                                source={require('../images/TrashIconGymkhana.png')}
                                style={styles.buttonIcon}
                            />
                    </TouchableOpacity>
                    <TouchableOpacity >
                    <Image
                            source={require('../images/PlayIcon.png')}
                            style={styles.buttonIcon}
                        />
                    </TouchableOpacity>
            </View>
        </View>
        
        <View style={styles.GymkhanaView}>
            <View style={styles.GymkhanaViewName}>
                <Text style={styles.GymkhanaName}>Gymkhana Name</Text>
            </View>
            <View style={styles.ButtonsView}>
                    <TouchableOpacity>
                        <Image
                                source={require('../images/TrashIconGymkhana.png')}
                                style={styles.buttonIcon}
                            />
                    </TouchableOpacity>
                    <TouchableOpacity >
                    <Image
                            source={require('../images/PlayIcon.png')}
                            style={styles.buttonIcon}
                        />
                    </TouchableOpacity>
            </View>
        </View>
        <TouchableOpacity style={styles.upgradeView}>
            <Image
                    source={require('../images/Diamond Premium.png')}
                    style={styles.upgradeIcon}
            />
            <Text style={styles.upgradeText}>Upgrade to Premium to Create more Gymkhanas</Text>
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
    paddingTop: '15%'
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
    marginTop: '5%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  userProfileText: {
    fontSize: 25,
    marginLeft: '5%',

  },
  icon: {
    height: 40,
    width: 40, 
    marginRight: '5%' 
  },
  GymkhanaView: {
    width: '90%',
    height: 100,
    margin: '5%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  GymkhanaViewName: {
    width: '60%',

    alignContent: 'center',
    justifyContent: 'center',
    paddingLeft: '5%'
  },
  GymkhanaName: {   
    fontSize: 17
  },
  ButtonsView: {
    width: '40%',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonIcon: {
    height: 50,
    width: 50, 
    marginLeft: '10%'
  },
  upgradeIcon: {
    height: 70,
    width: 70, 
  },
  upgradeText: {
    fontSize: 18,
    textAlign: 'center',
    marginLeft: '10%',
    marginRight: '10%'
  },
  upgradeView: {
    alignItems: 'center',
  },
  infoText: {
    fontSize: 15,
    textAlign: 'center',
    marginLeft: '10%',
    marginRight: '10%'
  }
});
