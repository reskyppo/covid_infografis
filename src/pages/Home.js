import { useEffect, useState } from "react";
import Axios from "axios";
import Stats from "../components/Stats";
import Sections from "../components/Sections";

const Home = () => {
  const [confirmed, setConfirmed] = useState();
  const [deaths, setDeaths] = useState();
  const [recovered, setRecovered] = useState();
  useEffect(() => {
    Axios.get("https://covid19.mathdro.id/api")
      .then((res) => {
        setConfirmed(res.data.confirmed.value);
        setDeaths(res.data.deaths.value);
        setRecovered(res.data.recovered.value);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container mx-auto">
      <div className=" text-3xl font-semibold text-center p-2">
        <span className="bg-blue-200 rounded">Covid tracker</span>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl leading-10 text-center py-4">
          <span className="bg-teal-200 rounded">Global</span>
        </h2>
        <section className="sm:flex">
          <Stats title="Confirmed" number={confirmed} />
          <Stats title="Deaths" number={deaths} />
          <Stats title="Recovered" number={recovered} />
        </section>
      </div>

      <div className="mt-16">
        <Sections />
      </div>
    </div>
  );
};

export default Home;
