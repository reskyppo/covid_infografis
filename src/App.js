import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";

function App() {
  const [countries, setCountries] = useState(() => []);

  // const handleValue = async (e) => {
  //   let res = await Axios.get(
  //     `https://covid19.mathdro.id/api/countries/${e.target.value}`
  //   );
  //   let data = res.data;
  //   console.log(data);
  // };
  useEffect(() => {
    Axios.get("https://covid19.mathdro.id/api")
      .then((res) => {
        // setCountries(res.data.countries);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      {/* <select onChange={handleValue}>
        {countries.map((data, idx) => (
          <option value={data.iso3} key={idx}>
            {data.name}
          </option>
        ))}
      </select> */}
    </div>
  );
}

export default App;
