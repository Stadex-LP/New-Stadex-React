import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../../layouts/dashboard";
import client from "../../../api";
import { Link } from "react-router-dom";
// import tab rsuite
import { Header, Nav, Table, Button } from "rsuite";

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
      <Nav.Item eventKey="mains_oeuvres">Mains d'oeuvres</Nav.Item>
    </Nav>
  );
};

const { Column, HeaderCell, Cell } = Table;

function EditManifestation() {
  const { id } = useParams();
  const [denomination, setdenomination] = useState("");
  const [dateFin, setdateFin] = useState("");
  const [dateDebut, setdateDebut] = useState("");
  const [lieu, setlieu] = useState("");
  const navigate = useNavigate();
  const [organisateur, setorganisateur] = useState("");
  const [organisateurList, setorganisateurList] = useState([]);
  const [active, setActive] = useState("Matériels");

  const [items, setItems] = useState([]);
  const [newItems, setnewItems] = useState([]);
  const [manifestationMateriels, setManifestationMateriels] = useState([]);
  const [materialData, setMaterialData] = useState([]);
  const [manifestationMaterielsData, setManifestationMaterielsData] = useState(
    []
  );

  const addItem = () => {
    setItems([
      ...items,
      {
        materiel: "",
        qte: 0,
        jour: 0,
      },
    ]);
    setManifestationMateriels([
      ...manifestationMateriels,
      {
        materiel: "",
        qte: 0,
        jour: 0,
      },
    ]);
  };

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
    console.log("newItems Change Input:", newItems);
  };

  const handleSelectItemChange = (index, e) => {
    const newItems = [...items];
    const newManifestationMateriels = [...manifestationMateriels];
    newItems[index].materiel = Number(e.target.value);
    newManifestationMateriels[index].materiel = Number(e.target.value);
    setItems(newItems);
    setManifestationMateriels(newManifestationMateriels);
    console.log("newItems Change Input:", newItems);
    console.log(
      "newManifestationMateriels Change Input:",
      newManifestationMateriels
    );
  };

  const handleInputChange = (index, e) => {
    const newItems = [...items];
    const newManifestationMateriels = [...manifestationMateriels];
    newItems[index].qte = Number(e.target.value);
    newManifestationMateriels[index].qte = Number(e.target.value);
    setItems(newItems);
    setManifestationMateriels(newManifestationMateriels);
    console.log("newItems Change Input:", newItems);
    console.log(
      "newManifestationMateriels Change Input:",
      newManifestationMateriels
    );
  };

  const handleCheckboxChange = (index, e) => {
    const newItems = [...items];
    const newManifestationMateriels = [...manifestationMateriels];
    newItems[index].jour = Number(e.target.value);
    newManifestationMateriels[index].jour = Number(e.target.value);
    setItems(newItems);
    setManifestationMateriels(newManifestationMateriels);
    console.log("newItems Change Input:", newItems);
    console.log(
      "newManifestationMateriels Change Input:",
      newManifestationMateriels
    );
  };

  const handleDelete = async (id) => {
    try {
      const response = await deleteData(`/manifestation_materiels/${id}`);
      console.log("res delete:", response);
      setManifestationMaterielsData((prevState) => {
        return prevState.filter((item) => item.id !== id);
      });
    } catch (error) {
      console.error(error);
    }
  };

  // fetch orga datas
  useEffect(() => {
    client
      .get("/organisateurs")
      .then((response) => {
        setorganisateurList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // fetch materiels datas
  useEffect(() => {
    client
      .get("/materiels")
      .then((response) => {
        setMaterialData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // fetch materiel d'une manif
  useEffect(() => {
    client
      .get(`/manifestations/${id}`)
      .then((response) => {
        console.log("response.data:", response.data.manifestationMateriels);
        setManifestationMaterielsData(response.data.manifestationMateriels);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleSelectChange = (e) => {
    setorganisateur(`api/organisateurs/${e.target.value}`);
  };

  // on update le formulaire avec les nouvelles données
  const patchData = async (data) => {
    const response = await client.patch(`/manifestations/${id}`, data, {
      headers: {
        "Content-Type": "application/merge-patch+json",
      },
    });
    return response.data;
  };

  const postMaterielsData = async (data) => {
    const response = await client.post(`/manifestations/${id}/materiels`, data);
    console.log("res POST mat data:", response);
  };

  const deleteData = async (url) => {
    const response = await client.delete(url);
    return response.data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      denomination,
      dateDebut,
      dateFin,
      lieu,
      organisateur,
      // manifestationMateriels: [...items, ...manifestationMateriels],
      manifestationMateriels: manifestationMateriels.concat(
        newItems.map((item) => ({
          jour: item.jour,
          qte: item.qte,
          materiel: `/api/materiels/${item.id.toString()}`,
        }))
      ),
    };
    console.log("data:", data);
    try {
      console.log("new items:", newItems);
      if (newItems.length === 0) {
        const response = await patchData(data);
        console.log("PATCH: ", response);
        setnewItems([]);
        navigate("/manifestations/");
      } else {
        const response = await patchData(data);
        console.log("PATCH: ", response);
        setnewItems([]);
        const response2 = await postMaterielsData(newItems);
        console.log("POST:", response2);
        navigate("/manifestations/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DashboardLayout>
      <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
        <div className="flex h-fit w-full items-center justify-between pt-4 pb-[20px]">
          <div>
            <h1 className="text-4xl font-semibold text-gray-800">
              Manifestations / Modifier
            </h1>
          </div>

          <Link to="/manifestations/">
            <button className="linear rounded-[20px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20">
              Annuler
            </button>
          </Link>
        </div>

        <br />

        <form onSubmit={handleSubmit}>
          <label htmlFor="denomination">
            Denomination :
            <input
              type="text"
              name="denomination"
              className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={denomination}
              onChange={(event) => setdenomination(event.target.value)}
              required
            />
          </label>
          <br />
          <label htmlFor="date-debut">
            Date de début :
            <input
              type="date"
              name="date-debut"
              className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={dateDebut}
              onChange={(event) => setdateDebut(event.target.value)}
            />
          </label>
          <br />
          <label htmlFor="date-fin">
            Date de fin :
            <input
              type="date"
              name="date-fin"
              className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={dateFin}
              onChange={(event) => setdateFin(event.target.value)}
            />
          </label>
          <br />
          <label htmlFor="lieu">
            Lieu :
            <input
              type="text"
              name="lieu"
              className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={lieu}
              onChange={(event) => setlieu(event.target.value)}
              required
            />
          </label>
          <br />
          <select
            name="organisateur"
            id="organisateur"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={handleSelectChange}
          >
            {organisateurList.map((organisateur) => (
              <option key={organisateur.id} value={organisateur.id}>
                {organisateur.nom}
              </option>
            ))}
          </select>
          <br />
          <br />
          <br />
          {/* à partir d'ici, effet de répétition (DRY) on aurait pu faire un composant (ex: TableData) et l'appeler ici le nombre de fois voulu, mais manque de temps */}
          <Tab active={active} onSelect={setActive} appearance="tabs" />
          {active === "materiels" && (
            <>
              <div>
                <Table
                  virtualized
                  height={400}
                  data={manifestationMaterielsData}
                >
                  <Column width={150} align="center" fixed>
                    <HeaderCell>Matériel</HeaderCell>
                    <Cell dataKey="materiel.libelle"></Cell>
                  </Column>

                  <Column width={150} align="center" fixed>
                    <HeaderCell>Qte</HeaderCell>
                    <Cell dataKey="qte"></Cell>
                  </Column>

                  <Column width={150} align="center" fixed>
                    <HeaderCell>Jour</HeaderCell>
                    <Cell dataKey="jour"></Cell>
                  </Column>

                  <Column>
                    <HeaderCell>Actions</HeaderCell>
                    <Cell>
                      {(rowData) => (
                        <Button
                          appearance="ghost"
                          onClick={() => handleDelete(rowData.id)}
                          color="red"
                        >
                          Supprimer
                        </Button>
                      )}
                    </Cell>
                  </Column>
                </Table>
              </div>
              <div>
                <button
                  onClick={addItem}
                  className="rounded-md bg-green-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Ajouter
                </button>
                {items.map((item, index) => (
                  <div key={index}>
                    <select
                      value={item.id}
                      onChange={(e) => handleSelectItemChange(index, e)}
                    >
                      {materialData.map((material) => (
                        <option key={material.id} value={material.id}>
                          {material.libelle}
                        </option>
                      ))}
                    </select>
                    <input
                      type="number"
                      value={item.prixUnitaire}
                      onChange={(e) => handleInputChange(index, e)}
                    />
                    <label>
                      <input
                        type="checkbox"
                        value={item.estParJour}
                        onChange={(e) => handleCheckboxChange(index, e)}
                      />
                      Jour
                    </label>
                    <button onClick={() => removeItem(index)}>Supprimer</button>
                  </div>
                ))}
              </div>
            </>
          )}
          {active === "equipement_sportifs" && (
            <>
              <div>
                <Table
                  virtualized
                  height={400}
                  data={manifestationMaterielsData}
                >
                  <Column width={150} align="center" fixed>
                    <HeaderCell>Equipement Sportif</HeaderCell>
                    <Cell dataKey="equipement_sportif"></Cell>
                  </Column>

                  <Column width={150} align="center" fixed>
                    <HeaderCell>Heure</HeaderCell>
                    <Cell dataKey="heure"></Cell>
                  </Column>
                  <Column>
                    <HeaderCell>Actions</HeaderCell>
                    <Cell>
                      {(rowData) => (
                        <Button
                          appearance="ghost"
                          onClick={() => handleDelete(rowData.id)}
                          color="red"
                        >
                          Supprimer
                        </Button>
                      )}
                    </Cell>
                  </Column>
                </Table>
              </div>
              <div>
                <button
                  onClick={addItem}
                  className="rounded-md bg-green-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Ajouter
                </button>
                {items.map((item, index) => (
                  <div key={index}>
                    <select
                      value={item.id}
                      onChange={(e) => handleSelectItemChange(index, e)}
                    >
                      {materialData.map((material) => (
                        <option key={material.id} value={material.id}>
                          {material.libelle}
                        </option>
                      ))}
                    </select>
                    <input
                      type="number"
                      value={item.prixUnitaire}
                      onChange={(e) => handleInputChange(index, e)}
                    />
                    <label>
                      <input
                        type="checkbox"
                        value={item.estParJour}
                        onChange={(e) => handleCheckboxChange(index, e)}
                      />
                      Jour
                    </label>
                    <button onClick={() => removeItem(index)}>Supprimer</button>
                  </div>
                ))}
              </div>
            </>
          )}
          {active === "transports" && (
            <>
              <div>
                <Table
                  virtualized
                  height={400}
                  data={manifestationMaterielsData}
                >
                  <Column width={150} align="center" fixed>
                    <HeaderCell>Transport</HeaderCell>
                    <Cell dataKey="transport"></Cell>
                  </Column>

                  <Column width={150} align="center" fixed>
                    <HeaderCell>Heure</HeaderCell>
                    <Cell dataKey="heure"></Cell>
                  </Column>

                  <Column>
                    <HeaderCell>Actions</HeaderCell>
                    <Cell>
                      {(rowData) => (
                        <Button
                          appearance="ghost"
                          onClick={() => handleDelete(rowData.id)}
                          color="red"
                        >
                          Supprimer
                        </Button>
                      )}
                    </Cell>
                  </Column>
                </Table>
              </div>
              <div>
                <button
                  onClick={addItem}
                  className="rounded-md bg-green-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Ajouter
                </button>
                {items.map((item, index) => (
                  <div key={index}>
                    <select
                      value={item.id}
                      onChange={(e) => handleSelectItemChange(index, e)}
                    >
                      {materialData.map((material) => (
                        <option key={material.id} value={material.id}>
                          {material.libelle}
                        </option>
                      ))}
                    </select>
                    <input
                      type="number"
                      value={item.prixUnitaire}
                      onChange={(e) => handleInputChange(index, e)}
                    />
                    <label>
                      <input
                        type="checkbox"
                        value={item.estParJour}
                        onChange={(e) => handleCheckboxChange(index, e)}
                      />
                      Jour
                    </label>
                    <button onClick={() => removeItem(index)}>Supprimer</button>
                  </div>
                ))}
              </div>
            </>
          )}
          {active === "mains_oeuvres" && (
            <>
              <div>
                <Table
                  virtualized
                  height={400}
                  data={manifestationMaterielsData}
                >
                  <Column width={150} align="center" fixed>
                    <HeaderCell>Main d'oeuvre</HeaderCell>
                    <Cell dataKey="main_oeuvre"></Cell>
                  </Column>

                  <Column width={150} align="center" fixed>
                    <HeaderCell>Heure</HeaderCell>
                    <Cell dataKey="heure"></Cell>
                  </Column>

                  <Column>
                    <HeaderCell>Actions</HeaderCell>
                    <Cell>
                      {(rowData) => (
                        <Button
                          appearance="ghost"
                          onClick={() => handleDelete(rowData.id)}
                          color="red"
                        >
                          Supprimer
                        </Button>
                      )}
                    </Cell>
                  </Column>
                </Table>
              </div>
              <div>
                <button
                  onClick={addItem}
                  className="rounded-md bg-green-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Ajouter
                </button>
                {items.map((item, index) => (
                  <div key={index}>
                    <select
                      value={item.id}
                      onChange={(e) => handleSelectItemChange(index, e)}
                    >
                      {materialData.map((material) => (
                        <option key={material.id} value={material.id}>
                          {material.libelle}
                        </option>
                      ))}
                    </select>
                    <input
                      type="number"
                      value={item.prixUnitaire}
                      onChange={(e) => handleInputChange(index, e)}
                    />
                    <label>
                      <input
                        type="checkbox"
                        value={item.estParJour}
                        onChange={(e) => handleCheckboxChange(index, e)}
                      />
                      Jour
                    </label>
                    <button onClick={() => removeItem(index)}>Supprimer</button>
                  </div>
                ))}
              </div>
            </>
          )}
          <br />
          <button
            type="submit"
            className="rounded-md bg-green-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sauvegarder
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
}

export default EditManifestation;
