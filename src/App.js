import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import DashboardLayout from "./layouts/dashboard";
import Home from "./views/home";
import Manifestations from "./views/manifestations";
import Transports from "./views/transports";
import Equipements from "./views/equipements";
import Organisateurs from "./views/organisateurs";
import Materiels from "./views/materiels";
import AddManifs from "./views/manifestations/add";
import AddTrans from "./views/transports/add";
import AddEqui from "./views/equipements/add";
import AddOrga from "./views/organisateurs/add";
import AddMate from "./views/materiels/add";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />} />
        <Route path="/home" element={<Home />} />
        <Route path="/manifestations" element={<Manifestations />} />
        <Route path="/transports" element={<Transports />} />
        <Route path="/equipement_sportifs" element={<Equipements />} />
        <Route path="/organisateurs" element={<Organisateurs />} />
        <Route path="/materiels" element={<Materiels />} />

        {/*  */}

        <Route path="/manifestations/add" element={<AddManifs />} />
        <Route path="/transports/add" element={<AddTrans />} />
        <Route path="/equipements/add" element={<AddEqui />} />
        <Route path="/organisateurs/add" element={<AddOrga />} />
        <Route path="/materiels/add" element={<AddMate />} />
      </Routes>
    </Router>
  );
}

export default App;
