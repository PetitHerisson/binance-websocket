import React from 'react';
import { Provider } from 'react-redux';
import LineChart from './LineChart';
import store from './store';

const App = () => {
  return (
      <Provider store={store}>
        <LineChart />
      </Provider>
  );
}

export default App;
