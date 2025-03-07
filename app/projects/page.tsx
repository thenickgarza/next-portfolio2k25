import Image from "next/image"

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
    title: "EaglePI",
    description: "Description of your second project highlighting its main functionalities.",
    imageUrl: "/images/EaglePI.png",
    technologies: ["PHP", "Wordpress", "ACF", "WPML"],
    link: "https://eaglepi.com"
  },
  {
    id: 2,
    title: "Evergreen Recycling",
    description: "A brief description of your first project and its key features.",
    imageUrl: '/images/Evergreen.png',
    technologies: ["PHP", "Wordpress", "Elementor"],
    link: "https://evergreen-recycling.com"
  },
  {
    id: 3,
    title: "Sunbright Recycling",
    description: "Description of your third project highlighting its main functionalities.",
    imageUrl: "/images/Sunbright.png",
    technologies: ["PHP", "Wordpress", "Elementor"],
    link: "https://sunbright-recycling.com"
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Description of your fourth project highlighting its main functionalities.",
    imageUrl: "/images/Weather-Dashboard.png",
    technologies: ["HTML", "Bootstrap", "Javascript"],
    link: "https://github.com/thenickgarza/Weather-Dashboard"
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-900 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold mb-4 text-white animate-[slide-in_0.5s_ease-out]">Projects</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          A collection of websites I've built and/or contributed to.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-amber-500/20 hover:shadow-xl transition-all duration-300 border border-gray-700"
          >
            <div className="aspect-video bg-gray-700 relative">
              {project.imageUrl ? (
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Project Image
                </div>
              )}
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
                  className="text-amber-400 hover:text-amber-300 transition-colors duration-200 flex items-center gap-2 group w-fit px-4 py-2 rounded-full bg-gray-700/50 hover:bg-gray-700 border border-amber-400/20 hover:border-amber-400/40"
                >
                  <span>View Project</span>
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