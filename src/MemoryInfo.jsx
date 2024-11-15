import { Routes, Route, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import vonneumanImage from './assets/vonneuman.png';
import harvardImage from './assets/harvard.gif';
import { useState } from "react";
import MemoryCharacteristics from "./MemoryCharacteristics .jsx";

const MemoryInfo = () => {
  const navigate = useNavigate();
  const [activeLayer, setActiveLayer] = useState(null);

  const handleNavigation = (path) => {
    console.log(`Navigating to: ${path}`);
    navigate(path);
  };

  const toggleDefinition = (layer) => {
    setActiveLayer(activeLayer === layer ? null : layer);
  };

  return (
    <div className="app-background flex items-center justify-center h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-auto">
      <div className="memory-info-container p-6 max-w-full overflow-auto">
        <div className="section-nav flex space-x-4 mb-6 overflow-x-auto">
          <button
            onClick={() => handleNavigation("modeleVonNeuman")}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all"
          >
            Modèle Von Neuman
          </button>
          <button
            onClick={() => handleNavigation("modeleDeHavard")}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all"
          >
            Modèle Havard
          </button>
          <button
            onClick={() => handleNavigation("hierarchieMemoire")}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all"
          >
            Hiérarchie de Mémoire
          </button>
          <button
            onClick={() => handleNavigation("caracteristiqueMemoire")}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all"
          >
            Caractéristiques de Mémoire
          </button>
        </div>

        <div className="section-content overflow-auto">
          <Routes>
            <Route
              path="modeleVonNeuman"
              element={
                <motion.div
                  className="image-section mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={vonneumanImage}
                    alt="Modèle Von Neuman"
                    className="rounded-lg shadow-md"
                    style={{
                      transition: "transform 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.transform = "translate(10px, 5px)")}
                    onMouseLeave={(e) => (e.target.style.transform = "translate(0, 0)")}
                  />
                </motion.div>
              }
            />
            <Route
              path="modeleDeHavard"
              element={
                <motion.div
                  className="image-section mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={harvardImage}
                    alt="Modèle de Havard"
                    className="rounded-lg shadow-md"
                    style={{
                      transition: "transform 0.3s ease",
                      width: "300px", // Fix image width
                      height: "auto",
                      marginLeft: "calc(50% - 150px)", // Center the image
                    }}
                    onMouseEnter={(e) => (e.target.style.transform = "translate(10px, 5px)")}
                    onMouseLeave={(e) => (e.target.style.transform = "translate(0, 0)")}
                  />
                </motion.div>
              }
            />
            <Route
              path="hierarchieMemoire"
              element={
                <div className="pyramide-container">
                  <div className="pyramide-layer" onClick={() => toggleDefinition("registres")}>
                    Registres
                    {activeLayer === "registres" && (
                      <div className="definition">Les registres sont les mémoires les plus rapides, utilisées directement par le processeur.</div>
                    )}
                  </div>
                  <div className="pyramide-layer" onClick={() => toggleDefinition("cache")}>
                    Mémoire cache
                    {activeLayer === "cache" && (
                      <div className="definition">La mémoire cache est utilisée pour stocker temporairement des données fréquemment accédées.</div>
                    )}
                  </div>
                  <div className="pyramide-layer" onClick={() => toggleDefinition("centrale")}>
                    Mémoire centrale
                    {activeLayer === "centrale" && (
                      <div className="definition">La mémoire centrale (RAM) stocke les données en cours d'utilisation par le système.</div>
                    )}
                  </div>
                  <div className="pyramide-layer" onClick={() => toggleDefinition("appui")}>
                    Mémoire d'appui
                    {activeLayer === "appui" && (
                      <div className="definition">La mémoire d'appui est utilisée pour le stockage secondaire, comme les disques durs.</div>
                    )}
                  </div>
                  <div className="pyramide-layer" onClick={() => toggleDefinition("masse")}>
                    Mémoire de masse
                    {activeLayer === "masse" && (
                      <div className="definition">La mémoire de masse contient toutes les données permanentes (disques externes, etc.).</div>
                    )}
                  </div>
                </div>
              }
            />
            <Route
              path="caracteristiqueMemoire"
              element={
                <div className="overflow-hidden h-96">
                  <MemoryCharacteristics />
                </div>
              }
            />
            <Route
              path=""
              element={<div className="text-center text-lg">Sélectionnez une section pour afficher.</div>}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default MemoryInfo;
