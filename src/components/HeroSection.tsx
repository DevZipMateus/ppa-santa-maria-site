import { Shield, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.png';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center text-white relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <Shield className="h-16 w-16 mx-auto mb-6 text-white/90" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Lopes Segurança Eletrônica
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 text-white/90 font-light">
              Distribuidor autorizado PPA em Santa Maria desde 2014, trazendo tecnologia com qualidade e segurança
            </h2>
            <p className="text-lg md:text-xl mb-12 text-white/80 max-w-2xl mx-auto">
              Especialistas em movimentadores de portões, portas automáticas, cancelas automáticas e peças de reposição para toda Santa Maria e região
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm"
              onClick={() => {
                const element = document.getElementById('services');
                if (element) {
                  const headerHeight = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
            >
              Nossos serviços
            </Button>
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              asChild
            >
              <a href="https://wa.me/5555981079091" target="_blank" rel="noopener noreferrer">
                <Phone className="h-4 w-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-4 rounded-full mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">10+ Anos de experiência</h3>
              <p className="text-white/80">Distribuidor autorizado PPA desde 2014</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-4 rounded-full mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Atendimento regional</h3>
              <p className="text-white/80">Cobrimos toda Santa Maria e região</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-4 rounded-full mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Suporte técnico</h3>
              <p className="text-white/80">Equipe capacitada e suporte completo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;