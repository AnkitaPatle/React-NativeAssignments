import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity,TextInput } from "react-native";
import { Actions } from "react-native-router-flux";

export default class MyProfileRoute extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../images/profile1.jpg")}
            style={styles.image}
          />
          <TextInput style={styles.titleName}>Somya Dev</TextInput>
          <TextInput style={styles.title}>Software Engineer</TextInput>
          <TextInput style={styles.title}>somya@gmail.com</TextInput>
           <TextInput style={styles.title}>9988663321</TextInput>
          <TextInput style={styles.title}>Female</TextInput>
          <TextInput style={styles.title}>Age: 25</TextInput>
        </View>       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d6e7f9",   
  },
  title: {
    color: "#000000",
    textAlign: "center",
    fontWeight: "700",    
    fontSize: 15,
  },
   titleName: {
    color: "#07306d",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "700",    
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,    
  },
  image: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: '#f90004',
    borderRadius: 100 / 2,
    
  }
});
