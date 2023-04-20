import axios from "axios";
import React, { useState } from "react";
import client from "../../../api";
import { Link } from "react-router-dom";

const postData = async (data) => {
  const response = await client.post("/transports", data);
  return response.data;
};

function TransForm() {
  const [Libelle, setlibelle] = useState("");
  const [PrixHorraire, setprixHoraire] = useState("");

  const handleSubmit = async (e) => {
    e.preDefault();

    const data = { Libelle, PrixHorraire };
    console.log("data: ", data);
    const response = await postData(data);

    console.log("res: ", response);
    window.location.href = "/transports/";
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
              Transport
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="Libelle"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={Libelle}
                onChange={(e) => setlibelle(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-5 col-span-full">
            <label
              htmlFor="PrixHorraire"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Prix/Horraire transport
            </label>{" "}
            <div className="mt-2">
              <input
                type="numero"
                name="PrixHorraire"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={PrixHorraire}
                onChange={(e) => setprixHoraire(e.target.value)}
              />{" "}
              &euro;
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Link to="/transports/">
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

export default TransForm;
