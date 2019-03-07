import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { LocaleProvider } from 'antd';
import { getPersistor } from '@rematch/persist';
import { PersistGate } from 'redux-persist/integration/react';
import './styles/index.css';
import Layout from './pages/Layout';
import store from './config/store';
import getLocalesAntd from './config/locale';
import * as registerServiceWorker from './registerServiceWorker';

const persistor = getPersistor();

const App = () => {
  return (
    <LocaleProvider locale={getLocalesAntd()}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router>
            <Layout />
          </Router>
        </PersistGate>
      </Provider>
    </LocaleProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker.register();
