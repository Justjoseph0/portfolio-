const About = () => {
  return (
    <section
      data-aos="fade-up"
      id="about"
      className="my-28 flex md:flex-row flex-col gap-y-6 md:gap-y-0 justify-between"
    >
      <div className="md:w-[62%] w-full">
        <h3 className="text-3xl text-customPink font-semibold mb-5">
          About Me 📖
        </h3>
        <div className="flex flex-col gap-y-4 text-lg">
          <p>
            Hello again! Thanks for scrolling this far! 🤗 I&apos;m excited to
            share my work with you, and I hope it sparks some inspiration!
          </p>
          <p>
            Outside of coding, I&apos;m a passionate sports fan with a
            particular love for Arsenal <span className="animate-bounce inline-block">⚽</span>. I also enjoy watching movies in my
            downtime—always on the lookout for great recommendations!
          </p>
          <p>
            In my free time, you&apos;ll usually find me playing Candy Crush
            <a href="https://ccs.play.king.com/qsWL/fi?deep_link_value=dpid%3D139656228" target="_blank" className="font-nanum text-gray-300 mx-1">(add me!)</a> or enjoying other video games. 🤓 I&apos;m also aiming to
            read more, so don&apos;t hesitate to reach out with any book
            suggestions!
          </p>
        </div>
      </div>
      <div className="h-[400px] w-full md:w-[33%]">
        <img
          src="profile.png"
          alt="profile pics"
          className="h-full w-full object-cover rounded-xl"
        />
      </div>
    </section>
  );
};

export default About;
