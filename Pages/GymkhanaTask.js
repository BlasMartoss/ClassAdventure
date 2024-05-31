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
import BackButton from "../components/BackButton";
import UserDetails from "../components/UserDetails";
import firestore from "@react-native-firebase/firestore";
import { launchImageLibrary } from "react-native-image-picker";
import storage from "@react-native-firebase/storage";

export default function GymkhanaTask({ navigation }) {
  const [tasks, setTasks] = useState([]);

  const [taskTitle, setTitle] = useState("");
  const [taskDescription, setDescription] = useState("");
  const [taskImages, setImages] = useState([]);
  const [taskSecreyKEY, setSecretKEY] = useState("");
  const [isQR, setisQR] = useState(true);
  const [QRColor, setQRColor] = useState("#499EF4");
  const [QRTextColor, setQRTextColor] = useState("white");
  const [secretColor, setSecretColor] = useState("#CDE5FC");
  const [secretTextColor, setSecretTextColor] = useState("#888");

  const route = useRoute();
  const { data } = route.params;

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const addImage = () => {
    if (taskImages.length === 2) {
      showToast("You can only add 2 images without premium");
      return;
    }
    const options = {
      title: "Select Picture",
      storageOptions: {
        mediaType: "photo",
        skipBackup: true,
      },
    };

    launchImageLibrary(options, (response) => {
      if (!response.error && !response.didCancel) {
        const newPic = response.uri || response.assets?.[0]?.uri;
        setImages([...taskImages, newPic]);
      }
    });
  };

  const deleteImage = (index) => {
    setImages((prevImages) => {
      return prevImages.filter((_, i) => i !== index);
    });
  };

  const uploadGymkhanaData = async () => {
    // Generate a random string
    const randomString = generateRandomString(20);

    // Create a reference to the document
    const gymkhanaRef = firestore()
      .collection("gymkhanas")
      .doc(`${randomString}${UserDetails.uid}`);

    const groups = {
      group1: { users: [], currentTest: 0 },
      group2: { users: [], currentTest: 0 },
      group3: { users: [], currentTest: 0 },
      group4: { users: [], currentTest: 0 },
    };

    // Construct the gymkhana data object based on whether it's a group or not
    const gymkhanaData = {
      title: data.title,
      owner: UserDetails.uid,
      description: data.description,
      isGroup: data.isGroup,
      numTasks: data.numTasks,
      tasks: tasks,
      ...(data.isGroup && {
        numberPlayersPerGroup: data.numberPlayersPerGroup,
        numberGroups: data.numberGroups,
        groups: groups,
      }),
      ...(data.isGroup === false && { numberPlayers: data.numberPlayers }),
    };

    // Upload images to storage and update corresponding task images URLs
    const uploadTasksImagesPromises = tasks.map(async (task, index) => {
      const taskImagesURLs = [];
      for (const [index_, uri] of task.images.entries()) {
        const imageRef = storage().ref(
          `/gymkhanas/${UserDetails.uid}/${randomString + UserDetails.uid}_${
            index_ + 1
          }`
        );
        await imageRef.putFile(uri);
        const imageURL = await imageRef.getDownloadURL();
        taskImagesURLs.push(imageURL);
      }
      gymkhanaData.tasks[index].images = taskImagesURLs;
    });

    // Wait for all image uploads to complete
    await Promise.all(uploadTasksImagesPromises);

    // Set gymkhana data in Firestore
    await gymkhanaRef.set(gymkhanaData);
  };

  const saveAndContinue = () => {
    const secretKey = isQR ? generateRandomString(70) : taskSecreyKEY;

    const newTask = {
      title: taskTitle,
      description: taskDescription,
      images: taskImages,
      secretKey,
      QR: isQR,
    };

    // Add task to the list
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  useEffect(() => {
    if (tasks.length === data.numTasks) {
      uploadGymkhanaData().then(() => {
        // Reset input fields
        setTitle("");
        setDescription("");
        setImages([]);
        setSecretKEY("");
        navigation.replace("GymkhanaCompleted");
      });
    } else {
      // Reset input fields
      setTitle("");
      setDescription("");
      setImages([]);
      setSecretKEY("");
    }
  }, [tasks]);

  function generateRandomString(length) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  }

  const swapColors = (QR) => {
    setisQR(QR);
    if (QR) {
      setSecretColor("#CDE5FC");
      setSecretTextColor("#888");
      setQRColor("#499EF4");
      setQRTextColor("white");
      return;
    }
    setSecretColor("#499EF4");
    setSecretTextColor("white");
    setQRColor("#CDE5FC");
    setQRTextColor("#888");
  };

  return (
    <View style={styles.container}>
      <BackButton navigation={navigation} />
      <View style={styles.inputView}>
        <Text style={styles.titleInput}>Test Name</Text>
        <TextInput
          value={taskTitle}
          style={styles.textInput}
          placeholder="Name"
          placeholderTextColor="#888"
          onChangeText={(text) => setTitle(text)}
        />
      </View>

      <View style={styles.inputView}>
        <Text style={styles.titleInput}>Description/Clues</Text>
        <TextInput
          value={taskDescription}
          style={styles.textInputDescription}
          placeholder="Description..."
          placeholderTextColor="#888"
          multiline={true}
          numberOfLines={4}
          onChangeText={(text) => setDescription(text)}
        />
      </View>
      <View style={styles.inputView}>
        <View style={styles.numberTests}>
          <Text style={styles.titleInput}>Pictures</Text>
          <TouchableOpacity
            style={styles.upgradePlan}
            onPress={() => navigation.navigate("UpgradePlan")}
          >
            <Text style={styles.upgradeText}>Upgrade Plan </Text>
            <Image
              source={require("../images/Diamond Premium.png")}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.picturesContainer}>
          {taskImages.map((image, index) => (
            <TouchableOpacity key={index} onPress={() => deleteImage(index)}>
              <Image source={{ uri: image }} style={styles.pictures} />
            </TouchableOpacity>
          ))}
          <TouchableOpacity onPress={addImage}>
            <Image
              source={require("../images/SCANQR.png")}
              style={styles.pictures}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttonsView}>
        <TouchableOpacity
          onPress={() => swapColors(true)}
          style={[styles.button1, { backgroundColor: QRColor }]}
        >
          <Text style={[styles.buttonTextIndividual, { color: QRTextColor }]}>
            QR
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => swapColors(false)}
          style={[styles.button2, { backgroundColor: secretColor }]}
        >
          <Text style={[styles.buttonTextGroup, { color: secretTextColor }]}>
            Text
          </Text>
        </TouchableOpacity>
      </View>

      {!isQR && (
        <View style={styles.inputView}>
          <Text style={styles.titleInput}>Enter the Secret Key</Text>
          <TextInput
            value={taskSecreyKEY}
            style={styles.secrettextInput}
            placeholder="Secret Key"
            placeholderTextColor="#888"
            multiline={true}
            numberOfLines={4}
            onChangeText={(text) => setSecretKEY(text)}
          />
        </View>
      )}

      {isQR && (
        <Text style={styles.infoText}>
          A QR code will be generated;{"\n"} You will receive a PDF with all
          {"\n"} the QR codes at the end.
        </Text>
      )}

      <TouchableOpacity style={styles.buttonContinue} onPress={saveAndContinue}>
        <LinearGradient
          colors={["#89BBE9", "#3E9CF3"]}
          style={styles.linearGradient}
        >
          <Text style={styles.buttonTextContinue}>CONTINUE</Text>
        </LinearGradient>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container3: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 20,
    marginBottom: "5%",
  },
  number1: {
    marginHorizontal: 20,
    fontSize: 18,
  },
  picturesContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "5%",
  },
  pictures: {
    height: 80,
    width: 80,
  },
  button_2: {
    borderRadius: 5,
  },
  buttonText2: {
    color: "black",
    fontSize: 30,
  },
  buttonsView: {
    paddingTop: "5%",
    display: "flex",
    flexDirection: "row",
    marginBottom: "5%",
  },
  buttonTextGroup: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
  },
  button1: {
    width: "30%",
    padding: "5%",
    backgroundColor: "#C6CACE",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  buttonTextIndividual: {
    fontSize: 15,
    textAlign: "center",
  },
  button2: {
    width: "30%",
    padding: "5%",
    backgroundColor: "gray",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  container2: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 20,
    marginBottom: "5%",
  },
  number: {
    marginHorizontal: 20,
    fontSize: 18,
  },
  button: {
    borderRadius: 5,
  },
  buttonText: {
    color: "black",
    fontSize: 30,
  },
  image: {
    width: 40,
    height: 40,
  },
  upgradePlan: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "5%",
  },
  container: {
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "10%",
    paddingBottom: "5%",
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
  PlanContainerMain: {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center",
    width: "70%",
    padding: "2%",
    paddingLeft: "5%",
  },
  // Back Button Style
  HeaderContainer: {
    marginTop: "5%",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignContent: "center",
    marginBottom: "5%",
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
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#344340",
    paddingLeft: "2%",
  },
  subTitle: {
    marginTop: 0,
    fontSize: 15,
    color: "gray",
    paddingLeft: "15%",
  },
  infoView: {
    paddingRight: "5%",
  },
  titleView: {
    display: "flex",
    flexDirection: "row",
  },
  numberTests: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  upgradeText: {
    fontSize: 12,
    marginLeft: "40%",
  },
  textInput: {
    borderColor: "gray",
    width: "90%",
    height: 40,
    paddingStart: 20,
    borderRadius: 10,
    borderWidth: 1,
  },
  textInputDescription: {
    borderColor: "gray",
    width: "90%",
    height: 100,
    paddingStart: 20,
    borderRadius: 10,
    borderWidth: 1,
    paddingRight: "5%",
    paddingTop: "5%",
    paddingBottom: "5%",
  },
  secrettextInput: {
    borderColor: "gray",
    width: "90%",
    height: 50,
    paddingStart: 20,
    borderRadius: 10,
    borderWidth: 1,
    paddingRight: "5%",
    paddingTop: "5%",
    paddingBottom: "5%",
    marginBottom: "5%",
  },
  inputView: {
    width: "100%",
    paddingTop: "5%",
    alignContent: "center",
    paddingLeft: "10%",
  },
  titleInput: {
    paddingBottom: "2%",
    fontSize: 18,
    marginLeft: "2%",
  },
  infoText: {
    paddingBottom: "2%",
    fontSize: 18,
    marginLeft: "2%",
    textAlign: "center",
  },
  buttonContinue: {
    display: "flex",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: "10%",
    padding: "2%",
    width: "90%",
  },

  buttonTextContinue: {
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    fontSize: 16,
  },
  linearGradient: {
    width: "70%",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
  },
});
