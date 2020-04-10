import React, { useState } from "react";

const useDropDown = (label, initialState, options) => {
  const [state, updateInitialState] = useState(initialState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
  const DropDown = () => (
    <label htmlFor={id}>
      {label}
      <select multiple={false}
        name={label}
        id={id}
        value={state}
        onChange={(e) => updateInitialState(e.target.value)}
        onBlur={(e) => updateInitialState(e.target.value)}
        disabled={options.length === 0}
      >
        <option value="all"> All</option>
        {options.map((resp) => (
          <option key={resp} value={resp}>
            {" "}
            {resp}
          </option>
        ))}
      </select>
    </label>
  );
  return [state, DropDown, updateInitialState];
};

export default useDropDown;
