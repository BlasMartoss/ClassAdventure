import { StatusBar } from 'expo-status-bar';
import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image, ScrollView  } from 'react-native';

export default function UpgradePlan({ navigation }) {
  return (
    <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
      <View style={styles.HeaderContainer}>
            <View style={styles.upgradeContainer} >
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('UpgradePlan')}>
                    <Text style={styles.backText}>&lt;</Text>
                </TouchableOpacity>
            </View>
            <Image
                    source={require('../images/UpgradeImage.png')}
                    style={styles.iconUser}
                />
        </View>

      <Text style={styles.title}>Compare Plans</Text>
      <Text style={styles.subTitle}>Here you can see a comparison of the different plans</Text>
  
     
        <View style={styles.firstIconContainer}>
            <View style={styles.firstIconContainerChild}>
              
            </View>
            <View style={styles.secondIconContainerChild}>
                <View style={styles.childContainerIcon1}>
                    <View style={styles.imageContainer}>
                        <Image
                              source={require('../images/Flag.png')}
                            style={styles.planIcon} 
                        />
                    </View>
                    <View>
                        <Text style={styles.iconTextNormal}>Normal</Text>
                    </View>
                </View>
                <View style={styles.childContainerIcon1}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../images/Diamond Premium.png')}
                            style={styles.planIcon} 
                        />
                    </View>
                    <View>
                        <Text style={styles.iconText}>Premium</Text>
                    </View>
                </View>
                
                
            </View>
        </View>

        <View style={styles.firstIconContainer2}>
            <View style={styles.textContainer}>
                <Text style={styles.compareText}>Unlimited app access</Text>
            </View>
            <View style={styles.secondIconContainerChild}>
                <View style={styles.childContainerIcon1}>
                    <View style={styles.imageContainer}>
                        <Image
                              source={require('../images/TickGray.png')}
                            style={styles.iconSize} 
                        />
                    </View>
     
                </View>
                <View style={styles.childContainerIcon1}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../images/TickAzul.png')}
                            style={styles.iconSize} 
                        />
                    </View>
              
                </View>
                
                
            </View>
        </View>
        <View style={styles.line}></View>
        <View style={styles.firstIconContainer2}>
            <View style={styles.textContainer}>
                <Text style={styles.compareText}>No advertisements</Text>
            </View>
            <View style={styles.secondIconContainerChild}>
                <View style={styles.childContainerIcon1}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../images/Cross.png')}
                            style={styles.iconSize} 
                        />
                    </View>
     
                </View>
                <View style={styles.childContainerIcon1}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../images/TickAzul.png')}
                            style={styles.iconSize} 
                        />
                    </View>
              
                </View>
                
                
            </View>
        </View>
        <View style={styles.line}></View>
        <View style={styles.firstIconContainer2}>
            <View style={styles.textContainer}>
                <Text style={styles.compareText}>Unlimited creation capacity</Text>
            </View>
            <View style={styles.secondIconContainerChild}>
                <View style={styles.childContainerIcon1}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../images/Cross.png')}
                            style={styles.iconSize} 
                        />
                    </View>
     
                </View>
                <View style={styles.childContainerIcon1}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../images/TickAzul.png')}
                            style={styles.iconSize} 
                        />
                    </View>
              
                </View>
                
                
            </View>
        </View>
        <View style={styles.line}></View>
        <View style={styles.firstIconContainer2}>
            <View style={styles.textContainer}>
                <Text style={styles.compareText}>Unlimited file storage</Text>
            </View>
            <View style={styles.secondIconContainerChild}>
                <View style={styles.childContainerIcon1}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../images/Cross.png')}
                            style={styles.iconSize} 
                        />
                    </View>
     
                </View>
                <View style={styles.childContainerIcon1}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../images/TickAzul.png')}
                            style={styles.iconSize} 
                        />
                    </View>
              
                </View>
                
                
            </View>
        </View>
        <View style={styles.line}></View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UpgradePlan0')}>
            <Text style={styles.buttonText}>BUY PREMIUM</Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: "10%",

  },
  button: {
    width: '60%',
    borderRadius: 10,
    marginBottom: '10%',
    backgroundColor: '#7465f7',
    padding: '2%',
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  buttonText: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
  },
  iconUser: {
    width: 40,
    height: 40,
  },
  container: {
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '5%',
    paddingBottom: '20%',
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
  PlanContainerMain:{
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    width: '70%',
    padding: '2%',
    paddingLeft: '5%',
  },
  upgradeText: {
    fontSize: 20,
    marginLeft: '5%',
  },
  // Back Button Style
  HeaderContainer: {
    marginTop:'5%',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignContent: 'center',
    marginBottom: '5%',
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
   // end Back Button Style
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#344340',
  },
  subTitle: {
    marginTop:0,
    margin: '8%',
    textAlign: "center",
    fontSize: 15,
    color: 'gray',
  },
  //dada
  firstIconContainer: {
    paddingRight: '5%',
    height: 120,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: "5%",

 
  },
  firstIconContainer2: {
    paddingRight: '5%',

    height: 40,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: "5%",
   

  },
  firstIconContainerChild: {
    width: '55%',
    height: '100%',
 
  },
  textContainer: {
    width: '55%',
    height: '100%',
  
    display: 'flex',
    justifyContent: 'center',

  },
  compareText: {
    fontSize: 15,
    color: 'gray',
    marginLeft: '10%'
  },
  secondIconContainerChild: {
  
    width: '50%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    
  },  
  planIcon: {
    width: 50,
    height: 50,
  },
  childContainerIcon1: {
    height: '100%',
    width: '45%',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconText: {
    color: '#7264f3',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18
  },
  iconTextNormal: {
    color: 'gray',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18
  },
  iconSize: {
    width: 20,
    height: 20,
  },
  line: {
    width: "90%",
    height: 0.4,
    marginBottom:'4%',
    backgroundColor: 'black'
  }
});
