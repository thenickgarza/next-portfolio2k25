export default function About() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Nick Garza</h1>
        <p className="text-gray-600 mb-2">Full Stack Developer</p>
        <div className="flex justify-center space-x-4 text-sm text-gray-500">
          <span>📧 thenickgarza@gmail.com</span>
          <span><a className="hover:text-blue-400" href="tel:+18086317708">📱 (808) 631-7708</a></span>
        </div>
      </div>

      {/* Summary Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 border-b-2 border-gray-200 pb-2">Professional Summary</h2>
        <p className="text-gray-700">
          Experienced software developer with a strong background in web development and a passion for creating efficient, scalable solutions. 
          Skilled in modern technologies and best practices, with a focus on delivering high-quality user experiences.
        </p>
      </div>

      {/* Experience Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">Work Experience</h2>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-medium">Senior Software Developer</h3>
              <span className="text-gray-500">2020 - Present</span>
            </div>
            <p className="text-gray-600 mb-2">Tech Company Inc.</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Led development of key features for company's main product</li>
              <li>Mentored junior developers and conducted code reviews</li>
              <li>Implemented best practices and improved development workflow</li>
            </ul>
          </div>
          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-medium">Software Developer</h3>
              <span className="text-gray-500">2018 - 2020</span>
            </div>
            <p className="text-gray-600 mb-2">Startup Co.</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Developed and maintained multiple web applications</li>
              <li>Collaborated with design team to implement UI/UX improvements</li>
              <li>Optimized application performance and reduced load times</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">Education</h2>
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-medium">Bachelor of Science in Computer Science</h3>
            <span className="text-gray-500">2014 - 2018</span>
          </div>
          <p className="text-gray-600">University of Technology</p>
        </div>
      </div>

      {/* Skills Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-3 rounded-lg">
            <h3 className="font-medium mb-2">Frontend</h3>
            <ul className="text-gray-700 space-y-1">
              <li>React</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Next.js</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <h3 className="font-medium mb-2">Backend</h3>
            <ul className="text-gray-700 space-y-1">
              <li>Node.js</li>
              <li>Python</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <h3 className="font-medium mb-2">Tools & Others</h3>
            <ul className="text-gray-700 space-y-1">
              <li>Git</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>CI/CD</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
