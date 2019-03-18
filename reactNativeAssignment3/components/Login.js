import React, { Component } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import { Actions } from "react-native-router-flux";

const Swidth = Dimensions.get("window").width;
const Sheight = Dimensions.get("window").height;

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    };
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Text style={styles.title}>LOGIN</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter User Name"
          placeholderTextColor="#fff"
          value={this.state.userName}
          onChangeText={userName => this.setState({ userName })}
        />

        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Enter password"
          placeholderTextColor="#fff"
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => Actions.about()}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003171",
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "#fff",
    paddingTop: 80,
    marginBottom: 8,
    textAlign: "center",
    fontWeight: "700"
  },
  input: {
    height: Sheight / 12,
    width: Swidth / 1.5,
    backgroundColor: "#89C4F4",
    marginBottom: 8,
    color: "#fff"
  },
  buttonContainer: {
    backgroundColor: "#2189FF",
    paddingVertical: 10
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    width: Swidth / 1.5
  }
});
