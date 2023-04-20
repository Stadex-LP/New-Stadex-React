import DashboardLayout from "../../layouts/dashboard";
import EquiTable from "./components/equitable";
import { Link } from "react-router-dom";

function Equipements() {
  return (
    <DashboardLayout>
      <div class="h-screen px-4 pb-24 overflow-auto md:px-6">
        <div className="flex h-fit w-full items-center justify-between pt-4 pb-[20px]">
          <div>
            <h1 class="text-4xl font-semibold">Les Equipements</h1>
            <h2 class="text-gray-400 text-md">
              Ici retrouvrez la liste de tous les équipements.
            </h2>
          </div>
          <Link to="/equipements/add">
            <button className="linear rounded-[20px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20">
              + Ajouter
            </button>
          </Link>
          <Link to="http://localhost/equipement_sportifs?export=csv">
            <button className="linear rounded-[20px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200">
              CSV
            </button>
          </Link>
        </div>
        <br />
        <EquiTable />
      </div>
    </DashboardLayout>
  );
}

export default Equipements;
