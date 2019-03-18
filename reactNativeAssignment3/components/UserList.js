import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ActivityIndicator,
  ToastAndroid,
  Dimensions,
  Image
} from "react-native";

const { width } = Dimensions.get("window");

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: [],
      isLoading: true
    };
  }
  componentDidMount() {
    fetch("http://dummy.restapiexample.com/api/v1/employees", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ dataArray: responseJson, isLoading: false });
        ToastAndroid.show("Data fetched", ToastAndroid.SHORT, 10);
      });
  }
  getFirstLatter(empName) {
    return empName.charAt(0).toUpperCase();
  }

  render() {
    return (
      <View style={{ margin: 5 }}>
        {this.state.isLoading == true && (
          <ActivityIndicator
            style={{ marginVertical: 100 }}
            size="large"
            color="#00ff00"
          />
        )}
        {this.state.isLoading == false && (
          <FlatList
            data={this.state.dataArray}
            renderItem={({ item }) => (
              <View style={styles.container1}>
                {item.employee_name == "" && (
                  <Image
                    style={styles.image}
                    source={require("../images/contactlogo.png")}
                  />
                )}
                {item.employee_name != "" && (
                  <Text style={styles.textname}>
                    {this.getFirstLatter(item.employee_name)}
                  </Text>
                )}
                <View style={styles.container2}>
                  <Text style={styles.item}>{item.employee_name}</Text>
                  <Text style={styles.item}>{item.employee_age}</Text>
                </View>

                {item.employee_name == "" && <Text style={styles.redCircle} />}

                {item.employee_name != "" && (
                  <Text style={styles.greenCircle} />
                )}
              </View>
            )}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#9CC6F6",
    margin: 2,
    padding: 10
  },
  container2: {
    width: width - 130,
    flexDirection: "column"
  },
  item: {
    padding: 3,
    fontSize: 18
  },
  image: {
    width: 60,
    height: 55,
    marginRight: 10,
    borderRadius: 100 / 2
  },
  textname: {
    marginTop: 5,
    width: 60,
    height: 60,
    backgroundColor: "#eeeeee",
    marginRight: 10,
    borderRadius: 60,
    fontSize: 30,
    padding: 10,
    textAlign: "center"
  },
  redCircle: {
    marginTop: 25,
    width: 12,
    height: 12,
    backgroundColor: "red",
    marginRight: 10,
    borderRadius: 20
  },
  greenCircle: {
    marginTop: 25,
    width: 12,
    height: 12,
    backgroundColor: "green",
    marginRight: 10,
    borderRadius: 20
  }
});
