import React from 'react';
import configureStore from '../store/configureStore.js';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from '../routes';

import rootSaga from '../sagas/index';
const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});

const store = configureStore(window.__INITIAL_STATE__);
store.runSaga(rootSaga);

const App = () => {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
      </MuiThemeProvider>
    </Provider>
  );
};

export default App;
