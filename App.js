import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ListItem from './src/components/ListItem/ListItem';
export default class App extends Component {
state = {
  placeName: '',
  places: []
}
placeNameChangedHandler = val => {
  this.setState({
    placeName: val
  });
  };
placeSubmitHandler = () => {
  if (this.state.placeName.trim() === "")
  return;
  this.SetState(prevState => {
    places: prevState.places.concat(prevState.placeName);
  };
});
};

  render() {
    const placesOutput = this.state.places.map(place, i) => (
    <ListItem key ={i} placeName= {place} />
    ));
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
          style=
          placeholder = "An awesome place"
          value={this.state.placeName}
          onChangeText ={this.placeNameChangedHandler}
          />
          <Button title ="Add" style={styles.placeButton}
          onPress={this.placeSubmitHandler} />
          </View>
           <View>
           {placesOutput}
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
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
   width: "70%"
 },
  placeButton: {
    width: "30%"
  }
});
