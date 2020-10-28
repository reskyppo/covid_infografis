const Stats = ({ title, number }) => {
  return (
    <div className="w-full md:w-1/3 px-2">
      <div className="rounded-lg shadow-sm mb-4">
        <div className="rounded-lg bg-white shadow relative overflow-hidden">
          <div className="p-3 text-center relative z-10">
            <h4 className="text-sm uppercase text-gray-500 leading-tight">
              {title}
            </h4>
            <h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">
              {number}
            </h3>
          </div>
          <div className="absolute bottom-0 inset-x-0">
            <canvas id="chart1" height="70"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
