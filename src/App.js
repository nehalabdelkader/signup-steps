import { ThemeProvider } from '@mui/material/styles';

import theme from "./lib/theme";
import SignUpView from './views/SignUpView/SignUpView';


function App() {
  return (
    <ThemeProvider theme={theme}>
     <SignUpView />
    </ThemeProvider>
 
  );
}

export default App;
