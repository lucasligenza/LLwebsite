'use client'
import { motion } from 'framer-motion'

const experiences = [
  {
    title: "AI Engineer Co-op",
    company: "IBM",
    period: "May 2025 – May 2026",
    description: "Upcoming co-op position as an AI Engineer, working remotely and in State College on cutting-edge artificial intelligence solutions.",
    skills: ["AI Development", "Machine Learning", "Software Engineering"],
    icon: "🤖"
  },
  {
    title: "Co-Executive Director",
    company: "HackPSU",
    period: "Nov. 2024 – Present",
    description: "Leads Penn State's largest student-run hackathon. Delegates and manages nine organizing teams for sponsorship, marketing, and logistics. Facilitates relations between alumni, sponsors, other organizations, and participants.",
    skills: ["Leadership", "Event Management", "Team Coordination"],
    icon: "🚀"
  },
  {
    title: "Software Engineering Intern",
    company: "Broadcom",
    period: "May 2024 – Aug. 2024",
    description: "Formulated internal software from scratch to help with the management of register settings for an array of different computer chips. Engineered an API to allow for the software to be compatible with current workplace technologies. Collaborated with experts to deepen understanding of the chip design process.",
    skills: ["Software Development", "API Design", "Chip Design"],
    icon: "💻"
  },
  {
    title: "Machine Learning Engineer",
    company: "Nittany AI Alliance",
    period: "Feb. 2024 – May 2024",
    description: "Awarded Advance Excellence Award for outstanding performance and dedication. Utilized Agile development strategy to provide the American Red Cross with analysis of blood donor patterns. Developed machine learning models using Python, GitHub, Azure, and various data analysis libraries.",
    skills: ["Python", "Machine Learning", "Azure"],
    icon: "🎯",
    award: "🏆 Advance Excellence Award"
  }
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-gray-800"
        >
          Professional Experience
        </motion.h2>
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row gap-8 items-start"
            >
              <div className="flex-1 text-right md:pr-12">
                <div className="flex items-center justify-end gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-green-700">{exp.title}</h3>
                    <h4 className="text-xl text-gray-600">{exp.company}</h4>
                    <p className="text-gray-500">{exp.period}</p>
                    {exp.award && (
                      <p className="text-amber-600 mt-1 font-medium">{exp.award}</p>
                    )}
                  </div>
                  <span className="text-4xl">{exp.icon}</span>
                </div>
                <div className="flex flex-wrap gap-2 justify-end">
                  {exp.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="w-px h-full bg-green-200 hidden md:block" />
              <div className="flex-1 md:pl-12">
                <p className="text-gray-700 whitespace-pre-line">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 
