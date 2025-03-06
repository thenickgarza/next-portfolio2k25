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
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold mb-4">Projects</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A collection of my work showcasing my skills and experience in web development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="aspect-video bg-gray-200 dark:bg-gray-700">
              {/* Replace with actual project image */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Project Image
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
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
                  className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  View Project →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}