'use client'
import { motion } from 'framer-motion'

const projects = [
  {
    title: "Register Database System",
    description: "GUI interface to view, update, and collaborate with teammates distributed among design teams at Broadcom. Reduces time spent on parsing and modification scripts from days of work to a few minutes.",
    technologies: ["MySQL", "Python", "Tkinter", "SQL", "Git"],
    period: "May 2024 – Aug. 2024",
    icon: "💾"
  },
  {
    title: "Kinderverse",
    description: "Early childhood learning tool that presents the user with AI-generated choose-your-own-adventure stories that integrate life lessons. Implements a large language model and a diffusion model. Awarded $2500 prize by Nittany AI for prototype and MVP.",
    technologies: ["React", "JavaScript", "Flask", "Python", "Git"],
    period: "Oct. 2023 – April 2024",
    icon: "📚",
    award: "🏆 Nittany AI $2500 Prize Winner"
  },
  {
    title: "Red Cross Donor Site Prediction",
    description: "Identified optimal location for blood donation sites based on data analysis with the American Red Cross. Utilized machine learning models for location optimization.",
    technologies: ["Python", "Sklearn", "PyTorch", "Git", "Azure"],
    period: "Jan. 2024 – May 2024",
    icon: "🩸"
  },
  {
    title: "Course Scheduler",
    description: "Created a swing application that includes admin and student commands for scheduling courses. Implemented using Java with NetBeans and SQL for database management.",
    technologies: ["Java", "NetBeans", "SQL"],
    period: "Oct. 2023 – Dec. 2023",
    icon: "📅"
  }
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-gray-800"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{project.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-green-700 group-hover:text-green-600 transition-colors">{project.title}</h3>
                    <p className="text-gray-500 text-sm">{project.period}</p>
                    {project.award && (
                      <p className="text-amber-600 mt-1 font-medium">{project.award}</p>
                    )}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium group-hover:bg-green-100 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 