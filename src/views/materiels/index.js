import DashboardLayout from "../../layouts/dashboard";
import MateTable from "./components/matetable";
import { Link } from "react-router-dom";

function Materiels() {
  return (
    <DashboardLayout>
      <div class="h-screen px-4 pb-24 overflow-auto md:px-6">
        <div className="flex h-fit w-full items-center justify-between pt-4 pb-[20px]">
          <div>
            <h1 class="text-4xl font-semibold">Les Matériaux</h1>
            <h2 class="text-gray-400 text-md">
              Ici retrouvrez la liste de toutes les matériaux.
            </h2>
          </div>
          <Link to="/materiels/add">
            <button className="linear rounded-[20px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 ">
              Ajouter +
            </button>
          </Link>
        </div>
        <br />
        <MateTable />
      </div>
    </DashboardLayout>
  );
}

export default Materiels;
