import { Menu, X } from "lucide-react";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="w-full">
      <button
        className="fixed top-5 right-7 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X
            className={`${isOpen && "text-white"} w-10 h-10 text-customPink`}
          />
        ) : (
          <Menu className="w-10 h-10 text-[#16404D]" />
        )}
      </button>

      <div
        className={`bg-[#DDA853] fixed top-0 left-0 w-full h-full z-40 transform transition-transform duration-500 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-center items-center h-full">
          <ul className="flex flex-col gap-y-8">
            <li>
              <a
                onClick={handleLinkClick}
                className="text-3xl font-bold text-white hover:text-customPink transition-all ease-in-out duration-300"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                onClick={handleLinkClick}
                className="text-3xl font-bold text-white hover:text-customPink transition-all ease-in-out duration-300"
                href="#about"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                onClick={handleLinkClick}
                className="text-3xl font-bold text-white hover:text-customPink transition-all ease-in-out duration-300"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
