import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../../layouts/dashboard";
import client from "../../../api";

function EditEquipement() {
  const { id } = useParams();
  const [equipement, setEquipement] = useState({});
  const [libelle, setlibelle] = useState("");
  const [prixHoraire, setprixHoraire] = useState("");
  const [codePlanitec, setcodePlanitec] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    client
      .get(`/equipement_sportifs/${id}`)
      .then((response) => {
        console.log("res:", response.data);
        setEquipement(response.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { libelle, prixHoraire, codePlanitec };
    const response = await patchData(data);
    console.log("res: ", response);
    navigate("/equipements/");
  };

  if (!equipement) {
    return <div>Chargement des données ..</div>;
  }

  const handleChangePrice = (e) => {
    e.preventDefault();
    const priceValue = parseFloat(e.target.value);
    setprixHoraire(priceValue);
  };

  const patchData = async (data) => {
    const response = await client.patch(`/equipement_sportifs/${id}`, data, {
      headers: {
        "Content-Type": "application/merge-patch+json",
      },
    });
    return response.data;
  };

  return (
    <main>
      <DashboardLayout />
      <h2>Equipements / Modifier</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="libelle">
          Libelle :
          <input
            type="text"
            name="libelle"
            value={libelle}
            onChange={(event) => setlibelle(event.target.value)}
          />
        </label>
        <br />
        <label htmlFor="prixHoraire">
          Prix Horaire :
          <input
            type="number"
            name="prixHoraire"
            value={prixHoraire}
            onChange={handleChangePrice}
          />
        </label>
        <br />
        <label htmlFor="codePlanitec">
          Code :
          <input
            type="text"
            name="code"
            value={codePlanitec}
            onChange={(event) => setcodePlanitec(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Sauvegarder</button>
      </form>
    </main>
  );
}

export default EditEquipement;
