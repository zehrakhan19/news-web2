import React from "react";
import "./index.css";

const Dropdown = ({ label, options }) => {
  return (
    <div class="dropdown">
      <button
        class="btn dropdown-toggle text-white"
        type="button"
        id="dropdownMenuButton"
        data-mdb-toggle="dropdown"
        aria-expanded="false"
      >
        {label}
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {options?.map((option, id) => (
          <li key={id}>
            <a class="dropdown-item" href="#">
              {option?.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
