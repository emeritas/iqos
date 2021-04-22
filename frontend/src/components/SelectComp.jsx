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
      {!data.options ? '' : data.options.map((e, index) => (
        <option key={index} value={e}>{e.length > 50 ? e.substring(0, 35) + '...' : e}</option>
      ))}
    </select>
  );
}
