


import portfolioData from "../data";

import {
  FaJava,
  FaPhp,
  FaPython,
  FaJs,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGlobe,
  FaLayerGroup,
  FaNetworkWired,
  FaRoute,
  FaTools,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaServer,
  FaSitemap,
  FaWrench,
} from "react-icons/fa";

import {
  SiDjango,
  SiTailwindcss,
  SiFlutter,
  SiCisco,
  SiWireshark,
  SiMysql,
  SiFirebase,
  SiBootstrap,
  SiVisualstudiocode,
} from "react-icons/si";

// Icon mapping for each skill
const skillIcons = {
  Java: FaJava,
  PHP: FaPhp,
  Python: FaPython,
  JavaScript: FaJs,

  Django: SiDjango,
  "Node.js": FaNodeJs,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  "Tailwind CSS": SiTailwindcss,
  Flutter: SiFlutter,

  "OSI Model": FaLayerGroup,
  "IPv4/IPv6": FaGlobe,
  "TCP/IP": FaNetworkWired,
  Subnetting: FaSitemap,
  "Cisco Packet Tracer": SiCisco,
  Traceroute: FaRoute,
  Wireshark: SiWireshark,
  Troubleshooting: FaWrench,

  Git: FaGitAlt,
  GitHub: FaGithub,
  "VS Code":FaCode, 
  MySQL: SiMysql,
  Firebase: SiFirebase,
  Bootstrap: SiBootstrap,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-white dark:bg-gray-950 text-black dark:text-white py-28 px-6 scroll-mt-20 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="mb-16">
         
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-5">
            Skills & Technologies
            <span className="text-gray-400 dark:text-gray-500">.</span>
          </h2>

          <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg max-w-xl">
            Technologies, programming languages, and tools
            I use while learning and developing projects.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {portfolioData.skills.map((skill, index) => (
            <div
              key={skill.category}
              className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-7 hover:border-black dark:hover:border-white hover:-translate-y-1 transition-all duration-300"
            >

              {/* Category Heading */}
              <div className="flex items-center justify-between mb-7">
                <h3 className="text-xl md:text-2xl font-bold">
                  {skill.category}
                </h3>

               
              </div>

              {/* Skills with Icons */}
              <div className="flex flex-wrap gap-3">

                {skill.items.map((item) => {
                  const Icon = skillIcons[item] || FaCode;

                  return (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 text-sm font-medium hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black dark:hover:border-white transition-all duration-300 cursor-default"
                    >
                      <Icon className="text-lg shrink-0" />
                      {item}
                    </span>
                  );
                })}

              </div>
            </div>
          ))}

        </div>

        {/* Bottom Divider */}
        <div className="mt-20 border-t border-gray-200 dark:border-gray-800"></div>

      </div>
    </section>
  );
}
