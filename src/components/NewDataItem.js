/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import React from 'react';
import {
  View,
  Share,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

import TimeAgo from './TimeAgo';
import {useTheme} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';

// import {
//   fetchNews,
//   addToFavList,
//   removeFromFavList,
// } from '../redux/news/newsActions';

const NewDataItem = (props) => {
  const {singleData, onPress} = props;
  const {colors} = useTheme();
  const favList = useSelector((state) => state.users.favList);
  const dispatch = useDispatch();

  const handlePress = () => {
    const {url, title} = singleData;
    onPress({url, title});
  };

  const handleShare = () => {
    const {url, title} = props.singleData;
    const message = `${title}\n\nRead More ${url}\n\nShared via B-News App`;
    return Share.share(
      {title, message, url: message},
      {dialogTitle: `Share ${title}`},
    );
  };

  const handleAddFav = () => {
    dispatch({type: 'ADD_TO_FAVLIST', payload: singleData});
  };

  const handleRemoveFav = () => {
    dispatch({type: 'REMOVE_FROM_FAVLIST', payload: singleData});
  };
  const isExist = () => {
    if (favList.filter((item) => item.title === singleData.title).length > 0) {
      return true;
    }
    return false;
  };

  return (
    <View
      style={[
        {
          backgroundColor: colors.background,
          shadowColor: colors.text,
        },
        styles.dataContainer,
      ]}>
      <TouchableOpacity
        onPress={handlePress}
        style={[styles.firstContent, {backgroundColor: colors.background}]}>
        <View style={{margin: 7}}>
          <Image
            style={styles.dataImage}
            source={{
              uri:
                singleData.urlToImage != null
                  ? singleData.urlToImage
                  : 'https://newsinterpretation.com/wp-content/uploads/2020/03/news33.jpg',
            }}
          />
        </View>

        <View style={{flex: 1, margin: 8}}>
          <Text
            numberOfLines={2}
            style={{
              color: colors.text,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            {singleData.title}
          </Text>
          <Text numberOfLines={3} style={{color: colors.text}}>
            {singleData.description}
          </Text>
          <View style={styles.secondContent}>
            <Text note style={{color: colors.text}}>
              {singleData.author}
            </Text>
            <TimeAgo
              time={singleData.publishedAt}
              style={{color: colors.text}}
            />
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => {
            isExist() ? handleRemoveFav() : handleAddFav(); //1. yontem
            // !isExist(singleData)
            //   ? dispatch({
            //       type: 'ADD_TO_FAVLIST',
            //       payload: {favNews: singleData},
            //     })
            //   : dispatch({
            //       type: 'REMOVE_FROM_FAVLIST',
            //       payload: {favNews: singleData},
            //     });
          }}
          style={{flex: 1, marginLeft: 80}}>
          <FontAwesome
            name={isExist() ? 'bookmark' : 'bookmark-o'}
            color={colors.text}
            size={22}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleShare} style={{marginRight: 40}}>
          <FontAwesome name="share" color={colors.text} size={22} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewDataItem;

const styles = StyleSheet.create({
  dataImage: {
    width: 60,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
    flex: 1,
  },
  secondContent: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
    marginLeft: 0,
  },
  firstContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dataContainer: {
    margin: 10,
    flexWrap: 'wrap',
    borderRadius: 8,
    // shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
});
