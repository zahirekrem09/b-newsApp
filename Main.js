/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';

import {Provider as ReduxProvider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';

import {userReducer} from './src/redux/userReducer';
import App from './App';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  favList: ['favList'],
};
const rootReducer = combineReducers({
  users: persistReducer(persistConfig, userReducer),
});
const store = createStore(rootReducer, applyMiddleware(thunk));
const appPersist = persistStore(store);
const Main = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={appPersist}>
        <App />
      </PersistGate>
    </ReduxProvider>
  );
};

export default Main;
