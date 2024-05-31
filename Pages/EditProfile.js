import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import storage from "@react-native-firebase/storage";
import firestore from "@react-native-firebase/firestore";
import { launchImageLibrary } from "react-native-image-picker";
import UserDetails from "../components/UserDetails";

export default function EditProfile({ navigation }) {
  const [profilePicture, setProfilePicture] = useState(UserDetails.pfp);

  const handleChooseImage = async () => {
    const options = {
      title: "Select Profile Picture",
      storageOptions: {
        mediaType: "photo",
        skipBackup: true,
      },
    };

    launchImageLibrary(options, async (response) => {
      if (!response.error && !response.didCancel) {
        // Upload the selected image to Firebase Storage
        const uri = response.uri || response.assets?.[0]?.uri;
        const filename = UserDetails.uid;

        const storageRef = storage().ref(`profilePictures/${filename}`);
        const task = storageRef.putFile(uri);

        try {
          await task;
          const url = await task.snapshot.ref.getDownloadURL();
          UserDetails.pfp = url;

          const userRef = firestore().collection("users").doc(UserDetails.uid);
          await userRef.update({ pfp: url });

          // Update the state to trigger re-render
          setProfilePicture(url);
          console.log("Image uploaded successfully!");
        } catch (error) {
          console.error("Error uploading image: ", error);
        }
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.HeaderContainer}>
        <View style={styles.upgradeContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backText}>&lt;</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.viewOptions}>
        <Text style={styles.userProfileText}>Edit Profile</Text>
        <TouchableOpacity style={styles.configurationImage}>
          <Image
            source={require("../images/EditProfileIcon.png")}
            style={styles.configurationImage}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleChooseImage}>
        <Image
          source={
            UserDetails.pfp
              ? { uri: profilePicture }
              : require("../images/ProfilePictureIcon.png")
          }
          style={styles.userIcon}
        />
      </TouchableOpacity>
      <Text style={styles.text}>Tap to change</Text>

      <TextInput
        style={styles.textInput}
        placeholder="Change Username"
        placeholderTextColor="#888"
      />
      <TextInput
        style={styles.textInput}
        placeholder="Change Email"
        placeholderTextColor="#888"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("HomeParticipant")}
      >
        <LinearGradient
          colors={["#89BBE9", "#3E9CF3"]}
          style={styles.linearGradient}
        >
          <Text style={styles.buttonText}>SAVE</Text>
        </LinearGradient>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "10%",
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
  // Back Button Style
  HeaderContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignContent: "center",
  },
  backText: {
    fontSize: 18,
    padding: "2%",
    paddingRight: "5%",
    paddingLeft: "5%",
  },
  backButton: {
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  // end back button
  viewOptions: {
    paddingRight: "10%",
    paddingLeft: "5%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    marginBottom: "5%",
  },
  configurationImage: {
    height: 40,
    width: 40,
    marginLeft: "15%",
  },
  userProfileText: {
    fontSize: 20,
    marginRight: "15%",
  },
  userIcon: {
    height: 200,
    width: 200,
    resizeMode: "cover",
    borderRadius: 100,
  },
  button: {
    marginTop: 20,
    width: "50%",
    borderRadius: 5,
    marginBottom: "5%",
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
  textInput: {
    borderColor: "gray",
    padding: 5,
    paddingStart: 20,
    width: "80%",
    height: 40,
    margin: 10,
    borderRadius: 30,
    backgroundColor: "#fff",
  },
  text: {
    marginTop: "2%",
    color: "#888",
    marginBottom: "15%",
  },
});
