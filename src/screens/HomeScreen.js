/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  View,
  ActivityIndicator,
  FlatList,
  Text,
  RefreshControl,
} from 'react-native';
import {Container} from 'native-base';
import {useTheme} from 'react-native-paper';
import NewDataItem from '../components/NewDataItem';
import ModalComponent from '../components/NewsModal';
import {getArticles} from '../config/rest';
import {useSelector} from 'react-redux';

const Home = (props) => {
  const [newsData, setNewsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [modalArticleData, setModalArticleData] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
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

  const isExist = (news) => {
    if (favList.filter((item) => item.title === news.title).length > 0) {
      return true;
    }
    return false;
  };

  const getData = async () => {
    const data = await getArticles('general');
    setNewsData(data);
    setIsLoading(false);
  };

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    getData();
  }, [refreshing]);

  useEffect(() => {
    getData();
  }, []);

  const renderItem = ({item, index}) => (
    <NewDataItem
      onPress={handleItemDataOnPress}
      singleData={item}
      index={index}
      isExist={isExist}
    />
  );

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
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
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

export default Home;
