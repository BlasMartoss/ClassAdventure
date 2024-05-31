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
import UserDetails from "../components/UserDetails";
import { useRoute } from "@react-navigation/native";
import firestore from "@react-native-firebase/firestore";

export default function GymkhanaHUBteam({ navigation }) {
  let tasks = [];
  const route = useRoute();
  const { gymkhanaId, gymkhanaTitle } = route.params;
  const [groups, setGroups] = useState([]);
  const [numberGroups, setNumberGroups] = useState(0);
  const [users, setUsers] = useState([]); // State to hold user data

  const joinGroup = async (group) => {
    const gymkhanaRef = firestore().collection("gymkhanas").doc(gymkhanaId);

    const doc = await gymkhanaRef.get();
    if (doc.exists) {
      const gymkhanaData = doc.data();
      const groups = gymkhanaData.groups;

      let isUserInGroup = false;
      for (const key in groups) {
        if (groups[key].users.includes(UserDetails.uid)) {
          isUserInGroup = true;
          break;
        }
      }

      if (!isUserInGroup) {
        await gymkhanaRef.update({
          [`groups.${group}.users`]: firestore.FieldValue.arrayUnion(
            UserDetails.uid
          ),
        });
      }
    }
  };

  const gymkhanaListener = () => {
    return firestore()
      .collection("gymkhanas")
      .doc(gymkhanaId)
      .onSnapshot((doc) => {
        if (doc.exists) {
          const gymkhanaData = doc.data();
          if (gymkhanaData.started === true) {
            handleStart();
            return;
          }

          const groups = gymkhanaData.groups || {};
          setNumberGroups(gymkhanaData.numberGroups || 0); // Set number of groups

          // Extract groups and count the number of users in each group
          const groupData = Object.keys(groups).map((groupKey) => {
            const group = groups[groupKey];
            const numberOfPlayers = group.users ? group.users.length : 0;
            return {
              groupName: groupKey,
              numberOfPlayers,
            };
          });

          // Set the group data to state (assuming you have a state called 'groups')
          setGroups(groupData);

          // Extract all user IDs from groups
          const userIds = Object.values(groups).reduce((acc, group) => {
            return acc.concat(group.users || []);
          }, []);

          // Fetch user data for all user IDs
          fetchUserData(userIds);
        }
      });
  };

  const fetchUserData = async (userIds) => {
    const promises = userIds.map(async (uid) => {
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

  useEffect(() => {
    const unsubscribe = gymkhanaListener();
    return () => {
      unsubscribe();
    };
  }, []);

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

      <Text style={styles.select_team_text}>Select your team</Text>

      <View style={styles.teamscontainer}>
        {Array.from({ length: numberGroups }).map((_, index) => {
          const group = groups[index];
          const groupName = group ? group.groupName : `group${index + 1}`;
          const numberOfPlayers = group ? group.numberOfPlayers : 0;

          return (
            <View key={groupName} style={styles.teamView}>
              <TouchableOpacity onPress={() => joinGroup(groupName)}>
                <Image
                  source={require("../images/teamImage.png")}
                  style={styles.teamImage}
                />
                <Text style={styles.groupnumber}>{index + 1}</Text>
                <Text style={styles.playerCount}>
                  Players: {numberOfPlayers}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>

      <View style={styles.viewScoreboard}>
        <ScrollView style={styles.scoreboardScroll}>
          <Text style={styles.usersText}>Users in the Gymkhana</Text>
          {users.map((user, index) => (
            <View key={index} style={styles.userView}>
              <Image
                source={user.pfp ? {uri: user.pfp } : require("../images/ProfilePictureIcon.png")}
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
    height: 250,
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
  select_team_text: {
    fontSize: 18,
    marginTop: "2%  ",
  },
  teamscontainer: {
    width: "100%",
    height: 100,
    marginTop: "5%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  teamView: {
    width: "20%",

    alignContent: "center",
    alignItems: "center",
  },
  teamImage: {
    height: 80,
    width: 80,
  },
  groupnumber: {
    fontSize: 18,
    textAlign: "center",
  },
  team: {
    fontSize: 20,
    marginLeft: "30%",
  },
});
