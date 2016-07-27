import Horizon from '@horizon/client';
import React from 'react';
import { render } from 'react-dom';
import App from 'components/app';

const horizon = new Horizon({ host: 'localhost:5001' });

horizon.onReady(() => {
  render(
    <App />,
    document.querySelector('main'),
  );
});

horizon.connect();
