import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainPage from './components/mainPage/MainPage';
import DiagnosisPage from './components/diagnosisPage/DiagnonsisPage';
import DiagnosPage from './components/diagnosPage/DiagnosPage';
import BlockPage from './components/blockPage/BlockPage';
import BreastPage from './components/scales/breastPage/BreastPage';
import TannerPage from './components/scales/tannerPage/TannerPage';
import FigoPage from './components/scales/figoPage/FigoPage';
import MusaPage from './components/scales/musaPage/MusaPage';
import BadenPage from './components/scales/badenPage/BadenPage';
import HurtPage from './components/scales/hurtPage/HurtPage';
import GallayPage from './components/scales/gallayPage/GallayPage';
import ImtPage from './components/calculators/imtPage/ImtPage';
import IsaPage from './components/calculators/isaPage/IsaPage';
import RomaPage from './components/calculators/romaPage/RomaPage';
import RmiPage from './components/calculators/rmiPage/RmiPage';
import IntensivePage from './components/calculators/intensivePage/IntensivePage';

function App() {
  return (
    <Router >
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/diagnosis" element={<DiagnosisPage />} />
        <Route path="/diagnos" element={<DiagnosPage />} />
        <Route path="/block" element={<BlockPage />} />
        <Route path="/ludwig-scale" element={<BreastPage />} />
        <Route path="/tanner-scale" element={<TannerPage />} />
        <Route path="/figo-scale" element={<FigoPage/>} />
        <Route path="/musa-scale" element={<MusaPage/>} />
        <Route path="/baden-scale" element={<BadenPage/>} />
        <Route path="/hurt-scale" element={<HurtPage/>} />
        <Route path="/gallay-scale" element={<GallayPage/>} />
        <Route path="/imt-calc" element={<ImtPage/>} />
        <Route path="/isa-calc" element={<IsaPage/>} />
        <Route path="/roma-calc" element={<RomaPage/>} />
        <Route path="/rmi-calc" element={<RmiPage/>} />
        <Route path="/intensive-calc" element={<IntensivePage/>} />
      </Routes>
    </div>
    </Router >
  );
}

export default App;
