import { useNavigate } from "react-router-dom";
import "./App.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="app-background flex items-center justify-center h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 max-w-4xl">
        <div
          className="bg-blue-700 text-white p-6 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition transform duration-300"
          onClick={() => navigate("/interior-pc")}
        >
          <h2 className="text-2xl font-bold text-center">
plongée en profondeur dans la carte mère!!!
</h2>
        </div>
        <div
          className="bg-blue-700 text-white p-6 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition transform duration-300"
          onClick={() => navigate("/memory-info")}
        >
          <h2 className="text-2xl font-bold text-center">savoir plus sur la mémoire !!!</h2>
        </div>
        <div
          className="bg-blue-700 text-white p-6 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition transform duration-300"
          onClick={() => navigate("/cpu-evolution")}
        >
          <h2 className="text-2xl font-bold text-center">Voulez-vous voir l’évolution du CPU ?</h2>
        </div>
        <div
          className="bg-blue-700 text-white p-6 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition transform duration-300"
          onClick={() => navigate("/other-component")}
        >
          <h2 className="text-2xl font-bold text-center">Explore other components</h2>
        </div>
      </div>
    </div>
  );
}
