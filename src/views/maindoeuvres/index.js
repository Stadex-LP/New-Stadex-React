import DashboardLayout from "../../layouts/dashboard";
import MainoTable from "./components/mainotable.jsx";
import { Link } from "react-router-dom";

function Maindoeuvres() {
  return (
    <DashboardLayout>
      <div class="h-screen px-4 pb-24 overflow-auto md:px-6">
        <div className="flex h-fit w-full items-center justify-between pt-4 pb-[20px]">
          <div>
            <h1 class="text-4xl font-semibold">Les Mains d'oeuvres</h1>
            <h2 class="text-gray-400 text-md">
              Ici retrouvrez la liste de toutes les mains d'oeuvres.
            </h2>
          </div>
          <Link to="/main_oeuvre/add">
            <button className="linear rounded-[20px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 ">
              Ajouter +
            </button>
          </Link>
          <Link to="http://localhost/main_oeuvre?export=csv">
            <button className="linear rounded-[20px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200">
              CSV
            </button>
          </Link>
        </div>
        <br />
        <MainoTable />
      </div>
    </DashboardLayout>
  );
}

export default Maindoeuvres;
