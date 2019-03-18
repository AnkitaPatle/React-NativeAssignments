import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity
} from "react-native";

const { height, width } = Dimensions.get("window");

export default class AddItemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItem: ""
    };
  }

  addTodoItem(todoItem) {
    const toDoItemList = this.props.toDoItemList;
    var found = false;

    if (todoItem != "") {
      for (let i = 0; i < toDoItemList.length; i++) {
        if (toDoItemList[i].key == todoItem) {
          found = true;
          break;
        }
      }
      if (found) {
        alert("Duplicate item not allowed..");
        this.setState({ todoItem: "" });
      } else {
        this.props.addItem(todoItem);
        this.setState({ todoItem: "" });
      }
    } else {
      alert("Please add item..");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headercontainer}>
          <View style={styles.textInputHeader}>
            <TextInput
              style={styles.textInput}
              placeholder="Add Item"
              placeholderTextColor="#fff"
              onChangeText={todoItem => this.setState({ todoItem })}
              value={this.state.todoItem}
            />
          </View>

          <View style={styles.touchableOpacityContainer}>
            <TouchableOpacity
              style={styles.blueCircle}
              onPress={() => this.addTodoItem(this.state.todoItem)}
            >
              <Text style={styles.blueCircleText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.lineView} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#363666",
    flexDirection: "column"
  },
  headercontainer: {
    flexDirection: "row",
    backgroundColor: "#282851",
    borderRadius: 30,
    margin: 10,
    padding: 8,
    borderColor: "#434372",
    borderWidth: 1,
    marginBottom: 15
  },
  textInputHeader: {
    width: width - 100
  },
  textInput: {
    fontSize: 18,
    paddingLeft: 25,
    paddingTop: 4,
    color: "#ffffff"
  },
  touchableOpacityContainer: {
    alignItems: "flex-end"
  },
  blueCircle: {
    width: 40,
    height: 40,
    marginRight: 20,
    backgroundColor: "#3175e2",
    borderRadius: 50,
    justifyContent: "center"
  },
  blueCircleText: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 25,
    color: "#fff",
    fontWeight: "500"
  },
  lineView: {
    borderColor: "#434372",
    borderWidth: 1
  }
});
