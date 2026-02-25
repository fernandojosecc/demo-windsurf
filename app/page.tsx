"use client";

import Link from 'next/link';
import { postsApi, BlogPost } from '@/lib/api';
import React from 'react';

export default function HomePage() {
  const [posts, setPosts] = React.useState<BlogPost[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await postsApi.getPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const featuredPost = posts[0];
  const recentPosts = posts.slice(1, 4);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow flex items-center justify-center">
          <div className="text-gray-600">Cargando...</div>
        </div>
      </div>
    );
  }

  if (!featuredPost) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow flex items-center justify-center">
          <div className="text-gray-600">No hay posts disponibles.</div>
        </div>
      </div>
    );
  }

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
