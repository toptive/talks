import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Root from './src/Root';
import { Provider } from 'react-redux';

import store from './src/redux/createStore';

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
