/* eslint-disable prettier/prettier */
import React from 'react';
import {StatusBar, View, Text, Button} from 'react-native';
import {useTheme} from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <StatusBar backgroundColor="#7952B3" barStyle="light-content" />
      <Text style={{color: colors.text}}>Detail Screen</Text>
      <Button
        title="Go to home screen"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default HomeScreen;
