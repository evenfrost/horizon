import React, { PropTypes } from 'react';
import List from 'components/list';

const App = ({ state }) => (
  <div>
    <div>test</div>
    <List items={state.items} />
  </div>
);

App.propTypes = {
  items: PropTypes.array,
};

export default App;
