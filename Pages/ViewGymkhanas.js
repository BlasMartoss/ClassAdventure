import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import firestore from "@react-native-firebase/firestore";
import UserDetails from "../components/UserDetails";

export default function Home({ navigation }) {
  const [userGymkhanas, setUserGymkhanas] = useState([]);

  const handleDelete = async (id) => {
    try {
      await firestore()
        .collection("gymkhanas")
        .doc(id)
        .delete()
        .then(() => {
          setUserGymkhanas((prevGymkhanas) =>
            prevGymkhanas.filter((gymkhana) => gymkhana.id !== id)
          );
        });
    } catch {}
  };

  const handlePlay = async (id, isGroup, title) => {
    let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let randomKey = "";
    for (var i = 0; i < 6; i++) {
      const randomNumber = Math.floor(Math.random() * 10);
      if (i == 3) {
        randomKey += " ";
        randomKey += numbers[randomNumber];
      } else {
        randomKey += numbers[randomNumber];
      }
    }

    const gymRef = firestore().collection("gymkhanas").doc(id);
    await gymRef.update({ pin: randomKey });

    navigation.navigate("GymkhanaStart", {
      id,
      randomKey,
      isGroup,
      gymkhanaTitle: title,
    });
  };

  useEffect(() => {
    // Query Firestore to fetch user's Gymkhana data
    const fetchUserGymkhanas = async () => {
      try {
        const userGymkhanaSnapshot = await firestore()
          .collection("gymkhanas")
          .where("owner", "==", UserDetails.uid)
          .get();

        const fetchedUserGymkhanas = userGymkhanaSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setUserGymkhanas(fetchedUserGymkhanas);
      } catch (error) {
        console.error("Error fetching user gymkhanas: ", error);
      }
    };

    fetchUserGymkhanas();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.HeaderContainer}>
        <View style={styles.upgradeContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate("ProfileOrganizer")}
          >
            <Text style={styles.backText}>&lt;</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.viewOptions}>
        <Text style={styles.userProfileText}>Your Gymkhanas</Text>
        <Image
          source={require("../images/GymkhanaFlag.png")}
          style={styles.icon}
        />
      </View>
      <Text style={styles.infoText}>
        You can create only 3 gymkhanas without Premium.
      </Text>
      {userGymkhanas.length === 0 && (
        <Text style={styles.infoText2}>You don't have any Gymkhanas.</Text>
      )}
      {userGymkhanas.map((gymkhana) => (
        <View key={gymkhana.id} style={styles.GymkhanaView}>
          <View style={styles.GymkhanaViewName}>
            <Text style={styles.GymkhanaName}>{gymkhana.title}</Text>
          </View>
          <View style={styles.ButtonsView}>
            <TouchableOpacity onPress={() => handleDelete(gymkhana.id)}>
              <Image
                source={require("../images/TrashIconGymkhana.png")}
                style={styles.buttonIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handlePlay(gymkhana.id, gymkhana.isGroup, gymkhana.title)}
            >
              <Image
                source={require("../images/PlayIcon.png")}
                style={styles.buttonIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      ))}
      <TouchableOpacity
        style={styles.upgradeView}
        onPress={() => navigation.navigate("UpgradePlan")}
      >
        <Image
          source={require("../images/Diamond Premium.png")}
          style={styles.upgradeIcon}
        />
        <Text style={styles.upgradeText}>
          Upgrade to Premium to Create more Gymkhanas
        </Text>
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
    paddingTop: "15%",
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
  // Back Button Style
  HeaderContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignContent: "center",
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
  viewOptions: {
    width: "100%",
    marginBottom: "5%",
    marginTop: "5%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userProfileText: {
    fontSize: 25,
    marginLeft: "5%",
  },
  icon: {
    height: 40,
    width: 40,
    marginRight: "5%",
  },
  GymkhanaView: {
    width: "90%",
    height: 100,
    margin: "5%",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
  },
  GymkhanaViewName: {
    width: "60%",

    alignContent: "center",
    justifyContent: "center",
    paddingLeft: "5%",
  },
  GymkhanaName: {
    fontSize: 17,
  },
  ButtonsView: {
    width: "40%",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  buttonIcon: {
    height: 50,
    width: 50,
    marginLeft: "10%",
  },
  upgradeIcon: {
    height: 70,
    width: 70,
  },
  upgradeText: {
    fontSize: 18,
    textAlign: "center",
    marginLeft: "10%",
    marginRight: "10%",
  },
  upgradeView: {
    alignItems: "center",
  },
  infoText: {
    fontSize: 15,
    textAlign: "center",
    marginLeft: "10%",
    marginRight: "10%",
  },
  infoText2: {
    fontSize: 21,
    textAlign: "center",
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: "20%",
    marginBottom: "80%",
    color: "#888",
  },
});
