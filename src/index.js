import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from 'components/App';
import 'modern-normalize'
import './index.css';
import  './stylesheets/fonts/circe/Circe-Bold.ttf'
import  './stylesheets/fonts/circe/Circe-Regular.ttf'
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter basename="/team-project-react">
      <ThemeProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </PersistGate>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);
