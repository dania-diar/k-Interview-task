import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { rsort } from "semver";
import "../country.css";

const url = (name) => `https://restcountries.com/v2/name/${name}`;
const Country = () => {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(true);
  const { name } = useParams();

  const fetchCountryData = async () => {
    const data = await axios
      .get(url(name))
      .then((res) => {
        if (res && res.data) {
          return res.data;
        } else {
        }
      })
      .catch();
    setCountry(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchCountryData();
  }, []);

  return (
    <>
      <section className="country">
        <Link to="/" className="btn btn-light">
          <i className="fas fa-arrow-left"></i> Home
        </Link>
        {loading ? (
          <h1 style={{ textAlign: "center" }}>Loading ..... </h1>
        ) : (
          <>
            {country?.map((c) => {
              const {
                numericCode,
                flag,
                name,
                nativeName,
                population,
                region,
                subregion,
                capital,
                topLevelDomain,
                currencies,
                languages,
                borders,
              } = c;

              return (
                <article key={numericCode}>
                  <div className="country-inner">
                    <div className="flag">
                      <img src={flag} alt={name} />
                    </div>

                    <div className="country-details">
                      <div>
                        <h2>{name}</h2>
                        <h5>
                          Native Name: <span>{nativeName}</span>
                        </h5>
                        <h5>
                          population:<span>{population}</span>{" "}
                        </h5>
                        <div />
                        <div>
                          <h5>
                            Region : <span>{region}</span>
                          </h5>
                          <h5>
                            Sb Region: <span>{subregion}</span>
                          </h5>
                          <h5>
                            Capital: <span>{capital}</span>
                          </h5>
                        </div>
                      </div>

                      <h5>
                        {" "}
                        Top Level Domain: <span>{topLevelDomain}</span>
                      </h5>
                      <h5>
                        {" "}
                        Currencies: <span>{currencies[0].name}</span>{" "}
                      </h5>
                      <h5>
                        Languages: <span>{languages[0].name}</span>{" "}
                      </h5>
                    </div>
                  </div>
                  {borders ? (
                    <div>
                      <h3> Border countries: </h3>
                      <div className="borders">
                        {" "}
                        {borders?.map((border) => {
                          return (
                            <ul key={border}>
                              <li>{border}</li>
                            </ul>
                          );
                        })}
                      </div>
                    </div>
                  ) : null}
                </article>
              );
            })}
          </>
        )}
      </section>
    </>
  );
};

export default Country;
