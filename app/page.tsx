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
    summary: "Aprende los fundamentos de React Hooks y cómo mejorar tus componentes funcionales.",
    content: `React Hooks revolucionaron la forma en que escribimos componentes funcionales. Antes de los Hooks, solo podíamos usar estado y otras características de React en componentes de clase. Con la introducción de useState, useEffect y otros hooks, ahora podemos crear componentes más limpios y reutilizables.

El hook useState nos permite agregar estado a los componentes funcionales. Es simple de usar: devuelve un array con dos elementos, el valor actual del estado y una función para actualizarlo. Por ejemplo: const [count, setCount] = useState(0).

useEffect es otro hook fundamental que nos permite ejecutar efectos secundarios en nuestros componentes. Podemos usarlo para hacer peticiones a APIs, suscribirnos a eventos o manipular el DOM. Acepta una función como primer argumento y un array de dependencias como segundo argumento.

Los custom hooks nos permiten extraer lógica de componentes en funciones reutilizables. Por ejemplo, podríamos crear un hook useLocalStorage que sincronice el estado con localStorage, o un hook useFetch que maneje peticiones a APIs.

Con los Hooks, el código React se vuelve más declarativo y fácil de entender. Podemos compartir lógica entre componentes sin cambiar la jerarquía de componentes, y podemos organizar mejor nuestro código separando la lógica de la UI.`,
    slug: "introduccion-a-react-hooks"
  },
  {
    id: 2,
    title: "Tailwind CSS vs Styled Components",
    summary: "Comparativa entre dos de las librerías de CSS más populares en el ecosistema React.",
    content: `En el mundo del desarrollo web moderno, la elección de herramientas CSS es crucial para mantener código escalable y mantenible. Tailwind CSS y Styled Components representan dos enfoques fundamentalmente diferentes para manejar estilos en aplicaciones React.

Tailwind CSS es un framework de CSS utility-first que proporciona clases de bajo nivel para construir diseños personalizados directamente en el HTML. Su principal ventaja es la consistencia del diseño y la reducción del tamaño del bundle CSS. Con Tailwind, no necesitas escribir CSS personalizado, sino que combinas clases predefinidas.

Por otro lado, Styled Components es una librería CSS-in-JS que te permite escribir CSS real dentro de tus componentes JavaScript. Su enfoque se centra en la creación de componentes con estilos encapsulados y dinámicos. Es excelente para temas dinámicos y estilos basados en props.

La elección entre ambos depende de tus necesidades específicas. Tailwind es ideal para proyectos donde la consistencia visual y la velocidad de desarrollo son prioridades. Styled Components brilla en aplicaciones con temas complejos y donde la lógica de estilos necesita estar estrechamente ligada a la lógica del componente.

En términos de rendimiento, Tailwind generalmente tiene mejor rendimiento inicial ya que genera un CSS optimizado en tiempo de compilación. Styled Components, por su parte, genera estilos dinámicamente en tiempo de ejecución, lo que puede impactar el rendimiento inicial pero ofrece mayor flexibilidad.`,
    slug: "tailwind-css-vs-styled-components"
  },
  {
    id: 3,
    title: "Next.js 15: Novedades",
    summary: "Descubre las nuevas características y mejoras de la última versión de Next.js.",
    content: `Next.js 15 introduce mejoras significativas en rendimiento y experiencia de desarrollo que están cambiando la forma en que construimos aplicaciones web React. Una de las características más importantes es el App Router, que reemplaza al Pages Router tradicional y ofrece un enfoque más intuitivo basado en layouts.

Los Server Components son otra revolución en Next.js 15. Estos componentes se ejecutan en el servidor, lo que significa que pueden acceder directamente a bases de datos y APIs sin exponer credenciales al cliente. Esto resulta en aplicaciones más seguras y con mejor rendimiento, ya que el JavaScript enviado al cliente es mínimo.

La optimización de imágenes ha mejorado considerablemente con el componente Image actualizado, que ahora soporta lazy loading automático y optimización avanzada de formatos. Además, las mejoras en el sistema de caching permiten un control más granular sobre cómo se almacenan las respuestas del servidor.

Otra característica destacada es el soporte mejorado para Server Actions, que simplifica el manejo de mutaciones de datos sin necesidad de crear APIs endpoints manualmente. Esto reduce significativamente el código boilerplate y mejora la experiencia de desarrollo.

Las mejoras en el sistema de compilación incluyen soporte experimental para Turbopack, que promete velocidades de compilación hasta 5 veces más rápidas en desarrollo local. Además, la integración con React 18 y las nuevas características concurrentes permiten experiencias de usuario más fluidas.`,
    slug: "nextjs-15-novedades"
  },
  {
    id: 4,
    title: "TypeScript Avanzado",
    summary: "Técnicas avanzadas de TypeScript para aplicaciones enterprise.",
    content: `TypeScript ha evolucionado para soportar patrones complejos que son esenciales en aplicaciones enterprise a gran escala. Los generics son una de las características más poderosas, permitiendo crear componentes y funciones reutilizables que mantengan la seguridad de tipos.

Los tipos condicionales permiten crear tipos que cambian basados en condiciones, lo cual es increíblemente útil para crear APIs flexibles. Por ejemplo, podemos crear tipos que se ajusten automáticamente según los parámetros recibidos, eliminando la necesidad de múltiples sobrecargas.

Los mapped types son otra herramienta fundamental para la manipulación de tipos. Nos permiten transformar propiedades de un tipo existente, creando nuevos tipos basados en reglas específicas. Esto es especialmente útil para crear variantes de interfaces o para modificar propiedades opcionales.

Los decorators, aunque aún experimentales en TypeScript, ofrecen una forma elegante de añadir metadatos y comportamiento a clases y métodos. Son particularmente útiles en frameworks como NestJS o para implementar patrones como logging, validación o caching de forma declarativa.

Los tipos de utilidad como Partial, Required, Pick y Omit son esenciales para el día a día, pero TypeScript también permite crear tipos de utilidad personalizados que se ajusten a las necesidades específicas de tu aplicación.

Para aplicaciones enterprise, es crucial entender cómo estructurar tipos complejos, manejar tipos recursivos, y crear sistemas de tipos que escalen con el crecimiento de la aplicación. Esto incluye patrones como Brand Types para mayor seguridad y tipos discriminados para manejar diferentes estados de datos.`,
    slug: "typescript-avanzado"
  }
];

export default function HomePage() {
  const featuredPost = mockPosts[0];
  const recentPosts = mockPosts.slice(1, 4);

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
                className="text-gray-900 hover:text-blue-600 font-medium transition-colors"
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
        {/* About Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="https://picsum.photos/seed/profile/400/400.jpg" 
                  alt="Profile" 
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  About me
                </h2>
                <div className="space-y-4 text-gray-600 mb-8">
                  <p className="leading-relaxed">
                    Soy un desarrollador apasionado por crear experiencias web excepcionales. 
                    Con especialización en React, Next.js y TypeScript, me dedico a construir 
                    aplicaciones modernas y escalables.
                  </p>
                  <p className="leading-relaxed">
                    Mi enfoque se centra en escribir código limpio, mantenible y siguiendo las 
                    mejores prácticas de la industria. Disfruto compartiendo conocimiento a través 
                    de este blog y contribuyendo a la comunidad de desarrollo.
                  </p>
                </div>
                <Link 
                  href="/about"
                  className="inline-flex items-center px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Ver más
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Blog
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Featured Post */}
              <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
                <div className="mb-4">
                  <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                    Destacado
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.summary}
                </p>
                <Link 
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  Leer más
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Recent Posts List */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Posts recientes
                </h3>
                {recentPosts.map((post) => (
                  <div key={post.id} className="flex gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <img 
                      src={`https://picsum.photos/seed/post${post.id}/100/100.jpg`}
                      alt={post.title}
                      className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-grow">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {post.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {post.summary}
                      </p>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
                      >
                        Leer
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
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
