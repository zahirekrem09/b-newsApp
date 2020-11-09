/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {FlatList, View, Text} from 'react-native';
import {Container} from 'native-base';
import {useTheme} from '@react-navigation/native';
import NewDataItem from '../components/NewDataItem';
import ModalComponent from '../components/NewsModal';
import {useSelector} from 'react-redux';

const Bookmark = (props) => {
  const [modalArticleData, setModalArticleData] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handleItemDataOnPress = (articleData) => {
    setModalArticleData(articleData);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalArticleData({});
    setModalVisible(false);
  };

  const favList = useSelector((state) => state.users.favList);

  // useEffect(() => {
  //   console.log(favList);
  // }, [favList]);

  const {colors} = useTheme();

  const renderItem = ({item, index}) => (
    <NewDataItem
      singleData={item}
      index={index}
      onPress={handleItemDataOnPress}
    />
  );
  let view =
    favList.lenght > 0 ? (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.background,
        }}>
        <Text>Please Wait..</Text>
      </View>
    ) : (
      <FlatList
        data={favList.reverse()}
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

export default Bookmark;
