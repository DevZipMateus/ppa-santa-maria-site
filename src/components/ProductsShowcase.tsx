import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductsShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const featuredProducts = [
    {
      name: "DZ Rio PPA - Kit 3,0mt cremalheira",
      image: "/galeria/dz_rio_ppa_kit_3_0mt_de_cremalheira_linha_pop_residencial_ou_gold_2_controles_433mhz_aplicacao_resid.png"
    },
    {
      name: "DZ Stark 600 PPA - Até 400kg",
      image: "/galeria/dz_stark_600_ppa_kit.jpg"
    },
    {
      name: "Central Agility Pop Híbrida",
      image: "/galeria/central_agility_pop_hibrida_atua_no_sistema_analogico_ou_digital_aceita_controles_ppa_ou_universais.jpg"
    },
    {
      name: "Porta Social Wind 200 - 24v",
      image: "/galeria/porta_social_wind_200_ppa_kit.jpg"
    },
    {
      name: "Cancela BC1 PPA - Controle de fluxo",
      image: "/galeria/cancela_automatica_bc1_ppa_a_melhor_opcao_para_controle_de_fluxo_de_veiculos_em_locais_e_horarios_na..jpg"
    },
    {
      name: "BV Home PPA - Kit 2 controles 433mhz",
      image: "/galeria/bv_home_ppa_kit_2_controles_433mhz_e_2_suportes_de_instalacao_aplicacao_residencias_modelo_mono_ou_j.jpg"
    },
    {
      name: "Botoeira BT Steel - 1,2,4,6 botões",
      image: "/galeria/botoeira_bt_steel_kit.jpg"
    },
    {
      name: "Pivotante Liger 1000 PPA - Grande porte",
      image: "/galeria/pivotante_liger_1000_ppa_kit_2_controles_433mhz_aplicacao_condominios_de_medio_a_grande_porte_modelo.jpg"
    },
    {
      name: "Fotocelula F32 Plus",
      image: "/galeria/fotocelula_f32_plus.jpg"
    },
    {
      name: "DZ Industrial PPA - Até 1500kg",
      image: "/galeria/dz_industrial_ppa_kit.jpg"
    }
  ];

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === featuredProducts.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [featuredProducts.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? featuredProducts.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === featuredProducts.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section className="py-16 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Um Pouco de Nossos Produtos
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Conheça alguns dos principais produtos que oferecemos para automação e segurança eletrônica
          </p>
          <Button asChild size="lg" className="animate-fade-in">
            <Link to="/produtos">
              Ver Todos os Produtos
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-2xl bg-black shadow-2xl">
            <div className="aspect-[16/9] relative">
              <img
                src={featuredProducts[currentIndex].image}
                alt={featuredProducts[currentIndex].name}
                className="w-full h-full object-contain transition-opacity duration-500"
                onError={(e) => {
                  e.currentTarget.src = '/placeholder.svg';
                }}
              />
              
              {/* Overlay with product name */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-xl font-semibold">
                  {featuredProducts[currentIndex].name}
                </h3>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors backdrop-blur-sm"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors backdrop-blur-sm"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Dots Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {featuredProducts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex 
                    ? 'bg-primary' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>

          {/* Thumbnail Strip */}
          <div className="mt-8 grid grid-cols-5 md:grid-cols-10 gap-2">
            {featuredProducts.map((product, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`aspect-square rounded-lg overflow-hidden border-2 transition-all hover:scale-105 ${
                  index === currentIndex 
                    ? 'border-primary shadow-lg' 
                    : 'border-transparent hover:border-primary/50'
                }`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain bg-black/5"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.svg';
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;