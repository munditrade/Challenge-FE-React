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
const transportOptionsFormatted = {
  data: Object.keys(transportOptions.data).reduce((acc, key) => {
    acc[key] = {
      ...transportOptions.data[key],
      type: transportOptions.transportType[key],
    };
    return acc;
  }, {}),
  keys: Object.keys(transportOptions.data),
  transportType: [
    ...new Set(
      Object.values(transportOptions.transportType).map((i) => i.toUpperCase())
    ),
  ],
};

console.log(transportOptionsFormatted);

function App() {
  const [selectedOption, setSelectedOption] = useState(0);

  const handleChange = (event) => {
    setSelectedOption(event?.target.value);
  };

  return (
    <div className="App">
      <p>
        Tipos de medio de transporte:
        {transportOptionsFormatted.transportType.map((i) => (
          <span>{i}</span>
        ))}
      </p>
      <div className="select-container">
        <label>Selecciona un medio de transporte</label>
        <select value={selectedOption} onChange={handleChange}>
          {transportOptionsFormatted.keys.map((i) => (
            <option>{i}</option>
          ))}
        </select>
        <button onClick={() => setSelectedOption(null)}>Limpiar</button>
      </div>
      {selectedOption && (
        <ul>
          <li>{transportOptionsFormatted.data[selectedOption].amount}</li>
          <li>{transportOptionsFormatted.data[selectedOption].description}</li>
          <li>{transportOptionsFormatted.data[selectedOption].type}</li>
        </ul>
      )}
    </div>
  );
}

export default App;
