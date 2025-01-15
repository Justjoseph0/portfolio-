const projects = [
  {
    id: 1,
    title: "Wurld Blog",
    description:
      "A full-stack blog platform with a modern UI, authentication, and CMS capabilities. Features include  comment system, and responsive design.",
    technologies: ["React", "Django", "PostgreSQL", "JWT Auth"],
    image: "images/blog.png",
    bgColor: "bg-purple-100",
    projectLink: "https://blog-frontend-steel-one.vercel.app/",
    githubLink: "https://github.com/Justjoseph0/blog-frontend",
  },
  {
    id: 2,
    title: "Mortgage Repayment Calculator",
    description:
      " A user-friendly Mortgage Repayment Calculator designed to help homeowners and potential buyers estimate their monthly mortgage payments. This tool takes into account the loan amount, interest rate, and loan term to provide a clear breakdown of monthly payments, interest, and total repayment over the life of the loan.",
    technologies: ["Javascript", "Tailwind CSS"],
    image: "images/project-2.png",
    bgColor: "bg-pink-100",
    projectLink: "https://mortage-repayment-calculator.vercel.app/",
    githubLink: "https://github.com/Justjoseph0/mortage-repayment-calculator",
  },
  {
    id: 3,
    title: "E-commerce",
    description:
      "A modern and dynamic E-Commerce platform offering a seamless online shopping experience. This platform features a visually appealing interface, intuitive navigation, and responsive design, ensuring users can browse and purchase products effortlessly across all devices.",
    technologies: ["React", "Django", "PostgreSQL", "JWT Auth"],
    image: "images/e-commerce.png",
    bgColor: "bg-green-100",
    projectLink: "https://e-commerce-navy-nine.vercel.app/",
    githubLink: "https://github.com/Justjoseph0/e-commerce",
  },
  {
    id: 4,
    title: "Project Four",
    description: "A brief description of project four",
    category: "Web Development",
    image: "laptop.png",
    bgColor: "bg-blue-100",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="mt-16">
      <h3 className="font-nanum text-2xl text-customPink">
        hover over any project to learn more!
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {projects.map((project,index) => (
          <div
            key={index}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            className={`group relative overflow-hidden rounded-lg ${project.bgColor}`}
          >
            {/* Image Container */}
            <div className="h-[450px] lg:h-[500px] relative">
              <div className="p-8 h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white flex flex-col items-center text-center gap-y-4 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm mb-2 ">{project.description}</p>
                  {/* tools */}
                  <ul className="flex flex-wrap justify-center gap-x-4 gap-y-3">
                    {project.technologies?.map((tool, i) => (
                      <li
                        key={i}
                        className="bg-white text-black text-sm font-medium px-4 py-2 rounded-full capitalize"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                  {/* links */}
                  <ul className="flex gap-4 mt-8">
                    <li>
                      <a
                        href={project.projectLink}
                        target="_blank"
                        className="bg-[#E86369] py-2 px-4 rounded-md uppercase hover:bg-white hover:text-[#E86369] transition-all ease-in-out duration-300"
                      >
                        View live
                      </a>
                    </li>
                    <li>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        className="bg-[#E86369] py-2 px-4 rounded-md uppercase hover:bg-white hover:text-[#E86369] transition-all ease-in-out duration-300"
                      >
                        Github
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
