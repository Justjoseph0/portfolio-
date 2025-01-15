import {
  ReactIcon,
  DjangoIcon,
  JavaScriptIcon,
  TailwindIcon,
  FigmaIcon,
  GitIcon,
  DjangoRestIcon,
  PythonIcon,
} from "../components/Icons";

const skills = [
  {
    name: "React.js",
    icon: <ReactIcon />,
  },
  {
    name: "Django",
    icon: <DjangoIcon />,
  },
  {
    name: "Django Rest Framework",
    icon: <DjangoRestIcon />,
  },
  {
    name: "JavaScript",
    icon: <JavaScriptIcon />,
  },
  {
    name: "Tailwind",
    icon: <TailwindIcon />,
  },
  {
    name: "Figma",
    icon: <FigmaIcon />,
  },
  {
    name: "Git",
    icon: <GitIcon />,
  },
  {
    name: "Python",
    icon: <PythonIcon />,
  },
];

const Tools = () => {
  return (
    <section data-aos="fade-up" className="">
      <h3 className="text-3xl text-customPink font-bold">My Toolkit 💻</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-y-16 gap-y-8 mt-10">
        {skills.map((skill) => (
          <div
            className="flex flex-col gap-y-2 items-center text-center"
            key={skill.name}
          >
            {skill.icon}
            <p className="text-gray-600 dark:text-gray-300 text-lg font-normal">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tools;
