import './App.css';
import { store } from './store';
import { Provider } from 'react-redux';
import { HomePage } from './pages/HomePage';
import { CssBaseline, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
  palette: {
    mode: "dark"
  }
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HomePage />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
