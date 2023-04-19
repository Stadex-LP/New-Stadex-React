import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../../layouts/dashboard";
import client from "../../../api";

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
    <main>
      <DashboardLayout />
      <h2>Manifestations / Modifier</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="denomination">
          Denomination :
          <input
            type="text"
            name="denomination"
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
            value={manifestation.organisateur?.nom}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Sauvegarder</button>
      </form>
    </main>
  );
}

export default EditManifestation;
