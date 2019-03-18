import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  Dimensions,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class PostData extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: "",
      body: "",
      isLoading: true,
      };
  }

  onSubmit() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: this.state.title,
        body: this.state.body,
      }),
    })
      .then(response => response.json())
      .then(responseData => {
        console.log('RESULTS :', responseData);

        this.setState(
          {
            isLoading: false,
          },        
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Post Data</Text>

        <TextInput
          style={styles.input}
          placeholder="Id"
          autoCapitalize="none"
          placeholderTextColor="white"
          value={this.state.title}
          onChangeText={title => this.setState({ title })}
          
        />
        <TextInput
          style={styles.input}
          placeholder="Title"
          autoCapitalize="none"
          placeholderTextColor="white"
          value={this.state.body}
          onChangeText={body => this.setState({ body })}
        />
        <TextInput
          style={styles.input}
          placeholder="body"
          autoCapitalize="none"
          placeholderTextColor="white"
        />

        <TouchableOpacity 
        onPress={this.onSubmit.bind(this)}
        style={styles.buttonContainer}>
        
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#d6e7f9',
  },
  text: {
    marginTop: 40,
    marginBottom: 10,
    color: '#07306d',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    width: width / 1.2,
    height: height / 11,
    backgroundColor: '#7eb1ea',
    margin: 3,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
  },
  buttonContainer: {
    backgroundColor: '#2189FF',
    borderRadius: 14,
    justifyContent: 'center',
    width: width / 1.2,
    height: height / 11,
    margin: 3,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },
});