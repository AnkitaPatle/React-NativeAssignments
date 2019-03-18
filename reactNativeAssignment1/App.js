import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      showAnotherComponent: false
    };
  }

  submit() {
    if (
      this.state.firstName !== "" &&
      this.state.lastName !== "" &&
      this.state.age !== ""
    ) {
      this.setState({ showAnotherComponent: true });
    } else {
      alert("PLEASE FILL ALL FIELDS");
    }
  }
  goBack() {
    this.setState({
      showAnotherComponent: false,
      firstName: "",
      lastName: "",
      age: ""
    });
  }
  render() {
    return (
      <View>
        {this.state.showAnotherComponent == false && (
          <View>
            <Text style={{ fontSize: 20 }}>React native first component</Text>

            <TextInput
              style={styles.welcome}
              placeholder="Enter First Name"
              value={this.state.firstName}
              onChangeText={firstName => this.setState({ firstName })}
            />

            <TextInput
              style={styles.welcome}
              placeholder="Enter Last Name"
              value={this.state.lastName}
              onChangeText={lastName => this.setState({ lastName })}
            />

            <TextInput
              style={styles.welcome}
              placeholder="Enter Age"
              value={this.state.age}
              onChangeText={age => this.setState({ age })}
            />

            <Button title="SUBMIT" onPress={this.submit.bind(this)} />
          </View>
        )}

        {this.state.showAnotherComponent == true && (
          <View>
            <Text style={{ fontSize: 20 }}>Another View</Text>
            <Text style={{ fontSize: 20 }}>
              FirstName:{this.state.firstName}
            </Text>
            <Text style={{ fontSize: 20 }}>
              LastName: {this.state.lastName}
            </Text>
            <Text style={{ fontSize: 20 }}>Age: {this.state.age}</Text>
            <Button title="Go Back" onPress={this.goBack.bind(this)} />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
