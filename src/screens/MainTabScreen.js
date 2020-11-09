/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

import SportsScreen from './SportsScreen';
import HomeScreen from './HomeScreen';

import BusinessScreen from './BusinessScreen';
import ScienceScreen from './ScienceScreen';
import SearchScreen from './SearchScreen';
import BookmarkScreen from './BookmarkScreen';
// import ExploreScreen from './ExploreScreen';
// const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const BusinessStack = createStackNavigator();
const SportsStack = createStackNavigator();
const ScienceStack = createStackNavigator();
const SearchStack = createStackNavigator();
const BookmarkStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#7952B3',
        tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
      }}
    />

    <Tab.Screen
      name="Business"
      component={BusinessStackScreen}
      options={{
        tabBarLabel: 'Business',
        tabBarColor: '#7952B3',
        tabBarIcon: ({color}) => (
          <Icon name="md-business" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchStackScreen}
      options={{
        tabBarLabel: 'Search',
        tabBarColor: '#7952B3',
        tabBarIcon: ({color}) => (
          <Icon2 name="search" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Sports"
      component={SportsStackScreen}
      options={{
        tabBarLabel: 'Sports',
        tabBarColor: '#7952B3',
        tabBarIcon: ({color}) => (
          <Icon2 name="sports" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Science"
      component={ScienceStackScreen}
      options={{
        tabBarLabel: 'Science',
        tabBarColor: '#7952B3',
        tabBarIcon: ({color}) => (
          <Icon2 name="science" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Bookmark"
      component={BookmarkStackScreen}
      options={{
        tabBarLabel: 'Bookmark',
        tabBarColor: '#7952B3',
        tabBarIcon: ({color}) => (
          <Icon name="bookmarks" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: '#7952B3'},
      headerTintColor: '#fff',
      headerTitleStyle: {fontWeight: 'bold', alignItems: 'center'},
    }}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'General',
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={25}
            backgroundColor="#7952B3"
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight: () => (
          <Icon.Button
            name="bookmarks"
            size={25}
            backgroundColor="#7952B3"
            onPress={() => navigation.navigate('Bookmark')}
          />
        ),
      }}
    />
  </HomeStack.Navigator>
);
const BookmarkStackScreen = ({navigation}) => (
  <BookmarkStack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: '#7952B3'},
      headerTintColor: '#fff',
      headerTitleStyle: {fontWeight: 'bold', alignItems: 'center'},
    }}>
    <BookmarkStack.Screen
      name="Bookmarks"
      component={BookmarkScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={25}
            backgroundColor="#7952B3"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </BookmarkStack.Navigator>
);
const BusinessStackScreen = ({navigation}) => (
  <BusinessStack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: '#7952B3'},
      headerTintColor: '#fff',
      headerTitleStyle: {fontWeight: 'bold', alignItems: 'center'},
    }}>
    <BusinessStack.Screen
      name="Business"
      component={BusinessScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={25}
            backgroundColor="#7952B3"
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight: () => (
          <Icon.Button
            name="bookmarks"
            size={25}
            backgroundColor="#7952B3"
            onPress={() => navigation.navigate('Bookmark')}
          />
        ),
      }}
    />
  </BusinessStack.Navigator>
);
const SportsStackScreen = ({navigation}) => (
  <SportsStack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: '#7952B3'},
      headerTintColor: '#fff',
      headerTitleStyle: {fontWeight: 'bold', alignItems: 'center'},
    }}>
    <SportsStack.Screen
      name="Sports"
      component={SportsScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={25}
            backgroundColor="#7952B3"
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight: () => (
          <Icon.Button
            name="bookmarks"
            size={25}
            backgroundColor="#7952B3"
            onPress={() => navigation.navigate('Bookmark')}
          />
        ),
      }}
    />
  </SportsStack.Navigator>
);
const ScienceStackScreen = ({navigation}) => (
  <ScienceStack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: '#7952B3'},
      headerTintColor: '#fff',
      headerTitleStyle: {fontWeight: 'bold', alignItems: 'center'},
    }}>
    <ScienceStack.Screen
      name="Science"
      component={ScienceScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={25}
            backgroundColor="#7952B3"
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight: () => (
          <Icon.Button
            name="bookmarks"
            size={25}
            backgroundColor="#7952B3"
            onPress={() => navigation.navigate('Bookmark')}
          />
        ),
      }}
    />
  </ScienceStack.Navigator>
);
const SearchStackScreen = ({navigation}) => (
  <SearchStack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: '#7952B3'},
      headerTintColor: '#fff',
      headerTitleStyle: {fontWeight: 'bold', alignItems: 'center'},
    }}>
    <SearchStack.Screen
      name="Search"
      component={SearchScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={25}
            backgroundColor="#7952B3"
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight: () => (
          <Icon.Button
            name="bookmarks"
            size={25}
            backgroundColor="#7952B3"
            onPress={() => navigation.navigate('Bookmark')}
          />
        ),
      }}
    />
  </SearchStack.Navigator>
);
