import React from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import HotelsPage from './pages/HotelsPage'; // abhi placeholder bana lenge
import RoomsDetails from './pages/RoomPage';
import RoomPage from './pages/RoomPage';
import WhatsAppButton from './components/WhatsAppButton';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hotels' element={<HotelsPage />} /> {/* 🔹 Add this */}
          <Route path='/rooms/:id' element={<RoomPage/>}/>
        </Routes>
        <WhatsAppButton/>
      </div>

    </div>
  );
};

export default App;
