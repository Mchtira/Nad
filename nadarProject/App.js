import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import store from './Store.js'

export default class App extends React.Component {

  state =  store.getState()
  constructor() {
    super()
    store.subscribe(()=> this.setState(store.getState()))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
