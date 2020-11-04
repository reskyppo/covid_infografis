const Stats = ({ title, number, color, lastUpdate }) => {
  const textColor = color ? "text-green-500" : "text-red-500";
  return (
    <div className="p-3 text-center relative z-10 ">
      <h3
        className={[
          textColor,
          "text-3xl text-gray-700 font-semibold leading-tight my-3",
        ].join(" ")}
      >
        {number}
      </h3>
      <h4 className="text-sm uppercase leading-tight">{title}</h4>
      
    </div>
  );
};

export default Stats;
