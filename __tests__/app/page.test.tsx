import { render, screen } from '@testing-library/react'
import HomePage from '../../app/page'

describe('HomePage', () => {
  it('should render the main navigation', () => {
    render(<HomePage />)
    
    // Verificar que el título del blog esté presente
    expect(screen.getByText('MiBlog')).toBeInTheDocument()
    
    // Verificar que los enlaces de navegación estén presentes
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
  })

  it('should render the featured post section', () => {
    render(<HomePage />)
    
    // Verificar que exista la sección "About me"
    expect(screen.getByText('About me')).toBeInTheDocument()
    
    // Verificar que haya contenido descriptivo
    expect(screen.getByText(/desarrollador apasionado/i)).toBeInTheDocument()
  })

  it('should render blog posts', () => {
    render(<HomePage />)
    
    // Verificar que exista la sección de blog (usando el heading de nivel 2)
    const blogSection = screen.getByRole('heading', { name: 'Blog', level: 2 })
    expect(blogSection).toBeInTheDocument()
    
    // Verificar que haya posts destacados
    expect(screen.getByText('Destacado')).toBeInTheDocument()
    
    // Verificar que haya posts recientes
    expect(screen.getByText('Posts recientes')).toBeInTheDocument()
  })

  it('should render footer with social links', () => {
    render(<HomePage />)
    
    // Verificar que el footer esté presente
    expect(screen.getByText(/© 2024 MiBlog/)).toBeInTheDocument()
    
    // Verificar enlaces sociales
    expect(screen.getByText('Twitter/X')).toBeInTheDocument()
    expect(screen.getByText('GitHub')).toBeInTheDocument()
  })
})
