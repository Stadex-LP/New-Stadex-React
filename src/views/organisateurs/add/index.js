import DashboardLayout from "../../../layouts/dashboard";
import OrgaForm from "../components/addform";

function AddOrga() {
  return (
    <DashboardLayout>
      <div class="h-screen px-4 pb-24 overflow-auto md:px-6">
        <div className="flex h-fit w-full items-center justify-between pt-4 pb-[20px] shadow-2xl shadow-gray-100">
          <div>
            <h1 class="text-4xl font-semibold text-gray-800">
              Ajouter un nouvelle association
            </h1>
            <h2 class="text-gray-400 text-md">
              Remplissez le formulaire ci-dessous.
            </h2>
          </div>

          <button className="linear rounded-[20px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20">
            Annuler
          </button>
        </div>
        <br />
        <OrgaForm />
      </div>
    </DashboardLayout>
  );
}

export default AddOrga;
