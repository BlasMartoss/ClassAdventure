import { StatusBar } from "expo-status-bar";
import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
  Image,
  Modal,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { useRoute } from "@react-navigation/native";

import auth from "@react-native-firebase/auth";
import db from "@react-native-firebase/database";

export default function SelectRole({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");

  const handlePress = (role) => {
    setSelectedRole(role);
    setModalVisible(true);
  };

  const route = useRoute();
  const { data } = route.params;

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const createProfile = async (response) => {
    db().ref(`/users/${response.user.uid}`).set({ username: data.username });
    db().ref(`/users/${response.user.uid}`).set({ role: selectedRole });
  };

  const handleConfirm = async (response) => {
    if (response === "yes") {
      const response_ = await auth().createUserWithEmailAndPassword(
        data.email,
        data.password
      );

      if (response_.user) {
        await createProfile(response_);
        if (selectedRole === "a Participant") {
          navigation.replace("HomeParticipant");
          return;
        }
        navigation.replace("Home");
      }
    }
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Role</Text>
      <Text style={styles.subTitle}>
        This will be the role in your new account.
      </Text>
      <View style={styles.imagesView}>
        <View style={styles.containerView}>
          <Image
            source={require("../images/Participant.png")}
            style={styles.image}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress("a Participant")}
          >
            <LinearGradient
              colors={["#89BBE9", "#3E9CF3"]}
              style={styles.linearGradient}
            >
              <Text style={styles.buttonText}>Participant</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.containerView}>
          <Image
            source={require("../images/Organizer.png")}
            style={styles.image}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress("an Organizer")}
          >
            <LinearGradient
              colors={["#89BBE9", "#3E9CF3"]}
              style={styles.linearGradient}
            >
              <Text style={styles.buttonText}>Organizer</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>
              Are you sure you want to be {selectedRole}?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => handleConfirm("yes")}
              >
                <Text style={styles.modalButtonText}>YES</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => handleConfirm("no")}
              >
                <Text style={styles.modalButtonText}>NO</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

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
  containerView: {
    display: "flex",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 150,
    margin: "10%",
    marginTop: "2%",
    marginBottom: "5%",
  },
  imagesView: {
    display: "flex",
    flexDirection: "row",
  },
  buttonView: {
    display: "flex",
    flexDirection: "row",
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
  button: {
    width: "80%",
    borderRadius: 30,
    marginBottom: "20%",
    margin: "2%",
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
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  modalButton: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: "#3E9CF3",
    borderRadius: 5,
    alignItems: "center",
  },
  modalButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
