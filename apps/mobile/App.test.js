/* eslint-disable-next-line no-unused-vars */
/* global __DEV__ */
/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from './App';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});
