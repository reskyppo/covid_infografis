const Stats = ({ title, number }) => {
  return (
    <div className="p-3 text-center relative z-10 ">
      <h4 className="text-sm uppercase text-gray-500 leading-tight">{title}</h4>
      <h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">
        {number}
      </h3>
    </div>
  );
};

export default Stats;
