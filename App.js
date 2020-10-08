import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import CounterScreen from './app/Screens/CounterScreen';
import store from './app/store';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <CounterScreen />
      </SafeAreaView>
    </Provider>
  );
}
