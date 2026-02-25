import { render, screen } from '@testing-library/react'
import BlogPostPage from '../../../app/blog/[slug]/page'

describe('BlogPostPage', () => {
  it('should render navigation in header', async () => {
    // Renderizar el componente (el slug específico no importa para header/footer)
    const { container } = render(await BlogPostPage({ params: Promise.resolve({ slug: 'test-slug' }) }))

    // Verificar que el título del blog esté presente
    expect(screen.getByText('MiBlog')).toBeInTheDocument()
    
    // Verificar que los enlaces de navegación estén presentes
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
  })

  it('should render footer with social links', async () => {
    // Renderizar el componente
    const { container } = render(await BlogPostPage({ params: Promise.resolve({ slug: 'test-slug' }) }))

    // Verificar que el footer esté presente
    expect(screen.getByText(/© 2024 MiBlog/)).toBeInTheDocument()
    
    // Verificar enlaces sociales
    expect(screen.getByText('Twitter/X')).toBeInTheDocument()
    expect(screen.getByText('GitHub')).toBeInTheDocument()
    expect(screen.getByText('TikTok')).toBeInTheDocument()
    expect(screen.getByText('LinkedIn')).toBeInTheDocument()
  })

  it('should render some content (either post or fallback)', async () => {
    // Renderizar el componente
    const { container } = render(await BlogPostPage({ params: Promise.resolve({ slug: 'test-slug' }) }))

    // Verificar que haya algún título principal (ya sea del post o de fallback)
    const mainHeading = screen.getByRole('heading', { level: 1 })
    expect(mainHeading).toBeInTheDocument()
    
    // Verificar que haya contenido en el main
    const mainElement = container.querySelector('main')
    expect(mainElement).toBeInTheDocument()
    expect(mainElement?.children.length).toBeGreaterThan(0)
  })
})
