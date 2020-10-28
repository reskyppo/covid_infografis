import Axios from "axios";
import React, { useEffect, useState } from "react";

const Sections = () => {
  const [countries, setCountries] = useState(() => []);
  const [selected, setSelected] = useState("IDN");
  const [confirmed, setConfirmed] = useState();
  const [deaths, setDeaths] = useState();
  const [recovered, setRecovered] = useState();
  useEffect(() => {
    Axios.get("https://covid19.mathdro.id/api/countries")
      .then((res) => setCountries(res.data.countries))
      .catch((err) => console.log(err));

    Axios.get(`https://covid19.mathdro.id/api/countries/${selected}`)
      // .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, [selected]);
  const handlerValue = (e) => {
    setSelected(e.target.value);
  };
  return (
    <div className="flex justify-center items-center">
      <select onChange={handlerValue}>
        <option value={"IDN"}>Indonesia</option>
        {countries?.map((list, idx) => (
          <option value={list.iso3} key={idx}>
            {list.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Sections;
