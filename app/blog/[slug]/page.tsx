"use client";

import Link from 'next/link';
import React from 'react';
import { postsApi, BlogPost } from '@/lib/api';

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const [currentPost, setCurrentPost] = React.useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = React.useState<BlogPost[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [allPosts, setAllPosts] = React.useState<BlogPost[]>([]);

  const resolvedParams = React.use(params);
  const slug = resolvedParams.slug;

  React.useEffect(() => {
    const fetchPostData = async () => {
      try {
        const posts = await postsApi.getPosts();
        setAllPosts(posts);
        
        const post = await postsApi.getPostBySlug(slug);
        if (post) {
          setCurrentPost(post);
          const related = posts.filter(p => p.id !== post.id).slice(0, 4);
          setRelatedPosts(related);
        }
      } catch (error) {
        console.error('Error fetching post data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPostData();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow flex items-center justify-center">
          <div className="text-gray-600">Cargando post...</div>
        </div>
      </div>
    );
  }

  if (!currentPost) {
    // Si no se encuentra el post, mostrar el primero por defecto
    const defaultPost = allPosts[0];
    if (!defaultPost) {
      return (
        <div className="min-h-screen flex flex-col">
          <div className="flex-grow flex items-center justify-center">
            <div className="text-gray-600">No hay posts disponibles.</div>
          </div>
        </div>
      );
    }
    
    const relatedPostsForDefault = allPosts.filter(post => post.id !== defaultPost.id).slice(0, 4);
    
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
  
  // relatedPosts ya está establecido en el estado desde el useEffect

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
