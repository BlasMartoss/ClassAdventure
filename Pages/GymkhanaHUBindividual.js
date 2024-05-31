import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import firestore from "@react-native-firebase/firestore";
import UserDetails from "../components/UserDetails";

export default function GymkhanaHUBindividual({ navigation }) {
  const route = useRoute();
  let tasks = [];
  const { gymkhanaId, gymkhanaTitle } = route.params;
  const [users, setUsers] = useState([]);

  const addUserToGymkana = async () => {
    // Fetch existing users from the gymkhana document
    const gymRef = firestore().collection("gymkhanas").doc(gymkhanaId);
    const gymSnapshot = await gymRef.get();

    if (gymSnapshot.exists) {
      const gymData = gymSnapshot.data();
      tasks = gymData.tasks;
      const existingUsers = gymData.users || [];

      // Check if the user's ID is not already in the existing users array
      if (!existingUsers.some((user) => user.uid === UserDetails.uid)) {
        // Add the new user's details to the existing users array
        const newUsers = [
          ...existingUsers,
          { uid: UserDetails.uid, currentTest: 1 },
        ];

        // Update the gymkhana document with the updated users array
        await gymRef.update({ users: newUsers });
      }
    }
  };

  const handleStart = () => {
    navigation.navigate("GymkhanaTest", {
      tasks,
    });
  };

  

  useEffect(() => {
    const unsubscribe = gymkhanaListener();
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    addUserToGymkana();
  }, []);

  const gymkhanaListener = () => {
    return firestore()
      .collection("gymkhanas")
      .doc(gymkhanaId)
      .onSnapshot((doc) => {
        if (doc.exists) {
          const gymkhanaData = doc.data();
          if (gymkhanaData.started == true) {
            handleStart();
            return;
          }
          const users = gymkhanaData.users || [];

          const fetchUserData = async () => {
            const promises = users.map(async (userData) => {
              const { uid } = userData;
              const userRef = firestore().collection("users").doc(uid);
              const userDoc = await userRef.get();

              if (userDoc.exists) {
                const userData = userDoc.data();
                return { uid, username: userData.username, pfp: userData.pfp };
              } else {
                return null;
              }
            });

            const userDataArray = await Promise.all(promises);
            // Filter out null values (users that don't exist)
            const filteredUserData = userDataArray.filter(
              (userData) => userData !== null
            );
            setUsers(filteredUserData);
          };

          fetchUserData();
        }
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.HeaderContainer}>
        <View style={styles.upgradeContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate("HomeParticipant")}
          >
            <Text style={styles.backText}>X</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Image
        source={require("../images/ClassAdventureLogo.png")}
        style={styles.ClassAdventureLogo}
      />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{gymkhanaTitle}</Text>
        <Text style={styles.text}>
          Waiting for people to start playing the Gymkhana
        </Text>
      </View>

      <Text style={styles.text}>SINGLEPLAYER MODE</Text>

      <View style={styles.viewScoreboard}>
        <ScrollView style={styles.scoreboardScroll}>
          <Text style={styles.usersText}>Users in the Gymkhana</Text>
          {users.map((user, index) => (
            <View key={index} style={styles.userView}>
              <Image
                source={
                  user.pfp
                    ? { uri: user.pfp }
                    : require("../images/ProfilePictureIcon.png")
                }
                style={styles.profileIcon}
              />
              <Text style={styles.userName}>{user.username}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
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
    paddingBottom: "15%",
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
  ClassAdventureLogo: {
    height: 180,
    width: 180,
  },
  button: {
    marginTop: "5%",
    width: "50%",
    borderRadius: 5,
    marginBottom: "10%",
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
    fontSize: 30,
  },

  textContainer: {
    width: "100%",
    alignItems: "center",
  },
  scrollView: {
    zIndex: 1,
  },
  viewScoreboard: {
    width: "85%",
    height: 350,
    borderWidth: 0.5,
    borderColor: "black",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 10,
    marginTop: "10%",
  },
  scoreboardScroll: {
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  usersText: {
    fontSize: 20,
    textAlign: "center",
    marginTop: "2%",
    marginBottom: "2%",
  },
  userView: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    paddingLeft: "10%",
    paddingTop: "3%",
    paddingBottom: "3%",
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
  },
  profileIcon: {
    height: 50,
    width: 50,
    resizeMode: "cover",
    borderRadius: 100,
  },
  userName: {
    fontSize: 18,
    marginLeft: "5%",
  },
});
