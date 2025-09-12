import { Badge } from '@/components/ui/badge';

const BrandsSection = () => {
  const brands = [
    "PPA", "Citrox", "FASS", "Celtron", 
    "Contel", "Acton", "Open IB", "Criitec", "SPK"
  ];

  return (
    <section id="brands" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Marcas que representamos
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Trabalhamos com as melhores marcas do mercado, garantindo qualidade e confiabilidade em todos os nossos produtos
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {brands.map((brand, index) => (
              <Badge 
                key={index}
                variant="outline"
                className="text-lg py-3 px-6 border-2 border-primary/20 hover:border-primary hover:bg-primary/10 transition-all cursor-default"
              >
                {brand}
              </Badge>
            ))}
          </div>

          <div className="bg-primary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Distribuidor autorizado PPA
            </h3>
            <p className="text-muted-foreground text-lg">
              Como distribuidor oficial da PPA em Santa Maria desde 2014, garantimos produtos originais, garantia oficial e suporte técnico especializado para toda a linha de equipamentos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;