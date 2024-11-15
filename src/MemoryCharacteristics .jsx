import { motion } from "framer-motion";
import { useState } from "react";

const MemoryCharacteristics = () => {
  const [activeCharacteristic, setActiveCharacteristic] = useState(null);

  const toggleDefinition = (characteristic) => {
    setActiveCharacteristic(activeCharacteristic === characteristic ? null : characteristic);
  };

  const characteristics = [
    {
      name: "Capacité",
      definition: "La capacité indique la quantité maximale de données que peut contenir une mémoire.",
    },
    {
      name: "Taille",
      definition: "La taille fait référence à l'espace physique que la mémoire occupe dans le système.",
    },
    {
      name: "Temps de cycle",
      definition: "Le temps de cycle est le délai nécessaire pour effectuer une opération de lecture ou d'écriture sur la mémoire.",
    },
    {
      name: "Débit",
      definition: "Le débit correspond à la quantité de données qui peut être lue ou écrite par seconde.",
    },
    {
      name: "Volatilité",
      definition: "La volatilité désigne la capacité de la mémoire à conserver ou non les données en l'absence d'alimentation.",
    },
    {
      name: "Temps d'accès",
      definition: "Le temps d'accès est le temps nécessaire pour accéder à une donnée spécifique dans la mémoire.",
    },
  ];

  return (
    <div >
      <div className="memory-info-container p-6 max-w-4xl w-full ">
        <div className="text-center text-3xl font-bold text-white mb-6">
          Caractéristiques de Mémoire
        </div>
        <div className="characteristics-grid grid grid-cols-1 sm:grid-cols-2 gap-6">
          {characteristics.map((char, index) => (
            <motion.div
              key={index}
              className="characteristic-card bg-white p-4 rounded-lg shadow-lg hover:scale-105 transition-all"
              whileHover={{ scale: 1.1 }}
              onClick={() => toggleDefinition(char.name)}
            >
              <motion.div
                className="characteristic-header text-xl font-semibold text-blue-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {char.name}
              </motion.div>
              {activeCharacteristic === char.name && (
                <motion.div
                  className="characteristic-definition mt-2 text-gray-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {char.definition}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemoryCharacteristics;
