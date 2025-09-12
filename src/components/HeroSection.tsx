import { Shield, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.png';
const HeroSection = () => {
    return <section id="home" className="min-h-screen flex items-center text-white relative" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-12 mb-8 bg-black/[0.37]">
            <Shield className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-6 text-white/90" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              Lopes Segurança Eletrônica
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 text-white/90 font-light px-2">
              Distribuidor autorizado PPA em Santa Maria desde 2014, trazendo tecnologia com qualidade e segurança
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-12 text-white/80 max-w-3xl mx-auto px-2">
              Especialistas em movimentadores de portões, portas automáticas, cancelas automáticas e peças de reposição para toda Santa Maria e região
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 px-4">
            <Button size="lg" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm text-sm sm:text-base" onClick={() => {
              const element = document.getElementById('services');
              if (element) {
                const headerHeight = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }}>
              Nossos serviços
            </Button>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-sm sm:text-base" asChild>
              <a href="https://wa.me/5555981079091" target="_blank" rel="noopener noreferrer">
                <Phone className="h-4 w-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-center px-4">
            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-3 sm:p-4 rounded-full mb-4">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">10+ Anos de experiência</h3>
              <p className="text-white/80 text-sm sm:text-base">Distribuidor autorizado PPA desde 2014</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-3 sm:p-4 rounded-full mb-4">
                <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Atendimento regional</h3>
              <p className="text-white/80 text-sm sm:text-base">Cobrimos toda Santa Maria e região</p>
            </div>
            <div className="flex flex-col items-center sm:col-span-2 lg:col-span-1">
              <div className="bg-white/10 p-3 sm:p-4 rounded-full mb-4">
                <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Suporte técnico</h3>
              <p className="text-white/80 text-sm sm:text-base">Equipe capacitada e suporte completo</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;