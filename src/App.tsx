import { LocalDining } from '@mui/icons-material';
import React, { useState } from 'react';
import './App.css';
import useFetchClothingItems from './hooks/useFetchClothingItems/useFetchClothingItems';
import Home from './screens/Home/Home.index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import NavBar from './components/AppBar/AppBar.index';
import SavedOutfits from './screens/Home/SavedOutfits/SavedOutfits.index';

enum Screens {
  Home = "מסך הבית",
  SavedOutfits = 'מסך פריטי לבוש'
}

const renderCurrScreen = (currScreen: Screens) => {
  if (currScreen === Screens.Home) {
    return <Home />
  }

  return <SavedOutfits />
}


function App() {
  const { loading } = useFetchClothingItems();
  const [currScreen, setCurrScreen] = useState(Screens.SavedOutfits);

  return (
    <div className="App">
      <NavBar currScreen={currScreen} />
      {loading ? <CircularProgress /> :
        renderCurrScreen(currScreen)
      }
    </div >
  );
}

export default App;
