import { LocalDining } from '@mui/icons-material';
import React from 'react';
import './App.css';
import useFetchClothingItems from './hooks/useFetchClothingItems/useFetchClothingItems';
import Home from './screens/Home/Home.index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import NavBar from './components/AppBar/AppBar.index';

function App() {
  const { loading } = useFetchClothingItems();

  return (
    <div className="App">
      <NavBar />
      {loading ? <CircularProgress /> :
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="users/*" element={<Users />} /> */}
          </Routes>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
