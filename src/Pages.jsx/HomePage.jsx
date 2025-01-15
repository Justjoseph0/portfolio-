import { ArrowDown as FaAngleDown } from "lucide-react";

const HomePage = () => {
  return (
    <header
      data-aos="fade-up"
      className="min-h-screen flex justify-center items-center relative"
    >
      <div className="flex md:flex-row flex-col items-center justify-between gap-y-8 md:gap-0">
        <div className="md:w-2/3 flex flex-col gap-y-4">
          <h1 className="md:text-5xl text-3xl text-customPink font-bold">
            Hello! I&apos;m Joseph.{" "}
            <span className="inline-block animate-wave">👋</span>
          </h1>
          <p className="font-medium text-xl w-[90%]">
            A{" "}
            <span className="text-customPink font-semibold">
              Full Stack Developer
            </span>{" "}
            with a passion for{" "}
            <span className="font-nanum text-gray-300 text-xl">(crafting)</span>{" "}
            engaging and dynamic user experiences, bridging the gap between
            front-end aesthetics and back-end functionality.{" "}
            <span className="inline-block animate-bounce ml-1">✨</span>
          </p>
        </div>
        <div className="md:w-1/3 flex justify-end">
          <img
            src="images/avatar.png"
            alt="avatar"
            className="h-48 w-48 object-cover rounded-full bg-customPink"
          />
        </div>
      </div>
      <div className="absolute bottom-4 animate-bounce text-customPink">
        <FaAngleDown />
      </div>
    </header>
  );
};

export default HomePage;
