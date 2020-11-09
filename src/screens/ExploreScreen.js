/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text, Button, Alert} from 'react-native';
const ExploreScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>ExploreScreen Screen</Text>
      <Button title="click" onPress={() => Alert.alert('ExploreScreen')} />
    </View>
  );
};

export default ExploreScreen;
