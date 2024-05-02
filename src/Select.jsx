import React from "react";

export const Select = ({ onChange, options, selectedOption }) => {
  return (
    <select
      value={selectedOption && Object.keys(selectedOption)[0]}
      onChange={onChange}>
      {options.map((transport) => (
        <option key={transport} value={transport}>
          {transport}
        </option>
      ))}
    </select>
  );
};
