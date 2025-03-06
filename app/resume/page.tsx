export default function About() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl bg-gray-900 min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 text-white">Nick Garza</h1>
        <p className="text-gray-300 mb-2">Full Stack Developer</p>
        <div className="flex justify-center space-x-4 text-sm text-white">
          <span>📧 thenickgarza@gmail.com</span>
          <span><a className="hover:text-amber-400 transition-colors" href="tel:+18086317708">📱 (808) 631-7708</a></span>
        </div>
      </div>

      {/* Summary Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 border-b-2 border-gray-700 pb-2 text-white">Professional Summary</h2>
        <p className="text-gray-300">
          Experienced software developer with a strong background in web development and a passion for creating efficient, scalable solutions. 
          Skilled in modern technologies and best practices, with a focus on delivering high-quality user experiences.
        </p>
      </div>

      {/* Experience Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-700 pb-2 text-white">Work Experience</h2>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-medium text-white">Lead Web Developer</h3>
              <span className="text-gray-300">11/2023 - 03/2025</span>
            </div>
            <p className="text-gray-300 mb-2">MFG Tribe</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Led development of key features for various clients</li>
              <li>Design & develop custom theme, modules, widgets for WP and Hubspot, providing tailored solutions to extend website capabilities and streamline content management.</li>
              <li>Provide ongoing support and maintenance, including bug fixes, security updates, and feature enhancements, ensuring seamless site operation and client satisfaction.</li>
            </ul>
          </div>
          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-medium text-white">Central Grade - Full Stack Web Development</h3>
              <span className="text-gray-300">04/2023 - 01/2024</span>
            </div>
            <p className="text-gray-300 mb-2">2U</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Evaluate and grade student projects and assignments, providing detailed, constructive feedback.</li>
              <li>Work closely with instructional teams to stay updated on course material and assignments.</li>
              <li>Provide prompt responses to student inquiries regarding grades or feedback.</li>
              <li>Regularly communicate with instructors and course managers about student progress and areas of concern.</li>
              <li>Maintain an understanding of the various coding languages, tools, and best practices taught in the program, including but not limited to HTML, CSS, JavaScript, Node.js, Express.js, React.js, and MongoDB.</li>
              <li>Contribute to curriculum development by providing suggestions based on observations from grading assignments and student interactions.</li>
              <li>Adhere to grading timelines and standards.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education Section */}
      {/* <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-700 pb-2 text-white">Education</h2>
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-medium text-white">Bachelor of Science in Computer Science</h3>
            <span className="text-gray-300">2014 - 2018</span>
          </div>
          <p className="text-gray-300">University of Technology</p>
        </div>
      </div> */}

      {/* Skills Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-700 pb-2 text-white">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
            <h3 className="font-medium mb-2 text-white">Frontend</h3>
            <ul className="text-gray-300 space-y-1">
              <li>React</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Next.js</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
            <h3 className="font-medium mb-2 text-white">Backend</h3>
            <ul className="text-gray-300 space-y-1">
              <li>Node.js</li>
              <li>PHP</li>
              <li>Ruby</li>
              <li>Python</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
            <h3 className="font-medium mb-2 text-white">Tools & Others</h3>
            <ul className="text-gray-300 space-y-1">
              <li>Git</li>
              <li>AWS</li>
              <li>CI/CD</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
