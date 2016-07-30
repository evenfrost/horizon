import React from 'react';
import { render } from 'react-dom';
import App from 'components/app';
import horizon from 'horizon';

horizon.onReady(() => {
  render(
    <App />,
    document.querySelector('main'),
  );
});

horizon.connect();
