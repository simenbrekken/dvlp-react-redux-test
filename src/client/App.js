import React, { useState } from 'react';

export const App = () => {
  const [state] = useState('foo');

  return React.createElement('div', { children: ['App', state] });
};
