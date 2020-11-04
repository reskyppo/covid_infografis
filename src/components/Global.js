import { useEffect, useState } from "react";
import Axios from "axios";
import Stats from "../components/Stats";

import React from "react";

const Global = () => {
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
    <div className="w-full ">
      <h2 className="text-4xl font-semibold leading-10 text-center py-4">
        <span className="border-b border-gray-400 pt-2">Global Cases</span>
      </h2>
      <section className="sm:flex justify-evenly">
        <Stats title="Confirmed" number={confirmed} color />
        <Stats title="Deaths" number={deaths} />
        <Stats title="Recovered" number={recovered} color />
      </section>
    </div>
  );
};

export default Global;
