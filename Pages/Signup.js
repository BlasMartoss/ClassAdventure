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
  Switch,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import PasswordInput from "../components/PasswordInput";

import firestore from '@react-native-firebase/firestore';

export default function Signup({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");


  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const handleRegister = async () => {
    
    const passwordPolicyCheck = (password) => {
      const minPasswordLength = 6;
      const maxPasswordLength = 4096;
      const hasLowercase = /[a-z]/.test(password);
      const hasUppercase = /[A-Z]/.test(password);
      const hasNumeric = /\d/.test(password);
      const hasNonAlphanumeric = /[^a-zA-Z0-9]/.test(password);
      const isCorrectLength =
        password.length >= minPasswordLength &&
        password.length <= maxPasswordLength;

      if (!isCorrectLength) {
        showToast(
          `Password must be between ${minPasswordLength} and ${maxPasswordLength} characters long`
        );
        return false;
      }
      if (!hasLowercase) {
        showToast("Password must contain at least one lowercase letter");
        return false;
      }
      if (!hasUppercase) {
        showToast("Password must contain at least one uppercase letter");
        return false;
      }
      if (!hasNumeric) {
        showToast("Password must contain at least one numeric character");
        return false;
      }
      if (!hasNonAlphanumeric) {
        showToast(
          "Password must contain at least one non-alphanumeric character"
        );
        return false;
      }
      return true;
    };

    if (password !== repeatedPassword) {
      showToast("Passwords do not match");
      return;
    }

    if (!username || !email || !password) {
      showToast("Please, fill all the fields");
      return;
    }

    if (!passwordPolicyCheck(password)) {
      return;
    }

    if (!isEnabled){
      showToast("Please accept the Terms and Conditions to continue");
      return;
    }

    //Check if email or username already exists

    const [emailQuerySnapshot, usernameQuerySnapshot] = await Promise.all([
      firestore().collection('users').where('email', '==', email).get(),
      firestore().collection('users').where('username', '==', username).get()
    ]);

    if (!emailQuerySnapshot.empty) {
      showToast("The email address is already in use");
      return;
    }

    if (!usernameQuerySnapshot.empty) {
      showToast("The username is already in use");
      return;
    }

    navigation.navigate("SelectRole", { data: { username, email, password } });
  };

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <Image
        source={require("../images/ClassAdventureLogo.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subTitle}>Create your account!</Text>

      <TextInput
        style={styles.textInput}
        placeholder="Name"
        placeholderTextColor="#888"
        onChangeText={(text) => setUsername(text.trim())}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Email Address"
        placeholderTextColor="#888"
        onChangeText={(text) => setEmail(text.trim())}
      />
      <PasswordInput
        placeholder="Password"
        onChangeText={(text) => setPassword(text.trim())}
        space={true}
      />
      <PasswordInput
        placeholder="Confirm Password"
        onChangeText={(text) => setRepeatedPassword(text.trim())}
        space={false}
      />
      

      <View style={styles.switchContainer}>
        <Text
          style={styles.label}
          onPress={() => Alert.alert("Terms and Conditions")}
        >
          Accept Terms and Conditions
        </Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#0F7BEE" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <LinearGradient
          colors={["#89BBE9", "#3E9CF3"]}
          style={styles.linearGradient}
        >
          <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
        <Text style={styles.signupText}>Already have an account?</Text>
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
    fontSize: 50,
    fontWeight: "bold",
    color: "#344340",
  },
  subTitle: {
    fontSize: 15,
    color: "gray",
    paddingBottom: "5%",
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
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    width: "60%",
    borderRadius: 30,
    marginBottom: "10%",
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
