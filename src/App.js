import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import DashboardLayout from './layouts/dashboard';
import Manifestations from './views/manifestations';
import Transports from './views/transports';
import Equipements from './views/equipements';
import Organisateurs from './views/organisateurs';
import Materiels from './views/materiels';
import AddManifs from './views/manifestations/add';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<DashboardLayout/>} />
        <Route path='/manifestations' element={<Manifestations/>} />
        <Route path='/transports' element={<Transports/>} />
        <Route path='/equipements' element={<Equipements/>} />
        <Route path='/organisateurs' element={<Organisateurs/>} />
        <Route path='/materiels' element={<Materiels/>} />

        {/*  */}

        <Route path='/manifestations/add' element={<AddManifs/>} />

      </Routes>
      
    </Router>
  );
}

export default App;
