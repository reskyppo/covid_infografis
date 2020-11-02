import { useEffect, useState } from "react";
import Axios from "axios";
import Stats from "../components/Stats";
import { data } from "autoprefixer";

const Countries = () => {
  const [confirmed, setConfirmed] = useState();
  const [deaths, setDeaths] = useState();
  const [recovered, setRecovered] = useState();
  const [countries, setCountries] = useState(() => []);
  const [selected, setSelected] = useState("IDN");
  const [name, setName] = useState();
  const handleValue = (e) => {
    setSelected(e.target.value);
  };

  useEffect(() => {
    Axios.get("https://covid19.mathdro.id/api/countries")
      .then((res) => {
        setCountries(res.data.countries);
      })
      .catch((err) => console.log(err));
    Axios.get(`https://covid19.mathdro.id/api/countries/${selected}`)
      .then((res) => {
        setConfirmed(res.data.confirmed.value);
        setDeaths(res.data.deaths.value);
        setRecovered(res.data.recovered.value);
      })
      .catch((err) => console.log(err));
  }, [selected]);

  return (
    <div>
      <h2 className="text-3xl leading-10 text-center py-8">
        <span className="bg-red-200 rounded">Select Your Countries</span>
      </h2>

      <div className="flex justify-center ">
        <select onChange={handleValue}>
          <option value="IDN">Indonesia</option>
          {countries.map((data, idx) => (
            <option value={data.iso3} key={idx}>
              {data.name}
            </option>
          ))}
        </select>
      </div>

      <section className="sm:flex py-8 justify-evenly">
        <Stats title="Confirmed" number={confirmed} />
        <Stats title="Deaths" number={deaths} />
        <Stats title="Recovered" number={recovered} />
      </section>
      <div className="h-64"></div>
    </div>
  );
};

export default Countries;
