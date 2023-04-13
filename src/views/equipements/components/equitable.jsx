import axios from "axios";
import React from "react";
import client from "../../../api";

<<<<<<< HEAD
const client = axios.create({
  baseURL: "http://localhost/api/equipement_sportifs",
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

function EquiTable() {
  const [post, setPost] = React.useState(null);
=======

const fetchData = async () => {
  const response = await client.get('/equipement_sportifs');
  const data = response.data;
  return data;
}

function EquiTable() {
  const [post, setPost] = React.useState([]);
>>>>>>> work/darius

  React.useEffect(() => {
    
    const getData = async () => {
      const response = await fetchData();
      setPost(response);
    }

    getData();
    
  }, []);

  if (!post) return "Aucun Equipements";

  return (
    <div class="overflow-x-auto">
      <div class="font-sans overflow-hidden">
        <div class="w-full lg:w-5/6">
          <div class="bg-white">
            <table class="min-w-max w-full table-auto">
              <thead>
                <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th class="py-3 px-6 text-left">Id</th>
                  <th class="py-3 px-6 text-left">Libelle</th>
                  <th class="py-3 px-6 text-left">Prix/Horaire</th>
<<<<<<< HEAD
=======
                  <th class="py-3 px-6 text-left">Code</th>
>>>>>>> work/darius
                  <th class="py-3 px-6 text-left">Actions</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 text-sm font-light">
<<<<<<< HEAD
                <tr key={post.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{post.id}</div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {post.libelle}
                    </div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-left text-sm text-gray-500">
                    {post.prixHoraire}
                  </td>

                  <td class="py-4 px-6 whitespace-nowrap text-left">
                    <div class="flex item-center justify-center">
                      <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </div>

=======

                {post.map(item=> (
                  <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.id}</div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {item.libelle}
                    </div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-left text-sm text-gray-500">
                    {item.prixHoraire}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-left text-sm text-gray-500">
                    {item.codePlanitec}
                  </td>

                  <td class="py-4 px-6 whitespace-nowrap text-left">
                    <div class="flex item-center justify-center">
                      <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </div>

>>>>>>> work/darius
                      <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </div>
                    </div>
                  </td>
                </tr>
<<<<<<< HEAD
=======
                ))}
                
>>>>>>> work/darius
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EquiTable;
