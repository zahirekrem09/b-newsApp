import React from 'react';
import {StyleSheet, View, Text, Button, Alert} from 'react-native';
const ProfileScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>ProfileScreen Screen</Text>
      <Button title="click" onPress={() => Alert.alert('ProfileScreen')} />
    </View>
  );
};

export default ProfileScreen;
