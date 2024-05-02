import React, { useEffect, useState } from "react";
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
  data: Object.entries(transportOptions.data).reduce((acum, [key, value]) => {
    return {
      ...acum,
      [key]: {
        ...value,
        type: transportOptions.transportType[key],
      },
    };
  }, {}),
  keys: Object.keys(transportOptions.data).reduce((acum, curr) => {
    if (acum.includes(curr)) return acum;
    return [...acum, curr];
  }, []),
  transportType: Object.values(transportOptions.transportType)
    .reduce((acum, curr) => {
      if (acum.includes(curr)) return acum;
      return [...acum, curr];
    }, [])
    .join(", ")
    .toLocaleUpperCase(),
};

function App() {
  const [selectedOption, setSelectedOption] = useState(undefined);

  const handleChange = (event) => {
    setSelectedOption({
      type: event.target.value,
      value: transportOptionsFormatted.data[event.target.value],
    });
  };

  return (
    <div className='App'>
      <p>
        Tipos de medio de transporte:{" "}
        {transportOptionsFormatted.transportType.replace(/,/g, "-")}
      </p>
      <div className='select-container'>
        <label>Selecciona un medio de transporte</label>
        <select
          value={selectedOption?.type}
          onChange={handleChange}>
          {transportOptionsFormatted.keys.map((transport) => (
            <option key={transport} value={transport}>
              {transport}
            </option>
          ))}
        </select>

        <button onClick={() => setSelectedOption(undefined)}>Limpiar</button>
      </div>
      {selectedOption?.value && (
        <ul>
          {Object.entries(selectedOption.value).map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
