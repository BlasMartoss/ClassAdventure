import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ToastAndroid,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRoute } from "@react-navigation/native";
import UserDetails from "../components/UserDetails";
import firestore from "@react-native-firebase/firestore";
import { CameraView, Camera } from "expo-camera";

export default function GymkhanaHUBindividual({ navigation }) {
  const route = useRoute();
  const { tasks } = route.params;

  const [title, setTitle] = useState("");
  const [clues, setClues] = useState("");
  const [secretKEY, setsecretKEY] = useState("");
  const [userSecretKEY, setUserSecretKEY] = useState("");
  const [currentTest, setCurrentTest] = useState(0);
  const [currentTask, setCurrentTask] = useState(0);
  const [images, setImages] = useState([]);

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scanQR, setScanQR] = useState(false);
  const [correctQR, setCorrectQR] = useState(false);

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const handleCompleteTask = () => {
    if (currentTask.QR) {
      if (scanned && correctQR) {
        setScanQR(false);
        setScanned(false);
        setCorrectQR(false);
        setCurrentTest(currentTest + 1);
      }
    } else {
      if (userSecretKEY === secretKEY) {
        setUserSecretKEY("");
        setCurrentTest(currentTest + 1);
      }
    }
  };

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    if (data.trim() === secretKEY.trim()) {
      setCorrectQR(true);
    } else {
      showToast("That's not the right QR code");
    }
  };

  const handleScanQR = () => {
    setScanned(false);
    setScanQR(true);
  };

  const addWin = async () => {
    const userRef = firestore().collection("users").doc(UserDetails.uid);
    await userRef
      .update({ wins: firestore.FieldValue.increment(1) })
      .then(UserDetails.wins++);
  };

  useEffect(() => {
    if (currentTest === tasks.length) {
      addWin();
      navigation.navigate("GymkhanaCompletedUsers");
      return;
    }
    setTitle(tasks[currentTest].title);
    setClues(tasks[currentTest].description);
    setsecretKEY(tasks[currentTest].secretKey);
    setImages(tasks[currentTest].images);
    setCurrentTask(tasks[currentTest]);
  }, [currentTest]);

  return (
    <View style={styles.container}>
      <Text style={styles.gymkhanaName}>{title}</Text>
      <Text style={styles.description}>{clues}</Text>
      <View style={styles.imageContainer}>
        {images[0] && (
          <Image source={{ uri: images[0] }} style={styles.images} />
        )}
        {images[1] && (
          <Image source={{ uri: images[1] }} style={styles.images} />
        )}
      </View>

      {currentTask.QR && <Text style={styles.scan}>SCAN QR</Text>}
      {currentTask.QR && (
        <TouchableOpacity onPress={handleScanQR}>
          <Image
            source={
              scanned && correctQR
                ? require("../images/GreenCheckMark.png")
                : require("../images/SCANQR.png")
            }
            style={styles.qrimage}
          />
        </TouchableOpacity>
      )}

      {!currentTask.QR && <Text style={styles.scan}>INTRODUCE THE KEY</Text>}
      {!currentTask.QR && (
        <TextInput
          style={styles.textInput}
          placeholder="Secret Key"
          placeholderTextColor="#888"
          value={userSecretKEY}
          onChangeText={(text) => setUserSecretKEY(text)}
        />
      )}
      <TouchableOpacity style={styles.button} onPress={handleCompleteTask}>
        <LinearGradient
          colors={["#89BBE9", "#3E9CF3"]}
          style={styles.linearGradient}
        >
          <Text style={styles.buttonText}>COMPLETE TASK</Text>
        </LinearGradient>
      </TouchableOpacity>
      <StatusBar style="auto" />

      {!scanned && scanQR && currentTask.QR && (
        <CameraView
          onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
          barcodeScannerSettings={{
            barcodeTypes: ["qr", "pdf417"],
          }}
          style={StyleSheet.absoluteFillObject}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "20%",
    paddingBottom: "15%",
  },
  gymkhanaName: {
    fontSize: 30,
    marginBottom: "10%",
  },
  description: {
    marginRight: "10%",
    marginLeft: "10%",
    fontSize: 14,
    textAlign: "justify",
    marginBottom: "5%",
  },
  imageContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  images: {
    margin: "2%",
    height: 150,
    width: 150,
  },
  scan: {
    fontSize: 20,
    marginTop: "10%",
    marginBottom: "5%",
  },
  qrimage: {
    height: 80,
    width: 80,
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
    fontSize: 18,
  },
  container: {
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "20%",
    paddingBottom: "15%",
  },
  gymkhanaName: {
    fontSize: 30,
    marginBottom: "10%",
  },
  description: {
    marginRight: "10%",
    marginLeft: "10%",
    fontSize: 14,
    textAlign: "justify",
    marginBottom: "5%",
  },
  imageContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  images: {
    margin: "2%",
    height: 150,
    width: 150,
  },
  scan: {
    fontSize: 20,
    marginTop: "10%",
    marginBottom: "5%",
  },
  qrimage: {
    height: 80,
    width: 80,
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
    fontSize: 18,
  },
  textInput: {
    borderColor: "gray",
    padding: 5,
    paddingStart: 20,
    width: "80%",
    height: 40,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
});
