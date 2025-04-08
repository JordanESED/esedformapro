
import React from 'react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/ui/SectionTitle';
import { Link } from 'react-router-dom';

interface TeamMemberProps {
  name: string;
  role: string;
  expertise: string[];
  bio: string;
  imageSrc?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ 
  name, 
  role, 
  expertise, 
  bio, 
  imageSrc 
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="h-64 bg-gray-200 relative">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-esed-blue to-[#1a65c9] flex items-center justify-center">
            <span className="text-white text-5xl font-bold">{name.charAt(0)}</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1 text-gray-800">{name}</h3>
        <p className="text-esed-orange font-medium mb-3">{role}</p>
        
        <div className="mb-4">
          <p className="text-sm text-gray-600 font-medium mb-2">Expertise:</p>
          <div className="flex flex-wrap gap-2">
            {expertise.map((item, index) => (
              <span 
                key={index}
                className="bg-gray-100 text-gray-700 text-xs font-medium py-1 px-2 rounded"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        
        <p className="text-gray-700">{bio}</p>
      </div>
    </div>
  );
};

const Equipe = () => {
  // Données de l'équipe
  const teamMembers = [
    {
      name: "Brice Bonbois",
      role: "Directeur & Formateur Vente",
      expertise: ["Sales Hacking", "Marketing Digital", "Frameworks de vente"],
      bio: "Expert en stratégie commerciale avec plus de 15 ans d'expérience. Brice a accompagné des centaines d'entreprises dans l'optimisation de leur processus de vente et l'acquisition client.",
    },
    {
      name: "Sophie Martin",
      role: "Responsable pédagogique",
      expertise: ["Ingénierie de formation", "Intelligence Émotionnelle", "Leadership"],
      bio: "Spécialiste de l'ingénierie pédagogique, Sophie conçoit des parcours de formation innovants centrés sur l'apprentissage par la pratique et l'acquisition durable des compétences.",
    },
    {
      name: "Thomas Durand",
      role: "Formateur IA & Technologies",
      expertise: ["IA Générative", "Prompt Engineering", "Création de site web IA"],
      bio: "Expert en intelligence artificielle et nouvelles technologies, Thomas aide les professionnels à intégrer les outils d'IA dans leur quotidien pour gagner en productivité.",
    },
    {
      name: "Laure Belmont",
      role: "Formatrice Marketing Digital",
      expertise: ["SEO", "Paid Media", "Meta Ads", "Google Ads"],
      bio: "Avec 10 ans d'expérience en agence, Laure maîtrise tous les aspects du marketing digital. Elle forme les équipes aux meilleures pratiques pour maximiser leur présence en ligne.",
    },
    {
      name: "Marc Leblanc",
      role: "Formateur Management",
      expertise: ["Management Opérationnel", "Leadership", "Gestion de crise"],
      bio: "Ancien directeur d'hôtel et consultant en management, Marc partage son expertise pour former des managers efficaces et bienveillants, capables de mener leurs équipes vers l'excellence.",
    },
    {
      name: "Juliette Renard",
      role: "Experte HRC & Formation",
      expertise: ["Expérience Client", "Revenue Management", "Communication Digitale HRC"],
      bio: "Spécialiste du secteur Hôtellerie-Restauration, Juliette combine expertise technique et pédagogie innovante pour former les professionnels aux défis spécifiques de ce secteur.",
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-esed-blue to-[#1a65c9] text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">Notre équipe d'experts</h1>
            <p className="text-xl text-white/90">
              Découvrez nos formateurs, experts dans leurs domaines respectifs et passionnés de transmission de savoir.
              Leur approche pédagogique unique est le cœur de notre méthode "Learning by doing".
            </p>
          </div>
        </div>
      </section>

      {/* Notre philosophie */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Notre philosophie" 
            subtitle="Experts dans nos domaines, experts dans la transmission"
            center
          />
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-700 mb-6">
              Chez ESED, nous croyons que la qualité d'une formation dépend avant tout de l'expertise et de la
              pédagogie du formateur. C'est pourquoi nous sélectionnons rigoureusement des professionnels
              expérimentés qui allient maîtrise technique, expérience terrain et talent pour la transmission.
            </p>
            
            <p className="text-gray-700">
              Tous nos formateurs partagent notre vision de l'apprentissage par la pratique et sont formés
              à notre méthodologie "Learning by doing". Ils actualisent constamment leurs connaissances
              pour vous offrir des contenus à la pointe et adaptés aux réalités du marché.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Nos formateurs experts" 
            subtitle="Une équipe de professionnels passionnés à votre service"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {teamMembers.map((member, index) => (
              <TeamMember 
                key={index}
                {...member}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Approche pédagogique */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Notre approche pédagogique" 
                subtitle="Une méthodologie éprouvée pour des résultats concrets"
              />
              
              <p className="text-gray-700 mb-6">
                Chaque formateur ESED est formé à notre méthodologie pédagogique unique, centrée sur la
                pratique et l'acquisition durable des compétences. Nous privilégions les mises en situation
                concrètes, les études de cas réels et les exercices pratiques directement applicables dans
                votre contexte professionnel.
              </p>
              
              <p className="text-gray-700 mb-6">
                Nos formateurs adaptent systématiquement le contenu des formations aux besoins spécifiques
                des participants, en tenant compte de leur secteur d'activité, de leur niveau d'expérience
                et de leurs objectifs professionnels.
              </p>
              
              <Link to="/notre-approche" className="btn-primary inline-block">
                Découvrir notre méthode
              </Link>
            </div>
            
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 text-esed-blue">Les 4 piliers de notre approche</h3>
              
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <div className="flex items-center mb-2">
                    <div className="bg-esed-orange text-white h-8 w-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-semibold">1</span>
                    </div>
                    <h4 className="font-semibold">Expertise métier</h4>
                  </div>
                  <p className="text-gray-700 pl-11">
                    Des formateurs qui pratiquent au quotidien ce qu'ils enseignent
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <div className="flex items-center mb-2">
                    <div className="bg-esed-orange text-white h-8 w-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-semibold">2</span>
                    </div>
                    <h4 className="font-semibold">Pédagogie active</h4>
                  </div>
                  <p className="text-gray-700 pl-11">
                    80% de pratique pour une assimilation durable des compétences
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <div className="flex items-center mb-2">
                    <div className="bg-esed-orange text-white h-8 w-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-semibold">3</span>
                    </div>
                    <h4 className="font-semibold">Personnalisation</h4>
                  </div>
                  <p className="text-gray-700 pl-11">
                    Contenus adaptés aux besoins spécifiques de chaque apprenant
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <div className="flex items-center mb-2">
                    <div className="bg-esed-orange text-white h-8 w-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-semibold">4</span>
                    </div>
                    <h4 className="font-semibold">Suivi post-formation</h4>
                  </div>
                  <p className="text-gray-700 pl-11">
                    Accompagnement pour faciliter la mise en œuvre des acquis
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Envie d'échanger avec nos experts ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nos formateurs sont disponibles pour discuter de vos besoins spécifiques et vous proposer des solutions sur mesure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-secondary">
              Prendre rendez-vous
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

export default Equipe;
