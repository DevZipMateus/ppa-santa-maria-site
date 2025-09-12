import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import logo from '@/assets/logo.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

    return (
      <footer className="bg-foreground text-background notranslate" translate="no">
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Logo and Description */}
            <div className="sm:col-span-2 lg:col-span-2">
              <img 
                src={logo} 
                alt="Lopes Segurança Eletrônica" 
                className="h-12 sm:h-16 w-auto mb-4 sm:mb-6"
              />
              <p className="text-background/80 mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
                Distribuidor autorizado PPA em Santa Maria desde 2014. Trazendo tecnologia com qualidade e segurança para sua residência ou empresa.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/ppasantamaria?igsh=MWw2emU2ODRjMmRuZw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
                <a
                  href="https://www.facebook.com/share/1D8zmzWLsF/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="sm:col-span-1">
              <h3 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6">Contato</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-background/70 mt-0.5" />
                  <div>
                    <p className="text-background/80 text-sm sm:text-base">(55) 3025-3830</p>
                    <p className="text-background/80 text-sm sm:text-base">(55) 98107-9091</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-background/70 mt-0.5" />
                  <p className="text-background/80 text-sm sm:text-base break-all">adm.lopesseg@gmail.com</p>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-background/70 mt-1" />
                  <div className="text-background/80 text-sm sm:text-base">
                    <p>Rua Visconde de Pelotas, 1915</p>
                    <p>Bairro Nossa Senhora de Fátima</p>
                    <p>Santa Maria - RS</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="sm:col-span-1">
              <h3 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6 notranslate" translate="no">Serviços</h3>
              <ul className="space-y-2 sm:space-y-3 text-background/80 text-sm sm:text-base notranslate" translate="no">
                <li>Movimentadores de portões</li>
                <li>Portas automáticas</li>
                <li className="notranslate" translate="no"><span className="notranslate" translate="no">Cancelas</span> automáticas</li>
                <li>Peças de reposição</li>
                <li>Manutenções</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 mt-8 sm:mt-12 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="text-background/70 text-center sm:text-left">
                <p className="text-xs sm:text-sm">&copy; {currentYear} Lopes Segurança Eletrônica. Todos os direitos reservados.</p>
                <p className="text-xs sm:text-sm">CNPJ: 23.003.573/0001-74</p>
              </div>
              <div className="text-background/70 text-xs sm:text-sm text-center sm:text-right">
                <p>Segunda a sexta: 8h às 12h e 13h30 às 17h50</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;