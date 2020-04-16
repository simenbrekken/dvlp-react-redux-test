import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const reducer = (state = { greeting: 'Hello World!' }, action) => state;
const store = createStore(reducer);

const Greeting = () => {
  const greeting = useSelector((state) => state.greeting);

  return <div>Greeting: {greeting}</div>;
};

export const ReduxContainer = () => (
  <Provider store={store}>
    ReduxContainer <Greeting />
  </Provider>
);
