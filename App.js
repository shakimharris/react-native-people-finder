import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends Component {
state = {
  placeName: ''
}
placeNameChangedHandler = val => {
  this.setState({
    placeName: val
  });
};

  render() {
    return (
      <View style={styles.container}>
      <TextInput
      style={{width: 300}}
      placeholder = "An awesome place"
      value={this.state.placeName}
      onChangeText ={this.placeNameChangedHandler}
      />
      <Button title ="Add" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
