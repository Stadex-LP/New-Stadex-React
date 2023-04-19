import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import client from "../../../api";
import DashboardLayout from "../../../layouts/dashboard";
import "./index.css";

function DetailsManifestation() {
  // ici on utilise react router dom pour récupérer le parametre dans l'URL qui correspond à l'id de la manif séléctionnée
  const { id } = useParams();
  const [manifestation, setManifestation] = useState(null);
  const navigate = useNavigate();

  // ici on fait la requete fetch vers l'api
  useEffect(() => {
    client
      .get(`/manifestations/${id}`)
      .then((response) => {
        setManifestation(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  // on créer une exeption au cas ou la donnée n'est pas encore chargée
  if (!manifestation) {
    return <div>Chargement des données ...</div>;
  }

  const handleEdit = () => {
    navigate(`/manifestations/edit/${manifestation.id}`);
  };

  const handleDelete = () => {
    client
      .delete(`manifestations/${id}`)
      .then(() => {})
      .catch((error) => console.log(error));

    navigate("/manifestations/");
  };

  return (
    <main>
      <DashboardLayout>
        {/* <div class="h-screen px-4 pb-24 overflow-auto md:px-6">
          <div className="flex h-fit w-full items-center justify-between pt-4 pb-[20px]">
            <div>
              <h1 class="text-4xl font-semibold text-gray-800">
              Manifestations / Afficher
              </h1>
              <h2 class="text-gray-400 text-md">
                Voici les détails des manifestations.
              </h2>
            </div>
          </div>
        </div> */}

        <div class="detail">
          <section className="items-center">
            <p>BONJOUR</p>
            <h2>{manifestation.denomination}</h2>
            <p>ID : {manifestation.id}</p>
            <p>Lieu : {manifestation.lieu}</p>
            <p>Prix Total HT: {manifestation.prixTotalHT}</p>
            <p>Date de début : {manifestation.dateDebut}</p>
            <p>Date de fin : {manifestation.dateFin}</p>
            <p>Prix Total TTC: {manifestation.prixTotalTTC}</p>
          </section>

          <button onClick={handleEdit}>Modifier</button>
          <button onClick={handleDelete}>Supprimer</button>
        </div>
      </DashboardLayout>
    </main>
  );
}

export default DetailsManifestation;
