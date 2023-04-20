// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import DashboardLayout from "../../../layouts/dashboard";
// import client from "../../../api";

// function EditEquipement() {
//   const { id } = useParams();
//   const [equipement, setTquipement] = useState({});
//   const navigate = useNavigate();

//   useEffect(() => {
//     client
//       .get(`/equipement_sportifs/${id}`)
//       .then((response) => {
//         console.log("res:", response.data);
//         setTquipement(response.data);
//       })
//       .catch((error) => console.log(error));
//   }, [id]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEquipement((prevState) => {
//       return {
//         ...prevState,
//         [name]: value,
//       };
//     });
//     console.log("equi changed:", equipement);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     client
//       .patch(
//         `//equipement_sportifs/${id}`,
//         {
//           libelle: equipement.libelle,
//           prixHoraire: equipement.prixHoraire,
//           code: equipement.codePlanitec,
//         },
//         {
//           headers: {
//             "Content-Type": "application/merge-patch+json",
//           },
//         }
//       )
//       .then((response) => console.log("response:", response))
//       .catch((error) => console.log(error));

//     navigate("/equipements/");
//   };

//   if (!equipement) {
//     return <div>Chargement des données ..</div>;
//   }

//   return (
//     <main>
//       <DashboardLayout />
//       <h2>Equipements / Modifier</h2>

//       <form onSubmit={handleSubmit}>
//         <label htmlFor="libelle">
//           Libelle :
//           <input
//             type="text"
//             name="libelle"
//             value={equipement.libelle}
//             onChange={handleInputChange}
//           />
//         </label>
//         <br />
//         <label htmlFor="prixHoraire">
//           Prix Horaire :
//           <input
//             type="numero"
//             name="prixHoraire"
//             value={equipement.prixHoraire}
//             onChange={handleInputChange}
//           />
//         </label>
//         <br />
//         <label htmlFor="codePlanitec">
//           Code :
//           <input
//             type="text"
//             name="code"
//             value={equipement.codePlanitec}
//             onChange={handleInputChange}
//           />
//         </label>
//         <br />
//         <button type="submit">Sauvegarder</button>
//       </form>
//     </main>
//   );
// }

// export default EditEquipement;
