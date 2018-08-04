import React from 'react';
import {
  addPlace,
  selectPlace,
  deletePlace,
  deselectPlace
} from './src/store/actions/index';
import { Provider } from 'react-redux';
import App2 from './App2';
import configureStore from './src/store/configureStore';
const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App2 />
      </Provider>
    );
  }
}
