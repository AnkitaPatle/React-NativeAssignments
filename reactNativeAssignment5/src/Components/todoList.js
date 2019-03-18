import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image
} from "react-native";

const { height, width } = Dimensions.get("window");

export default class TodoListComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Text style={styles.text}>
            TO DO -> Pending Task : {this.props.toDoItemList.length}
          </Text>
          <FlatList
            data={this.props.toDoItemList}
            renderItem={({ item }) => (
              <View style={styles.flatview}>
                <TouchableOpacity onPress={() => this.props.checkedTask(item)}>
                  <View style={styles.circle} />
                </TouchableOpacity>
                <Text style={styles.item}>{item.key}</Text>
              </View>
            )}
          />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.text}>
            COMPLETED -> Total Task : {this.props.complatedList.length}
          </Text>
          <FlatList
            data={this.props.complatedList}
            renderItem={({ item }) => (
              <View style={styles.flatview}>
                <TouchableOpacity>
                  <Image
                    style={{ width: 35, height: 35, marginRight: 8 }}
                    source={require("../images/greencircle.png")}
                  />
                </TouchableOpacity>
                <Text style={styles.itemComplate}>{item.key}</Text>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#363666",
    flex: 1,
    flexDirection: "column"
  },
  text: {
    fontSize: 15,
    paddingLeft: 20,
    paddingTop: 15,
    paddingBottom: 10,
    color: "#b9b0f4"
  },
  flatview: {
    flexDirection: "row",
    backgroundColor: "#44446b",
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 8,
    padding: 18,
    borderColor: "#515175",
    borderWidth: 1
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: "white",
    borderWidth: 3,
    marginRight: 8,
    backgroundColor: "#fff"
  },
  item: {
    margin: 2,
    fontSize: 18,
    paddingLeft: 14,
    width: width,
    color: "#fff"
  },
  itemComplate: {
    margin: 2,
    fontSize: 18,
    paddingLeft: 14,
    width: width,
    color: "#fff",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid"
  }
});
