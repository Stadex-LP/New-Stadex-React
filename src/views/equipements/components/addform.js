import axios from "axios";
import React, { useState } from "react";
import client from "../../../api";
import "./index.css";
import { Link } from "react-router-dom";

const postData = async (data) => {
  const response = await client.post("/equipements", data);
  return response.data;
};

function EquiForm() {
  const [libelle, setlibelle] = useState("");
  const [prixHoraire, setprixHoraire] = useState("");
  const [codePlanitec, setcodePlanitec] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { libelle, prixHoraire, codePlanitec };
    console.log("data: ", data);
    const response = await postData(data);
    console.log("res: ", response);
    window.location.href = "/equipements/";
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="col-span-full">
            <label
              htmlFor="libelle"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Le nom de l'équipement
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="libelle"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={libelle}
                onChange={(e) => setlibelle(e.target.value)}
              />
            </div>
          </div>{" "}
          <div className="mt-5 col-span-full">
            <label
              htmlFor="prixHoraire"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Le prixHoraire équipements
            </label>
            <div className="mt-2">
              <input
                type="numero"
                name="prixHoraire"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={prixHoraire}
                onChange={(e) => setprixHoraire(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-5 col-span-full">
            <label
              htmlFor="codePlanitec"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Le codePlanitec de l'équipement
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="codePlanitec"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={codePlanitec}
                onChange={(e) => setcodePlanitec(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        {/* <Link to="/manifestations/"> 
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Annuler
            </button>
            </Link> */}
        <Link to="/equipements/">
          <button
            onClick={handleSubmit}
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

export default EquiForm;
