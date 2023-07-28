import Image from "next/image";
import Gallery from "./components/Gallery";
import { pressStart2P, sourceCodePro, instrumentSans } from "./styles/fonts";

export default function Home() {
  return (
    <div className="text-white w-11/12 m-auto flex-col my-6">
      <h1 className={`text-center ${instrumentSans.className}`}>
        Artificial Intelligence Automation Agency
      </h1>
      <div className="flex flex-row justify-start">
        <div className="flex flex-col items-start justify-center min-h-screen text-white py-4 px-4 sm:px-6 lg:px-8 w-6/12">
          <h2
            className={`w-full text-4xl tracking-tight font-extrabold text-orange-400 sm:text-5xl md:text-6xl text-left ${pressStart2P.className}`}
          >
            AI chat bots built for you!
          </h2>
          <p
            className={`w-full mt-6 max-w-2xl text-center text-lg leading-7 sm:text-2xl sm:leading-9 sm:text-left lg:text-3xl ${instrumentSans.className}`}
          >
            <span className="font-bold">
              MANTRA AI specializes in custom engineered Artificial Intelligence applications built for your companies unique data.</span> 
              <br></br>
              <br></br>
              <span>We build stunning AI projects
              tailored to you, that are not only impressive but also have real-world
              applications.
            </span>
            <br></br>
            <br></br>
            Whether you're aiming to generate a passive income, create a
            personal assistant to streamline your work, or simply to enhance
            your onboarding workflow, MANTRA AI has the solution for you.
          </p>
        </div>
        {/* Gallery */}
        <Gallery />
      </div>
      <p
        className={`w-full mt-4 text-center text-10 leading-7 sm:text-2xl sm:leading-9 sm:text-center lg:text-3xl ${sourceCodePro.className}`}
      >
        ---
      </p>
    </div>
  );
}
