// CpuEvolution.jsx
import React from "react";
import "./CpuEvolution.css";

const cpuEvolutionData = [
  {
    year: "1971",
    name: "Intel 4004",
    description: "The first commercially available microprocessor, 4-bit, 740 kHz.",
    image: "path_to_your_image/intel4004.jpg",
  },
  {
    year: "1978",
    name: "Intel 8086",
    description: "The 16-bit processor that started the x86 architecture.",
    image: "path_to_your_image/intel8086.jpg",
  },
  {
    year: "1989",
    name: "Intel 80486",
    description: "Integrated FPU and 1.2 million transistors.",
    image: "path_to_your_image/intel80486.jpg",
  },
  {
    year: "2000",
    name: "Pentium 4",
    description: "The NetBurst architecture and clock speed focus.",
    image: "path_to_your_image/pentium4.jpg",
  },
  {
    year: "2020",
    name: "AMD Ryzen 5000",
    description: "7nm architecture with high core counts and efficiency.",
    image: "path_to_your_image/ryzen5000.jpg",
  },
];

export default function CpuEvolution() {
  return (
    <div className="app-background flex items-center justify-center h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">

 
    <div className="cpu-evolution-container bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white p-6">
      <h1 className="text-center text-4xl font-bold mb-8">
        Evolution of CPUs Over Time
      </h1>
      <div className="timeline-horizontal">
        {cpuEvolutionData.map((cpu, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <h2 className="text-xl font-bold">{cpu.year}</h2>
              <h3 className="text-lg">{cpu.name}</h3>
              <p className="mt-2">{cpu.description}</p>
            </div>
            <img
              src={cpu.image}
              alt={cpu.name}
              className="timeline-image rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
