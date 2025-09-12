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
        {
          name: "DZ Rio PPA - Kit 3,0mt cremalheira",
          image: "/galeria/dz_rio_ppa_kit_3_0mt_de_cremalheira_linha_pop_residencial_ou_gold_2_controles_433mhz_aplicacao_resid.png"
        },
        {
          name: "DZ Stark 600 PPA - Até 400kg",
          image: "/galeria/dz_stark_600_ppa_kit.jpg"
        },
        {
          name: "Pivotante PPA - Residencial",
          image: "/galeria/pivotante_ppa_kit_2_controles_433mhz_aplicacao_residencias_condominios_de_medio_a_grande_porte_model.png"
        },
        {
          name: "BV Home PPA - Kit 2 controles 433mhz",
          image: "/galeria/bv_home_ppa_kit_2_controles_433mhz_e_2_suportes_de_instalacao_aplicacao_residencias_modelo_mono_ou_j.jpg"
        }
      ]
    },
    {
      title: "Movimentadores Industriais", 
      description: "Equipamentos robustos para uso industrial e condomínios",
      products: [
        {
          name: "DZ Brutalle PPA - Modelo Jet Flex",
          image: "/galeria/dz_brutalle_ppa_modelo_jet_flex_aplicacao_condominios_industrias_ou_comercios_em_geral_peso_varia_de.jpg"
        },
        {
          name: "DZ Industrial PPA - Até 1500kg",
          image: "/galeria/dz_industrial_ppa_modelo_mono_ou_jet_flex_aplicacao_residencias_comercios_industrias_ou_condominios_.200kg\n• kit: 3,0mt de cremalheira gold industrial e 2 controles 433mhz.jpg"
        },
        {
          name: "BV Condominium PPA - Kit 2 controles",
          image: "/galeria/bv_condominium_ppa_kit_2_controles_433mhz_e_2_suportes_de_instalacao_aplicacao_condominios_de_medio_.jpg"
        },
        {
          name: "BV Potenza PPA - Condominios",
          image: "/galeria/bv_potenza_ppa_kit_2_controles_433mhz_e_2_suportes_de_instalacao_aplicacao_residencias_e_condominios.jpg"
        }
      ]
    },
    {
      title: "Portas Automáticas",
      description: "Sistemas automatizados para portas sociais e comerciais", 
      products: [
        {
          name: "Porta Social Giro PPA - Vidro/Caixilho",
          image: "/galeria/porta_social_giro_ppa_aplicacao_vidro_ou_caixilho_modelo_para_portas_pivotantes_simples_ou_dupla_apl..jpg"
        },
        {
          name: "Porta Social RAC Jet Flex",
          image: "/galeria/porta_social_rac_jet_flex_ppa_aplicacao_portas_de_madeira_ferro_ou_aluminio_automatizador_para_porta..jpg"
        },
        {
          name: "Porta Social Spin Jet Flex",
          image: "/galeria/porta_social_spin_jet_flex_aplicacao_vidro_ou_caixilho_aplicacao_em_condominios_empresas_hospitais_o..jpg"
        },
        {
          name: "Porta Social Wind 200 - 24v",
          image: "/galeria/porta_social_wind_200_ppa_aplicacao_vidro_ou_caixilho_1_ou_2_folhas_moveis_cores_aluminio_natural_pi.\n• disponível na tecnologia 24v.jpg"
        }
      ]
    },
    {
      title: "Cancelas Automáticas",
      description: "Controle de fluxo de veículos para estacionamentos",
      products: [
        {
          name: "Cancela BC1 PPA - Controle de fluxo",
          image: "/galeria/cancela_automatica_bc1_ppa_a_melhor_opcao_para_controle_de_fluxo_de_veiculos_em_locais_e_horarios_na..jpg"
        },
        {
          name: "Cancela Automática PPA - Condominios",
          image: "/galeria/cancela_automatica_ppa_aplicacao_condominios_estacionamentos_shopping_e_pedagios_fluxo_baixo_medio_a.jpg"
        },
        {
          name: "Porta de Enrolar BR1 - Comercial",
          image: "/galeria/porta_de_enrolar_br1_fabricacao_nacional_proprio_para_estabelecimentos_comerciais_garagens_e_industr.jpg"
        }
      ]
    },
    {
      title: "Centrais e Acessórios",
      description: "Centrais de comando e acessórios complementares",
      products: [
        {
          name: "Central Agility Pop Híbrida",
          image: "/galeria/central_agility_pop_hibrida_atua_no_sistema_analogico_ou_digital_aceita_controles_ppa_ou_universais.jpg"
        },
        {
          name: "Central Triflex Connect Brushless",
          image: "/galeria/central_triflex_connect_brushless_.jpg"
        },
        {
          name: "Central Dupla PPA",
          image: "/galeria/central_dupla_ppa.jpg"
        },
        {
          name: "Fotocelula F32 Plus",
          image: "/galeria/fotocelula_f32_plus.jpg"
        },
        {
          name: "Controle ZAP 2 teclas",
          image: "/galeria/zap_2_2_teclas_de_comando_independentes_frequencia_de_transmissao_433_92_mhz.png"
        },
        {
          name: "Controle ZAP 4 teclas",
          image: "/galeria/zap_4_4_teclas_de_comando_independentes_frequencia_de_transmissao_433_92_mhz.png"
        }
      ]
    },
    {
      title: "Segurança e Travas",
      description: "Dispositivos de segurança e travamento",
      products: [
        {
          name: "Trava Dog Steel Eletromagnética",
          image: "/galeria/trava_dog_steel_trava_eletromagnetica_para_portoes_produzida_em_chapa_de_aco_carbono_com_pintura_ele..jpg"
        },
        {
          name: "Eletroímãs para Portas Pivotantes",
          image: "/galeria/eletroimas_portas_pivotantes_de_diversos_padroes_cores_e_pesos_variados..jpg"
        },
        {
          name: "Botoeira BT Steel - 1,2,4,6 botões",
          image: "/galeria/botoeira_bt_steel_acionador_de_abertura. um dispositivo de comando com a função de ligar e desligar a carga de um circuito, a partir de um acionamento manual, com 1, 2, 4 e 6 botões\n• cores: preta, cinza, branca e inox.jpg"
        },
        {
          name: "Sinaleira Lux - Visual e sonora",
          image: "/galeria/sinaleira_lux_sinalizacao_visual_nas_cores_vermelho_e_amarelo_sinalizacao_sonora_buzzer_com_volume_e..png"
        }
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
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.products.map((product, productIndex) => (
                        <div 
                          key={productIndex}
                          className="bg-background rounded-lg border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                        >
                          <div className="aspect-square relative overflow-hidden bg-black p-4">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                              onError={(e) => {
                                e.currentTarget.src = '/placeholder.svg';
                              }}
                            />
                          </div>
                          <div className="p-4">
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                              {product.name}
                            </h3>
                          </div>
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