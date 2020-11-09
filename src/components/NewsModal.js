/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
//import libraries
import React, {Component} from 'react';
import {Dimensions, Share, StatusBar} from 'react-native';
import {WebView} from 'react-native-webview';
import Modal from 'react-native-modal';
import {
  Container,
  Header,
  Content,
  Body,
  Left,
  Right,
  Title,
  Button,
} from 'native-base';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const webViewHeight = Dimensions.get('window').height - 56;

// create a component
const ModalComponent = (props) => {
  handleClose = () => props.onClose();
  const {colors} = useTheme();

  const handleShare = () => {
    const {url, title} = props.articleData;
    message = `${title}\n\nRead More ${url}\n\nShared via B-News App`;
    return Share.share({message: message}, {dialogTitle: `Share ${title}`});
  };

  const {showModal, articleData} = props;
  const {url} = articleData;
  if (url != undefined) {
    return (
      <Modal
        style={{margin: 0, backgroundColor: colors.background}}
        animationType="slideInUp"
        transparent
        visible={showModal}
        onRequestClose={handleClose}>
        <Container
          style={{
            backgroundColor: colors.background,
          }}>
          <Header style={{backgroundColor: '#7952B3'}}>
            <Left>
              <Button onPress={handleClose} transparent>
                <Icon name="close" size={25} color={'#fff'} />
              </Button>
            </Left>
            <Body>
              <Title children={articleData.title} style={{color: 'white'}} />
            </Body>
            <Right>
              <Button onPress={handleShare} transparent>
                <Icon name="share" size={25} color={'#fff'} />
              </Button>
            </Right>
          </Header>
          <Content
            contentContainerStyle={{
              height: webViewHeight,
              backgroundColor: colors.background,
            }}>
            <WebView
              source={{uri: url}}
              style={{flex: 1, backgroundColor: colors.background}}
              onError={handleClose}
              startInLoadingState
              scalesPageToFit
            />
          </Content>
        </Container>
        <StatusBar backgroundColor="#7952B3" barStyle="light-content" />
      </Modal>
    );
  } else {
    return null;
  }
};

//make this component available to the app
export default ModalComponent;
