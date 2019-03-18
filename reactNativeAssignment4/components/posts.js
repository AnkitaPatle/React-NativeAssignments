import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ActivityIndicator,
  ToastAndroid,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Actions } from "react-native-router-flux";

const { width } = Dimensions.get('window');

export default class PostsRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: [],
      isLoading: true,
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ dataArray: responseJson, isLoading: false });
        ToastAndroid.show('Data fetched', ToastAndroid.SHORT, 10);
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
                {item.title == '' && (
                  <Image
                    style={styles.image}
                    source={require('../images/logo.jpg')}
                  />
                )}
                {item.title != '' && (
                  <Text style={styles.textname}>
                    {this.getFirstLatter(item.title)}
                  </Text>
                )}
                <View style={styles.container2}>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <Text style={styles.itemBody}>{item.body}</Text>
                </View>                
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        )}

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => Actions.postData()}        
          style={styles.TouchableOpacityStyle}>
          <Image            
             source={{
uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Plus_blue.svg/162px-Plus_blue.svg.png',
            }}
           style={styles.FloatingButtonStyle}
          />
        </TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#d6e7f9',
    margin: 2,
    padding: 10,
  },
  container2: {
    width: width - 100,
    flexDirection: 'column',
  },
  itemTitle: {
    padding: 3,
    fontSize: 18,
    color: '#07306d'
  },
  itemBody: {
    padding: 3,
    fontSize: 13,
  },
  image: {
    width: 60,
    height: 55,
    marginRight: 10,
    borderRadius: 100 / 2,
  },
  textname: {    
    width: 30,
    height: 30,
    borderRadius: 50, 
    marginTop: 5,
    marginRight: 10,
    padding: 8,  
    backgroundColor: '#07306d',     
    justifyContent: 'center',
    textAlign: 'center',  
    fontSize: 12,  
    fontWeight: 'bold',
    color: '#fff',    
  },
  TouchableOpacityStyle: {
    position: 'absolute',
    // width: 60,
    // height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: 15,
    bottom: 15,
  },
 
  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 55,
    height: 55,
    //backgroundColor:'black'
  },
 
});
