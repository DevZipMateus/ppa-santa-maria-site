import { ArrowLeft, Phone, Mail, ShoppingCart, Plus, Minus, FileText, X, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
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
  const [expandedProducts, setExpandedProducts] = useState<{ [key: string]: boolean }>({});

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

  const toggleProductDetails = (productName: string) => {
    setExpandedProducts(prev => ({
      ...prev,
      [productName]: !prev[productName]
    }));
  };
  const productCategories = [
    {
      title: "Movimentadores Residenciais",
      description: "Automatizadores para portões residenciais monofásicos e Jet Flex",
      products: [
        {
          name: "DZ Rio PPA - Kit 3,0mt cremalheira",
          image: "/galeria/dz_rio_ppa_kit_3_0mt_de_cremalheira_linha_pop_residencial_ou_gold_2_controles_433mhz_aplicacao_resid.png",
          description: [
            "Kit: 3,0MT de cremalheira (linha POP residencial ou Gold); 2 controles 433Mhz",
            "Aplicação: residências ou pequenos estabelecimentos", 
            "Modelo: Mono ou Jet Flex",
            "Peso: 400kg, 500kg ou 700kg"
          ]
        },
        {
          name: "DZ Stark 600 PPA - Até 400kg",
          image: "/galeria/dz_stark_600_ppa_kit.jpg",
          description: [
            "Kit: 3,0MT de cremalheira POP residencial; 2 controles 433mhz",
            "Aplicação: residências",
            "Modelo: mono",
            "Peso: até 400kg"
          ]
        },
        {
          name: "Pivotante PPA - Residencial",
          image: "/galeria/pivotante_ppa_kit_2_controles_433mhz_aplicacao_residencias_condominios_de_medio_a_grande_porte_model.png",
          description: [
            "Kit: 2 controles 433Mhz",
            "Aplicação: residências, condomínios de médio a grande porte",
            "Modelo: mono ou Jet Flex",
            "Peso: 125kg até 380kg",
            "Opções disponíveis: portão duplo ou simples (1 folha ou 2 folhas), sendo modelos home, SK, Predial ou Condominium",
            "Tem que ser portões pivotante duplo"
          ]
        },
        {
          name: "BV Home PPA - Kit 2 controles 433mhz",
          image: "/galeria/bv_home_ppa_kit_2_controles_433mhz_e_2_suportes_de_instalacao_aplicacao_residencias_modelo_mono_ou_j.jpg",
          description: [
            "Kit: 2 controles 433Mhz e 2 suportes de instalação",
            "Aplicação: residências",
            "Modelo: mono ou Jet Flex",
            "Peso: até 300kg",
            "Sistema de funcionamento por fuso",
            "Acionamento usado: de 1,40MT até 2,50MT"
          ]
        },
        {
          name: "BV Levante PPA - Residencial",
          image: "/galeria/bv_levante_ppa_kit_2_controles_433mhz_e_2_suportes_de_instalacao_aplicacao_residencias_modelo_mono_o.jpg",
          description: [
            "Kit: 2 controles 433Mhz e 2 suportes de instalação",
            "Aplicação: residências",
            "Modelo: mono ou Jet Flex",
            "Peso: até 300kg",
            "Sistema de funcionamento por fuso",
            "Acionamento usado: de 1,40MT até 2,50MT",
            "Modelo ventilado"
          ]
        }
      ]
    },
    {
      title: "Movimentadores Industriais", 
      description: "Equipamentos robustos para uso industrial e condomínios",
      products: [
        {
          name: "DZ Brutalle PPA - Modelo Jet Flex",
          image: "/galeria/dz_brutalle_ppa_modelo_jet_flex_aplicacao_condominios_industrias_ou_comercios_em_geral_peso_varia_de.jpg",
          description: [
            "Modelo: Jet Flex",
            "Aplicação: Condomínios, industrias ou comércios em geral",
            "Peso: varia de 2000kg até 3000kg",
            "Kit: 3,0MT de cremalheira Gold Industrial e 2 controles 433Mhz"
          ]
        },
        {
          name: "DZ Industrial PPA - Até 1500kg",
          image: "/galeria/dz_industrial_ppa_kit.jpg",
          description: [
            "Modelo: mono ou Jet Flex",
            "Aplicação: Residências, comércios, industrias ou condomínios",
            "Peso: modelos variam de 900kg até 2.200kg",
            "Kit: 3,0MT de cremalheira Gold Industrial e 2 controles 433Mhz"
          ]
        },
        {
          name: "BV Condominium PPA - Kit 2 controles",
          image: "/galeria/bv_condominium_ppa_kit_2_controles_433mhz_e_2_suportes_de_instalacao_aplicacao_condominios_de_medio_.jpg",
          description: [
            "Kit: 2 controles 433Mhz e 2 suportes de instalação",
            "Aplicação: condomínios de médio à grande porte",
            "Modelo: Jet Flex",
            "Peso: até 500kg",
            "Sistema de funcionamento por fuso",
            "Acionamento usado: de 1,40MT até 4,0MT",
            "Modelo ventilado"
          ]
        },
        {
          name: "BV Potenza PPA - Condominios",
          image: "/galeria/bv_potenza_ppa_kit_2_controles_433mhz_e_2_suportes_de_instalacao_aplicacao_residencias_e_condominios.jpg",
          description: [
            "Kit: 2 controles 433Mhz e 2 suportes de instalação",
            "Aplicação: residências e condomínios de médio porte",
            "Modelo: mono ou Jet Flex",
            "Peso: até 400kg",
            "Sistema de funcionamento por fuso",
            "Acionamento usado: de 1,40MT até 4,0MT",
            "Modelo ventilado"
          ]
        },
        {
          name: "BV Penta Predial PPA - Condominios",
          image: "/galeria/bv_penta_predial_ppa_kit_2_controles_433mhz_e_2_suportes_de_instalacao_aplicacao_residencias_e_condo.jpg",
          description: [
            "Kit: 2 controles 433Mhz e 2 suportes de instalação",
            "Aplicação: residências e condomínios de médio à grande porte",
            "Modelo: mono ou Jet Flex",
            "Peso: até 450kg",
            "Sistema de funcionamento por fuso",
            "Acionamento usado: de 1,40MT até 4,0MT",
            "Modelo ventilado"
          ]
        },
        {
          name: "BV BH Power Bolt PPA - Basculante",
          image: "/galeria/bv_bh_power_bolt_ppa_kit_2_controles_433mhz_aplicacao_basculante_horizontal_para_portao_seccionado_e.jpg",
          description: [
            "Kit: 2 controles 433Mhz",
            "Aplicação: basculante horizontal para portão seccionado estilo americano",
            "Acionamento de 2,95MT à 3,50MT",
            "Peso: 450kg"
          ]
        },
        {
          name: "Bv Torsion",
          image: "/galeria/bv_torsion.jpg",
          description: [
            "Ideal para locais que não possuem espaço lateral para a instalação do trilho",
            "O automatizador é instalado diretamente na folha do portão",
            "Pode ser fixado em qualquer um dos lados do portão ou no centro",
            "Peso: até 450kg"
          ]
        },
        {
          name: "Pivotante Liger 1000 PPA - Grande porte",
          image: "/galeria/pivotante_liger_1000_ppa_kit_2_controles_433mhz_aplicacao_condominios_de_medio_a_grande_porte_modelo.jpg",
          description: [
            "Kit: 2 controles 433Mhz",
            "Aplicação: condomínios de médio a grande porte",
            "Modelo: mono",
            "Peso: 300kg",
            "Versão para locais em que não há espaço para instalação do modelo tradicional e que possui desnível no terreno"
          ]
        },
        {
          name: "DZ Portale Celtron - Kit completo",
          image: "/galeria/dz_portale_celtron_kit_acompanha_2_controles_metragem_de_corrente_ou_cremalheira_conforme_necessidad.jpg",
          description: [
            "Kit: acompanha 2 controles + metragem de corrente ou cremalheira (conforme necessidade do local)",
            "Aplicação: residenciais e semi-industrial",
            "Disponível com cremalheira ou corrente (metragem a definir)",
            "Modelos: Mono ou Jet Flex",
            "Peso: 400kg à 900kg"
          ]
        }
      ]
    },
    {
      title: "Portas Automáticas",
      description: "Sistemas automatizados para portas sociais e comerciais", 
      products: [
        {
          name: "Porta Social Giro PPA - Vidro/Caixilho",
          image: "/galeria/porta_social_giro_ppa_aplicacao_vidro_ou_caixilho_modelo_para_portas_pivotantes_simples_ou_dupla_apl..jpg",
          description: [
            "Aplicação: vidro ou caixilho",
            "Modelo para portas pivotantes, simples ou dupla",
            "Aplicação em condomínios, empresas, hospitais ou residências"
          ]
        },
        {
          name: "Porta Social RAC Jet Flex",
          image: "/galeria/porta_social_rac_jet_flex_ppa_aplicacao_portas_de_madeira_ferro_ou_aluminio_automatizador_para_porta..jpg",
          description: [
            "Aplicação: portas de madeira, ferro ou alumínio",
            "Automatizador para portas deslizantes com cremalheira",
            "Solução mais econômica para automação, pois utiliza a porta já existente no local, evitando novos custos",
            "Aplicação em condomínios, empresas ou residências"
          ]
        },
        {
          name: "Porta Social Spin Jet Flex",
          image: "/galeria/porta_social_spin_jet_flex_aplicacao_vidro_ou_caixilho_aplicacao_em_condominios_empresas_hospitais_o..jpg",
          description: [
            "Aplicação: vidro ou caixilho",
            "Aplicação em condomínios, empresas, hospitais ou residências",
            "Automatizador para portas sociais pivotantes compacto e de baixo custo",
            "É fácil de instalar e vem com tecnologia Jetflex, que aumenta a velocidade de abertura",
            "Se adapta em portas de alumínio, vidro, madeira e ferro"
          ]
        },
        {
          name: "Porta Social Wind 200 - 24v",
          image: "/galeria/porta_social_wind_200_ppa_kit.jpg",
          description: [
            "Aplicação: vidro ou caixilho",
            "1 ou 2 folhas móveis",
            "Cores: alumínio natural, pintado em alumínio, branco, preto ou demais cores à definir",
            "Indicação: local de médio à alto fluxo",
            "Sistema de acionamento conforme necessidade do local, podendo ser usado radares de movimento, botoeiras, controle remoto, entre outros",
            "Disponível na tecnologia 24V"
          ]
        },
        {
          name: "Porta Social Tore PPA - Aluminio",
          image: "/galeria/porta_social_tore_ppa_aplicacao_vidro_ou_caixilho_1_ou_2_folhas_moveis_cores_aluminio_natural_pintad..jpg",
          description: [
            "Aplicação: vidro ou caixilho",
            "1 ou 2 folhas móveis",
            "Cores: alumínio natural, pintado em alumínio, branco, preto ou demais cores à definir",
            "Indicação: local de pequeno à médio fluxo",
            "Sistema de acionamento conforme necessidade do local, podendo ser usado radares de movimento, botoeiras, controle remoto, entre outros"
          ]
        }
      ]
    },
    {
      title: "Cancelas Automáticas",
      description: "Controle de fluxo de veículos para estacionamentos",
      products: [
        {
          name: "Cancela BC1 PPA - Controle de fluxo",
          image: "/galeria/cancela_automatica_bc1_ppa_a_melhor_opcao_para_controle_de_fluxo_de_veiculos_em_locais_e_horarios_na..jpg",
          description: [
            "A melhor opção para controle de fluxo de veículos em locais e horários não autorizados",
            "Tecnologia JetFlex",
            "Acionamento: transmissor, controle de acesso ou botoeiras",
            "Possui comandos compatíveis com controles de acessos gerenciados e não gerenciados",
            "Aplicação: estacionamentos de lojas, consultórios, clínicas e postos de combustível",
            "Corrente usada: 9mm"
          ]
        },
        {
          name: "Cancela Automática PPA - Condominios",
          image: "/galeria/cancela_automatica_ppa_aplicacao_condominios_estacionamentos_shopping_e_pedagios_fluxo_baixo_medio_a.jpg",
          description: [
            "Aplicação: condomínios, estacionamentos, shopping e pedágios",
            "Fluxo: baixo, médio, alto ou intenso",
            "Cores: amarela, laranja, branca, cinza weg ou grafite",
            "Opção linear, para locais em que não há limitação de altura, ou articulada, para locais em que há um ponto de altura limitado",
            "Modelos: K1, Brasso, Barrier ou Sem Parar",
            "Tecnologia Jet Flex",
            "Barreiras de 2,50MT até 6,0MT, na opção com ou sem LED de sinalização"
          ]
        },
        {
          name: "Porta de Enrolar BR1 - Comercial",
          image: "/galeria/porta_de_enrolar_br1_fabricacao_nacional_proprio_para_estabelecimentos_comerciais_garagens_e_industr.jpg",
          description: [
            "Fabricação nacional",
            "Próprio para estabelecimentos comerciais, garagens e indústrias",
            "Acionamento por botoeira e TX ZAP-BR1 com 4 comandos",
            "Peças nacionais"
          ]
        }
      ]
    },
    {
      title: "Centrais e Acessórios",
      description: "Centrais de comando e acessórios complementares",
      products: [
        {
          name: "Central Agility Pop Híbrida",
          image: "/galeria/central_agility_pop_hibrida_atua_no_sistema_analogico_ou_digital_aceita_controles_ppa_ou_universais.jpg",
          description: [
            "Atua no sistema analógico ou digital",
            "Aceita controles PPA ou universais"
          ]
        },
        {
          name: "Central Triflex Connect Brushless",
          image: "/galeria/central_triflex_connect_brushless_.jpg",
          description: [
            "Central de comando moderna com tecnologia brushless"
          ]
        },
        {
          name: "Central Dupla PPA",
          image: "/galeria/central_dupla_ppa.jpg",
          description: [
            "Central de comando para automação de portões pivotante duplo"
          ]
        },
        {
          name: "Central Triflex Full Range",
          image: "/galeria/central_triflex_full_range.jpg",
          description: [
            "Central de comando completa para automação"
          ]
        },
        {
          name: "Central Laço Indutivo 1 ou 2 canais",
          image: "/galeria/central_laco_indutivo_1_ou_2_canais.jpg",
          description: [
            "1 ou 2 canais"
          ]
        },
        {
          name: "Fotocelula F32 Plus",
          image: "/galeria/fotocelula_f32_plus.jpg",
          description: [
            "Fotocélula para segurança de portões"
          ]
        },
        {
          name: "Fotocelula Refletiva F10 R",
          image: "/galeria/fotocelula_refletiva_f10_r.jpg",
          description: [
            "Fotocélula refletiva para segurança"
          ]
        },
        {
          name: "Laço Indutivo",
          image: "/galeria/laco_indutivo.jpg",
          description: [
            "Sistema de detecção por laço indutivo"
          ]
        },
        {
          name: "Prog - Acessório de Programação",
          image: "/galeria/prog_acessorio_de_programacao_das_centrais_de_comando_permite_a_programacao_dos_parametros_da_centra.png",
          description: [
            "Acessório de programação das centrais de comando",
            "Permite a programação dos parâmetros da central",
            "Permite visualização do número de ciclos do portão, de falhas e status dos sensores"
          ]
        },
        {
          name: "Seletor de Funções",
          image: "/galeria/seletor_de_funcoes_permite_a_programacao_total_da_porta_habilita_desabilita_radares_interno_e_extern.jpg",
          description: [
            "Permite a programação total da porta",
            "Habilita/Desabilita radares interno e externo de forma independente",
            "Função para manter porta aberta",
            "Permite visualização do número de ciclos da porta, de falhas e status dos sensores"
          ]
        },
        {
          name: "Controle ZAP 2 teclas",
          image: "/galeria/zap_2_2_teclas_de_comando_independentes_frequencia_de_transmissao_433_92_mhz.png",
          description: [
            "2 teclas de comando independentes",
            "Frequência de transmissão: 433,92 MHz"
          ]
        },
        {
          name: "Controle ZAP 4 teclas",
          image: "/galeria/zap_4_4_teclas_de_comando_independentes_frequencia_de_transmissao_433_92_mhz.png",
          description: [
            "4 teclas de comando independentes",
            "Frequência de transmissão: 433,92 MHz"
          ]
        },
        {
          name: "Módulo Contatto Wi-Fi",
          image: "/galeria/modulo_contatto_wifi.jpg",
          description: [
            "Equipamento que torna um painel de alarme, cerca elétrica ou automatizador de portão comunicáveis com celular via Wi-Fi, tornando-os mais modernos e compatíveis com aplicativos para celulares Android e iOS",
            "Receba notificações de status da sua central no seu celular via aplicativo (Android e iOS)",
            "Acione sua central de alarme, portão ou cerca elétrica de qualquer lugar via aplicativo",
            "Programável via aplicativo",
            "1 Saída de relê",
            "Funcionamento com a tecnologia Wi-Fi",
            "Compatível com muitas centrais de alarme, automatizadores de portões e cercas elétricas do mercado nacional e internacional"
          ]
        },
        {
          name: "RFID",
          image: "/galeria/rfid_cartoes.jpg",
          description: [
            "Frequência de trabalho: 125 Khz ou 13 Mhz",
            "Cartão passivo não necessita bateria",
            "É altamente confiável pois possui um código interno que é exclusivo para cada cartão",
            "O cartão pode ser personalizado com foto do usuário e nome/logo da empresa"
          ]
        },
        {
          name: "Botoeira Inox Smart N.A e N.F",
          image: "/galeria/botoeira_inox_smart.jpg",
          description: [
            "Botoeira com fino acabamento",
            "Alta durabilidade",
            "Ideal para instalações de alto padrão",
            "Botoeira em aço inoxidável",
            "Led indicativo",
            "Contatos N.A e N.F"
          ]
        },
        {
          name: "Botoeira Touch",
          image: "/galeria/botoeira_touch.jpg",
          description: [
            "Touch capacitivo",
            "Botoeira em PVC com fino acabamento",
            "Alta durabilidade",
            "Ideal para instalações de alto padrão",
            "Contatos N.A e N.F",
            "LED indicativo",
            "Disponível nas cores branca e preta"
          ]
        },
        {
          name: "Chaveiro RFID 125 KHz e 13MHz",
          image: "/galeria/chaveiro_rfid.jpg",
          description: [
            "Ideal para utilização nas áreas de controle de acesso",
            "Compatível com os principais leitores do mercado",
            "Frequência de trabalho 125 Khz ou 13 Mhz",
            "Visual moderno e compacto",
            "Resistente à água"
          ]
        },
        {
          name: "Tag RFID 900 MHz",
          image: "/galeria/tag_rfid_900mhz.jpg",
          description: [
            "Frequência 900 Mhz",
            "Memória 512 bits",
            "Código interno exclusivo",
            "Distância de leitura até 4 m"
          ]
        },
        {
          name: "Mola Aérea AS34",
          image: "/galeria/mola_aerea_as34.jpg",
          description: [
            "Mola hidráulica aérea projetada para aplicação em portas e portões de madeira ou metal",
            "Pode ser utilizada em aberturas tanto à direita quanto à esquerda",
            "Peso da porta: 40 a 65 Kg",
            "Velocidade ajustável",
            "Acabamentos: branco, preto e cinza",
            "Largura da porta: 60 a 120 cm",
            "Ideal para locais de alto fluxo"
          ]
        },
        {
          name: "Sensor Micro-Ondas SMI2",
          image: "/galeria/sensor_micro_ondas_smi2.jpg",
          description: [
            "Micro-ondas + Infravermelho para desempenho superior",
            "Detecta movimento ou presença com alta sensibilidade",
            "Proteção contra impactos com cortina infravermelha",
            "Altura máxima: 3 metros",
            "Largura da cortina: 2 metros"
          ]
        },
        {
          name: "Sensor Micro-Ondas SMI4",
          image: "/galeria/sensor_micro_ondas_smi4.jpg",
          description: [
            "Micro-ondas + Infravermelho para máxima proteção",
            "Detecta movimento ou presença com precisão",
            "Proteção contra impactos com cortina infravermelha",
            "Altura máxima: 2,5 metros",
            "Largura da cortina: 4 metros"
          ]
        },
        {
          name: "Sensor Micro-Ondas SMW3",
          image: "/galeria/sensor_micro_ondas_smw3.jpg",
          description: [
            "Alimentação: 12-24V (AC/DC)",
            "Ajuste de sensibilidade",
            "Altura máxima de instalação: 3m",
            "Tecnologia: Micro-ondas 24,125 GHz"
          ]
        },
        {
          name: "Triflex Connect Brushless PS",
          image: "/galeria/triflex_connect_brushless_ps.jpg",
          description: [
            "Aplicada em portas automáticas",
            "Central de comando bivolt (127V / 220V)",
            "Controla os motores da PPA do tipo síncrono sem escova com imã permanente no rotor (BRUSHLESS)",
            "Sistema de Fim de Curso Digital",
            "Velocidade ajustável",
            "Programação rápida e fácil via SELETOR DE FUNÇÕES",
            "Supervisão de sistema antipânico",
            "Saída para eletroimã ou sinalização de aberto / fechado",
            "Entrada para Receptor de controle remoto",
            "Entrada para fotocélula interna e externa",
            "Entrada para dispositivo de controle de acesso"
          ]
        },
        {
          name: "Fechadura Eletrônica FP310 com biometria e Senha",
          image: "/galeria/fechadura_eletronica_fp310.jpg",
          description: [
            "Acesso por biometria, senha e cartão RFID",
            "Capacidade para 9 administradores e até 100 usuários",
            "Construída em liga de alumínio na cor preta, resistente e moderna",
            "Funciona com 4 pilhas AA alcalinas e autonomia para 8.000 aberturas",
            "Operacional em temperaturas de -25°C a +70°C",
            "Instalação rápida e intuitiva"
          ]
        },
        {
          name: "Fechadura Eletrônica FP110 com RFID e Senha",
          image: "/galeria/fechadura_eletronica_fp110.jpg",
          description: [
            "Acesso por senha e cartão RFID",
            "Capacidade para 9 administradores e até 100 usuários",
            "Alimentação por 4 pilhas AA alcalinas, com autonomia para 8.000 aberturas",
            "Construída em liga de alumínio, resistente e durável",
            "Fácil instalação e uso intuitivo"
          ]
        },
        {
          name: "Fechadura Digital FS810 Smart On",
          image: "/galeria/fechadura_digital_fs810.jpg",
          description: [
            "Acesso por senha e biometria",
            "Capacidade para 9 administradores e até 100 usuários",
            "Alimentado por 4 pilhas alcalinas AA, com autonomia para 8.000 aberturas",
            "Construído em liga de alumínio, resistente e durável",
            "Fácil instalação e uso intuitivo"
          ]
        },
        {
          name: "Motor Tubular Mecânico",
          image: "/galeria/motor_tubular_mecanico.jpg",
          description: [
            "Ideais para quem busca uma solução robusta e eficiente para a automação de cortinas",
            "Versões disponíveis de 6Nm, 10Nm e 20Nm",
            "Compatíveis com diferentes diâmetros de tubo",
            "Acionamento por chave mecânica",
            "Funcionamento estável e silencioso"
          ]
        },
        {
          name: "Motor Tubular Eletrônico",
          image: "/galeria/motor_tubular_eletronico.jpg",
          description: [
            "Indicados para quem deseja mais conforto ao operar as cortinas sem a necessidade de instalação de chave mecânica",
            "MTE6 – Motor eletrônico de 6Nm, para cortinas leves",
            "MTE10 – Motor eletrônico de 10Nm, recomendado para cortinas médias",
            "MTE20 – Motor eletrônico de 20Nm, ideal para cortinas mais robustas"
          ]
        },
        {
          name: "SS 400T",
          image: "/galeria/ss_400t.jpg",
          description: [
            "Funciona como fonte para fechaduras eletromagnéticas",
            "Saída 12V",
            "Função No-Break",
            "Corrente de saída: 3A",
            "Acionamento por botão externo",
            "Carregador flutuante de bateria",
            "Tempo de acionamento ajustável de 0-60 segundos"
          ]
        },
        {
          name: "Puxe-Empurre PPA",
          image: "/galeria/puxe_empurre_ppa.jpg",
          description: [
            "Sinaliza abertura de portas e portões através dos leds, que indicam puxar e empurrar",
            "Ideal para escritórios, consultórios e condomínios",
            "Modelo de sobrepor com sinalização por leds",
            "Alimentação 12 a 17 Vdc"
          ]
        },
        {
          name: "Módulo PRF (com filtro)",
          image: "/galeria/modulo_prf_filtro.jpg",
          description: [
            "Protetor contra surtos elétricos e filtro de interferência eletromagnética",
            "Tensão nominal de trabalho: 127V ou 220V (definida na aquisição)",
            "Corrente máxima: 10A",
            "Atenuação de modo comum e diferencial"
          ]
        },
        {
          name: "Radar Selection",
          image: "/galeria/radar_selection.jpg",
          description: [
            "Alimentação de 12 a 24Vdc",
            "Saída NA e NF",
            "Detecção unidirecional e Bidirecional (selecionável)",
            "Alcance ajustado por trimpot",
            "Altura de instalação até 3,5 metros"
          ]
        },
        {
          name: "Volt Gate Ind Senoidal",
          image: "/galeria/volt_gate_ind_senoidal.jpg",
          description: [
            "Nobreak para automatizadores com melhor autonomia e performance para manter o funcionamento de motores",
            "Controle por inversor de frequência em forma de onda senoidal quando opera por baterias",
            "Proporciona maior número de ciclos de abertura e fechamento do portão",
            "Desenvolvido para manter os equipamentos em funcionamento quando há quedas de tensão",
            "Acompanha os cabos de bateria e trabalha em 24V utilizando 2 baterias de 12V em série",
            "Versão 1600VA - Potência Nominal de Pico (1000W) (1600VA)"
          ]
        },
        {
          name: "Volt Gate Senoidal",
          image: "/galeria/volt_gate_senoidal.jpg",
          description: [
            "Nobreak para automatizadores com melhor autonomia e performance para manter o funcionamento de motores",
            "Controle por inversor de frequência e em forma de onda senoidal quando opera por baterias",
            "Proporciona maior número de ciclos de abertura e fechamento do portão",
            "Desenvolvido para manter os equipamentos em funcionamento quando há quedas de tensão",
            "Mais conforto e segurança",
            "Versão 800VA - Potência Nominal de Pico (500W) (800VA)"
          ]
        },
        {
          name: "No-break Volt Gate Ind",
          image: "/galeria/nobreak_volt_gate_ind.jpg",
          description: [
            "No-break PPA de parede para automatizadores de portões industriais",
            "1 bateria de 12 V / 45 Ah",
            "Mantém o funcionamento do automatizador quando houver falta de energia elétrica",
            "Reduz o consumo de energia do equipamento quando estiver operando pela bateria",
            "Possui estabilizador para compensar variações na tensão da rede elétrica"
          ]
        },
        {
          name: "No-break Volt Gate",
          image: "/galeria/nobreak_volt_gate.jpg",
          description: [
            "No-break PPA de parede para automatizadores de portões",
            "2 baterias de 12 V / 7 Ah",
            "Mantém o funcionamento do automatizador quando houver falta de energia elétrica",
            "Reduz o consumo de energia do equipamento quando estiver operando pela bateria",
            "Possui estabilizador para compensar variações na tensão da rede elétrica"
          ]
        },
        {
          name: "Good Light Plus",
          image: "/galeria/good_light_plus.jpg",
          description: [
            "Controle veicular para carros, motos e caminhões",
            "Circuito eletrônico isolado do veículo",
            "Chave tact para gravação do transmissor na central",
            "Fios de conexão sem polaridade, podendo ser instalado sem preocupação com inversão de polaridade",
            "Nova tecnologia com melhor transmissão de dados devido à potência do sinal RF e confiabilidade",
            "Frequência de transmissão em 433,92 MHz",
            "Potência de transmissão de aproximadamente 10 dBm",
            "Resistente a umidade",
            "Alta estabilidade de frequência",
            "Código rolante PPA"
          ]
        },
        {
          name: "Receptor Alcance",
          image: "/galeria/receptor_alcance.jpg",
          description: [
            "Receptor para automatizadores de portas e portões automáticos PPA",
            "Modo de retenção ou pulso por jumper",
            "Fácil instalação",
            "Memória para transmissores removível, criptografada",
            "Disponível em 433,92 MHz",
            "Até 164 transmissores (Código Rolante PPA) ou 328 transmissores (Código Fixo PPA)"
          ]
        },
        {
          name: "Módulo Relé",
          image: "/galeria/modulo_rele.jpg",
          description: [
            "Realiza a interface com acessórios como trava eletromagnética, luz de garagem e sinaleira externa"
          ]
        },
        {
          name: "Cremalheira Gold Nylon Natural",
          image: "/galeria/cremalheira_gold_nylon_natural.jpg",
          description: [
            "Linha industrial em cantoneira de aço",
            "Com nova fixação mais reforçada (parafuso sextavado)",
            "Conexão entre gomos por encaixe"
          ]
        },
        {
          name: "Suporte de Fixação para Máquinas Basculantes",
          image: "/galeria/suporte_fixacao_maquinas_basculantes.jpg",
          description: [
            "Fabricado em chapa de aço com tratamento de superfície",
            "Desenvolvido para facilitar a instalação de automatizadores basculantes",
            "Permite ajustes e regulagens (haste e base com furos e rasgos)"
          ]
        },
        {
          name: "Cremalheira Pop Preta",
          image: "/galeria/cremalheira_pop_preta.jpg",
          description: [
            "Linha leve em cantoneira de aço",
            "Metragem: 1,50MT cada barra"
          ]
        }
      ]
    },
    {
      title: "Segurança e Travas",
      description: "Dispositivos de segurança e travamento",
      products: [
        {
          name: "Trava Dog Steel Eletromagnética",
          image: "/galeria/trava_dog_steel_trava_eletromagnetica_para_portoes_produzida_em_chapa_de_aco_carbono_com_pintura_ele..jpg",
          description: [
            "Trava eletromagnética para portões",
            "Produzida em chapa de aço carbono com pintura eletrostática",
            "Pino em aço carbono maciço",
            "Base em chapa de aço",
            "Rampa em aço antiviolação",
            "Compatível com portões basculantes, deslizantes e pivotantes",
            "Cores variadas"
          ]
        },
        {
          name: "Eletroímãs para Portas Pivotantes",
          image: "/galeria/eletroimas_portas_pivotantes_de_diversos_padroes_cores_e_pesos_variados..jpg",
          description: [
            "Portas pivotantes de diversos padrões",
            "Cores e pesos variados"
          ]
        },
        {
          name: "Botoeira BT Steel - 1,2,4,6 botões",
          image: "/galeria/botoeira_bt_steel_kit.jpg",
          description: [
            "Acionador de abertura. Um dispositivo de comando com a função de ligar e desligar a carga de um circuito, a partir de um acionamento manual, com 1, 2, 4 e 6 botões",
            "Cores: preta, cinza, branca e inox"
          ]
        },
        {
          name: "Botoeira Inox No Touch",
          image: "/galeria/botoeira_inox_no_touch.jpg",
          description: [
            "Botoeira em inox com tecnologia no touch"
          ]
        },
        {
          name: "Sinaleira Lux - Visual e sonora",
          image: "/galeria/sinaleira_lux_sinalizacao_visual_nas_cores_vermelho_e_amarelo_sinalizacao_sonora_buzzer_com_volume_e..png",
          description: [
            "Sinalização visual nas cores vermelho e amarelo",
            "Sinalização sonora (Buzzer) com volume e frequência ajustáveis",
            "Sensor de identificação dia / noite",
            "Disponível nas cores preta e branca"
          ]
        },
        {
          name: "Traver Uno - Acabamento diferenciado",
          image: "/galeria/traver_uno_acabamento_diferenciado_disponivel_nas_cores_preta_branca_e_cinza_facil_instalacao_para_d.jpg",
          description: [
            "Acabamento diferenciado disponível nas cores preta, branca e cinza",
            "Fácil instalação para diversos tipos de portas e portões"
          ]
        },
        {
          name: "Mola Aérea - Portas e Portões",
          image: "/galeria/mola_aerea_desenvolvida_para_uso_em_portas_portoes_de_madeira_ou_metal_pode_ser_instalada_tanto_em_p..jpg",
          description: [
            "Desenvolvida para uso em portas/portões de madeira ou metal",
            "Pode ser instalada tanto em portas com abertura direita ou esquerda",
            "Velocidade ajustável",
            "Disponível nas cores: preta, branca e prata"
          ]
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
            <DialogContent className="max-w-[95vw] sm:max-w-2xl max-h-[85vh] overflow-y-auto mx-2 sm:mx-auto p-4 sm:p-6">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
                  Meu Carrinho ({getTotalItems()} itens)
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-3 sm:space-y-4 max-w-full overflow-hidden">
                {cart.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-4 p-2 sm:p-4 border rounded-lg max-w-full">
                    <div className="w-10 h-10 sm:w-16 sm:h-16 bg-black rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.src = '/placeholder.svg';
                        }}
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0 overflow-hidden">
                      <h4 className="font-semibold text-xs sm:text-sm leading-tight line-clamp-2">{item.name}</h4>
                      <p className="text-xs text-muted-foreground truncate">{item.category}</p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 flex-shrink-0">
                      <div className="flex items-center space-x-1">
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
                      </div>
                      
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => removeFromCart(item.name)}
                        className="h-6 w-6 sm:h-8 sm:w-8 p-0"
                      >
                        <Trash2 className="h-2 w-2 sm:h-3 sm:w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
                
                <div className="flex flex-col sm:flex-row justify-between gap-2 pt-4 border-t">
                  <Button variant="outline" onClick={clearCart} className="text-xs sm:text-sm w-full sm:w-auto">
                    Limpar Carrinho
                  </Button>
                  <Button onClick={sendWhatsAppCart} className="bg-green-600 hover:bg-green-700 text-xs sm:text-sm w-full sm:w-auto">
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
        <section className="bg-gradient-primary py-16 notranslate" translate="no">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-6">
              <Link to="/">
                <Button variant="outline" size="icon" className="border-white/20 text-white hover:bg-white/10">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </Link>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 notranslate" translate="no">
                  Nossos Produtos
                </h1>
                <p className="text-white/90 text-lg notranslate" translate="no">
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
                    <h2 className="text-2xl font-bold text-foreground mb-3 notranslate" translate="no">
                      {category.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 text-lg notranslate" translate="no">
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
                            <h3 className="font-semibold text-foreground text-xs sm:text-sm leading-tight notranslate" translate="no">
                              {product.name}
                            </h3>
                            
                            {/* Product Description Toggle */}
                            {product.description && (
                              <div className="space-y-2">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => toggleProductDetails(product.name)}
                                  className="w-full p-0 h-auto font-normal text-xs justify-between"
                                >
                                  <span>Ver Especificações</span>
                                  {expandedProducts[product.name] ? 
                                    <ChevronUp className="h-3 w-3" /> : 
                                    <ChevronDown className="h-3 w-3" />
                                  }
                                </Button>
                                
                                {expandedProducts[product.name] && (
                                  <div className="bg-muted/30 rounded-lg p-3 space-y-1 notranslate" translate="no">
                                    {product.description.map((desc, descIndex) => (
                                      <div key={descIndex} className="text-xs text-muted-foreground flex items-start">
                                        <span className="text-primary mr-2 font-bold">•</span>
                                        <span>{desc}</span>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            )}
                            
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