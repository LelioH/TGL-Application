import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import axios from 'axios';

import Routes from './src/routes/index.routes';

import { persistor, store } from './src/store';

// axios.interceptors.request.use(function (config) {
//   const token = store.getState().session.token;
//   config.headers.Authorization = token;

//   return config;
// });

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={styles.app}>
          <Routes />
        </View>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
});
