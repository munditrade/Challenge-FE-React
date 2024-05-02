import React, { useState } from "react";
import "./App.css";

const transportOptions = {
  data: {
    car: { amount: 100, description: "Car" },
    bus: { amount: 50, description: "Bus" },
    bike: { amount: 10, description: "Bicycle" },
    airplane: { amount: 500, description: "Airplane" },
    helicopter: { amount: 200, description: "Helicopter" },
    boat: { amount: 200, description: "Boat" },
    ship: { amount: 400, description: "Ship" },
    yacht: { amount: 1000, description: "Yacht" },
  },
  transportType: {
    car: "land",
    bus: "land",
    bike: "land",
    airplane: "air",
    helicopter: "air",
    boat: "maritime",
    ship: "maritime",
    yacht: "maritime",
  },
};
/** 1 */

const getKeys = (data) => {
  return Object.values(data)
}

const getTransportTypes = (data) => {
  const entries = Object.entries(data)
  return entries.reduce((acc, [key, value]) => {
    if (!acc.includes(value)) acc.push(value)
    return acc
  }, [])
}

const getFormattedTransports = (data, transportType) => {
  const entries = Object.entries(data)

  return entries.reduce((acc, [key, values]) => {
    return {...acc, [key]: {...values, type: transportType[key]}}
  }, {})
}

const transportOptionsFormatted = {
  data: getFormattedTransports(transportOptions.data, transportOptions.transportType),
  keys: getKeys(transportOptions.transportType),
  transportType: `Listado de  "${getTransportTypes(transportOptions.transportType)}"`
};

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (event) => {
    /** 3 */
  };

  return (
    <div className="App">
      <p>
        Tipos de medio de transporte:
        <span>{getTransportTypes(transportOptions.transportType)}</span>
      </p>
      <div className="select-container">
        <label>Selecciona un medio de transporte</label>
        <select value={selectedOption} onChange={handleChange}>
          <option value="opcion1">Opción 1</option>
          <option value="opcion2">Opción 2</option>
          {/* 3- ....*/}
        </select>

        <button
        // 5- onClick={() => {}}
        >
          Limpiar
        </button>
      </div>
      {/* 4- {selectedOption && <ul>
        <li>Opcion1: Valor1</li>
      </ul>} */}
    </div>
  );
}

export default App;
