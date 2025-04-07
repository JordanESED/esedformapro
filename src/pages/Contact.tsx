
import React from 'react';
import Layout from '@/components/layout/Layout';
import ContactForm from '@/components/ui/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-esed-blue to-[#1a65c9] text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">Contactez-nous</h1>
            <p className="text-xl text-white/90 mb-8">
              Vous avez des questions sur nos formations ou vous souhaitez obtenir un devis personnalisé ?
              N'hésitez pas à nous contacter, notre équipe vous répondra dans les plus brefs délais.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Envoyez-nous un message</h2>
              <p className="text-gray-700 mb-8">
                Vous souhaitez en savoir plus sur nos formations, obtenir un devis personnalisé ou discuter 
                de vos besoins spécifiques ? Remplissez le formulaire ci-dessous et nous vous recontacterons 
                dans les plus brefs délais.
              </p>
              
              <ContactForm />
            </div>
            
            <div className="lg:pl-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Nos coordonnées</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="h-6 w-6 text-esed-blue" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium mb-1">Email</h3>
                    <p className="text-gray-700">
                      <a href="mailto:contact@esed.online" className="hover:text-esed-gold transition-colors">contact@esed.online</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="h-6 w-6 text-esed-blue" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium mb-1">Téléphone</h3>
                    <p className="text-gray-700">
                      <a href="tel:+33000000000" className="hover:text-esed-gold transition-colors">+33 (0)0 00 00 00 00</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="h-6 w-6 text-esed-blue" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium mb-1">Adresse</h3>
                    <p className="text-gray-700">
                      ESED - Formation professionnelle<br />
                      Paris, France
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Clock className="h-6 w-6 text-esed-blue" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium mb-1">Horaires</h3>
                    <p className="text-gray-700">
                      Du lundi au vendredi<br />
                      9h00 - 18h00
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div className="mt-8 h-64 bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600">Carte de localisation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-2 mb-6">Vous souhaitez en savoir plus sur nos formations ?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Découvrez notre catalogue complet de formations professionnelles conçues pour développer 
              les compétences clés de vos équipes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/catalogue" className="btn-primary">
                Explorer notre catalogue
              </a>
              <a href="/financement" className="btn-outline">
                Options de financement
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
