import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function GymkhanaMain({ navigation }) {
    // useState hook to manage the current number state
    const [number, setNumber] = useState(1);
    const [numberPlayers, setNumberPlayers] = useState(1);
    const [numberPlayersPerGroup, setNumberPlayersPerGroup] = useState(1);
    const [numberGroups, setNumberofGroups] = useState(1);

    const incrementPlayersPerGroup = () => {
        if (numberPlayersPerGroup < 3) {
            setNumberPlayersPerGroup(numberPlayersPerGroup + 1);
        }
    };

    // Function to handle decrement, ensuring the min is 0
    const decrementPlayersPerGroup = () => {
        if (numberPlayersPerGroup > 1) {
            setNumberPlayersPerGroup(numberPlayersPerGroup - 1);
        }
    };
    // Function to handle increment, ensuring the max is 4
    const incrementGroups = () => {
        if (numberGroups < 4) {
            setNumberofGroups(numberGroups + 1);
        }
    };

    // Function to handle decrement, ensuring the min is 0
    const decrementGroups = () => {
        if (numberGroups > 1) {
            setNumberofGroups(numberGroups - 1);
        }
    };
    // Function to handle increment, ensuring the max is 4
    const incrementPlayers = () => {
        if (numberPlayers < 12) {
            setNumberPlayers(numberPlayers + 1);
        }
    };

    // Function to handle decrement, ensuring the min is 0
    const decrementPlayers = () => {
        if (numberPlayers > 1) {
            setNumberPlayers(numberPlayers - 1);
        }
    };

    // Function to handle increment, ensuring the max is 4
    const increment = () => {
        if (number < 4) {
            setNumber(number + 1);
        }
    };

    // Function to handle decrement, ensuring the min is 0
    const decrement = () => {
        if (number > 1) {
            setNumber(number - 1);
        }
    };
    const [individualColor, setIndividualColor] = useState('#CDE5FC');
    const [groupColor, setGroupColor] = useState('#499EF4');
    const [individualTextColor, setIndividualTextColor] = useState('#888');
    const [groupTextColor, setGroupTextColor] = useState('white');
    const [group, setGroup] = useState(true);

    const swapColors = (group) => {
        setGroup(group);
        if (group) {
            setGroupColor('#499EF4');
            setGroupTextColor('white');
            setIndividualColor('#CDE5FC');
            setIndividualTextColor('#888');
            return;
        }
        setGroupColor('#CDE5FC');
        setGroupTextColor('#888');
        setIndividualColor('#499EF4');
        setIndividualTextColor('white');
    };
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <View style={styles.HeaderContainer}>
                    <View style={styles.upgradeContainer} >
                        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
                            <Text style={styles.backText}>&lt;</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={styles.infoView}>
                    <View style={styles.titleView}>
                        <Image
                            source={require('../images/Lightbulb.png')}
                            style={styles.image}
                        />
                        <Text style={styles.title}>Creating...</Text>
                    </View>

                    <Text style={styles.subTitle}>These are the main characteristics of the gymkhana</Text>
                </View>

                <View style={styles.inputView}>
                    <Text style={styles.titleInput}>Gymkhana Name</Text>
                    <TextInput style={styles.textInput} placeholder='Name' placeholderTextColor='#888' />
                </View>

                <View style={styles.inputView}>
                    <Text style={styles.titleInput}>Main Description</Text>
                    <TextInput style={styles.textInputDescription} placeholder='Description...' placeholderTextColor='#888' multiline={true}
                        numberOfLines={4} />
                </View>
                <View style={styles.inputView}>
                    <View style={styles.numberTests}>
                        <Text style={styles.titleInput}>Number of Tests</Text>
                        <TouchableOpacity style={styles.upgradePlan} onPress={() => navigation.navigate('UpgradePlan')}>
                            <Text style={styles.upgradeText}>Upgrade Plan </Text>
                            <Image
                                source={require('../images/Diamond Premium.png')}
                                style={styles.image}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.container2}>
                    {/* Decrement button */}
                    <TouchableOpacity onPress={decrement} style={styles.button}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>

                    {/* Display the current number */}
                    <Text style={styles.number}>{number}</Text>

                    {/* Increment button */}
                    <TouchableOpacity onPress={increment} style={styles.button}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View >


                <View style={styles.buttonsView}>
                    <TouchableOpacity onPress={() => swapColors(false)} style={[styles.button1, { backgroundColor: individualColor }]}>
                        <Text style={[styles.buttonTextIndividual, { color: individualTextColor }]}>Individual</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => swapColors(true)} style={[styles.button2, { backgroundColor: groupColor }]}>
                        <Text style={[styles.buttonTextGroup, { color: groupTextColor }]}>Groups</Text>
                    </TouchableOpacity>
                </View>

                {/* Number of Groups */}
                {group && <Text style={[styles.titleInput]}>Number of Groups </Text>}
                {group && <View style={styles.container3}>

                    {/* Decrement button */}
                    <TouchableOpacity onPress={decrementGroups} style={styles.button_2}>
                        <Text style={styles.buttonText2}>-</Text>
                    </TouchableOpacity>

                    {/* Display the current number */}
                    <Text style={styles.number1}>{numberGroups}</Text>

                    {/* Increment button */}
                    <TouchableOpacity onPress={incrementGroups} style={styles.button_2}>
                        <Text style={styles.buttonText2}>+</Text>
                    </TouchableOpacity>
                </View >}

                {/* Number of PLAYERS PER GROUP */}
                {group && <Text style={[styles.titleInput]}>Number of Players per Group </Text>}
                {group && <View style={styles.container3}>

                    {/* Decrement button */}
                    <TouchableOpacity onPress={decrementPlayersPerGroup} style={styles.button_2}>
                        <Text style={styles.buttonText2}>-</Text>
                    </TouchableOpacity>

                    {/* Display the current number */}
                    <Text style={styles.number1}>{numberPlayersPerGroup}</Text>

                    {/* Increment button */}
                    <TouchableOpacity onPress={incrementPlayersPerGroup} style={styles.button_2}>
                        <Text style={styles.buttonText2}>+</Text>
                    </TouchableOpacity>
                </View >}


                {/* Number of People (INDIVIDUAL) */}
                {!group && <Text style={[styles.titleInput]}>Number of Players </Text>}
                {!group && <View style={styles.container3}>

                    {/* Decrement button */}
                    <TouchableOpacity onPress={decrementPlayers} style={styles.button_2}>
                        <Text style={styles.buttonText2}>-</Text>
                    </TouchableOpacity>

                    {/* Display the current number */}
                    <Text style={styles.number1}>{numberPlayers}</Text>

                    {/* Increment button */}
                    <TouchableOpacity onPress={incrementPlayers} style={styles.button_2}>
                        <Text style={styles.buttonText2}>+</Text>
                    </TouchableOpacity>
                </View >}

                <TouchableOpacity style={styles.buttonContinue} onPress={() => navigation.navigate('GymkhanaMain')}>
                    <LinearGradient colors={['#89BBE9', '#3E9CF3']} style={styles.linearGradient}>
                        <Text style={styles.buttonTextContinue}>CONTINUE</Text>
                    </LinearGradient>
                </TouchableOpacity>




                <StatusBar style="auto" />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container3: {
        display: 'flex',
        flexDirection: 'row',
        width: '80%',
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 20,
        marginBottom: '5%'
    },
    number1: {
        marginHorizontal: 20,
        fontSize: 18,
    },
    button_2: {
        borderRadius: 5,
    },
    buttonText2: {
        color: 'black',
        fontSize: 30,
    },
    buttonsView: {
        paddingTop: '5%',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '5%'
    },
    buttonTextGroup: {
        fontSize: 15,
        color: 'white',
        textAlign: 'center',
    },
    button1: {
        width: '30%',
        padding: '5%',
        backgroundColor: '#C6CACE',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,

    },
    buttonTextIndividual: {
        fontSize: 15,
        textAlign: 'center',
    },
    button2: {
        width: '30%',
        padding: '5%',
        backgroundColor: 'gray',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,

    },
    container2: {
        display: 'flex',
        flexDirection: 'row',
        width: '80%',
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 20,
        marginBottom: '5%'
    },
    number: {
        marginHorizontal: 20,
        fontSize: 18,
    },
    button: {
        borderRadius: 5,
    },
    buttonText: {
        color: 'black',
        fontSize: 30,
    },
    image: {
        width: 40,
        height: 40,
    },
    upgradePlan: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: '5%'
    },
    container: {
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '5%',
        paddingBottom: '5%',
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
    PlanContainerMain: {
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center',
        alignItems: 'center',
        width: '70%',
        padding: '2%',
        paddingLeft: '5%',
    },
    // Back Button Style
    HeaderContainer: {
        marginTop: '5%',
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
    // end back button
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#344340',
        paddingLeft: '2%',
    },
    subTitle: {
        marginTop: 0,
        fontSize: 15,
        color: 'gray',
        paddingLeft: '15%',
    },
    infoView: {
        paddingRight: '5%',
    },
    titleView: {
        display: 'flex',
        flexDirection: 'row',
    },
    numberTests: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        textAlign: 'center',
        alignItems: 'center'
    },
    upgradeText: {
        fontSize: 12,
        marginLeft: '10%'

    },
    textInput: {
        borderColor: 'gray',
        width: '90%',
        height: 40,
        paddingStart: 20,
        borderRadius: 10,
        borderWidth: 1,

    },
    textInputDescription: {
        borderColor: 'gray',
        width: '90%',
        height: 100,
        paddingStart: 20,
        borderRadius: 10,
        borderWidth: 1,
        paddingRight: '5%',
        paddingTop: '5%',
        paddingBottom: '5%'
    },
    inputView: {
        width: '100%',
        paddingTop: '5%',
        alignContent: 'center',
        paddingLeft: '10%',
    },
    titleInput: {
        paddingBottom: '2%',
        fontSize: 18,
        marginLeft: '2%'
    },
    buttonContinue: {  
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: '10%',
        padding: '2%',
        width: '90%',
      
    },

    buttonTextContinue: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
    },
    linearGradient: {
        width: '70%',
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
    },

});
