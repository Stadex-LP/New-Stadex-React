import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";

function DashboardLayout(props) {
  return (
    <main class="relative h-screen overflow-hidden">
      <div class="flex items-start justify-between">
        <div class="relative hidden h-screen shadow-lg lg:block w-80">
          <div class="h-full bg-white dark:bg-gray-700">
            <div class="flex items-center justify-start pt-6 ml-8">
              <p class="text-xl font-bold dark:text-white">Stadex</p>
            </div>
            <nav class="mt-6">
              <div>
                <NavLink to="/" activeclassName="active">
                  <div class="flex items-center justify-start w-full p-2 pl-6 text-gray-800 transition-colors duration-200 border-l-4 border-green-400 dark:text-white">
                    <span class="text-left-home">
                      <svg
                        width="20"
                        height="20"
                        class="fill-current text-black"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1472 992v480q0 26-19 45t-45 19h-384v-384h-256v384h-384q-26 0-45-19t-19-45v-480q0-1 .5-3t.5-3l575-474 575 474q1 2 1 6zm223-69l-62 74q-8 9-21 11h-3q-13 0-21-7l-692-577-692 577q-12 8-24 7-13-2-21-11l-62-74q-8-10-7-23.5t11-21.5l719-599q32-26 76-26t76 26l244 204v-195q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z"></path>
                      </svg>
                    </span>
                    <span class="mx-2 text-sm font-normal">Home</span>
                  </div>
                </NavLink>

                <br />
                <NavLink to="/manifestations" activeclassName="active">
                  <div className="flex items-center justify-start w-full p-2 pl-6 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800">
                    <span class="text-left">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 2048 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                      </svg>
                    </span>
                    <span class="mx-2 text-sm font-normal">Manifestations</span>
                  </div>
                </NavLink>
                <br />
                <NavLink to="/transports" activeclassName="active">
                  <div className="flex items-center justify-start w-full p-2 pl-6 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800">
                    <span class="text-left">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 2048 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                      </svg>
                    </span>
                    <span class="mx-2 text-sm font-normal">Transports</span>
                  </div>
                </NavLink>
                <br />
                <NavLink to="/equipements" activeclassName="active">
                  <div className="flex items-center justify-start w-full p-2 pl-6 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800">
                    <span class="text-left">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 2048 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                      </svg>
                    </span>
                    <span class="mx-2 text-sm font-normal">Equipements</span>
                  </div>
                </NavLink>
                <br />
                <NavLink to="/organisateurs" activeclassName="active">
                  <div className="flex items-center justify-start w-full p-2 pl-6 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800">
                    <span class="text-left">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 2048 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                      </svg>
                    </span>
                    <span class="mx-2 text-sm font-normal">Associations</span>
                  </div>
                </NavLink>
                <br />
                <NavLink to="/materiels" activeclassName="active">
                  <div className="flex items-center justify-start w-full p-2 pl-6 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800">
                    <span class="text-left">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 2048 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                      </svg>
                    </span>
                    <span class="mx-2 text-sm font-normal">Materiels</span>
                  </div>
                </NavLink>
                <br />
                <NavLink to="/main_oeuvre" activeclassName="active">
                  <div className="flex items-center justify-start w-full p-2 pl-6 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800">
                    <span class="text-left">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 2048 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                      </svg>
                    </span>
                    <span class="mx-2 text-sm font-normal">
                      Mains d'oeuvres
                    </span>
                  </div>
                </NavLink>
                <br />
              </div>
            </nav>
          </div>
        </div>

        <div class="flex flex-col w-full md:space-y-4">{props.children}</div>
      </div>
    </main>
  );
}

export default DashboardLayout;
