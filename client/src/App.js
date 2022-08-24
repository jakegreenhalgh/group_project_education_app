import Navigation from './containers/Navigation'
import CategoryContainer from './containers/CategoryContainer';
import NavgationContainer from './containers/Navigation';
// import { createTheme } from '@mui/system';
// import { ThemeProvider } from '@emotion/react';
import AppNav from './components/NavBar';

// const theme = createTheme({
//   pallete: {
//     primary: {
//       main: '#fefefe'
//     }
//   }
// })

function App() {
  return (
    // <ThemeProvider theme={theme}>
    <>
    {/* <AppNav/> */}
        <NavgationContainer></NavgationContainer>
    </>
    // </ThemeProvider>

  );
}

export default App;

