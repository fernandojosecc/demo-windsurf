import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

interface Talk {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;
  videoUrl: string;
}

const mockProjects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Plataforma de comercio electrónico construida con React y Node.js",
    imageUrl: "https://picsum.photos/seed/project1/400/300.jpg"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Aplicación de gestión de tareas con TypeScript y Next.js",
    imageUrl: "https://picsum.photos/seed/project2/400/300.jpg"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Dashboard del clima en tiempo real con API integration",
    imageUrl: "https://picsum.photos/seed/project3/400/300.jpg"
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description: "Herramienta de análisis para redes sociales con gráficos interactivos",
    imageUrl: "https://picsum.photos/seed/project4/400/300.jpg"
  }
];

const mockTalks: Talk[] = [
  {
    id: 1,
    title: "React Hooks Best Practices",
    summary: "Aprende las mejores prácticas para usar React Hooks en tus proyectos y evitar errores comunes.",
    imageUrl: "https://picsum.photos/seed/talk1/200/150.jpg",
    videoUrl: "https://youtube.com/watch?v=example1"
  },
  {
    id: 2,
    title: "TypeScript para Principiantes",
    summary: "Introducción a TypeScript para desarrolladores JavaScript que quieren mejorar sus habilidades.",
    imageUrl: "https://picsum.photos/seed/talk2/200/150.jpg",
    videoUrl: "https://youtube.com/watch?v=example2"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-gray-900">
              MiBlog
            </div>
            <div className="flex space-x-8">
              <Link 
                href="/" 
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-gray-900 hover:text-blue-600 font-medium transition-colors"
              >
                About
              </Link>
              <Link 
                href="/blog" 
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                Blog
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* About Me Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="https://picsum.photos/seed/profile/400/400.jpg" 
                  alt="Foto de perfil de Fernando Contreras, desarrollador web"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  About me
                </h2>
                <div className="space-y-4 text-gray-600 mb-8">
                  <p className="leading-relaxed">
                    Soy un desarrollador web apasionado con más de 5 años de experiencia en la creación de aplicaciones modernas y escalables. Me especializo en React, Next.js y TypeScript.
                  </p>
                  <p className="leading-relaxed">
                    Mi enfoque se centra en escribir código limpio, mantenible y seguir las mejores prácticas de la industria. Disfruto enfrentando nuevos desafíos y aprendiendo constantemente sobre las últimas tecnologías.
                  </p>
                  <p className="leading-relaxed">
                    Además del desarrollo, me apasiona compartir conocimiento a través de este blog y charlas técnicas. Creemos firmemente en el poder de la comunidad y el aprendizaje colaborativo.
                  </p>
                  <p className="leading-relaxed">
                    Cuando no estoy programando, puedes encontrarme explorando nuevas tecnologías, contribuyendo a proyectos open source o disfrutando de un buen café mientras leo sobre las últimas tendencias en desarrollo web.
                  </p>
                </div>
                <Link 
                  href="mailto:fernando@example.com"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Contactar
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {mockProjects.map((project) => (
                <div key={project.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <img 
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Talks Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Talks
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {mockTalks.map((talk) => (
                <div key={talk.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex">
                    <img 
                      src={talk.imageUrl}
                      alt={talk.title}
                      className="w-32 h-24 object-cover flex-shrink-0"
                    />
                    <div className="flex-grow p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {talk.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {talk.summary}
                      </p>
                      <a 
                        href={talk.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                      >
                        Ver charla
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">
                © 2024 MiBlog. Todos los derechos reservados.
              </p>
            </div>
            <div className="flex space-x-6">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Twitter/X
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                TikTok
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
