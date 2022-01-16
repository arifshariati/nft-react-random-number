import { ThemeProvider } from "@mui/material/styles";
import './App.css';

import { TopBar } from './organisms';
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TopBar />
    </ThemeProvider>
  );
}

export default App;
