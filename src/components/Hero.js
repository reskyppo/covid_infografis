import heroPNG from "../assets/img/hero.png";
import DarkModeToggle from "react-dark-mode-toggle";

const Hero = ({ onChange, checked }) => {
  return (
    <div className="flex py-4 lg:ml-32">
      <div className="xl:flex-col xl:w-1/2 md:mt-16">
        <section className="bg-blue-100 w-20 h-8 rounded-xl">
          <p className="text-center font-semibold py-1 text-blue-500">
            covid-19
          </p>
        </section>
        <section className="text-6xl font-bold">
          <p className="flex-col">Save yourself</p>
          <p className="flex-col">Save the world.</p>
        </section>
        <section className="text-lg text-gray-500">
          Coronavirus disease (COVID-19) is an infectious disease <br /> caused
          by a newly discovered coronavirus.
        </section>

        <DarkModeToggle
          onChange={onChange}
          checked={checked}
          size={80}
          className="mt-4"
        />
      </div>
      <img src={heroPNG} alt="hero" className="hidden xl:flex w-1/3" />
    </div>
  );
};

export default Hero;
