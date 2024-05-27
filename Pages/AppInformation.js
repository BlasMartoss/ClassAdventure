import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import BackButton from "../components/BackButton";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <BackButton navigation={navigation} />
      <View style={styles.viewOptions}>
        <Text style={styles.userProfileText}>App Information</Text>
        <Image
          source={require("../images/AppInformationIcon.png")}
          style={styles.icon}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.userProfileText}>Updates</Text>
        <Image
          source={require("../images/AppInformationIcon.png")}
          style={styles.iconInfo}
        />
      </View>
      <View style={styles.line}></View>

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
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  userProfileText: {
    fontSize: 20,
    marginLeft: "5%",
  },
  icon: {
    height: 40,
    width: 40,
    marginRight: "5%",
  },
  iconInfo: {
    height: 40,
    width: 40,
    marginRight: "10%",
  },
  infoContainer: {
    marginTop: "10%",
    width: "100%",
    marginBottom: "2%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    paddingRight: "10%",
  },
  line: {
    width: "80%",
    marginTop: "1%",
    marginRight: "20%",
    marginLeft: "5%",
    height: 0.8,
    marginBottom: "4%",
    backgroundColor: "black",
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
});
