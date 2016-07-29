import Horizon from '@horizon/client';
import React from 'react';
import { render } from 'react-dom';
import App from 'components/app';

const horizon = new Horizon({ host: 'localhost:5001' });
const items = [{
  name: 1,
}, {
  name: 2,
}, {
  name: 3,
}];

const state = {
  items,
};

horizon.onReady(() => {
  render(
    <App state={state} />,
    document.querySelector('main'),
  );
});

horizon.connect();
