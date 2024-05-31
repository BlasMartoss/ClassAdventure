import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useFocusEffect } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import UserDetails from "../components/UserDetails";
import auth from "@react-native-firebase/auth";

export default function ProfileSettingsParticipant({ navigation }) {

  const [profilePicture, setProfilePicture] = useState(UserDetails.pfp);

  useFocusEffect(
    React.useCallback(() => {
      // Fetch the latest profile picture URL from UserDetails
      setProfilePicture(UserDetails.pfp);
    }, [])
  );

  const handleLogout = async () => {
    await auth().signOut();
    UserDetails.clearUserDetails();
    navigation.replace("Signin");
  };

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
                onPress={() => navigation.navigate("ProfileParticipant")}
              >
                <Image
                  source={require("../images/leftArrow.png")}
                  style={styles.iconProfile}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.profileText}>Settings</Text>
            <TouchableOpacity
              style={styles.configurationImage}
              onPress={() => navigation.navigate("ProfileSettingsOrganizer")}
            >
              <Image
                source={require("../images/Settings.png")}
                style={styles.iconProfile}
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

      <TouchableOpacity
        style={styles.configurationView}
        onPress={() => navigation.navigate("EditProfile")}
      >
        <Image
          source={require("../images/EditProfileIcon.png")}
          style={styles.icon}
        />
        <Text style={styles.text}>Edit Profile</Text>
      </TouchableOpacity>
      <View style={styles.line}></View>
      <TouchableOpacity
        style={styles.configurationView}
        onPress={() => navigation.navigate("")}
      >
        <Image
          source={require("../images/ChangePasswordIcon.png")}
          style={styles.icon}
        />
        <Text style={styles.text}>Change Password</Text>
      </TouchableOpacity>
      <View style={styles.line}></View>

      <TouchableOpacity
        style={styles.configurationView}
        onPress={() => navigation.navigate("AppInformation")}
      >
        <Image
          source={require("../images/AppInformationIcon.png")}
          style={styles.icon}
        />
        <Text style={styles.text}>App Information</Text>
      </TouchableOpacity>
      <View style={styles.line}></View>
      <TouchableOpacity
        style={styles.logoutView}
        onPress={handleLogout}
      >
        <Image
          source={require("../images/LogoutIcon.png")}
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
    marginBottom: "5%",
  },
  iconProfile: {
    height: 30,
    width: 30,
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
  // end back button
  viewOptions: {
    width: "100%",
    marginBottom: "5%",
  },

  userProfileText: {
    fontSize: 20,
    marginLeft: "5%",
  },
  userIcon: {
    height: 150,
    width: 150,
  },
  role: {
    color: "#888",
    fontSize: 18,
    textAlign: "center",
  },
  username: {
    color: "black",
    fontSize: 30,
    textAlign: "center",
  },
  line: {
    width: "90%",
    marginTop: "5%",
    height: 0.8,
    marginBottom: "4%",
    backgroundColor: "black",
  },
  configurationView: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "10%",
    marginTop: "4%",
  },
  logoutView: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "10%",
    marginTop: "20%",
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
    color: "#888",
    fontSize: 18,
    textAlign: "center",
    marginLeft: "5%",
  },
  line: {
    width: "90%",
    height: 0.4,
    backgroundColor: "black",
    marginBottom: "5%",
    marginTop: "2%",
  },
});
