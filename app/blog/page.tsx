import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  summary: string;
  content: string;
  slug: string;
}

const mockPosts: BlogPost[] = [
  {
    id: 1,
    title: "Introducción a React Hooks",
    summary: "Aprende los fundamentos de React Hooks y cómo mejorar tus componentes funcionales con useState, useEffect y custom hooks.",
    content: `React Hooks revolucionaron el desarrollo de componentes funcionales. useState permite agregar estado, useEffect maneja efectos secundarios, y los custom hooks extraen lógica reutilizable. El código se vuelve más declarativo y fácil de entender.`,
    slug: "introduccion-a-react-hooks"
  },
  {
    id: 2,
    title: "Tailwind CSS vs Styled Components",
    summary: "Comparativa entre dos de las librerías de CSS más populares en el ecosistema React.",
    content: `Tailwind CSS es utility-first con clases predefinidas para diseño consistente. Styled Components usa CSS-in-JS para estilos dinámicos y encapsulados. Tailwind ofrece mejor rendimiento inicial, Styled Components brilla en temas complejos.`,
    slug: "tailwind-css-vs-styled-components"
  },
  {
    id: 3,
    title: "Next.js 15: Novedades",
    summary: "Descubre las nuevas características y mejoras de la última versión de Next.js.",
    content: `Next.js 15 introduce App Router, Server Components para mejor seguridad y rendimiento, optimización de imágenes mejorada, Server Actions simplificadas, y Turbopack para compilación ultrarrápida.`,
    slug: "nextjs-15-novedades"
  },
  {
    id: 4,
    title: "TypeScript Avanzado",
    summary: "Técnicas avanzadas de TypeScript para aplicaciones enterprise.",
    content: `TypeScript enterprise usa generics para reutilización, tipos condicionales para APIs flexibles, mapped types para transformación, decorators para metadatos, y patrones como Brand Types para seguridad adicional.`,
    slug: "typescript-avanzado"
  },
  {
    id: 5,
    title: "Optimización de React Apps",
    summary: "Mejora el rendimiento de tus aplicaciones React con memo, useMemo, useCallback.",
    content: `React.memo evita re-renders innecesarios. useMemo cachea cálculos costosos. useCallback memoiza funciones. La virtualización de listas y code splitting con React.lazy mejoran el rendimiento significativamente.`,
    slug: "optimizacion-react-apps"
  },
  {
    id: 6,
    title: "Testing en React",
    summary: "Guía completa para testing de componentes React con Jest y React Testing Library.",
    content: `Jest proporciona framework completo con mocking. React Testing Library enfoca testing desde perspectiva del usuario. MSW permite interceptar requests de red para testing realista de APIs.`,
    slug: "testing-en-react"
  },
  {
    id: 7,
    title: "State Management con Zustand",
    summary: "Alternativa moderna a Redux para manejo de estado en aplicaciones React.",
    content: `Zustand ofrece API simple sin providers, rendimiento excelente con selectores optimizados, soporte para middleware y persistencia, y perfecta integración con TypeScript para aplicaciones modernas.`,
    slug: "state-management-zustand"
  }
];

export default function BlogPage() {
  const featuredPost = mockPosts[0];
  const gridPosts = mockPosts.slice(1, 7);

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
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                About
              </Link>
              <Link 
                href="/blog" 
                className="text-gray-900 hover:text-blue-600 font-medium transition-colors"
              >
                Blog
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Featured Post Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="https://picsum.photos/seed/featured/600/400.jpg" 
                  alt="Featured post" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="mb-4">
                  <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                    Destacado
                  </span>
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                  {featuredPost.title}
                </h1>
                <div className="space-y-4 text-gray-600 mb-8">
                  <p className="leading-relaxed">
                    {featuredPost.summary}
                  </p>
                  <p className="leading-relaxed">
                    Descubre cómo implementar los patrones más modernos de desarrollo 
                    con React y las mejores prácticas que te ayudarán a construir 
                    aplicaciones más robustas y mantenibles.
                  </p>
                </div>
                <Link 
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Leer más
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Posts Grid Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Todos los posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {gridPosts.map((post) => (
                <div key={post.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex">
                    <img 
                      src={`https://picsum.photos/seed/post${post.id}/200/200.jpg`}
                      alt={post.title}
                      className="w-32 h-32 object-cover flex-shrink-0"
                    />
                    <div className="flex-grow p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                        {post.summary}
                      </p>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                      >
                        Leer
                      </Link>
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
