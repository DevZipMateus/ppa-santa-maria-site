import { Award, Users, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Sobre a Lopes Segurança Eletrônica
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Distribuidor autorizado PPA em Santa Maria desde 2014, com o objetivo de manter a qualidade e segurança aos nossos clientes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Nossa história</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Buscamos trazer sempre produtos com diferenciais ao mercado, garantindo a satisfação e conforto em cada equipamento vendido. Nosso foco está em movimentadores de portões residenciais e para condomínios, portas automáticas, cancelas automáticas e peças para reposição.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Buscando ampliar o raio de atendimento, levamos nossos produtos por toda Santa Maria e região, dando suporte técnico e criando novos instaladores capacitados para o mercado.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Queremos ser referência em nossa região, seja no atendimento ou nos equipamentos ofertados, com fácil manuseio e maior durabilidade.
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
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Queremos fidelizar ainda mais clientes, que estejam satisfeitos com os produtos adquiridos e que confiem em nosso trabalho, mantendo sempre a transparência, confiança e ética.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;