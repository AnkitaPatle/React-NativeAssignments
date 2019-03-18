import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity,TextInput, Button, Alert } from "react-native";
import { Actions } from "react-native-router-flux";

export default class LogoutRoute extends Component {

 buttonClickded () {
    Alert.alert(
      "Alert Title",
      "Do you want to logout",
      [        
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => Actions.login() }
      ],
      { cancelable: false }
    );
  }


  render() {
    return (
      <View style={styles.container}> 
     <TouchableOpacity
            style={styles.buttonContainer}
            onPress={this.buttonClickded}
            // onPress={() => Actions.login()}
          >
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
      
        </View>   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d6e7f9",   
  },
  buttonContainer: {
    backgroundColor: "#07306d",
    paddingVertical: 15,
    margin: 30
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "700"
  }
  
});
