import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="relative bg-[#121212]">
      {/* Cinematic Scrollytelling Section */}
      <div className="relative">
        <ScrollyCanvas />
        <Overlay />
      </div>

      {/* Projects Section */}
      <Projects />

      {/* Experience & Skills Section */}
      <section className="py-32 px-10 md:px-24 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Experience */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-12 tracking-tighter uppercase">Professional Journey</h2>
            <div className="space-y-12">
              <ExperienceItem 
                company="Amna Ashraf Apparels"
                role="Web Developer & IT Manager"
                period="2024 – Present"
                description="Leading IT infrastructure and software development projects. Managing enterprise solutions and system security."
              />
              <ExperienceItem 
                company="Elixir Company"
                role="Backend Developer"
                period="2023 – 2024"
                description="Built RESTful APIs and optimized server-side logic using PHP & MySQL. Managed complex database architectures."
              />
              <ExperienceItem 
                company="SYSBORG"
                role="Software Developer"
                period="2021 – 2023"
                description="Contributed to full-stack web applications and assisted in IT management and system implementation."
              />
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-12 tracking-tighter uppercase">Core Expertise</h2>
            <div className="grid grid-cols-2 gap-4">
              <SkillCard title="Development" skills={["React.js", "Next.js", "Node.js", "PHP", "MySQL", "MongoDB"]} />
              <SkillCard title="IT & Networking" skills={["Infrastructure Design", "Cybersecurity", "Kerio Control", "SysAdmin"]} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-10 md:px-24 border-t border-white/5 text-center">
        <p className="text-white/20 text-sm tracking-[0.2em] uppercase">
          &copy; 2026 Muhib Mirza — Crafted with Next.js & Framer Motion
        </p>
      </footer>
    </main>
  );
}

function ExperienceItem({ company, role, period, description }: { company: string; role: string; period: string; description: string }) {
  return (
    <div className="relative pl-8 border-l border-white/10">
      <div className="absolute left-[-5px] top-2 w-2 h-2 bg-white rounded-full" />
      <span className="text-white/30 text-xs font-mono uppercase tracking-widest">{period}</span>
      <h3 className="text-xl font-bold text-white mt-1">{role}</h3>
      <p className="text-white/50 text-sm font-medium mb-4">{company}</p>
      <p className="text-white/60 font-light leading-relaxed">{description}</p>
    </div>
  );
}

function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="glass p-6 rounded-xl">
      <h3 className="text-white/40 text-xs font-mono uppercase tracking-[0.2em] mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="text-white text-sm font-light px-3 py-1 bg-white/5 rounded-md border border-white/5">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
