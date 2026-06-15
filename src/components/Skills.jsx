import { CheckCircle } from "lucide-react";
import { skills } from "../data";
const Skills = () => {
  return (
    <section id="skills" className="text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        <p className="text-primary uppercase tracking-widest text-sm font-semibold mb-2">
          My Skills
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Technical Expertise
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                group
                bg-white/5
                backdrop-blur-md
                border border-white/10
                rounded-2xl
                p-6
                hover:border-primary
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              <div className="flex items-start gap-4">
                
                <div className="p-3 rounded-xl bg-primary/10 border border-primary">
                  <CheckCircle className="text-primary" size={24} />
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {skill.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;