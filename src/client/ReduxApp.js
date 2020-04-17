import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { createStore } from 'redux';

const reducer = (state = { greeting: 'Hello World!' }, action) => state;
const store = createStore(reducer);

const Greeting = () => {
  const greeting = useSelector((state) => state.greeting);

  return React.createElement('div', { children: [greeting] });
};

export const ReduxApp = () =>
  React.createElement(Provider, {
    store,
    children: ['ReduxApp', React.createElement(Greeting, { key: 'greeting' })],
  });
