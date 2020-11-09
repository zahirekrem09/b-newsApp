/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {View, StatusBar, ActivityIndicator, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';
import RootStackScreen from './src/screens/RootStackScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabScreen from './src/screens/MainTabScreen';
import {DrawerContent} from './src/screens/DrawerContent';
import SupportScreen from './src/screens/SupportScreen';
import BookmarkScreen from './src/screens/BookmarkScreen';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer = createDrawerNavigator();

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector((s) => s.users.userToken);
  const isLoading = useSelector((s) => s.users.isLoading);
  const isDarkTheme = useSelector((s) => s.users.isDarkTheme);

  // console.log('usertoken', token);

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#F6F7F9',
      text: '#051E34',
    },
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#051E34',
      text: '#ffffff',
    },
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  useEffect(() => {
    const getToken = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (err) {
        Alert.alert('B-News', err);
      }
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
    };
    getToken();
  }, [dispatch]);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#7952B3" />
      </View>
    );
  }

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <StatusBar backgroundColor="#7952B3" barStyle="light-content" />
        {token != null ? (
          <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            <Drawer.Screen name="Support" component={SupportScreen} />
            <Drawer.Screen name="Bookmarks" component={BookmarkScreen} />
          </Drawer.Navigator>
        ) : (
          <RootStackScreen />
        )}
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
