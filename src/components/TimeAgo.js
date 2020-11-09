/* eslint-disable prettier/prettier */
import React from 'react';
import {Text} from 'native-base';
import moment from 'moment';

// create a component
const TimeAgo = (props) => {
  const time = moment(props.time || moment.now()).fromNow();
  return (
    <Text note style={{marginHorizontal: 10}}>
      {time}
    </Text>
  );
};

//make this component available to the app
// eslint-disable-next-line prettier/prettier
export default TimeAgo;
