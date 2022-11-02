import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Filter from "./Filter";
const url = "https://restcountries.com/v2/all";
const serachURL = (name) => `https://restcountries.com/v2/name/${name}`;

const Countries = () => {
  const [countries, setCountries] = useState(null);
  const [searchValue, setSearchVlaue] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchCountryData = async () => {
    setLoading(true);
    const data = await axios
      .get(url)
      .then((res) => {
        if (res && res.data && res.data.length > 0) {
          return res.data;
        } else {
          return { msg: "nothing was found" };
        }
      })
      .catch(() => {
        return { msg: "nothing was found" };
      });

    if (data && data.length > 0) {
      setCountries(data);
    } else {
      setCountries([]);
      setMessage(data.msg);
    }
    setLoading(false);
  };

  const search = async () => {
    setLoading(true);
    const data = await axios
      .get(serachURL(searchValue))
      .then((res) => {
        if (res && res.data && res.data > 0) {
          return res.data;
        } else {
          return { msg: "nothing found" };
        }
      })
      .catch(() => {
        return { msg: "nothing found" };
      });

    if (data && data.length > 0) {
      setCountries(data);
    } else {
      setCountries([]);
      setMessage(data.msg);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (searchValue && countries && countries.length >= 0) {
      search();
    } else {
      fetchCountryData();
    }
  }, [searchValue]);

  const removeCountry = (numericCode) => {
    const newCountry = countries.filter((country) => {
      return country.numericCode !== numericCode;
    });

    setCountries(newCountry);
  };

  const onChange = (txt) => {
    setSearchVlaue(txt);
  };

  return (
    <>
      <Filter
        onChange={(text) => {
          onChange(text);
        }}
      />
      {loading ? (
        <h1 style={{ textAlign: "center" }}>Loading ......</h1>
      ) : (countries && countries.length == 0) || !countries ? (
        <h1 style={{ textAlign: "center" }}>
          {message || "nothing was found"}
        </h1>
      ) : (
        <section className="grid">
          {countries?.map((country) => {
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
      )}
    </>
  );
};
export default Countries;
