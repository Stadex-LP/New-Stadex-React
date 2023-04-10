import axios from "axios";
import React from "react";

export default class MateForm extends React.Component {
  state = {
    Libelle: "",
    PrixUnitaire: "",
    EstParJour: "",
  };

  handleChange = (event) => {
    this.setState({
      Libelle: event.target.value,
      PrixUnitaire: event.target.value,
      EstParJour: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      Libelle: this.state.Libelle,
      PrixUnitaire: this.state.PrixUnitaire,
      EstParJour: this.state.PrixUnitaire,
    };

    axios.post(`http://localhost/api/materiels`, { user }).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
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
                <select class="option" name="choix">
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
}
