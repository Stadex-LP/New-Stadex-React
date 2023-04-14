import axios from "axios";
import React, {useState} from "react";
import client from "../../../api";

const postData = async (data) => {
  const response = await client.post('/materiels', data);
  return response.data;
}

function MateForm() {

  const [Libelle, setlibelle] = useState("");
  const [PrixUnitaire, setprix] = useState("");
  const [EstParJour, setjour] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = { Libelle, PrixUnitaire, EstParJour };

    const response = await postData(data);
    console.log(response);

  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="col-span-full">
            <label
              htmlFor="Libelle"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Materiel
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="Libelle"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={Libelle}
                onChange={(event) => setlibelle(event.target.value)}
              />
            </div>
          </div>

          <div className="mt-5 col-span-full">
            <label
              htmlFor="PrixUnitaire"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Prix unitaire materiel
            </label>{" "}
            <div className="mt-2">
              <input
                type="num"
                name="PrixUnitaire"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={PrixUnitaire}
                onChange={(event) => setprix(event.target.value)}
              />{" "}
            </div>
          </div>

          <div className="mt-5 col-span-full">
            <label
              htmlFor="EstParJour"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Par Jour
            </label>
            <div className="imgformulaire">
              <select class="option" name="choix" value={EstParJour}
                onChange={(event) => setjour(event.target.value)}>
                <option>oui</option>
                <option>non</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
  
}

export default MateForm;
