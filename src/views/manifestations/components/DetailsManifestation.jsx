import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import client from "../../../api";
import DashboardLayout from "../../../layouts/dashboard";
// import tab rsuite
import { Header, Nav, Table } from "rsuite";

const Tab = ({ active, onSelect, ...props }) => {
  return (
    <Nav
      {...props}
      activeKey={active}
      onSelect={onSelect}
      style={{ marginBottom: 50 }}
    >
      <Nav.Item eventKey="materiels">Matériels</Nav.Item>
      <Nav.Item eventKey="equipement_sportifs">Équipements Sportifs</Nav.Item>
      <Nav.Item eventKey="transports">Transports</Nav.Item>
    </Nav>
  );
};

const { Column, HeaderCell, Cell } = Table;

function DetailsManifestation() {
  // ici on utilise react router dom pour récupérer le parametre dans l'URL qui correspond à l'id de la manif séléctionnée
  const { id } = useParams();
  const [manifestation, setManifestation] = useState(null);
  const navigate = useNavigate();
  const [active, setActive] = useState("Matériels");
  const [manifestationMaterielsData, setManifestationMaterielsData] = useState(
    []
  );
  const [montantHT, setMontantHT] = useState(0);

  // ici on fait la requete fetch vers l'api
  useEffect(() => {
    client
      .get(`/manifestations/${id}`)
      .then((response) => {
        setManifestation(response.data);
        setManifestationMaterielsData(response.data.manifestationMateriels);
        const prixUnitaireFact = parseFloat(
          response.data.manifestationMateriels.prixUnitaireFact
        );
        setMontantHT(
          Math.round(prixUnitaireFact ? Math.round(prixUnitaireFact / 1.2) : 0)
        );
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
        <div class="h-screen px-4 pb-24 overflow-auto md:px-6">
          <div className="flex h-fit w-full items-center justify-between pt-4 pb-[20px]">
            <div className="w-full">
              <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Manifestation Information
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
                      <h2>{manifestation.id}</h2>
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Nom
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      <h2>{manifestation.denomination}</h2>
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Lieu
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {manifestation.lieu}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Date de début
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {manifestation.dateDebut}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Date de Fin
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {manifestation.dateFin}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Prix total HT
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {manifestation.prixTotalHT}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Prix total TTC
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {manifestation.prixTotalTTC}
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
                <Tab active={active} onSelect={setActive} appearance="tabs" />
                {active === "materiels" && (
                  <>
                    <Table
                      virtualized
                      height={400}
                      data={manifestationMaterielsData}
                    >
                      <Column width={150} align="center" fixed>
                        <HeaderCell>Libellé</HeaderCell>
                        <Cell dataKey="materiel.libelle"></Cell>
                      </Column>

                      <Column width={150} align="center" fixed>
                        <HeaderCell>Quantité</HeaderCell>
                        <Cell dataKey="qte"></Cell>
                      </Column>

                      <Column width={150} align="center" fixed>
                        <HeaderCell>Jour</HeaderCell>
                        <Cell dataKey="jour"></Cell>
                      </Column>

                      <Column width={150} align="center" fixed>
                        <HeaderCell>Prix Unitaire HT</HeaderCell>
                        <Cell dataKey="prixUnitaireFact"></Cell>
                      </Column>

                      <Column width={150} align="center" fixed>
                        <HeaderCell>Prix Total HT</HeaderCell>
                        <Cell dataKey="prixUnitaireFact"></Cell>
                      </Column>

                      <Column width={150} align="center" fixed>
                        <HeaderCell>Prix Total TTC</HeaderCell>
                        <Cell dataKey="prixUnitaireFact"></Cell>
                      </Column>
                    </Table>
                  </>
                )}
                {active === "equipement_sportifs" && (
                  <>
                    <Table virtualized height={400}>
                      <Column width={150} align="center" fixed>
                        <HeaderCell>Libellé</HeaderCell>
                        <Cell dataKey="libelle"></Cell>
                      </Column>

                      <Column width={150} align="center" fixed>
                        <HeaderCell>Quantité</HeaderCell>
                        <Cell dataKey="quantite"></Cell>
                      </Column>

                      <Column width={150} align="center" fixed>
                        <HeaderCell>Jour</HeaderCell>
                        <Cell dataKey="jour"></Cell>
                      </Column>

                      <Column width={150} align="center" fixed>
                        <HeaderCell>Prix Unitaire HT</HeaderCell>
                        <Cell dataKey="prixHT"></Cell>
                      </Column>

                      <Column width={150} align="center" fixed>
                        <HeaderCell>Prix Total HT</HeaderCell>
                        <Cell dataKey="totalHT"></Cell>
                      </Column>

                      <Column width={150} align="center" fixed>
                        <HeaderCell>Prix Total TTC</HeaderCell>
                        <Cell dataKey="totalTTC"></Cell>
                      </Column>
                    </Table>
                  </>
                )}
                {active === "transports" && (
                  <>
                    <Table virtualized height={400}>
                      <Column width={150} align="center" fixed>
                        <HeaderCell>Libellé</HeaderCell>
                        <Cell dataKey="libelle"></Cell>
                      </Column>

                      <Column width={150} align="center" fixed>
                        <HeaderCell>Quantité</HeaderCell>
                        <Cell dataKey="quantite"></Cell>
                      </Column>

                      <Column width={150} align="center" fixed>
                        <HeaderCell>Jour</HeaderCell>
                        <Cell dataKey="jour"></Cell>
                      </Column>

                      <Column width={150} align="center" fixed>
                        <HeaderCell>Prix Unitaire HT</HeaderCell>
                        <Cell dataKey="prixHT"></Cell>
                      </Column>

                      <Column width={150} align="center" fixed>
                        <HeaderCell>Prix Total HT</HeaderCell>
                        <Cell dataKey="totalHT"></Cell>
                      </Column>

                      <Column width={150} align="center" fixed>
                        <HeaderCell>Prix Total TTC</HeaderCell>
                        <Cell dataKey="totalTTC"></Cell>
                      </Column>
                    </Table>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </main>
  );
}

export default DetailsManifestation;
