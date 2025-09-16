import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Award, Clock, Users, CheckCircle2 } from 'lucide-react';

const TrainingSection = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    tipoTreinamento: '',
    observacoes: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message with form data
    const message = `*Solicitação de Treinamento*
    
*Nome:* ${formData.nome}
*Email:* ${formData.email}
*Empresa:* ${formData.empresa || 'Não informado'}
*Tipo de Treinamento:* ${formData.tipoTreinamento}
*Observações:* ${formData.observacoes || 'Nenhuma observação'}`;

    const whatsappUrl = `https://wa.me/5555981079091?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    // Reset form
    setFormData({
      nome: '',
      email: '',
      empresa: '',
      tipoTreinamento: '',
      observacoes: ''
    });
  };


  return (
    <section id="treinamento" className="py-20 bg-gradient-subtle" translate="no">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 notranslate" translate="no">
            Treinamentos Técnicos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto notranslate" translate="no">
            Capacitação profissional com <span className="text-primary font-semibold">certificado válido</span> para instaladores, técnicos e empresas do setor
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Informações sobre o Treinamento */}
          <div className="space-y-8">
            <Card className="bg-background/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary notranslate" translate="no">
                  <Award className="h-6 w-6" />
                  Certificação Reconhecida
                </CardTitle>
                <CardDescription className="notranslate" translate="no">
                  Todos os nossos treinamentos incluem certificado de conclusão com validade nacional
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium notranslate" translate="no">Certificado Oficial</h4>
                    <p className="text-sm text-muted-foreground notranslate" translate="no">
                      Documento com validade nacional reconhecida no mercado
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium notranslate" translate="no">Instrutor Qualificado</h4>
                    <p className="text-sm text-muted-foreground notranslate" translate="no">
                      Profissional com mais de 15 anos de experiência no setor
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium notranslate" translate="no">Prática e Teoria</h4>
                    <p className="text-sm text-muted-foreground notranslate" translate="no">
                      Treinamento completo com parte teórica e prática hands-on
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="text-center bg-background/30 backdrop-blur-sm border-border/50">
                <CardContent className="pt-6">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold notranslate" translate="no">8-16h</h4>
                  <p className="text-sm text-muted-foreground notranslate" translate="no">Duração</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-background/30 backdrop-blur-sm border-border/50">
                <CardContent className="pt-6">
                  <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold notranslate" translate="no">Até 12</h4>
                  <p className="text-sm text-muted-foreground notranslate" translate="no">Participantes</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-background/30 backdrop-blur-sm border-border/50">
                <CardContent className="pt-6">
                  <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold notranslate" translate="no">Flexível</h4>
                  <p className="text-sm text-muted-foreground notranslate" translate="no">Agendamento</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Formulário de Agendamento */}
          <Card className="bg-background/80 backdrop-blur-sm border-border/50 shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-primary notranslate" translate="no">
                Agendar Treinamento
              </CardTitle>
              <CardDescription className="notranslate" translate="no">
                Preencha o formulário abaixo e entraremos em contato para confirmar os detalhes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium mb-2 notranslate" translate="no">
                    Nome Completo *
                  </label>
                  <Input
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    translate="no"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 notranslate" translate="no">
                    E-mail *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    translate="no"
                  />
                </div>

                <div>
                  <label htmlFor="empresa" className="block text-sm font-medium mb-2 notranslate" translate="no">
                    Empresa
                  </label>
                  <Input
                    id="empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleInputChange}
                    className="w-full"
                    translate="no"
                  />
                </div>

                <div>
                  <label htmlFor="tipoTreinamento" className="block text-sm font-medium mb-2 notranslate" translate="no">
                    Tipo de Treinamento *
                  </label>
                  <Select name="tipoTreinamento" value={formData.tipoTreinamento} onValueChange={(value) => setFormData(prev => ({ ...prev, tipoTreinamento: value }))}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione o treinamento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Instalação de Portões Automáticos">Instalação de Portões Automáticos</SelectItem>
                      <SelectItem value="Instalação de Portas Automáticas">Instalação de Portas Automáticas</SelectItem>
                      <SelectItem value="Programação de Centrais">Programação de Centrais</SelectItem>
                      <SelectItem value="Sistemas de Controle de Acesso">Sistemas de Controle de Acesso</SelectItem>
                      <SelectItem value="Cancelas Automáticas">Cancelas Automáticas</SelectItem>
                      <SelectItem value="Interfones e Videoporteiros">Interfones e Videoporteiros</SelectItem>
                      <SelectItem value="Cercas Elétricas">Cercas Elétricas</SelectItem>
                      <SelectItem value="Câmeras de Segurança">Câmeras de Segurança</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="observacoes" className="block text-sm font-medium mb-2 notranslate" translate="no">
                    Observações
                  </label>
                  <Textarea
                    id="observacoes"
                    name="observacoes"
                    value={formData.observacoes}
                    onChange={handleInputChange}
                    placeholder="Informações adicionais sobre o treinamento desejado..."
                    rows={4}
                    className="w-full resize-none"
                    translate="no"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 notranslate"
                  translate="no"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Solicitar Agendamento
                </Button>

                <p className="text-xs text-muted-foreground text-center notranslate" translate="no">
                  * Campos obrigatórios. Entraremos em contato em até 24 horas.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;