
import React from 'react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/ui/SectionTitle';
import { Clock, Users, Monitor, Globe, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotreApproche = () => {
  // Données pour les modalités de formation
  const formats = [
    {
      title: "Formation intensive",
      description: "2 jours complets (14h) d'immersion pour maîtriser une compétence spécifique",
      icon: <Clock className="h-8 w-8 text-esed-blue" />,
      features: [
        "Idéal pour l'acquisition rapide d'une compétence",
        "Exercices pratiques intensifs",
        "Immersion complète dans le sujet",
        "Suivi post-formation d'1h inclus"
      ]
    },
    {
      title: "Formation progressive",
      description: "3h par semaine sur 1 mois pour intégrer progressivement les compétences",
      icon: <Users className="h-8 w-8 text-esed-blue" />,
      features: [
        "Compatible avec une activité professionnelle",
        "Temps d'assimilation entre les sessions",
        "Mise en pratique progressive",
        "Plus de temps pour les questions et l'accompagnement"
      ]
    }
  ];

  const modalites = [
    {
      title: "Présentiel",
      description: "Formation en face à face dans nos locaux ou dans votre entreprise",
      icon: <Users className="h-8 w-8 text-esed-blue" />,
      features: [
        "Interaction directe avec le formateur",
        "Dynamique de groupe enrichissante",
        "Exercices pratiques collaboratifs",
        "Équipement professionnel à disposition"
      ]
    },
    {
      title: "Distanciel",
      description: "Formation à distance via notre plateforme interactive",
      icon: <Monitor className="h-8 w-8 text-esed-blue" />,
      features: [
        "Flexibilité géographique",
        "Économie de temps de transport",
        "Outils collaboratifs performants",
        "Sessions enregistrées et accessibles après la formation"
      ]
    },
    {
      title: "Hybride",
      description: "Combinaison optimale entre sessions présentielles et distancielles",
      icon: <Globe className="h-8 w-8 text-esed-blue" />,
      features: [
        "Le meilleur des deux approches",
        "Adaptabilité aux contraintes",
        "Alternance théorie/pratique",
        "Flexibilité pour les apprenants"
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-esed-blue to-[#1a65c9] text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">Notre approche pédagogique</h1>
            <p className="text-xl text-white/90 mb-8">
              Chez ESED, nous avons développé une approche unique basée sur l'apprentissage par la pratique. 
              Découvrez comment nous transformons la formation professionnelle pour garantir des résultats concrets.
            </p>
          </div>
        </div>
      </section>

      {/* Learning by Doing Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Learning by doing" 
                subtitle="Notre méthode d'apprentissage par la pratique garantit l'acquisition durable des compétences"
              />
              
              <p className="text-gray-700 mb-6">
                La méthode "Learning by doing" (apprendre en faisant) est au cœur de notre approche pédagogique. 
                Nous croyons fermement que l'acquisition durable de compétences passe par la pratique active plutôt 
                que par l'apprentissage passif.
              </p>
              
              <p className="text-gray-700 mb-6">
                Nos formations sont conçues pour maximiser le temps consacré à la pratique. Les apprenants 
                sont rapidement mis en situation à travers des exercices concrets, des études de cas réels 
                et des projets directement liés à leur contexte professionnel.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-esed-orange" />
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-medium">80% de pratique</span> : Nos formations privilégient l'action sur la théorie
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-esed-orange" />
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-medium">Cas réels</span> : Exercices inspirés de situations professionnelles authentiques
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-esed-orange" />
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-medium">Apprentissage actif</span> : Les apprenants sont acteurs de leur formation
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 text-esed-blue">Une journée type de formation</h3>
              
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <div className="flex items-center mb-2">
                    <div className="bg-esed-blue text-white h-8 w-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-semibold">1</span>
                    </div>
                    <h4 className="font-semibold">9h00 - 9h30 : Introduction et objectifs</h4>
                  </div>
                  <p className="text-gray-700 pl-11">
                    Présentation des objectifs de la journée et des compétences à acquérir
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <div className="flex items-center mb-2">
                    <div className="bg-esed-blue text-white h-8 w-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-semibold">2</span>
                    </div>
                    <h4 className="font-semibold">9h30 - 10h30 : Cadre théorique essentiel</h4>
                  </div>
                  <p className="text-gray-700 pl-11">
                    Présentation concise des concepts clés nécessaires à la pratique
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <div className="flex items-center mb-2">
                    <div className="bg-esed-blue text-white h-8 w-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-semibold">3</span>
                    </div>
                    <h4 className="font-semibold">10h45 - 12h30 : Ateliers pratiques</h4>
                  </div>
                  <p className="text-gray-700 pl-11">
                    Exercices en petits groupes sur des cas concrets liés au contexte professionnel des participants
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <div className="flex items-center mb-2">
                    <div className="bg-esed-blue text-white h-8 w-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-semibold">4</span>
                    </div>
                    <h4 className="font-semibold">13h30 - 15h30 : Mise en application</h4>
                  </div>
                  <p className="text-gray-700 pl-11">
                    Travail sur un projet concret directement applicable dans le contexte professionnel
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <div className="flex items-center mb-2">
                    <div className="bg-esed-blue text-white h-8 w-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-semibold">5</span>
                    </div>
                    <h4 className="font-semibold">15h45 - 17h00 : Restitution et feedback</h4>
                  </div>
                  <p className="text-gray-700 pl-11">
                    Présentation des travaux, retours personnalisés et conseils d'amélioration
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <div className="flex items-center mb-2">
                    <div className="bg-esed-blue text-white h-8 w-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-semibold">6</span>
                    </div>
                    <h4 className="font-semibold">17h00 - 17h30 : Plan d'action</h4>
                  </div>
                  <p className="text-gray-700 pl-11">
                    Élaboration d'un plan d'action personnel pour mettre en œuvre les acquis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formats de formation */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Formats de formation adaptés" 
            subtitle="Nous proposons différents formats pour répondre aux contraintes et objectifs de chacun"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {formats.map((format, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="mr-4">{format.icon}</div>
                  <h3 className="text-2xl font-semibold">{format.title}</h3>
                </div>
                <p className="text-gray-700 mb-6">{format.description}</p>
                <ul className="space-y-3">
                  {format.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-esed-orange mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modalités de formation */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Modalités de formation" 
            subtitle="Présentiel, distanciel ou hybride : choisissez la formule qui vous convient"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {modalites.map((modalite, index) => (
              <div key={index} className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="mr-3">{modalite.icon}</div>
                  <h3 className="text-xl font-semibold">{modalite.title}</h3>
                </div>
                <p className="text-gray-700 mb-6">{modalite.description}</p>
                <ul className="space-y-2">
                  {modalite.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-esed-orange mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Continuité d'activité */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Continuité d'activité professionnelle" 
                subtitle="Nos formations sont conçues pour s'intégrer à votre rythme professionnel"
              />
              
              <p className="text-gray-700 mb-6">
                Nous comprenons les contraintes professionnelles de nos clients. C'est pourquoi nos formations 
                sont conçues pour permettre une continuité d'activité professionnelle, même pendant les périodes 
                de formation.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-esed-orange" />
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-medium">Formats flexibles</span> : Intensif ou progressif selon vos disponibilités
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-esed-orange" />
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-medium">Sessions en dehors des heures de travail</span> : Possibilité de formations en soirée ou le weekend
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-esed-orange" />
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-medium">Application immédiate</span> : Les acquis peuvent être mis en pratique dès le lendemain
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-esed-orange" />
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-medium">Support continu</span> : Assistance post-formation pour faciliter l'application des compétences
                  </p>
                </div>
              </div>

              <Link to="/contact" className="btn-primary inline-block">
                Discuter de vos besoins
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6 text-esed-blue">Témoignage</h3>
              
              <div className="mb-4 text-esed-orange">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <p className="text-gray-700 italic text-lg mb-6">
                "J'ai pu suivre la formation 'Manager Opérationnel' tout en continuant à gérer mon équipe. 
                Le format progressif m'a permis d'intégrer les nouvelles pratiques semaine après semaine, 
                et j'ai vu des résultats concrets dès les premières sessions. L'accompagnement post-formation 
                a été déterminant pour surmonter les obstacles rencontrés lors de la mise en application."
              </p>
              
              <div className="flex items-center">
                <div className="mr-4 bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-gray-600 font-medium text-xl">L</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Laurent Dubois</h4>
                  <p className="text-sm text-gray-600">
                    Responsable d'équipe · TechSolutions SAS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-esed-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à transformer votre approche de la formation?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Découvrez comment notre méthode "Learning by doing" peut répondre à vos besoins spécifiques.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-secondary">
              Discuter avec un conseiller
            </Link>
            <Link to="/catalogue" className="bg-white text-esed-blue hover:bg-opacity-90 transition-all px-6 py-3 rounded-md font-medium">
              Voir nos formations
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotreApproche;
