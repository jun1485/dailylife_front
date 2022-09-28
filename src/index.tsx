import ReactDOM from 'react-dom/client';
import './index.scss';
import { Provider } from 'react-redux/es/exports';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import GlobalStyle from 'styles/GlobalStyle';
import theme from 'styles/theme';
import { ThemeProvider } from 'styled-components';
import { store } from 'store/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const persistor = persistStore(store);

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </PersistGate>
  </Provider>,
);