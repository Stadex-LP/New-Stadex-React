import axios from "axios";
import React, { useState } from "react";
import client from "../../../api";
import { Link } from "react-router-dom";

const postData = async (data) => {
  const response = await client.post("/materiels", data);
  return response.data;
};

function MateForm() {
  const [libelle, setlibelle] = useState("");
  const [prixUnitaire, setprixUnitaire] = useState("");
  const [estParJour, setestParJour] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = { libelle, prixUnitaire, estParJour };

    const response = await postData(data);
    console.log(response);
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
              Materiel
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="libelle"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={libelle}
                onChange={(event) => setlibelle(event.target.value)}
              />
            </div>
          </div>

          <div className="mt-5 col-span-full">
            <label
              htmlFor="prixUnitaire"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Prix unitaire materiel
            </label>{" "}
            <div className="mt-2">
              <input
                type="num"
                name="prixUnitaire"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={prixUnitaire}
                onChange={(event) => setprixUnitaire(event.target.value)}
              />{" "}
            </div>
          </div>

          <div className="mt-5 col-span-full">
            <label
              htmlFor="estParJour"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Par Jour
            </label>
            <div className="imgformulaire">
              <input
                type="checkbox"
                name="estParJour"
                value={estParJour}
                onChange={(event) => setestParJour(event.target.checked)}
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
        <Link to="/materiels/">
          <button
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

export default MateForm;
