import { StatusBar } from 'expo-status-bar';
import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image, ScrollView  } from 'react-native';

export default function UpgradePlan({ navigation }) {
  return (
    <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
      <View style={styles.HeaderContainer}>
            <View style={styles.upgradeContainer} >
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.backText}>&lt;</Text>
                </TouchableOpacity>
            </View>
                 <Image
                    source={require('../images/UpgradeImage.png')}
                    style={styles.iconUser}
                />
        </View>

      <Text style={styles.title}>Upgrade Plan</Text>
      <Text style={styles.subTitle}>Choose a subscription plan to unlock all the funcionality of the application</Text>
        <TouchableOpacity style={styles.button}>
       
          <Text style={styles.buttonText}>View Comparison</Text>
    
      </TouchableOpacity>
      
      <Text style={styles.planModalityText}>Annual Plan (Save 20€)</Text>
      <View style={styles.ViewPlans}>
      <View style={styles.imageContainer}>
        <ImageBackground source={require('../images/Back.png')} style={styles.bacgkroundPlan}>
        
        <View style={styles.HeaderContainer}>
            <View style={styles.PlanContainerMain} >
                <Image
                    source={require('../images/PremiumIcon.png')}
                    style={styles.planIcon} 
                />
                <Text style={styles.planTitle}>Premium Plan</Text>
            </View>
            <Text style={styles.moneyText}>99,99€</Text>
        </View>
   

        <View style={styles.advantagesView}>
            <Text style={styles.advantagesViewText}>Unlimited app access</Text>
            <View style={styles.line}></View>
            <Text style={styles.advantagesViewText}>No advertisements</Text>
            <View style={styles.line}></View>
            <Text style={styles.advantagesViewText}>Unlimited creation capacity</Text>
            <View style={styles.line}></View>
            <Text style={styles.advantagesViewText}>Unlimited file storage</Text>
            <View style={styles.line}></View>
       
        </View>

        <View style={styles.buttonPlanDiv}>
            <TouchableOpacity style={styles.buttonPlan}>
                
                <Text style={styles.buttonTextPlan}>Compare</Text>
                
          
            </TouchableOpacity>
        </View>
           
        </ImageBackground>
      </View>
    </View>
    <Text style={styles.planModalityText}>Monthly Plan</Text>
    <View style={styles.ViewPlans}>
      <View style={styles.imageContainer}>
        <ImageBackground source={require('../images/Back2.png')} style={styles.bacgkroundPlan}>
        
        <View style={styles.HeaderContainer}>
            <View style={styles.PlanContainerMain} >
                <Image
                    source={require('../images/PremiumIcon.png')}
                    style={styles.planIcon} 
                />
                <Text style={styles.planTitle}>Premium Plan</Text>
            </View>
            <Text style={styles.moneyText}>9,99€</Text>
        </View>
        <View style={styles.advantagesView}>
            <Text style={styles.advantagesViewText}>Unlimited app access</Text>
            <View style={styles.line}></View>
            <Text style={styles.advantagesViewText}>No advertisements</Text>
            <View style={styles.line}></View>
            <Text style={styles.advantagesViewText}>Unlimited creation capacity</Text>
            <View style={styles.line}></View>
            <Text style={styles.advantagesViewText}>Unlimited file storage</Text>
            <View style={styles.line}></View>
       
        </View>

        <View style={styles.buttonPlanDiv}>
            <TouchableOpacity style={styles.buttonPlan}>
                
                <Text style={styles.buttonTextPlan}>Compare</Text>
                
          
            </TouchableOpacity>
        </View>
           
        </ImageBackground>
      </View>
    </View>

      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: "10%",

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
  iconUser: {
    width: 40,
    height: 40,
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
  planModalityText: {
    color: 'gray',
    fontSize: 20,
    marginBottom: "2%"
  },
  button: {
    width: '60%',
    borderRadius: 10,
    marginBottom: '10%',
    backgroundColor: 'white',
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
    color: '#888',
    fontSize: 16,
  },

  image: {
    width: 50,
    height: 50,
  },
  ViewPlans: {
    backgroundColor: 'red',
    width: '90%',
    borderRadius: 30,
    display: 'flex',
    height: '33%',
    alignItems: 'center',
    marginBottom: "5%",
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
    overflow: 'hidden', 
  
  },
  bacgkroundPlan: {
    height: '100%',
    width: '100%',
    
  },
  text: {
    color: 'white',
 
  },
  planIcon: {
    width: 50,
    height: 50,
  },
  moneyText: {
    fontSize: 18,
    marginLeft: '5%',
    color: 'white',
  },
  planTitle: {
    fontSize: 20,
    marginLeft: '5%',
    color: 'white',
  },
  buttonPlanDiv: {

    width: '100%',
    alignItems: 'center'
  },
  buttonPlan: {
    width: '90%',
    padding: '2%',
    borderWidth: 1,
    borderColor: 'white',
    margin: '2%',
    borderRadius: 5,
  },
  buttonTextPlan: {

    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
  },
  advantagesView: {
    paddingTop: 0,
    padding: '5%',

  },
  advantagesViewText: {
    fontSize: 15
    ,
    color: 'white'
  },
  line: {
    width: "100%",
    height: 0.4,
    marginBottom:'4%',
    marginTop: '2%',
    backgroundColor: 'white'
  }
});
