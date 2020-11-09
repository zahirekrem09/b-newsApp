/* eslint-disable prettier/prettier */
import React, {Component, useState, useEffect} from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';
import {Container} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

import {useTheme} from '@react-navigation/native';

import NewDataItem from '../components/NewDataItem';

import Modal from '../components/NewsModal';
import {api_key, search_url} from '../config/rest';

import {useDispatch, useSelector} from 'react-redux';
import {connect} from 'react-redux';

const SearchScreen = (props) => {
  const [data, setData] = useState(null);
  const [modalArticleData, setModalArticleData] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [query, setQuery] = useState('');
  const {colors} = useTheme();

  const handleItemDataOnPress = (articleData) => {
    setModalArticleData(articleData);
    setModalVisible(true);
  };
  const handleSearchChange = (val) => {
    setQuery(val);
  };
  //   console.log(query);
  const handleModalClose = () => {
    setModalArticleData({});
    setModalVisible(false);
  };

  async function handleSearch() {
    const response = await fetch(
      `${search_url}?q=${query}&pageSize=50&apiKey=${api_key}`,
    );
    const result = await response.json();
    // console.log(result.articles.length);
    setData(result.articles);
    setQuery('');
  }
  function renderItem({item, index}) {
    return (
      <NewDataItem
        onPress={handleItemDataOnPress}
        singleData={item}
        index={index}
      />
    );
  }
  let view =
    data?.length != 0 ? (
      <FlatList
        data={data}
        keyExtractor={(item) => item.title}
        renderItem={renderItem}
      />
    ) : (
      <View style={styles.noFound}>
        <Text style={[styles.noFoundText, {color: colors.text}]}>
          No found news
        </Text>
      </View>
    );

  return (
    <Container style={{backgroundColor: colors.background}}>
      <View style={styles.action}>
        <TouchableOpacity
          onPress={() => {
            handleSearch();
          }}>
          <Icon2 name="search" color="grey" size={30} />
        </TouchableOpacity>
        <TextInput
          placeholder="Search Here"
          style={[styles.textInput, {color: colors.text}]}
          autoCapitalize="none"
          onChangeText={(val) => handleSearchChange(val)}
          placeholderTextColor={colors.text}
          onSubmitEditing={handleSearch}
          value={query}
        />
      </View>

      <Container style={{backgroundColor: colors.background}}>{view}</Container>
      <Modal
        showModal={modalVisible}
        articleData={modalArticleData}
        onClose={handleModalClose}
      />
    </Container>
  );
};
export default SearchScreen;

const styles = StyleSheet.create({
  action: {
    flexDirection: 'row',
    margin: 10,
    marginRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    borderColor: '#f2f2f2',
    borderWidth: 2,
    padding: 5,
    borderRadius: 10,

    // backgroundColor: 'red',
  },

  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    padding: 15,
    color: '#05375a',
    fontSize: 16,
  },
  noFound: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noFoundText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
