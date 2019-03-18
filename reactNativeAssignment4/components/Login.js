import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  ImageBackground
} from "react-native";
import { Actions } from "react-native-router-flux";

const Swidth = Dimensions.get("window").width;
const Sheight = Dimensions.get("window").height;

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      isValidate: false
    };
  }

  validate() {
    if (this.state.userName !== "" && this.state.password !== "") {
      this.setState({ isValidate: true });
      Actions.dashboard();
    } else {
      alert("Please insert username & password")
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        {this.state.isValidate == false && (
          <ImageBackground
            source={require("../images/background.jpg")}
            style={styles.backgroundImage}
          >
            <View style={styles.imageContainer}>
              <Image
                source={require("../images/login.png")}
                style={styles.image}
              />
              <Text style={styles.title}>Welcom to Login Page</Text>
              
                            
              <TextInput
                style={styles.input}
                placeholder="UserName"
                placeholderTextColor="#fff"
                value={this.state.userName}
                onChangeText={userName => this.setState({ userName })}
              />

              <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Password"
                placeholderTextColor="#fff"
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
              />

              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={this.validate.bind(this)}
              >
                <Text style={styles.buttonText}>LOGIN</Text>
              </TouchableOpacity>
              
            </View>
          </ImageBackground>
        )}
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003171"    
  },
  backgroundImage: {
    flex: 1,
    alignSelf: "stretch",
    width: Swidth,
    height: Sheight,
    opacity: 0.6
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
  title: {
    fontSize: 20,
    color: "#fff",
    paddingTop: 10,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "800"
  },
  input: {
    height: Sheight / 12,
    width: Swidth / 1.2,
    backgroundColor: "#89C4F4",
    marginBottom: 8,
    color: "#fff",
    borderRadius: 100/2,
    fontSize: 18,
    textAlign: "center",   
  },
  buttonContainer: {
    backgroundColor: "#2189FF",
    paddingVertical: 10,
    borderRadius: 100/2
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    width: Swidth / 1.2,
    fontSize: 18
  }
});
