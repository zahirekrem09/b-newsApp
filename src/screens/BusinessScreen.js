/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator, FlatList, Text} from 'react-native';
import {Container} from 'native-base';
import {useTheme} from '@react-navigation/native';
import NewDataItem from '../components/NewDataItem';
import ModalComponent from '../components/NewsModal';
import {getArticles} from '../config/rest';
import {useSelector} from 'react-redux';
const Business = (props) => {
  const [newsData, setNewsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [modalArticleData, setModalArticleData] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const {colors} = useTheme();

  const favList = useSelector((state) => state.favList);
  const handleItemDataOnPress = (articleData) => {
    setModalArticleData(articleData);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalArticleData({});
    setModalVisible(false);
  };
  const getData = async () => {
    const data = await getArticles('business');
    setNewsData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  function renderItem({item, index}) {
    return (
      <NewDataItem
        onPress={handleItemDataOnPress}
        singleData={item}
        index={index}
      />
    );
  }

  let view = isLoading ? (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background,
      }}>
      <ActivityIndicator size="large" color="#7952B3" />
      <Text style={{marginTop: 10, color: colors.text}}>Please Wait..</Text>
    </View>
  ) : (
    <FlatList
      data={newsData}
      keyExtractor={(item) => item.title}
      renderItem={renderItem}
    />
  );
  return (
    <Container style={{backgroundColor: colors.background}}>
      <Container style={{backgroundColor: colors.background}}>{view}</Container>
      <ModalComponent
        showModal={modalVisible}
        articleData={modalArticleData}
        onClose={handleModalClose}
      />
    </Container>
  );
};

export default Business;
