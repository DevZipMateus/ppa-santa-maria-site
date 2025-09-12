import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import logo from '@/assets/logo.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <img 
              src={logo} 
              alt="Lopes Segurança Eletrônica" 
              className="h-16 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-background/80 mb-6 max-w-md">
              Distribuidor autorizado PPA em Santa Maria desde 2014. Trazendo tecnologia com qualidade e segurança para sua residência ou empresa.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/ppasantamaria?igsh=MWw2emU2ODRjMmRuZw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 hover:text-background transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/share/1D8zmzWLsF/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 hover:text-background transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-background/70" />
                <div>
                  <p className="text-background/80">(55) 3025-3830</p>
                  <p className="text-background/80">(55) 98107-9091</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-background/70" />
                <p className="text-background/80">adm.lopesseg@gmail.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-background/70 mt-1" />
                <div className="text-background/80">
                  <p>Rua Visconde de Pelotas, 1915</p>
                  <p>Bairro Nossa Senhora de Fátima</p>
                  <p>Santa Maria - RS</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Serviços</h3>
            <ul className="space-y-3 text-background/80">
              <li>Movimentadores de portões</li>
              <li>Portas automáticas</li>
              <li>Cancelas automáticas</li>
              <li>Peças de reposição</li>
              <li>Manutenções</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-background/70 mb-4 md:mb-0">
              <p>&copy; {currentYear} Lopes Segurança Eletrônica. Todos os direitos reservados.</p>
              <p className="text-sm">CNPJ: 23.003.573/0001-74</p>
            </div>
            <div className="text-background/70 text-sm">
              <p>Segunda a sexta: 8h às 12h e 13h30 às 17h50</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;