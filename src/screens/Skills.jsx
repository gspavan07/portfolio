import {
  FaReact,
  FaJs,
  FaGitAlt,
  FaPython,
  FaAws,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiFigma,
  SiMysql,
  SiGithub,
  SiDocker,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";
const Skills = () => {
  return (
    <section className="text-white py-12 px-6">
      <div className=" mb-2 text-center">
        <span className="bg-[#7a4ae22a] text-[#7B4AE2] w-fit p-4 rounded-xl text-sm font-medium">
          👩‍💻 Skills · Experiences
        </span>
        <h2 className="text-3xl font-bold mt-8">Technologies and Skills</h2>

        <p className="text-gray-400 text-xl mt-4">Technologies I use daily</p>
        <div className="flex justify-center gap-6 mt-4 flex-wrap text-[#7B4AE2] text-4xl">
          <FaReact size={50} /> <FaJs size={50} /> <SiNextdotjs size={50} />{" "}
          <SiCss3 size={50} /> <SiHtml5 size={50} /> <SiFigma size={50} />{" "}
          <FaGitAlt size={50} /> <SiGithub size={50} />
        </div>

        <p className="text-gray-400 text-xl mt-10">
          Other technologies I've worked with on projects
        </p>
        <div className="flex justify-center gap-6 mt-4 flex-wrap text-[#7B4AE2] text-4xl">
          <FaNodeJs size={50} /> <SiTailwindcss size={50} />
          <FaPython size={50} /> <SiMongodb size={50} /> <SiDocker size={50} />
          <FaAws size={50} />
          <SiMysql size={50} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
