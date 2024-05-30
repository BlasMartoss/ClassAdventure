import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const BackButton = ({ navigation }) => {
  return (
    <View style={styles.HeaderContainer}>
      <View style={styles.upgradeContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>&lt;</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default BackButton;
