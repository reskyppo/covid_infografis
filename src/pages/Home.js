import Countries from "../components/Countries";
import Global from "../components/Global";

const Home = () => {
  return (
    <div className="px-5 md:px-20 py-10">
      <div className=" text-3xl font-semibold text-center p-2">
        <span className="bg-blue-200 rounded">Covid tracker</span>
      </div>

      <div className="mt-16">
        <Global />
      </div>

      <div className="mt-16">
        <Countries />
      </div>
    </div>
  );
};

export default Home;
