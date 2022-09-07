import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux/es/exports';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import store from './store/store';
import GlobalStyle from 'styles/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const persistor = persistStore(store);

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <GlobalStyle />
      <App />
    </PersistGate>
  </Provider>,
);
