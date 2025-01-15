import { Linkedin } from "lucide-react";
import { GithubIcon, TwitterIcon } from "../components/Icons";

const Contact = () => {
  return (
    <section
      data-aos="fade-up"
      id="contact"
      className="bg-[#DDA853] py-16 md:py-24 mt-28 flex justify-center items-center"
    >
      <div className="w-11/12 md:w-4/5 flex flex-col md:flex-row gap-12 md:gap-20 items-start">
        {/* Left side content */}
        <div className="w-full md:w-1/3 space-y-6 ">
          <h3 className="font-bold text-3xl md:text-4xl leading-relaxed text-[#16404D]">
            Let&apos;s Connect! 💌
          </h3>
          <p className="text-lg leading-relaxed text-[#16404D]">
            If you ever want to grab a coffee/bubble tea{" "}
            <span className="font-nanum italic">(virtually)</span> or just want
            a quick chat - you can find me on social media or you can send me a
            message here!
          </p>
          <ul className="flex justify-center gap-10">
            <li>
              <a
                href="https://www.linkedin.com/in/joseph-onuoha-40537a2b2/"
                target="_blank"
              >
                <Linkedin />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://x.com/smallpuppi2?s=21&t=o7bxCcwincJNPRKmagWZRQ"
              >
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/Justjoseph0">
                <GithubIcon />
              </a>
            </li>
          </ul>
        </div>

        {/* Contact form */}
        <form className="w-full md:w-2/3 flex flex-col gap-y-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full py-3 px-6 rounded-lg border-2 border-gray-200 outline-none transition-all duration-300 placeholder:text-gray-400 hover:border-gray-300 bg-white/90"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full py-3 px-6 rounded-lg border-2 border-gray-200 outline-none transition-all duration-300 placeholder:text-gray-400 hover:border-gray-300 bg-white/90"
          />

          <textarea
            placeholder="Your message"
            rows={6}
            className="w-full py-3 px-6 rounded-lg border-2 border-gray-200 outline-none transition-all duration-300 placeholder:text-gray-400 resize-none hover:border-gray-300 bg-white/90"
          />

          <button
            type="submit"
            className="self-start px-8 py-3 bg-[#16404D] text-white rounded-lg hover:bg-[#16404D]/90 hover:shadow-lg transition-all duration-300 font-medium"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
