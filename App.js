import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends Component {
state = {
  placeName: ''
}

  render() {
    return (
      <View style={styles.container}>
      <TextInput />

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
