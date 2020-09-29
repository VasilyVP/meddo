import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import MenuBar from '../MenuBar';
import MyItems from '../MyItems';

const theme = createMuiTheme({
  palette: {
    /*
    background: {
      paper: '#80d8ff'
    },
    */
    primary: {
      main: '#2f353c',
      //light: '#5a6268',
    },
    greyElement: {
      main: '#5a6268'
    },
    /*
    secondary: {
      main: '#00b0ff'
    }
    */
  }
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MenuBar />
        <MyItems />
      </ThemeProvider>
    </>
  );
}

export default App;
