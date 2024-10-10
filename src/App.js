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
import VteoPage from './components/forms/vteoPage/VteoPage';
import PreeclampsiaPage from "./components/forms/preeclampsiaPage/PreeclampsiaPage";
import EdinburgPage from "./components/forms/edinburgPage/EdinburgPage";
import ChecklistPage from "./components/forms/checklistPage/ChecklistPage";
import OralPage from "./components/forms/oralPage/OralPage";
import MetalPage from "./components/forms/metalPage/MetalPage";
import LngPage from "./components/forms/lngPage/LngPage";
import ImplantPage from "./components/forms/implantPage/ImplantPage";
import InjectionPage from "./components/forms/injectionPage/InjectionPage";
import ProlapsPage from "./components/forms/prolapsPage/ProlapsPage";
import DiagnosticsPage from "./components/forms/diagnosticsPage/DiagnosticsPage";
import PmdrPage from "./components/forms/pmdrPage/PmdrPage";

function App() {
  return (
    <Router >
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/diagnosis" element={<DiagnosisPage />} />
          <Route path="/diagnosis/:code" element={<DiagnosisPage />} /> {/* Новый маршрут с параметром code */}
          <Route path="/diagnos" element={<DiagnosPage />} />
          <Route path="/diagnos/:id" element={<DiagnosPage />} /> {/* Новый маршрут с параметром code */}
          <Route path="/block" element={<BlockPage />} />

          <Route path="/ludwig-scale" element={<BreastPage />} />
          <Route path="/tanner-scale" element={<TannerPage />} />
          <Route path="/figo-scale" element={<FigoPage />} />
          <Route path="/musa-scale" element={<MusaPage />} />
          <Route path="/baden-scale" element={<BadenPage />} />
          <Route path="/hurt-scale" element={<HurtPage />} />
          <Route path="/gallay-scale" element={<GallayPage />} />

          <Route path="/imt-calc" element={<ImtPage />} />
          <Route path="/isa-calc" element={<IsaPage />} />
          <Route path="/roma-calc" element={<RomaPage />} />
          <Route path="/rmi-calc" element={<RmiPage />} />
          <Route path="/intensive-calc" element={<IntensivePage />} />

          <Route path="/vteo-form" element={<VteoPage />} />
          <Route path="/preeclampsia-form" element={<PreeclampsiaPage />} />
          <Route path="/edinburg-form" element={<EdinburgPage />} />
          <Route path="/checklist-form" element={<ChecklistPage />} />
          <Route path="/oral-form" element={<OralPage />} />
          <Route path="/metal-form" element={<MetalPage />} />
          <Route path="/lng-form" element={<LngPage />} />
          <Route path="/implant-form" element={<ImplantPage />} />
          <Route path="/injection-form" element={<InjectionPage />} />
          <Route path="/prolaps-form" element={<ProlapsPage />} />
          <Route path="/diagnostics-form" element={<DiagnosticsPage />} />
          <Route path="/pmdr-form" element={<PmdrPage />} />
        </Routes>
      </div>
    </Router >
  );
}

export default App;
