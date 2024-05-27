import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import BackButton from "../components/BackButton";


export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <BackButton navigation={navigation} />

      <View style={styles.viewOptions}>
        <Text style={styles.userProfileText}>Settings</Text>
      </View>
      <Image
        source={require("../images/iconUser.png")}
        style={styles.userIcon}
      />
      {/*ROLE*/}
      <Text style={styles.username}>Joan</Text>
      {/*ROLE*/}
      <Text style={styles.role}>Organizer</Text>
      <View style={styles.line}></View>

      <TouchableOpacity
        style={styles.configurationView}
        onPress={() => navigation.navigate("")}
      >
        <Image
          source={require("../images/EditProfileIcon.png")}
          style={styles.icon}
        />
        <Text style={styles.text}>Edit Profile</Text>
      </TouchableOpacity>

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

      <TouchableOpacity
        style={styles.configurationView}
        onPress={() => navigation.navigate("UpgradePlan")}
      >
        <Image
          source={require("../images/Diamond Premium.png")}
          style={styles.icon}
        />
        <Text style={styles.text}>Update Plan</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.configurationView}
        onPress={() => navigation.navigate("UpgradePlan")}
      >
        <Image
          source={require("../images/AppInformationIcon.png")}
          style={styles.icon}
        />
        <Text style={styles.text}>App Information</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.logoutView}
        onPress={() => navigation.navigate("")}
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
    paddingTop: "10%",
  },
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
    marginTop: "15%",
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
});
