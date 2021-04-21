import React from "react";

export default function SelectComp({data}) {
  // console.log(props);
  return (
    <select className="form-select">
      <option disabled selected hidden>{data.defaultOption}</option>
      {data.options.map(e => (
        <option value={e}>{e}</option>
      ))}
    </select>
  );
}
