import { StatusBar } from "expo-status-bar";
import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import BackButton from "../components/BackButton";

export default function Home({ navigation }) {
  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let randomKey = "";
  let randomNumber;
  for (var i = 0; i < 6; i++) {
    randomNumber = Math.floor(Math.random() * 10);
    if (i == 3) {
      randomKey += " ";
      randomKey += numbers[randomNumber];
    } else {
      randomKey += numbers[randomNumber];
    }
  }

  return (
    <View style={styles.container}>
      <BackButton navigation={navigation} />
      <Image
        source={require("../images/ClassAdventureLogo.png")}
        style={styles.ClassAdventureLogo}
      />
      <Text style={styles.text}>Waiting for people...</Text>

      <View style={styles.textContainer}>
        <Text style={styles.title}>GYMKHANA PIN</Text>
        <Text style={styles.text}>
          Share this code with people to start palaying
        </Text>
        <Text style={styles.pin}>{randomKey}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <LinearGradient
          colors={["#89BBE9", "#3E9CF3"]}
          style={styles.linearGradient}
        >
          <Text style={styles.buttonText}>START</Text>
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
  image: {
    height: 50,
    width: 50,
  },
  ClassAdventureLogo: {
    height: 200,
    width: 200,
  },
  mapImage: {
    height: 100,
    width: 100,
  },
  button: {
    marginTop: "10%",
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
  text: {
    color: "#888",
    fontSize: 15,
    textAlign: "center",
  },
  title: {
    fontSize: 35,
    marginTop: "5%",
  },
  pin: {
    fontSize: 30,
    marginTop: "2%",
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
  },
});
