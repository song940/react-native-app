import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  Button,
  TextInput,
} from 'react-native';

export default class App extends Component {
  state = {}
  onPress(){
    const { text } = this.state;
    fetch('https://api.lsong.org/translate?text=' + encodeURIComponent(text), {})
    .then(res => res.json())
    .then(res => {
      this.setState(res);
    })
  }
  render() {
    const { translation } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Translate
        </Text>
        <TextInput
          width="80%"
          style={ styles.display }
          placeholder="Input word"
          onChangeText={ text => this.setState({ text }) } />
        <Text style={ styles.display } >
          { translation }
        </Text>
        <Button 
            title="Go!"
            onPress={ this.onPress.bind(this) } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
  display: {
    width: "80%",
    marginTop: "10%",
    textAlign: "center",
  }
});
