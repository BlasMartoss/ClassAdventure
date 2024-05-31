import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { useEffect } from "react";
import { Image, View, StyleSheet } from "react-native";
import UserDetails from "../components/UserDetails";

export default function LoadingScreen({ navigation }) {
  function onAuthStateChanges(user: FirebaseAuthTypes.User | null) {
    setTimeout(async () => {
      if (user) {
        try {
          // Reference to the Firestore document for the user
          const userDocRef = firestore().collection("users").doc(user.uid);

          // Get the document
          const snapshot = await userDocRef.get();

          // Check if the document exists
          if (snapshot.exists) {
            const userData = snapshot.data();
            const { role, username, email, wins, pfp } = userData;

            UserDetails.setUserDetails({
              uid: user.uid,
              username,
              role,
              email,
              wins,
              pfp
            });

            // Navigate based on the user's role
            if (role === "a Participant") {
              navigation.replace("HomeParticipant");
            } else {
              navigation.replace("Home");
            }
          } else {
            // If the profile doesn't exist, send to Login
            navigation.replace("Signin");
          }
        } catch (error) {
          navigation.replace("Signin");
        }
      } else {
        navigation.replace("Signin");
      }
    }, 1000);
  }

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(onAuthStateChanges);
  
    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../images/ClassAdventureLogo.png")}
        style={styles.ClassAdventureImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  ClassAdventureImage: {
    height: 300,
    width: 300,
    marginBottom: "10%",
  },
});
