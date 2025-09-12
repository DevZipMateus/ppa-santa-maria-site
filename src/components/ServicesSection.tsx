import { 
  Car, 
  DoorOpen, 
  Shield, 
  Settings, 
  Wrench,
  Building2,
  Home,
  Factory
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Car,
      title: "Movimentadores de portões",
      description: "Linha residencial, industrial, condomínio e empresas (Monofásico e Jet Flex)",
      features: ["Residencial", "Industrial", "Condomínios", "Empresas"]
    },
    {
      icon: DoorOpen,
      title: "Portas automáticas",
      description: "Sistemas automatizados para portas com tecnologia avançada e segura",
      features: ["Sensor de presença", "Controle remoto", "Sistemas seguros"]
    },
    {
      icon: Shield,
      title: "Cancelas automáticas",
      description: "Controle de acesso automatizado para condomínios e empresas",
      features: ["Controle de acesso", "Sistemas inteligentes", "Alta durabilidade"]
    },
    {
      icon: Settings,
      title: "Peças de reposição",
      description: "Peças originais e compatíveis para todos os equipamentos",
      features: ["Peças originais", "Garantia de qualidade", "Pronta entrega"]
    },
    {
      icon: Wrench,
      title: "Manutenções",
      description: "Serviços especializados de manutenção preventiva e corretiva",
      features: ["Manutenção preventiva", "Reparo especializado", "Suporte técnico"]
    }
  ];

  const categories = [
    {
      icon: Home,
      title: "Residencial",
      description: "Soluções para casas e residências"
    },
    {
      icon: Building2,
      title: "Condomínios",
      description: "Sistemas para condomínios e edifícios"
    },
    {
      icon: Factory,
      title: "Industrial",
      description: "Equipamentos para empresas e indústrias"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background notranslate" translate="no">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 notranslate" translate="no">
              Nossos serviços
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto notranslate" translate="no">
              Oferecemos soluções completas em segurança eletrônica e automação, com produtos de qualidade e suporte técnico especializado
            </p>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {categories.map((category, index) => (
              <Card key={index} className="shadow-card-custom hover:shadow-elegant transition-all duration-300 border-0">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <category.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="shadow-card-custom hover:shadow-elegant transition-all duration-300 border-0 group"
              >
                <CardContent className="p-6">
                  <div className="bg-primary/10 p-4 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 notranslate" translate="no">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-hero text-white rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Trazendo tecnologia com qualidade e segurança
              </h3>
              <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
                Entre em contato conosco e descubra como podemos automatizar e proteger seu espaço com as melhores soluções do mercado
              </p>
              <a 
                href="https://wa.me/5555981079091" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-lg font-medium transition-all"
              >
                Solicite um orçamento
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;