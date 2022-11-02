import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const url = "https://restcountries.com/v2/all";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const fetchCountryData = async () => {
    const response = await fetch(url);
    const countries = await response.json();
    setCountries(countries);
    console.log(countries);
  };
  useEffect(() => {
    fetchCountryData();
  }, []);

  const removeCountry = (numericCode) => {
    const newCountry = countries.filter((country) => {
      return country.numericCode !== numericCode;
    });

    setCountries(newCountry);
  };
  return (
    <>
      <section className="grid">
        {countries.map((country) => {
          const { numericCode, name, population, region, capital, flag } =
            country;
          return (
            <article key={numericCode}>
              <div>
                <img src={flag} alt={name} />
                <div className="details">
                  <h3>{name}</h3>
                  <h4>
                    population: <span>{population}</span>
                  </h4>
                  <h4>
                    region:<span>{region}</span>
                  </h4>
                  <h4>
                    {" "}
                    Capital:<span>{capital}</span>
                  </h4>
                  <div className="buttons">
                    <Link className="btn" to={`/countries/${name}`}>
                      More
                    </Link>

                    <button
                      className="btn"
                      onClick={() => removeCountry(numericCode)}
                    >
                      Remove Country
                    </button>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};
export default Countries;
