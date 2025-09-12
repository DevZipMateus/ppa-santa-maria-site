import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook,
  MessageCircle
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const handleWhatsAppClick = (phone: string) => {
    window.open(`https://wa.me/${phone}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Entre em contato
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Estamos prontos para atender você! Entre em contato conosco pelos canais abaixo ou visite nossa loja em Santa Maria
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Informações de contato
              </h3>

              <Card className="shadow-card-custom">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2">Telefones</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">(55) 3025-3830</span>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleWhatsAppClick('5555981079091')}
                          >
                            <MessageCircle className="h-4 w-4 mr-2" />
                            WhatsApp
                          </Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">(55) 98107-9091</span>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleWhatsAppClick('5555981079091')}
                          >
                            <MessageCircle className="h-4 w-4 mr-2" />
                            WhatsApp
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card-custom">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Email</h4>
                      <a 
                        href="mailto:adm.lopesseg@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        adm.lopesseg@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card-custom">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Endereço</h4>
                      <p className="text-muted-foreground">
                        Rua Visconde de Pelotas, 1915<br />
                        Loja térreo - Bairro Nossa Senhora de Fátima<br />
                        Santa Maria - RS
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card-custom">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Horário de funcionamento</h4>
                      <div className="text-muted-foreground space-y-1">
                        <p>Segunda a sexta: 8h às 12h e 13h30 às 17h50</p>
                        <p>Sábado: Fechado</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Redes sociais</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/ppasantamaria?igsh=MWw2emU2ODRjMmRuZw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://www.facebook.com/share/1D8zmzWLsF/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Localização
              </h3>
              <div className="bg-card rounded-2xl overflow-hidden shadow-card-custom">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.4234567890123!2d-53.8151837!3d-29.6971113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9503cb389e219b4f%3A0x930026c80677d632!2sLopes%20Seguran%C3%A7a%20Eletr%C3%B4nica%20-%20PPA%20Santa%20Maria%20RS!5e0!3m2!1spt-BR!2sbr!4v1674567890123!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Lopes Segurança Eletrônica"
                />
              </div>
              <Button 
                asChild
                className="w-full bg-primary hover:bg-primary/90"
              >
                <a
                  href="https://www.google.com/maps/place/Lopes+Seguran%C3%A7a+Eletr%C3%B4nica+-+PPA+Santa+Maria+RS/@-29.6971113,-53.8151837,17z/data=!3m1!4b1!4m6!3m5!1s0x9503cb389e219b4f:0x930026c80677d632!8m2!3d-29.6971113!4d-53.8151837!16s%2Fg%2F11qqr7d9q8?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Ver no Google Maps
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;