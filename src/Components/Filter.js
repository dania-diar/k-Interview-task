import React, { useEffect, useState } from "react";

const Filter = ({ onChange }) => {
  return (
    <section className="filter">
      <form className="form-control">
        <input
          onChange={(e) => {
            onChange(e.target.value);
          }}
          type="search"
          name="search"
          id="search"
          placeholder="search for country "
        />
      </form>

      <div className="region-filter">
        <select name="select" id="select" className="select">
          <option value="Filter By Region"> Filter By Region </option>
          <option value="Africa"> Africa </option>
          <option value="America"> America </option>
          <option value="Europe"> Europe </option>
          <option value="Oceania"> Oceania </option>
        </select>
      </div>
    </section>
  );
};

export default Filter;
