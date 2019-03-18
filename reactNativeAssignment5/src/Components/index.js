import React, { Component } from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import AddItemComponent from "./add";
import TodoListComponent from "./todoList";

export default class IndexComponent extends Component {
  constructor(props) {
    super(props);    
  }

  render() {
    return (
      <View style={styles.container}>
        <AddItemComponent
          toDoItemList={this.props.toDoItemList}
          addItem={this.props.addItem}
        />

        <TodoListComponent
          toDoItemList={this.props.toDoItemList}
          complatedList={this.props.complatedList}
          checkedTask={this.props.checkedTask}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#363666",
    flex: 1,
    flexDirection: "column",
    paddingTop: 15
  }
});
