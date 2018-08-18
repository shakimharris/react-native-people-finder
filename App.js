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
        <View style={styles.inputContainer}>
          <TextInput
          style=
          placeholder = "An awesome place"
          value={this.state.placeName}
          onChangeText ={this.placeNameChangedHandler}
          />
          <Button title ="Add" />
          </View>

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
  inputContainer: {
    //flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  }
  input: {

  }
  
});
