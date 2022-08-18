import React, { useState } from 'react';
import './App.css';
import useFetchClothingItems from './hooks/useFetchClothingItems/useFetchClothingItems';
import Home from './screens/Home/Home.index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import NavBar from './components/AppBar/AppBar.index';
import SavedOutfits from './screens/SavedOutfits/SavedOutfits.index';
import { ScreensNames } from './types/screen.types';



const renderCurrScreen = (currScreen: ScreensNames) => {
  if (currScreen === ScreensNames.Home) {
    return <Home />
  }

  return <SavedOutfits />
}


function App() {
  const { loading } = useFetchClothingItems();
  const [currScreen, setCurrScreen] = useState(ScreensNames.Home);

  return (
    <div className="App">
      <NavBar currScreen={currScreen} />
      {loading ?
        <CircularProgress /> :
        renderCurrScreen(currScreen)
      }
    </div >
  );
}

export default App;
