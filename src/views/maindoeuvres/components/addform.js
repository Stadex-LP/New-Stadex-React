//import axios from "axios";
import React, { useEffect, useState } from "react";
import client from "../../../api"; //connexion avec axios que l'on a nomée client
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const postData = async (data) => {
  // envoyer les données vers le lien localhost/api/mani
  const response = await client.post("/main_oeuvres", data);
  return response.data;
};

function MainOForm() {
  // variable pré-défini
  const [categorie, setcategorie] = useState("");
  const [prixHoraire, setprixHoraire] = useState(0);
  const [mainOeuvresList, setMainOeuvresList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    client
      .get("/main_oeuvres")
      .then((response) => {
        console.log("res:", response.data);
        setMainOeuvresList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSubmit = async (e) => {
    //soumettre le formulaire, il prend en option la fonction d'envoie
    e.preventDefault();

    const data = { categorie, prixHoraire };
    console.log("data: ", data);

    const response = await postData(data);
    console.log("res: ", response);
    navigate("/main_oeuvre");
  };

  const handleChangePrice = (e) => {
    const priceValue = parseFloat(e.target.value);
    setprixHoraire(priceValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="col-span-full">
            <label
              htmlFor="categorie"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Categorie Main oeuvre
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="categorie"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={categorie}
                onChange={(e) => setcategorie(e.target.value)}
              />
            </div>
          </div>

          <div className=" mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="dateDebut"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Prix Horaire
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="heure"
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={prixHoraire}
                  onChange={handleChangePrice}
                />
              </div>
            </div>

            {/* <div className="mt-2">
              <input
                type="text"
                name="maindouvres"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={maindouvres}
                onChange={(e) => setmaindouvres(e.target.value)}
              />
            </div> */}
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        {/* <Link to="/main-oeuvre/"> 
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Annuler
            </button>
            </Link> */}
        <Link to="/main_oeuvre/">
          <button
            onClick={(e) => handleSubmit(e)}
            type="submit"
            className="rounded-md bg-green-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </Link>
      </div>
    </form>
  );
}

export default MainOForm;
