import DashboardLayout from "../../layouts/dashboard";
import ManifTable from "./components/manifstable";
import { Link } from "react-router-dom";

function Manifestations() {
  return (
    <DashboardLayout>
      <div class="h-screen px-4 pb-24 overflow-auto md:px-6">
        <div className="flex h-fit w-full items-center justify-between pt-4 pb-[20px]">
          <div>
            <h1 class="text-4xl font-semibold">Les Manifestations</h1>
            <h2 class="text-gray-400 text-md">
              Ici retrouvrez la liste de toutes les manifestations.
            </h2>
          </div>
          <Link to="/manifestations/add">
            <button className="linear rounded-[20px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 ">
              Ajouter +
            </button>
          </Link>
          <Link to="http://localhost/manifestation?export=csv">
            <button className="linear rounded-[20px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200">
              CSV
            </button>
          </Link>
        </div>
        <br />
        <ManifTable />
      </div>
    </DashboardLayout>
  );
}

export default Manifestations;
