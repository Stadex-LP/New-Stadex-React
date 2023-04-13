import axios from "axios";
import React, { useState } from "react";
import client from "../../../api";

const postData = async (data) => {
    const response = await client.post('/manifestations', data);
    return response.data;
}

function ManiForm() {
  const [denomination, setdenomination] = useState("");
  const [datefin, setdatefin] = useState("");
  const [datedebut, setdatedebut] = useState("");
  const [lieu, setlieu] = useState("");
  const [organisateur, setorganisateur] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = { denomination, datedebut, datefin, lieu, organisateur };

    const response = await postData(data);
    console.log(response);

  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">

          <div className="col-span-full">
            <label
              htmlFor="denomination"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Le nom de la manifestation
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="denomination"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={denomination}
                onChange={(event) => setdenomination(event.target.value)}
              />
            </div>
          </div>

          <div className=" mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="dateDebut"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Date de début
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  name="dateDebut"
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={datedebut}
                  onChange={(event) => setdatedebut(event.target.value)}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="dateFin"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Date de fin
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  name="dateFin"
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={datefin}
                  onChange={(event) => setdatefin(event.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="mt-5 col-span-full">
            <label
              htmlFor="lieu"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Le lieu de la manifestation
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="lieu"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={lieu}
                onChange={(event) => setlieu(event.target.value)}
              />
            </div>
          </div>

              
          <div className="col-span-full">
            <label
              htmlFor="organisateur"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              L'organisateur
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="organisateur"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={organisateur}
                onChange={(event) => setorganisateur(event.target.value)}
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
        <button
          type="submit"
          className="rounded-md bg-green-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default ManiForm;
