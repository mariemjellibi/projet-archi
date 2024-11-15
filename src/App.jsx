

import { Routes, Route } from 'react-router-dom';
import MemoryInfo from './MemoryInfo';  // Make sure this is the correct path
import Home from './Home';
import InteriorPC from "./InteriorPC";
import CpuEvolution from './CpuEvolution';
function App() {
  return (
    <div >
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/memory-info/*" element={<MemoryInfo />} />
      <Route path="/interior-pc" element={<InteriorPC />} /> 
      <Route path="/cpu-evolution" element={<CpuEvolution/>}/>
      {/* Add any other routes here */}
    </Routes>
    </div>
    
  );
}

export default App;
