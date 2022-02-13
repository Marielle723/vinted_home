import * as React from "react";
import { Range } from "react-range";

const Filter = () => {
  return (
    <div>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Filter;
