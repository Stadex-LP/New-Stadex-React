import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../../layouts/dashboard";
import client from "../../../api";
import { Link } from "react-router-dom";

function EditManifestation() {
  const { id } = useParams();
  const [manifestation, setManifestation] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    client
      .get(`/manifestations/${id}`)
      .then((response) => {
        console.log("res:", response.data);
        setManifestation(response.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setManifestation((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
    console.log("manif changed:", manifestation);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    client
      .patch(
        `/manifestations/${id}`,
        {
          denomination: manifestation.denomination,
          dateDebut: manifestation.dateDebut,
          dateFin: manifestation.dateFin,
          lieu: manifestation.lieu,
          organisateur: manifestation.organisateur.nom,
        },
        {
          headers: {
            "Content-Type": "application/merge-patch+json",
          },
        }
      )
      .then((response) => console.log("response:", response))
      .catch((error) => console.log(error));

    navigate("/manifestations/");
  };

  if (!manifestation) {
    return <div>Chargement des données ..</div>;
  }

  return (
    <DashboardLayout>
      <div class="h-screen px-4 pb-24 overflow-auto md:px-6">
        <div className="flex h-fit w-full items-center justify-between pt-4 pb-[20px]">
          <div>
            <h1 class="text-4xl font-semibold text-gray-800">
              Manifestations / Modifier
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
            Denomination :
            <input
              type="text"
              name="denomination"
              className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={manifestation.denomination}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label htmlFor="date-debut">
            Date de début :
            <input
              type="date"
              name="date-debut"
              className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={manifestation.dateDebut}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label htmlFor="date-fin">
            Date de fin :
            <input
              type="date"
              name="date-fin"
              className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={manifestation.dateFin}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label htmlFor="lieu">
            Lieu :
            <input
              type="text"
              name="lieu"
              className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={manifestation.lieu}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label htmlFor="organisateur">
            Organisateur :
            <input
              type="text"
              name="organisateur"
              className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={manifestation.organisateur?.nom}
              onChange={handleInputChange}
            />
            {/* <select
                name="organisateur"
                id="organisateur"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={handleSelectChange}
              >
                {organisateurList.map((organisateur) => (
                  <option key={organisateur.id} value={organisateur.id}>
                    {organisateur.nom}
                  </option>
                ))}
              </select> */}
          </label>
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
  );
}

export default EditManifestation;
