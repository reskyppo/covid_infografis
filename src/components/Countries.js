import { useEffect, useState } from "react";
import Axios from "axios";

const Countries = () => {
  const [countries, setCountries] = useState(() => []);
  const [selected, setSelected] = useState("IDN");
  const handleValue = async (e) => {
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
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [selected]);
  return (
    <div className="flex justify-center ">
      <select onChange={handleValue} className="border border-black">
        <option value="IDN">Indonesia</option>
        {countries.map((data, idx) => (
          <option value={data.iso3} key={idx}>
            {data.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Countries;
