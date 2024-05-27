import { StatusBar } from "expo-status-bar";
import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

import db from "@react-native-firebase/database";
import auth from "@react-native-firebase/auth";

 export default function Signin({ navigation }) {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const handleLogin = async () => {
    if (usernameOrEmail && password) {
      try {
        const response = await auth().signInWithEmailAndPassword(
          usernameOrEmail,
          password
        );

        if (response.user) {
          /*const snapshot = await db().ref(`/users/${response.user.uid}`).once("role");

          if (snapshot.exists()) {
            const userData = snapshot.val();
            const role = userData.role;
            if (role === "a Participant") {
              navigation.replace("HomeParticipant");
              return;
            }
            navigation.replace("Home");
          } else {
            navigation.replace("HomeParticipant");
          }*/
        navigation.replace("Home");

        }
      } catch (error) {
        console.log(error);
        navigation.replace("Home");
      }
      return;
    }
    showToast("Please, fill all the fields");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../images/ClassAdventureLogo.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Hello</Text>
      <Text style={styles.subTitle}>Sign in to your account!</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setUsernameOrEmail(text)}
        placeholder="Username or Email"
        placeholderTextColor="#888"
      />
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor="#888"
      />
      <Text>Forgot your password?</Text>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <LinearGradient
          colors={["#89BBE9", "#3E9CF3"]}
          style={styles.linearGradient}
        >
          <Text style={styles.buttonText}>SIGN IN</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.signupText}>Don't have an account?</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 80,
    fontWeight: "bold",
    color: "#344340",
  },
  subTitle: {
    fontSize: 20,
    color: "gray",
    paddingBottom: 40,
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
  button: {
    marginTop: 20,
    width: "40%",
    borderRadius: 30,
    marginBottom: "15%",
  },
  linearGradient: {
    padding: 10,
    alignItems: "center",
    borderRadius: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
