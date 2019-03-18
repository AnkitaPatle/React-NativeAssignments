import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

class FlatListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [
        {
          fname: "Ankita",
          lname: "Patle"
        },
        {
          fname: "Neha",
          lname: "Patil"
        },
        {
          fname: "Sanju",
          lname: "Kale"
        }
      ]
    };
  }
  render() {
    return (
      <View>
        <FlatList
          data={this.state.names}
          renderItem={({ item }) => (
            <Text>
              {item.fname} {item.lname} {this.props.values}
            </Text>
          )}
        />
      </View>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatListComponent
          values={[
            (name = "Ankita"),
            ",",
            (mobile = "9090889900"),
            ",",
            (address = "Pune")
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    marginTop: 50
  }
});
