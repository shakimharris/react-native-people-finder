import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const listItem = (props) => (
 <View>
 <Text>{props.placeName}</Text>
 </View>
);

export default listItem;
