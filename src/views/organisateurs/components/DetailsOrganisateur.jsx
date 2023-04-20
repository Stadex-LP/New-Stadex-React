import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import client from "../../../api";
import DashboardLayout from "../../../layouts/dashboard";

function DetailsOrganisateur() {
  // ici on utilise react router dom pour récupérer le parametre dans l'URL qui correspond à l'id de la manif séléctionnée
  const { id } = useParams();
  const [organisateur, setOrganisateur] = useState(null);
  const navigate = useNavigate();

  // ici on fait la requete fetch vers l'api
  useEffect(() => {
    client
      .get(`/organisateurs/${id}`)
      .then((response) => {
        setOrganisateur(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  // on créer une exeption au cas ou la donnée n'est pas encore chargée
  if (!organisateur) {
    return <div>Chargement des données ...</div>;
  }

  const handleEdit = () => {
    navigate(`/organisateurs/edit/${organisateur.id}`);
  };

  const handleDelete = () => {
    client
      .delete(`organisateurs/${id}`)
      .then(() => {})
      .catch((error) => console.log(error));

    navigate("/organisateurs/");
  };

  return (
    <main>
      <DashboardLayout>
        <div class="h-screen px-4 pb-24 overflow-auto md:px-6">
          <div className="flex h-fit w-full items-center justify-between pt-4 pb-[20px]">
            <div className="w-full">
              <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Organisateur Information
                </h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                  Voici les details.
                </p>
              </div>
              <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      ID
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      <h2>{organisateur.id}</h2>
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Nom
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      <h2>{organisateur.nom}</h2>
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Service Demandeur
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {organisateur.serviceDemandeur}
                    </dd>
                  </div>

                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Actions
                    </dt>
                    <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      <button className="mr-3" onClick={handleEdit}>
                        Modifier
                      </button>
                      <button onClick={handleDelete}>Supprimer</button>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div class="detail">
          <section className="items-center">
            <p>BONJOUR</p>
            <h2>{organisateur.denomination}</h2>
            <p>ID : {organisateur.id}</p>
            <p>Nom : {organisateur.nom}</p>
            <p>Service Demandeur : {organisateur.serviceDemandeur}</p>
          </section>

          <button onClick={handleEdit}>Modifier</button>
          <button onClick={handleDelete}>Supprimer</button>
        </div>
      </DashboardLayout>
    </main>
  );
}

export default DetailsOrganisateur;
