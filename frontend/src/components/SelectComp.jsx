import React from "react";

export default function SelectComp({data, action, type}) {
  const handleChange = (e) => {
    action((prev) => {
      return {
        ...prev,
        [type]: e.target.value
      }
    })
  }
  return (
    <select className="form-select" onChange={(e) => handleChange(e)}>
      <option disabled selected hidden>{data.defaultOption}</option>
      {!data.options ? '' : data.options.map(e => (
        <option value={e}>{e}</option>
      ))}
    </select>
  );
}
