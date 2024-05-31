import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import UserDetails from "../components/UserDetails";

export default function ProfileParticipant({ navigation }) {
  const [profilePicture, setProfilePicture] = useState(UserDetails.pfp);
  const [wins, setWins] = useState(UserDetails.pfp);

  useFocusEffect(
    React.useCallback(() => {
      // Fetch the latest profile picture URL from UserDetails
      setProfilePicture(UserDetails.pfp);
      setWins(UserDetails.wins);
    }, [])
  );
  return (
    <View style={styles.container}>
      <View style={styles.HeaderContainer}>
        <ImageBackground
          source={require("../images/BackgroundImage.png")}
          style={styles.backgroundImage}
          imageStyle={styles.imageBorderRadius}
        >
          <View style={styles.headerView}>
            <View style={styles.ButtonView}>
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.navigate("HomeParticipant")}
              >
                <Image
                  source={require("../images/leftArrow.png")}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.profileText}>Profile</Text>
            <TouchableOpacity
              style={styles.configurationImage}
              onPress={() => navigation.navigate("ProfileSettingsParticipant")}
            >
              <Image
                source={require("../images/Settings.png")}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.pictureView}>
            <Image
              source={
                profilePicture
                  ? { uri: profilePicture }
                  : require("../images/iconUser.png")
              }
              style={styles.profilePicture}
            />
            <Text style={styles.userText}>{UserDetails.username}</Text>
            <Text style={styles.roleText}>Participant</Text>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.emailView}>
        <Image
          source={require("../images/emailIcon.png")}
          style={styles.emailIcon}
        />
        <Text style={styles.emailText}>Email</Text>
      </View>
      <View style={styles.emailView2}>
        <Text style={styles.email}>{UserDetails.email}</Text>
      </View>
      <View style={styles.line}></View>
      <View style={styles.emailView}>
        <Image
          source={require("../images/roleIcon.png")}
          style={styles.emailIcon}
        />
        <Text style={styles.emailText}>Role</Text>
      </View>
      <View style={styles.emailView2}>
        <Text style={styles.email}>Participant</Text>
      </View>
      <View style={styles.line}></View>
      <Image
        source={require("../images/UpgradeImage.png")}
        style={styles.iconGame}
      />

      <Text style={styles.messageText}>{UserDetails.wins}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("HomeParticipant")}
      >
        <LinearGradient
          colors={["#89BBE9", "#3E9CF3"]}
          style={styles.linearGradient}
        >
          <Text style={styles.buttonText}>Play</Text>
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
  },
  HeaderContainer: {
    alignItems: "center",
    display: "flex",
    width: "100%",
    height: 300,
    overflow: "hidden",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  backgroundImage: {
    height: "100%",
    width: "100%",
  },
  imageBorderRadius: {
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  headerView: {
    paddingTop: "15%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: "5%",
    paddingLeft: "5%",
  },
  icon: {
    height: 30,
    width: 30,
  },
  profileText: {
    fontSize: 20,
    color: "white",
  },
  ButtonView: {
    height: 35,
    width: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  profilePicture: {
    height: 120,
    width: 120,
    resizeMode: "cover",
    borderRadius: 100,
  },
  pictureView: {
    width: "100%",
    alignItems: "center",
    paddingTop: "4%",
  },
  userText: {
    fontSize: 22,
    color: "white",
    marginTop: "1%",
  },
  roleText: {
    fontSize: 14,

    color: "white",
  },
  emailText: {
    fontSize: 18,
    color: "#888",
    marginLeft: "4%",
  },
  emailIcon: {
    height: 40,
    width: 40,
    marginLeft: "5%",
  },
  emailView: {
    marginTop: "5%",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignContent: "center",
    alignItems: "center",
    marginBottom: "2%",
  },
  line: {
    width: "90%",
    height: 0.4,
    marginBottom: "4%",
    backgroundColor: "black",
    marginBottom: "5%",
  },
  email: {
    fontSize: 18,
    color: "#888",
  },
  emailView2: {
    width: "100%",
    paddingLeft: "5%",
    marginBottom: "5%",
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
  iconGame: {
    height: 60,
    width: 60,
    marginTop: "2%",
  },
  messageText: {
    marginLeft: "5%",
    marginRight: "5%",
    textAlign: "center",
    fontSize: 18,
  },
});
