import { Award, Users, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle notranslate" translate="no">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 notranslate" translate="no">
              Sobre a Lopes Segurança Eletrônica
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto notranslate" translate="no">
              Distribuidor autorizado PPA em Santa Maria desde 2014, com o objetivo de manter a qualidade e segurança aos nossos clientes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6 notranslate" translate="no">Nossa história</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed notranslate" translate="no">
                Há mais de 10 anos saímos da cidade de Garça, interior Paulista, para implantar nossa loja na cidade de Santa Maria. Pouco a pouco, os primeiros clientes foram chegando, e hoje, com os anos de experiência no mercado, diversos atendimentos prestados para empresas e residências, conseguimos fidelizar clientes e nos tornar participantes da construção de grandes empreendimentos e de novas histórias.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed notranslate" translate="no">
                Sempre buscamos nos atualizar sobre o que há de mais inovador no mercado para oferecer aos nossos clientes. Prezamos por uma experiência satisfatória, desde o atendimento inicial, a venda e o pós venda.
              </p>
              <p className="text-muted-foreground leading-relaxed notranslate" translate="no">
                Entre em contato e venha conhecer nosso ponto de vendas. Vamos juntos construir o conforto e segurança que você merece!
              </p>
              
              <h3 className="text-2xl font-semibold text-foreground mb-6 mt-8 notranslate" translate="no">Nossos Objetivos</h3>
              <p className="text-muted-foreground leading-relaxed notranslate" translate="no">
                Buscamos oferecer produtos diferenciados e com qualidade, visando a satisfação e o conforto em cada equipamento vendido.
              </p>
            </div>
            <div className="space-y-6">
              <Card className="shadow-card-custom">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Qualidade garantida</h4>
                      <p className="text-muted-foreground">Produtos com diferenciais no mercado e maior durabilidade</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-card-custom">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Suporte técnico</h4>
                      <p className="text-muted-foreground">Equipe capacitada e instaladores treinados em toda região</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-card-custom">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Transparência</h4>
                      <p className="text-muted-foreground">Atendimento baseado na transparência, confiança e ética</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-primary/5 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Nossa missão</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
              Buscamos oferecer produtos diferenciados e com qualidade, visando a satisfação e o conforto em cada equipamento vendido.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nossa equipe é capacitada para oferecer suporte técnico, garantindo fácil manuseio e maior durabilidade dos produtos adquiridos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;