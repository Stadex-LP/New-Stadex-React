import axios from "axios";
import React, {useState} from "react";
import client from "../../../api";
import "./index.css";

const postData = async (data) => {
  const response = await client.post('/equipement_sportifs', data);
  return response.data;
}

function EquiForm() {

  const [Libelle, setlibelle] = useState("");
  const [PrixHorraire, setprixho] = useState("");
  const [CodePlanetic, setcodeplanet] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = { Libelle, PrixHorraire, CodePlanetic };

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
              Le nom de l'équipement
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
          </div>{" "}
          <div className="mt-5 col-span-full">
            <label
              htmlFor="PrixHorraire"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Le PrixHorraire équipements
            </label>
            <div className="mt-2">
              <input
                type="num"
                name="PrixHorraire"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={PrixHorraire}
                onChange={(event) => setprixho(event.target.value)}
              />
            </div>
          </div>
          <div className="mt-5 col-span-full">
            <label
              htmlFor="CodePlanetic"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Le CodePlanetic de l'équipement
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="CodePlanetic"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={CodePlanetic}
                onChange={(event) => setcodeplanet(event.target.value)}
              />
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

export default EquiForm;