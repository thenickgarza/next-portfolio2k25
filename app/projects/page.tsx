import { useEffect } from "react"

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  link?: string;
}

// Temporary project data - replace with your actual projects
const projects: Project[] = [
  {
    id: 1,
    title: "Project One",
    description: "A brief description of your first project and its key features.",
    imageUrl: "/placeholder.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/yourusername/project1"
  },
  {
    id: 2,
    title: "Project Two",
    description: "Description of your second project highlighting its main functionalities.",
    imageUrl: "/placeholder.jpg",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    link: "https://github.com/yourusername/project2"
  },
  {
    id: 3,
    title: "Project Three",
    description: "Description of your third project highlighting its main functionalities.",
    imageUrl: "/placeholder.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/yourusername/project3"
  },
  {
    id: 4,
    title: "Project Four",
    description: "Description of your fourth project highlighting its main functionalities.",
    imageUrl: "/placeholder.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/yourusername/project4"
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-900 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold mb-4 text-white">Projects</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          A collection of my work showcasing my skills and experience in web development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-amber-500/20 hover:shadow-xl transition-all duration-300 border border-gray-700"
          >
            <div className="aspect-video bg-gray-700">
              {/* Replace with actual project image */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Project Image
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-700 text-amber-400 rounded-full text-sm border border-amber-400/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 transition-colors duration-200 flex items-center gap-1 group"
                >
                  View Project 
                  <span className="transform transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}