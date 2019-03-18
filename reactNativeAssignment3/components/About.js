import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";

export default class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../images/profileimage.jpg")}
            style={styles.image}
          />
          <Text style={styles.title}>Personal Information</Text>
          <Text style={styles.title}>Name: Ashu Patil</Text>
          <Text style={styles.title}>Profession: Software Engineer</Text>
          <Text style={styles.title}>Age: 25</Text>
        </View>

        <View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => Actions.userList()}
          >
            <Text style={styles.buttonText}>USERS</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9CC6F6",
    padding: 20
  },
  title: {
    color: "#fff",
    marginTop: 20,
    textAlign: "center",
    fontWeight: "700"
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2
  },
  buttonContainer: {
    backgroundColor: "#2189FF",
    paddingVertical: 15
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "700"
  }
});
