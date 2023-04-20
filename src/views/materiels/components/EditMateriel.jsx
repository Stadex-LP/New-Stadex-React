import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../../layouts/dashboard";
import client from "../../../api";
import { Link } from "react-router-dom";

function EditMateriel() {
  const { id } = useParams();
  const [materiel, setMateriel] = useState({});
  const [libelle, setlibelle] = useState("");
  const [prixUnitaire, setprixUnitaire] = useState(0);
  const [estParJour, setestParJour] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    client
      .get(`/materiels/${id}`)
      .then((response) => {
        console.log("res:", response.data);
        setMateriel(response.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { libelle, prixUnitaire, estParJour };
    const response = await patchData(data);
    console.log("res: ", response);
    navigate("/materiels/");
  };

  if (!materiel) {
    return <div>Chargement des données ..</div>;
  }

  const handleChangePrice = (e) => {
    e.preventDefault();
    const priceValue = parseFloat(e.target.value);
    setprixUnitaire(priceValue);
  };

  const patchData = async (data) => {
    const response = await client.patch(`/materiels/${id}`, data, {
      headers: {
        "Content-Type": "application/merge-patch+json",
      },
    });
    return response.data;
  };

  return (
    <main>
      <DashboardLayout>
        <div class="h-screen px-4 pb-24 overflow-auto md:px-6">
          <div className="flex h-fit w-full items-center justify-between pt-4 pb-[20px]">
            <div>
              <h1 class="text-4xl font-semibold text-gray-800">
                Materiels / Modifier
              </h1>
            </div>

            <Link to="/manifestations/">
              <button className="linear rounded-[20px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20">
                Annuler
              </button>
            </Link>
          </div>

          <br />
          <form onSubmit={handleSubmit}>
            <label htmlFor="denomination">
              Libelle :
              <input
                type="text"
                name="libelle"
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={libelle}
                onChange={(e) => setlibelle(e.target.value)}
              />
            </label>
            <br />
            <label htmlFor="lieu">
              Prix Unitaire :
              <input
                type="number"
                name="prixUnitaire"
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={prixUnitaire}
                onChange={handleChangePrice}
              />
            </label>
            <br />
            <label htmlFor="lieu">
              Par Jour :
              <br />{" "}
              <input
                type="checkbox"
                name="estParJour"
                value={estParJour}
                onChange={(e) => setestParJour(e.target.value)}
              />
            </label>
            <br />
            <br />
            <button
              type="submit"
              className="rounded-md bg-green-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sauvegarder
            </button>
          </form>
        </div>
      </DashboardLayout>
    </main>
  );
}

export default EditMateriel;
