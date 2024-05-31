import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import UserDetails from "../components/UserDetails";
import firestore from "@react-native-firebase/firestore";

export default function HomeParticipant({ navigation }) {
  const [profilePicture, setProfilePicture] = useState(UserDetails.pfp);
  const [PIN, setPIN] = useState("");

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const handleJoin = async () => {
    if (PIN.length !== 6) {
      showToast("Please enter a valid PIN");
      return;
    }
    // Split the PIN into two halves
    const firstHalf = PIN.slice(0, 3);
    const secondHalf = PIN.slice(3);

    const gymkhanaSnapshot = await firestore()
      .collection("gymkhanas")
      .where("pin", "==", firstHalf + " " + secondHalf)
      .get();

    if (!gymkhanaSnapshot.empty) {
      const gymkhanaData = gymkhanaSnapshot.docs[0].data();
      const { started, numberPlayers, users } = gymkhanaData;

      if (started || (users && users.length >= numberPlayers)) {
        showToast(
          "Sorry, this gymkhana has already started or reached maximum users."
        );
        return;
      }

      navigation.navigate(
        gymkhanaData.isGroup ? "GymkhanaHUBteam" : "GymkhanaHUBindividual",
        {
          gymkhanaId: gymkhanaSnapshot.docs[0].id,
          gymkhanaTitle: gymkhanaData.title,
        }
      );
    } else {
      showToast("Please enter a valid PIN");
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      // Fetch the latest profile picture URL from UserDetails
      setProfilePicture(UserDetails.pfp);
    }, [])
  );
  return (
    <View style={styles.container}>
      <View style={styles.HeaderContainer}>
        <View style={styles.upgradeContainer}></View>
        <TouchableOpacity
          onPress={() => navigation.navigate("ProfileParticipant")}
        >
          <Image
            source={
              profilePicture
                ? { uri: profilePicture }
                : require("../images/ProfilePictureIcon.png")
            }
            style={styles.image}
          />
        </TouchableOpacity>
      </View>

      <Image
        source={require("../images/ClassAdventureLogo.png")}
        style={styles.ClassAdventureImage}
      />

      <TextInput
        style={styles.textInput}
        placeholder="Gymkhana PIN"
        placeholderTextColor="#888"
        value={PIN}
        keyboardType="numeric"
        maxLength={6}
        onChangeText={(text) => setPIN(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleJoin}>
        <LinearGradient
          colors={["#89BBE9", "#3E9CF3"]}
          style={styles.linearGradient}
        >
          <Text style={styles.buttonText}>ENTER</Text>
        </LinearGradient>
      </TouchableOpacity>
      <View style={styles.starContainer}>
        <Image
          source={require("../images/UpgradeImage.png")}
          style={styles.starImage}
        />

        <Text style={styles.text}>
          Each Gymkhana you win you will recive one star
        </Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
  },
  upgradeContainer: {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center",
    width: "80%",
    padding: "2%",
    paddingLeft: "5%",
  },
  upgradeText: {
    fontSize: 20,
    marginLeft: "5%",
  },
  HeaderContainer: {
    marginTop: "12%",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignContent: "center",
    marginBottom: "5%",
  },
  image: {
    height: 50,
    width: 50,
    resizeMode: "cover",
    borderRadius: 100,
  },
  ClassAdventureImage: {
    height: 300,
    width: 300,
    marginBottom: "6%",
  },
  line: {
    backgroundColor: "#3E9CF3",
    height: "0.5%",
    width: "100%",
    marginBottom: "30%",
  },

  starContainer: {
    display: "flex",
    width: "60%",
    alignItems: "center",
  },
  starImage: {
    height: 50,
    width: 50,
  },
  button: {
    marginTop: 20,
    width: "80%",
    borderRadius: 5,
    marginBottom: "15%",
  },
  linearGradient: {
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
  text: {
    color: "#888",
    fontSize: 15,
    textAlign: "center",
    width: "100%",
  },
  textInput: {
    borderColor: "gray",
    padding: 5,
    fontSize: 25,
    textAlign: "center",
    width: "80%",
    height: 50,
    margin: 10,
    marginBottom: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
});
