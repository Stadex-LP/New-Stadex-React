import axios from "axios";
import React from "react";
import client from "../../../api";
import { Link } from "react-router-dom";

const fetchData = async () => {
  const response = await client.get("/transports");
  const data = response.data;
  return data;
};

function TransTable() {
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      const response = await fetchData();
      setPost(response);
    };

    getData();
  }, []);

  if (!post) return "Aucun Transports";

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
                  <th class="py-3 px-6 text-left">Actions</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 text-sm font-light">
                {post.map((item) => (
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

                    <td class="py-3 px-6">
                      <div class="flex item-center justify-center">
                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                          <Link to={`/transports/${item.id}`}>
                            <svg // pour voir les details
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
                          </Link>
                        </div>

                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                          <Link to={`/transports/edit/${item.id}`}>
                            <svg // pour modifier
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                              />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransTable;
