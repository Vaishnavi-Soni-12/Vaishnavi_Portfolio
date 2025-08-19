import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Mail className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Let's Connect
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to collaborate on innovative projects or discuss opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="float-card bg-gradient-card border-0 fade-in">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground text-sm">vaishnavi.soni@example.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="float-card bg-gradient-card border-0 fade-in delay-100">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-accent/10">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground text-sm">Trichy, Tamil Nadu</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="float-card bg-gradient-card border-0 fade-in delay-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-tertiary/10">
                    <Phone className="w-5 h-5 text-tertiary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground text-sm">+91 XXXXX XXXXX</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="float-card bg-gradient-card border-0 fade-in delay-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input 
                      placeholder="Your Name" 
                      className="bg-white/50 border-primary/20 focus:border-primary"
                    />
                    <Input 
                      type="email" 
                      placeholder="Your Email" 
                      className="bg-white/50 border-primary/20 focus:border-primary"
                    />
                  </div>
                  <Input 
                    placeholder="Subject" 
                    className="bg-white/50 border-primary/20 focus:border-primary"
                  />
                  <Textarea 
                    placeholder="Your Message" 
                    rows={6}
                    className="bg-white/50 border-primary/20 focus:border-primary resize-none"
                  />
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};