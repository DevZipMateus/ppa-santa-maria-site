import { ArrowLeft, Phone, Mail, ShoppingCart, Plus, Minus, FileText, X, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

interface CartItem {
  name: string;
  quantity: number;
  category: string;
  image: string;
}

const Products = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const [isCartOpen, setIsCartOpen] = useState(false);

  const updateQuantity = (productName: string, change: number) => {
    setQuantities(prev => ({
      ...prev,
      [productName]: Math.max(1, (prev[productName] || 1) + change)
    }));
  };

  const updateCartItemQuantity = (productName: string, change: number) => {
    setCart(prev => prev.map(item =>
      item.name === productName
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
        : item
    ));
  };

  const removeFromCart = (productName: string) => {
    setCart(prev => prev.filter(item => item.name !== productName));
  };

  const addToCart = (productName: string, categoryTitle: string, productImage: string) => {
    const quantity = quantities[productName] || 1;
    setCart(prev => {
      const existingItem = prev.find(item => item.name === productName);
      if (existingItem) {
        return prev.map(item =>
          item.name === productName
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { name: productName, quantity, category: categoryTitle, image: productImage }];
    });
    
    // Reset quantity selector
    setQuantities(prev => ({ ...prev, [productName]: 1 }));
  };

  const sendWhatsAppCart = () => {
    if (cart.length === 0) return;
    
    let message = "🛒 *SOLICITAÇÃO DE ORÇAMENTO*\n\n";
    
    // Group by category
    const groupedByCategory = cart.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {} as { [key: string]: CartItem[] });
    
    Object.entries(groupedByCategory).forEach(([category, items]) => {
      message += `📋 *${category}*\n`;
      items.forEach(item => {
        message += `• ${item.name} - Qtd: ${item.quantity}\n`;
      });
      message += "\n";
    });
    
    message += "💬 Gostaria de receber um orçamento para estes produtos.";
    
    const whatsappUrl = `https://wa.me/5555981079091?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Close cart and clear it after sending
    setIsCartOpen(false);
    setCart([]);
  };

  const requestQuote = (productName: string, categoryTitle: string) => {
    const message = `🛒 *SOLICITAÇÃO DE ORÇAMENTO*\n\n📋 *${categoryTitle}*\n• ${productName}\n\n💬 Gostaria de receber informações e orçamento para este produto.`;
    const whatsappUrl = `https://wa.me/5555981079091?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };
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
        },
        {
          name: "BV Levante PPA - Residencial",
          image: "/galeria/bv_levante_ppa_kit_2_controles_433mhz_e_2_suportes_de_instalacao_aplicacao_residencias_modelo_mono_o.jpg"
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
          image: "/galeria/dz_industrial_ppa_kit.jpg"
        },
        {
          name: "BV Condominium PPA - Kit 2 controles",
          image: "/galeria/bv_condominium_ppa_kit_2_controles_433mhz_e_2_suportes_de_instalacao_aplicacao_condominios_de_medio_.jpg"
        },
        {
          name: "BV Potenza PPA - Condominios",
          image: "/galeria/bv_potenza_ppa_kit_2_controles_433mhz_e_2_suportes_de_instalacao_aplicacao_residencias_e_condominios.jpg"
        },
        {
          name: "BV Penta Predial PPA - Condominios",
          image: "/galeria/bv_penta_predial_ppa_kit_2_controles_433mhz_e_2_suportes_de_instalacao_aplicacao_residencias_e_condo.jpg"
        },
        {
          name: "BV BH Power Bolt PPA - Basculante",
          image: "/galeria/bv_bh_power_bolt_ppa_kit_2_controles_433mhz_aplicacao_basculante_horizontal_para_portao_seccionado_e.jpg"
        },
        {
          name: "Pivotante Liger 1000 PPA - Grande porte",
          image: "/galeria/pivotante_liger_1000_ppa_kit_2_controles_433mhz_aplicacao_condominios_de_medio_a_grande_porte_modelo.jpg"
        },
        {
          name: "DZ Portale Celtron - Kit completo",
          image: "/galeria/dz_portale_celtron_kit_acompanha_2_controles_metragem_de_corrente_ou_cremalheira_conforme_necessidad.jpg"
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
          image: "/galeria/porta_social_wind_200_ppa_kit.jpg"
        },
        {
          name: "Porta Social Tore PPA - Aluminio",
          image: "/galeria/porta_social_tore_ppa_aplicacao_vidro_ou_caixilho_1_ou_2_folhas_moveis_cores_aluminio_natural_pintad..jpg"
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
          name: "Central Triflex Full Range",
          image: "/galeria/central_triflex_full_range.jpg"
        },
        {
          name: "Central Laço Indutivo 1 ou 2 canais",
          image: "/galeria/central_laco_indutivo_1_ou_2_canais.jpg"
        },
        {
          name: "Fotocelula F32 Plus",
          image: "/galeria/fotocelula_f32_plus.jpg"
        },
        {
          name: "Fotocelula Refletiva F10 R",
          image: "/galeria/fotocelula_refletiva_f10_r.jpg"
        },
        {
          name: "Laço Indutivo",
          image: "/galeria/laco_indutivo.jpg"
        },
        {
          name: "Prog - Acessório de Programação",
          image: "/galeria/prog_acessorio_de_programacao_das_centrais_de_comando_permite_a_programacao_dos_parametros_da_centra.png"
        },
        {
          name: "Seletor de Funções",
          image: "/galeria/seletor_de_funcoes_permite_a_programacao_total_da_porta_habilita_desabilita_radares_interno_e_extern.jpg"
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
          image: "/galeria/botoeira_bt_steel_kit.jpg"
        },
        {
          name: "Botoeira Inox No Touch",
          image: "/galeria/botoeira_inox_no_touch.jpg"
        },
        {
          name: "Sinaleira Lux - Visual e sonora",
          image: "/galeria/sinaleira_lux_sinalizacao_visual_nas_cores_vermelho_e_amarelo_sinalizacao_sonora_buzzer_com_volume_e..png"
        },
        {
          name: "Traver Uno - Acabamento diferenciado",
          image: "/galeria/traver_uno_acabamento_diferenciado_disponivel_nas_cores_preta_branca_e_cinza_facil_instalacao_para_d.jpg"
        },
        {
          name: "Mola Aérea - Portas e Portões",
          image: "/galeria/mola_aerea_desenvolvida_para_uso_em_portas_portoes_de_madeira_ou_metal_pode_ser_instalada_tanto_em_p..jpg"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Cart Badge */}
      {cart.length > 0 && (
        <div className="fixed top-20 sm:top-24 right-2 sm:right-4 z-50">
          <Dialog open={isCartOpen} onOpenChange={setIsCartOpen}>
            <DialogTrigger asChild>
              <Button
                className="bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-3"
                size="sm"
              >
                <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
                <span className="hidden xs:inline">Carrinho </span>({getTotalItems()})
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[95vw] sm:max-w-2xl max-h-[85vh] overflow-y-auto mx-2 sm:mx-auto">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
                  Meu Carrinho ({getTotalItems()} itens)
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-3 sm:space-y-4">
                {cart.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 border rounded-lg">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.src = '/placeholder.svg';
                        }}
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-xs sm:text-sm leading-tight truncate">{item.name}</h4>
                      <p className="text-xs text-muted-foreground truncate">{item.category}</p>
                    </div>
                    
                    <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateCartItemQuantity(item.name, -1)}
                        className="h-6 w-6 sm:h-8 sm:w-8 p-0"
                      >
                        <Minus className="h-2 w-2 sm:h-3 sm:w-3" />
                      </Button>
                      <span className="text-xs sm:text-sm font-medium min-w-[1.5rem] sm:min-w-[2rem] text-center">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateCartItemQuantity(item.name, 1)}
                        className="h-6 w-6 sm:h-8 sm:w-8 p-0"
                      >
                        <Plus className="h-2 w-2 sm:h-3 sm:w-3" />
                      </Button>
                      
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => removeFromCart(item.name)}
                        className="h-6 w-6 sm:h-8 sm:w-8 p-0 ml-1 sm:ml-2"
                      >
                        <Trash2 className="h-2 w-2 sm:h-3 sm:w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
                
                <div className="flex flex-col sm:flex-row justify-between gap-2 pt-4 border-t">
                  <Button variant="outline" onClick={clearCart} className="text-xs sm:text-sm">
                    Limpar Carrinho
                  </Button>
                  <Button onClick={sendWhatsAppCart} className="bg-green-600 hover:bg-green-700 text-xs sm:text-sm">
                    <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    Enviar no WhatsApp
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      )}
      
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                      {category.products.map((product, productIndex) => (
                        <div 
                          key={productIndex}
                          className="bg-background rounded-lg border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                        >
                          <div className="aspect-square relative overflow-hidden bg-black p-3 sm:p-4">
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
                          <div className="p-3 sm:p-4 space-y-3">
                            <h3 className="font-semibold text-foreground text-xs sm:text-sm leading-tight">
                              {product.name}
                            </h3>
                            
                            {/* Quantity Selector */}
                            <div className="flex items-center justify-center space-x-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => updateQuantity(product.name, -1)}
                                className="h-7 w-7 sm:h-8 sm:w-8 p-0"
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="text-xs sm:text-sm font-medium min-w-[2rem] text-center">
                                {quantities[product.name] || 1}
                              </span>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => updateQuantity(product.name, 1)}
                                className="h-7 w-7 sm:h-8 sm:w-8 p-0"
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                            
                            {/* Action Buttons */}
                            <div className="flex flex-col space-y-2">
                              <Button
                                onClick={() => addToCart(product.name, category.title, product.image)}
                                className="w-full text-xs sm:text-sm"
                                size="sm"
                              >
                                <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                                Adicionar ao Carrinho
                              </Button>
                              <Button
                                onClick={() => requestQuote(product.name, category.title)}
                                variant="outline"
                                className="w-full text-xs sm:text-sm"
                                size="sm"
                              >
                                <FileText className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                                Solicitar Orçamento
                              </Button>
                            </div>
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