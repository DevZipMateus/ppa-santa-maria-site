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
      <section className="py-12 sm:py-16 lg:py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Um Pouco de Nossos Produtos
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
              Conheça alguns dos principais produtos que oferecemos para automação e segurança eletrônica
            </p>
            <Button asChild size="lg" className="animate-fade-in text-sm sm:text-base">
              <Link to="/produtos">
                Ver Todos os Produtos
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Main Carousel */}
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-black shadow-2xl">
              <div className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] relative">
                <img
                  src={featuredProducts[currentIndex].image}
                  alt={featuredProducts[currentIndex].name}
                  className="w-full h-full object-contain transition-opacity duration-500"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.svg';
                  }}
                />
                
                {/* Overlay with product name */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 sm:p-6">
                  <h3 className="text-white text-base sm:text-xl lg:text-2xl font-semibold text-center sm:text-left">
                    {featuredProducts[currentIndex].name}
                  </h3>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 sm:p-3 transition-colors backdrop-blur-sm"
                aria-label="Produto anterior"
              >
                <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 sm:p-3 transition-colors backdrop-blur-sm"
                aria-label="Próximo produto"
              >
                <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
              </button>
            </div>

            {/* Dots Indicators */}
            <div className="flex justify-center mt-4 sm:mt-6 space-x-1 sm:space-x-2 overflow-x-auto px-4">
              {featuredProducts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors flex-shrink-0 ${
                    index === currentIndex 
                      ? 'bg-primary' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Ver produto ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
};

export default ProductsShowcase;