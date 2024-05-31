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

export default function ScoreboardTEAM({ navigation }) {
  const [users, setUsers] = useState([]);

  const route = useRoute();
  const { id, gymkhanaTitle } = route.params;

  const fetchUsers = async () => {
    try {
      const doc = await firestore().collection("gymkhanas").doc(id).get();

      if (doc.exists) {
        const gymkhanaData = doc.data();
        const users = gymkhanaData.users || [];

        const userDataArray = await Promise.all(
          users.map(async (userData) => {
            const { uid, currentTest } = userData;
            const userRef = firestore().collection("users").doc(uid);
            const userDoc = await userRef.get();

            if (userDoc.exists) {
              const userData = userDoc.data();
              return {
                username: userData.username,
                pfp: userData.pfp,
                currentTest,
              };
            } else {
              return null;
            }
          })
        );

        // Filter out null values (users that don't exist)
        const filteredUserData = userDataArray.filter(
          (userData) => userData !== null
        );
        setUsers(filteredUserData);
      }
    } catch (error) {
      console.error("Error fetching gymkhana data:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const unsubscribe = usersListener();
    return () => {
      unsubscribe();
    };
  }, []);

  const usersListener = () => {
    return firestore()
      .collection("gymkhanas")
      .doc(id)
      .onSnapshot((doc) => {
        if (doc.exists) {
          const gymkhanaData = doc.data();
          const users = gymkhanaData.users || [];

          const fetchUserData = async () => {
            const promises = users.map(async (userData) => {
              const { uid, currentTest } = userData;
              const userRef = firestore().collection("users").doc(uid);
              const userDoc = await userRef.get();

              if (userDoc.exists) {
                const userData = userDoc.data();
                return {
                  username: userData.username,
                  pfp: userData.pfp,
                  currentTest,
                };
              } else {
                return null;
              }
            });

            const userDataArray = await Promise.all(promises);
            // Filter out null values (users that don't exist)
            const filteredUserData = userDataArray.filter(
              (userData) => userData !== null
            );

            // Sort the user data array by currentTest in descending order
            filteredUserData.sort((a, b) => b.currentTest - a.currentTest);

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
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.backText}>&lt;</Text>
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
          Here you can see the players in the Gymkhana and their respective test{" "}
        </Text>
      </View>

      <View style={styles.viewScoreboard}>
        <ScrollView style={styles.scoreboardScroll}>
          <Text style={styles.usersText}>Gymkhana Scoreboard</Text>
          <View style={styles.infoView}>
            <Text style={styles.infoname}>Username</Text>
            <Text style={styles.infoname}>Test Number</Text>
          </View>
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
              <Text style={styles.test}>{user.currentTest}</Text>
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
    marginRight: "10%",
    marginLeft: "10%",
    marginBottom: "10%",
  },
  title: {
    fontSize: 25,
  },
  pin: {
    fontSize: 30,
    marginTop: "2%",
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
    height: 380,
    borderWidth: 0.5,
    borderColor: "black",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 10,
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
  test: {
    fontSize: 20,
    marginLeft: "30%",
  },
  infoView: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
