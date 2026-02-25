import Link from 'next/link';
import React from 'react';

interface BlogPost {
  id: number;
  title: string;
  summary: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  slug: string;
}

const mockPosts: BlogPost[] = [
  {
    id: 1,
    title: "Introducción a React Hooks",
    summary: "Aprende los fundamentos de React Hooks y cómo mejorar tus componentes funcionales con useState, useEffect y custom hooks.",
    content: `React Hooks revolucionaron la forma en que escribimos componentes funcionales. Antes de los Hooks, solo podíamos usar estado y otras características de React en componentes de clase. Con la introducción de useState, useEffect y otros hooks, ahora podemos crear componentes más limpios y reutilizables.

El hook useState nos permite agregar estado a los componentes funcionales. Es simple de usar: devuelve un array con dos elementos, el valor actual del estado y una función para actualizarlo. Por ejemplo: const [count, setCount] = useState(0).

useEffect es otro hook fundamental que nos permite ejecutar efectos secundarios en nuestros componentes. Podemos usarlo para hacer peticiones a APIs, suscribirnos a eventos o manipular el DOM. Acepta una función como primer argumento y un array de dependencias como segundo argumento.

Los custom hooks nos permiten extraer lógica de componentes en funciones reutilizables. Por ejemplo, podríamos crear un hook useLocalStorage que sincronice el estado con localStorage, o un hook useFetch que maneje peticiones a APIs.

Con los Hooks, el código React se vuelve más declarativo y fácil de entender. Podemos compartir lógica entre componentes sin cambiar la jerarquía de componentes, y podemos organizar mejor nuestro código separando la lógica de la UI.`,
    author: "Fernando Contreras",
    date: "15 de Enero, 2024",
    readTime: "8 min read",
    slug: "introduccion-a-react-hooks"
  },
  {
    id: 2,
    title: "Tailwind CSS vs Styled Components",
    summary: "Comparativa entre dos de las librerías de CSS más populares en el ecosistema React y cuál elegir para tu proyecto.",
    content: `En el mundo del desarrollo web moderno, la elección de herramientas CSS es crucial para mantener código escalable y mantenible. Tailwind CSS y Styled Components representan dos enfoques fundamentalmente diferentes para manejar estilos en aplicaciones React.

Tailwind CSS es un framework de CSS utility-first que proporciona clases de bajo nivel para construir diseños personalizados directamente en el HTML. Su principal ventaja es la consistencia del diseño y la reducción del tamaño del bundle CSS. Con Tailwind, no necesitas escribir CSS personalizado, sino que combinas clases predefinidas.

Por otro lado, Styled Components es una librería CSS-in-JS que te permite escribir CSS real dentro de tus componentes JavaScript. Su enfoque se centra en la creación de componentes con estilos encapsulados y dinámicos. Es excelente para temas dinámicos y estilos basados en props.

La elección entre ambos depende de tus necesidades específicas. Tailwind es ideal para proyectos donde la consistencia visual y la velocidad de desarrollo son prioridades. Styled Components brilla en aplicaciones con temas complejos y donde la lógica de estilos necesita estar estrechamente ligada a la lógica del componente.

En términos de rendimiento, Tailwind generalmente tiene mejor rendimiento inicial ya que genera un CSS optimizado en tiempo de compilación. Styled Components, por su parte, genera estilos dinámicamente en tiempo de ejecución, lo que puede impactar el rendimiento inicial pero ofrece mayor flexibilidad.`,
    author: "María González",
    date: "10 de Enero, 2024",
    readTime: "6 min read",
    slug: "tailwind-css-vs-styled-components"
  },
  {
    id: 3,
    title: "Next.js 15: Novedades",
    summary: "Descubre las nuevas características y mejoras de la última versión de Next.js incluyendo el App Router y Server Components.",
    content: `Next.js 15 introduce mejoras significativas en rendimiento y experiencia de desarrollo que están cambiando la forma en que construimos aplicaciones web React. Una de las características más importantes es el App Router, que reemplaza al Pages Router tradicional y ofrece un enfoque más intuitivo basado en layouts.

Los Server Components son otra revolución en Next.js 15. Estos componentes se ejecutan en el servidor, lo que significa que pueden acceder directamente a bases de datos y APIs sin exponer credenciales al cliente. Esto resulta en aplicaciones más seguras y con mejor rendimiento, ya que el JavaScript enviado al cliente es mínimo.

La optimización de imágenes ha mejorado considerablemente con el componente Image actualizado, que ahora soporta lazy loading automático y optimización avanzada de formatos. Además, las mejoras en el sistema de caching permiten un control más granular sobre cómo se almacenan las respuestas del servidor.

Otra característica destacada es el soporte mejorado para Server Actions, que simplifica el manejo de mutaciones de datos sin necesidad de crear APIs endpoints manualmente. Esto reduce significativamente el código boilerplate y mejora la experiencia de desarrollo.

Las mejoras en el sistema de compilación incluyen soporte experimental para Turbopack, que promete velocidades de compilación hasta 5 veces más rápidas en desarrollo local. Además, la integración con React 18 y las nuevas características concurrentes permiten experiencias de usuario más fluidas.`,
    author: "Carlos Rodríguez",
    date: "5 de Enero, 2024",
    readTime: "10 min read",
    slug: "nextjs-15-novedades"
  },
  {
    id: 4,
    title: "TypeScript Avanzado",
    summary: "Técnicas avanzadas de TypeScript para aplicaciones enterprise con generics, decorators y patrones de diseño.",
    content: `TypeScript ha evolucionado para soportar patrones complejos que son esenciales en aplicaciones enterprise a gran escala. Los generics son una de las características más poderosas, permitiendo crear componentes y funciones reutilizables que mantienen la seguridad de tipos.

Los tipos condicionales permiten crear tipos que cambian basados en condiciones, lo cual es increíblemente útil para crear APIs flexibles. Por ejemplo, podemos crear tipos que se ajusten automáticamente según los parámetros recibidos, eliminando la necesidad de múltiples sobrecargas.

Los mapped types son otra herramienta fundamental para la manipulación de tipos. Nos permiten transformar propiedades de un tipo existente, creando nuevos tipos basados en reglas específicas. Esto es especialmente útil para crear variantes de interfaces o para modificar propiedades opcionales.

Los decorators, aunque aún experimentales en TypeScript, ofrecen una forma elegante de añadir metadatos y comportamiento a clases y métodos. Son particularmente útiles en frameworks como NestJS o para implementar patrones como logging, validación o caching de forma declarativa.

Los tipos de utilidad como Partial, Required, Pick y Omit son esenciales para el día a día, pero TypeScript también permite crear tipos de utilidad personalizados que se ajusten a las necesidades específicas de tu aplicación.

Para aplicaciones enterprise, es crucial entender cómo estructurar tipos complejos, manejar tipos recursivos, y crear sistemas de tipos que escalen con el crecimiento de la aplicación. Esto incluye patrones como Brand Types para mayor seguridad y tipos discriminados para manejar diferentes estados de datos.`,
    author: "Ana Martínez",
    date: "28 de Diciembre, 2023",
    readTime: "12 min read",
    slug: "typescript-avanzado"
  },
  {
    id: 5,
    title: "Optimización de React Apps",
    summary: "Mejora el rendimiento de tus aplicaciones React con memo, useMemo, useCallback y técnicas de optimización.",
    content: `El rendimiento es crucial en aplicaciones web modernas, y React proporciona varias herramientas para optimizar el renderizado de componentes. React.memo es una de las herramientas más básicas pero poderosas, permitiendo evitar re-renders innecesarios cuando las props no han cambiado.

useMemo es otro hook fundamental para optimizar cálculos costosos. Este hook cachea el resultado de una función y solo lo recalcula cuando sus dependencias cambian. Es especialmente útil para procesamiento de datos complejos, cálculos matemáticos intensivos, o filtrado de arrays grandes.

useCallback, aunque similar a useMemo, está específicamente diseñado para memoizar funciones. Esto es crucial cuando pasamos callbacks a componentes hijos optimizados con React.memo, ya que evita que estos componentes se re-rendericen por referencia de función nueva.

La virtualización de listas es otra técnica importante cuando manejamos grandes cantidades de datos. Librerías como react-window o react-virtualized permiten renderizar solo los elementos visibles, mejorando drásticamente el rendimiento en listas con miles de items.

El code splitting con React.lazy y Suspense permite cargar componentes bajo demanda, reduciendo el tamaño inicial del bundle y mejorando los tiempos de carga inicial. Esto es especialmente beneficioso para rutas o componentes que no son críticos para la primera vista.

La optimización también incluye buenas prácticas como evitar renderizados en cascada, usar keys apropiadas en listas, y minimizar el estado local. Herramientas como React DevTools Profiler son indispensables para identificar cuellos de botella y medir el impacto real de las optimizaciones implementadas.`,
    author: "Luis Hernández",
    date: "20 de Diciembre, 2023",
    readTime: "7 min read",
    slug: "optimizacion-react-apps"
  },
  {
    id: 6,
    title: "Testing en React",
    summary: "Guía completa para testing de componentes React con Jest, React Testing Library y mejores prácticas.",
    content: `El testing es fundamental para aplicaciones robustas y mantenibles. En el ecosistema React, Jest y React Testing Library se han convertido en el estándar de facto para testing de componentes.

Jest proporciona el framework de testing completo con un runner de pruebas, assertion library y mocking capabilities. Su configuración cero y su integración con Create React App lo hacen ideal para empezar rápidamente. Las características como snapshot testing y coverage reports son extremadamente útiles para mantener la calidad del código.

React Testing Library cambia el enfoque del testing: en lugar de测试 los detalles de implementación, nos enfocamos en测试 el comportamiento desde la perspectiva del usuario. Esto significa hacer queries por elementos que el usuario puede ver e interactuar, como botones, formularios y texto.

Los mejores prácticas incluyen测试 los happy paths y edge cases, mockear APIs externas para hacer pruebas determinísticas, y mantener las pruebas independientes entre sí. Es importante también mantener un balance entre cobertura de código y pruebas significativas.

El testing de hooks personalizados se puede hacer con la función renderHook de React Testing Library, permitiendo测试 la lógica de hooks en aislamiento. Para componentes complejos, el testing de integración es crucial para asegurar que múltiples componentes trabajen correctamente juntos.

Las herramientas como MSW (Mock Service Worker) permiten interceptar requests de red, haciendo posible测试 escenarios reales de API sin necesidad de un servidor real. Esto es especialmente útil para测试 flujos completos de usuario que involucran llamadas asíncronas.`,
    author: "Sofía López",
    date: "15 de Diciembre, 2023",
    readTime: "9 min read",
    slug: "testing-en-react"
  }
];

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  // En una aplicación real, aquí buscaríamos el post por el slug
  const resolvedParams = React.use(params);
  const slug = resolvedParams.slug;
  
  console.log('Slug recibido:', slug);
  const currentPost = mockPosts.find(post => post.slug === slug);
  console.log('Post encontrado:', currentPost);
  
  if (!currentPost) {
    // Si no se encuentra el post, mostrar el primero por defecto
    const defaultPost = mockPosts[0];
    const relatedPosts = mockPosts.filter(post => post.id !== defaultPost.id).slice(0, 4);
    
    return (
      <div className="min-h-screen flex flex-col">
        {/* Header - mismo código que abajo */}
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
                  className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                >
                  Blog
                </Link>
              </div>
            </div>
          </nav>
        </header>

        <main className="flex-grow">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Post no encontrado
            </h1>
            <p className="text-gray-600 mb-8">
              El post que buscas no existe. Aquí tienes nuestro post más reciente:
            </p>
            <Link 
              href={`/blog/${defaultPost.slug}`}
              className="inline-flex items-center px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              Ver {defaultPost.title}
            </Link>
          </div>
        </main>

        {/* Footer - mismo código que abajo */}
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
  
  const relatedPosts = mockPosts.filter(post => post.id !== currentPost.id).slice(0, 4); // 4 posts relacionados

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
        {/* Hero Image */}
        <section className="w-full">
          <img 
            src="https://picsum.photos/seed/blog-hero/1200/600.jpg" 
            alt="Blog post hero" 
            className="w-full h-64 md:h-96 object-cover"
          />
        </section>

        {/* Title and Metadata */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {currentPost.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8">
            <span className="font-medium">{currentPost.author}</span>
            <span className="text-gray-400">•</span>
            <span>{currentPost.date}</span>
            <span className="text-gray-400">•</span>
            <span>{currentPost.readTime}</span>
          </div>
        </section>

        {/* Post Content */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="prose prose-lg max-w-none">
            {currentPost.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Related Posts Grid */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Posts relacionados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex">
                    <img 
                      src={`https://picsum.photos/seed/related${post.id}/200/200.jpg`}
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
