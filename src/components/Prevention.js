import React from "react";
import reminder from "../assets/img/reminder.png";
const Prevention = () => {
  return (
    <div className="flex md:ml-32">
      <img src={reminder} alt="reminder" className="hidden md:flex w-1/3" />
      <div className=" md:w-2/3  flex">
        <section className="flex-col flex items-center text-center">
          <section className="bg-blue-100 p-2  rounded-xl">
            <p className="text-center font-semibold  text-blue-500">
              covid-19 preventions
            </p>
          </section>
          <h1 className="text-4xl font-bold">
            How To Prevent The Spread of COVID-19
          </h1>
          <p className="text-xl px-12">
            Avoiding panic, steering clear of sick people, and washing your
            hands are the most important things to do in preparation for
            COVID-19, experts say.
          </p>
          <div className="md:flex w-full pt-8">
            <div className="flex-row md:w-1/2 justify-center">
              <h1 className="text-3xl font-bold">
                What you <span className="text-green-500">should do.</span>
              </h1>
              <div className="flex-row text-left text-xl font-semibold py-4 px-4 pl-12">
                <p>
                  <span className="text-green-500 text-2xl">•</span> Reduce your
                  stress.
                </p>
                <p>
                  <span className="text-green-500 text-2xl">•</span> Speaking of
                  strengthening immunity.
                </p>
                <p>
                  <span className="text-green-500 text-2xl">• </span>
                  Take care of yourself by eating several servings of fruits and
                  vegetables daily.
                </p>
                <p>
                  <span className="text-green-500 text-2xl">• </span>
                  Wash your hands often, for at least 20 seconds, with soap and
                  water or an alcohol-based hand sanitizer.
                </p>
                <p>
                  <span className="text-green-500 text-2xl">•</span> Cough into
                  your sleeve or a tissue, not your hands.
                </p>
                <p>
                  <span className="text-green-500 text-2xl">•</span> Buy a
                  surgical mask if you are sneezing, coughing, or have a sore
                  throat, even if you do not have a fever.
                </p>
              </div>
            </div>
            <div className="flex-row md:w-1/2 justify-center">
              <h1 className="text-3xl font-bold">
                What you <span className="text-red-500">shouldn't do.</span>
              </h1>
              <div className="flex-row text-left font-semibold text-xl py-4 px-4 pl-12">
                <p>
                  <span className="text-red-500 text-2xl">•</span> Do not buy a
                  surgical mask unless you have the symptoms mentioned above.
                </p>
                <p>
                  <span className="text-red-500 text-2xl">•</span> Do not buy a
                  specialized, N95 respirator mask for filtering out airborne
                  particles unless you get it fitted, tested, and receive
                  training in its use. Otherwise, you’re wasting money.
                </p>
                <p>
                  <span className="text-red-500 text-2xl">• </span>
                  Do not just stand there if someone coughs near you; turn away
                  if possible.
                </p>
                <p>
                  <span className="text-red-500 text-2xl">• </span>
                  Do not be a Twitt-iot. Social media and other unreliable
                  sources are spreading misinformation almost as fast as the
                  coronavirus.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Prevention;
