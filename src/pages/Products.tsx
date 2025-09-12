import { ArrowLeft, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Products = () => {
  const productCategories = [
    {
      title: "Movimentadores Residenciais",
      description: "Automatizadores para portões residenciais monofásicos e Jet Flex",
      products: [
        "DZ Rio PPA - Kit 3,0mt cremalheira",
        "DZ Stark 600 PPA - Até 400kg",
        "Pivotante PPA - Residencial",
        "BV Home PPA - Kit 2 controles 433mhz"
      ]
    },
    {
      title: "Movimentadores Industriais", 
      description: "Equipamentos robustos para uso industrial e condomínios",
      products: [
        "DZ Brutalle PPA - Modelo Jet Flex",
        "DZ Industrial PPA - Até 1500kg",
        "BV Condominium PPA - Kit 2 controles",
        "BV Potenza PPA - Condominios"
      ]
    },
    {
      title: "Portas Automáticas",
      description: "Sistemas automatizados para portas sociais e comerciais", 
      products: [
        "Porta Social Giro PPA - Vidro/Caixilho",
        "Porta Social RAC Jet Flex",
        "Porta Social Spin Jet Flex",
        "Porta Social Wind 200 - 24v"
      ]
    },
    {
      title: "Cancelas Automáticas",
      description: "Controle de fluxo de veículos para estacionamentos",
      products: [
        "Cancela BC1 PPA - Controle de fluxo",
        "Cancela Automática PPA - Condominios",
        "Porta de Enrolar BR1 - Comercial"
      ]
    },
    {
      title: "Centrais e Acessórios",
      description: "Centrais de comando e acessórios complementares",
      products: [
        "Central Agility Pop Híbrida",
        "Central Triflex Connect Brushless",
        "Central Dupla PPA",
        "Fotocelula F32 Plus",
        "Controle ZAP 2 e 4 teclas"
      ]
    },
    {
      title: "Segurança e Travas",
      description: "Dispositivos de segurança e travamento",
      products: [
        "Trava Dog Steel Eletromagnética",
        "Eletroímãs para Portas Pivotantes",
        "Botoeira BT Steel - 1,2,4,6 botões",
        "Sinaleira Lux - Visual e sonora"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-primary py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-6">
              <Link to="/">
                <Button variant="outline" size="icon" className="border-white/20 text-white hover:bg-white/10">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </Link>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  Nossos Produtos
                </h1>
                <p className="text-white/90 text-lg">
                  Equipamentos de alta qualidade para automação e segurança eletrônica
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:gap-12">
              {productCategories.map((category, index) => (
                <Card key={index} className="border-border shadow-card-custom">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-foreground mb-3">
                      {category.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 text-lg">
                      {category.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {category.products.map((product, productIndex) => (
                        <div 
                          key={productIndex}
                          className="bg-accent/30 rounded-lg p-4 border border-accent/20"
                        >
                          <h3 className="font-semibold text-foreground">
                            {product}
                          </h3>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="py-16 bg-accent/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Marcas que Representamos
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-6 text-lg font-semibold text-muted-foreground">
              {['PPA', 'Citrox', 'FASS', 'Celtron', 'Contel', 'Acton', 'Open IB', 'Criitec', 'SPK'].map((brand) => (
                <div key={brand} className="bg-background px-6 py-3 rounded-lg shadow-sm border border-border">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Precisa de mais informações?
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Entre em contato conosco para conhecer melhor nossos produtos e serviços
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10"
              >
                <a href="https://wa.me/5555981079091" target="_blank" rel="noopener noreferrer">
                  <Phone className="h-4 w-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10"
              >
                <a href="mailto:adm.lopesseg@gmail.com">
                  <Mail className="h-4 w-4 mr-2" />
                  E-mail
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Products;