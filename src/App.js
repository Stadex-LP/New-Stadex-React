import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import DashboardLayout from "./layouts/dashboard";
import Home from "./views/home";
import Manifestations from "./views/manifestations";
import DetailsManifestation from "./views/manifestations/components/DetailsManifestation";
import EditManifestation from "./views/manifestations/components/EditManifestation";
import DetailsTransport from "./views/transports/components/DetailsTransport";
import EditTransport from "./views/transports/components/EditTransport";
import DetailsEquipement from "./views/equipements/components/DetailsEquipement";
import EditEquipement from "./views/equipements/components/EditEquipement";
import DetailsOrganisateur from "./views/organisateurs/components/DetailsOrganisateur";
import EditOrganisateur from "./views/organisateurs/components/EditOrganisateur";
import DetailsMateriel from "./views/materiels/components/DetailsMateriel";
import EditMateriel from "./views/materiels/components/EditMateriel";
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
        <Route path="/manifestations/:id" element={<DetailsManifestation />} />

        <Route path="/equipements/:id" element={<DetailsEquipement />} />
        <Route path="/equipements/edit/:id" element={<EditEquipement />} />
        <Route
          path="/manifestations/edit/:id"
          element={<EditManifestation />}
        />
        <Route path="/transports/:id" element={<DetailsTransport />} />
        <Route path="/transports/edit/:id" element={<EditTransport />} />

        <Route path="/organisateurs/:id" element={<DetailsOrganisateur />} />
        <Route path="/organisateurs/edit/:id" element={<EditOrganisateur />} />

        <Route path="/materiels/:id" element={<DetailsMateriel />} />
        <Route path="/materiels/edit/:id" element={<EditMateriel />} />

        <Route path="/transports" element={<Transports />} />
        <Route path="/equipements" element={<Equipements />} />
        <Route path="/organisateurs" element={<Organisateurs />} />
        <Route path="/materiels" element={<Materiels />} />

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
