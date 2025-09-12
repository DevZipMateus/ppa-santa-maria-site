import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/logo.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { label: 'Início', id: 'home', isRoute: false },
    { label: 'Sobre', id: 'about', isRoute: false },
    { label: 'Serviços', id: 'services', isRoute: false },
    { label: 'Produtos', id: 'produtos', isRoute: true },
    { label: 'Marcas', id: 'brands', isRoute: false },
    { label: 'Contato', id: 'contact', isRoute: false }
  ];

  const handleMenuClick = (item: any) => {
    if (item.isRoute) {
      setIsMenuOpen(false);
      return;
    }
    
    if (!isHomePage) {
      // If not on home page, navigate to home first then scroll
      window.location.href = `/#${item.id}`;
      return;
    }
    
    scrollToSection(item.id);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-card-custom' : 'bg-background'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="Lopes Segurança Eletrônica" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav translate="no" className="hidden lg:flex items-center space-x-6 xl:space-x-8 notranslate">
            {menuItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.id}
                  to={`/${item.id}`}
                  className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item)}
                  className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base"
                >
                  {item.label}
                </button>
              )
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90 text-sm xl:text-base px-4 xl:px-6 notranslate"
              translate="no"
            >
              Contato
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                item.isRoute ? (
                  <Link
                    key={item.id}
                    to={`/${item.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-left text-foreground hover:text-primary transition-colors font-medium py-3 px-2 hover:bg-accent/50 rounded-md"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => handleMenuClick(item)}
                    className="text-left text-foreground hover:text-primary transition-colors font-medium py-3 px-2 hover:bg-accent/50 rounded-md"
                  >
                    {item.label}
                  </button>
                )
              ))}
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-primary hover:bg-primary/90 mt-4 w-full"
              >
                Contato
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;