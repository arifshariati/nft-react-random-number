import { useState } from 'react';
import { ThemeProvider } from "@mui/material/styles";
import { getOwnBalance } from './web3/web3Client';
import './App.css';

import { TopBar } from './organisms';
import theme from "./theme";
import { Button, Typography } from '@mui/material';

function App() {

  // const [minted, setMinted] = useState(false);
  const [balance, setBalance] = useState(0);

  // const mint = () => {

  //   mintToken()
  //     .then(tx => {
  //       console.log(tx);
  //       setMinted(true);
  //     })
  //     .catch(err => console.log(err));
  // };

  const fetchBalance = () => {
    getOwnBalance()
      .then((balance) => {
        setBalance(balance);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <TopBar />
      {/* {
        !minted
          ? <Button onClick={() => mint()} variant='contained'>Mint Token</Button>
          : <Typography variant='h5'>Token Minted Successfully</Typography>
      } */}

      <Typography variant='h5'>Your Balance is {balance}</Typography>
      <Button onClick={() => fetchBalance()} variant='contained'>Refresh Balance</Button>
    </ThemeProvider>
  );
}

export default App;
