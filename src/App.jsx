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
const formatTransportOptions = (data, transportType) => {
  const formattedData = Object.keys(data).map((key) => ({
    [key]: { ...data[key], type: transportType[key] },
  }));

  const uniqueTransportTypes = new Set(Object.values(transportType));

  return {
    data: Object.assign({}, ...formattedData),
    keys: Object.keys(data),
    transportType: [...uniqueTransportTypes].join(" - ").toUpperCase(),
  };
};

const transportOptionsFormatted = formatTransportOptions(
  transportOptions.data,
  transportOptions.transportType
);

console.log(transportOptionsFormatted);

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (event) => {};

  return (
    <div className="App">
      <p>
        Tipos de medio de transporte: {transportOptionsFormatted.transportType}
      </p>
      <div className="select-container">
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value=""></option>
          {transportOptionsFormatted.keys.map((option, i) => (
            <option key={`${option.description}${i}`} value={option}>
              {option}
            </option>
          ))}
        </select>

        <button onClick={() => setSelectedOption(null)}>Limpiar</button>
      </div>

      {selectedOption && (
        <ul>
          <li>
            amount: {transportOptionsFormatted.data[selectedOption].amount}
          </li>
          <li>
            description:{" "}
            {transportOptionsFormatted.data[selectedOption].description}
          </li>
          <li>type: {transportOptionsFormatted.data[selectedOption].type}</li>
        </ul>
      )}
    </div>
  );
}

export default App;
