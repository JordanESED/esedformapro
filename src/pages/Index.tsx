
import React from 'react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/ui/SectionTitle';
import StatsCard from '@/components/ui/StatsCard';
import TestimonialCard from '@/components/ui/TestimonialCard';
import CourseCard from '@/components/ui/CourseCard';
import { ArrowRight, Users, Award, ThumbsUp, Target, Book, Lightbulb, Heart, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  // Données pour les statistiques
  const stats = [
    { value: '400+', label: 'Salariés formés', icon: <Users className="h-8 w-8 mx-auto" /> },
    { value: '150+', label: 'Formations délivrées', icon: <Book className="h-8 w-8 mx-auto" /> },
    { value: '95%', label: 'Satisfaction client', icon: <ThumbsUp className="h-8 w-8 mx-auto" /> },
  ];

  // Données pour les témoignages
  const testimonials = [
    {
      quote: "La formation 'Sales Hacking' a transformé notre approche commerciale. Les techniques concrètes nous ont permis d'augmenter nos conversions de 30% dès le premier mois.",
      name: "Marie Laurent",
      role: "Directrice Commerciale",
      company: "TechSolutions SAS",
    },
    {
      quote: "L'approche 'Learning by doing' d'ESED est exactement ce dont notre équipe avait besoin. Des cas pratiques adaptés à notre secteur et des formateurs experts.",
      name: "Thomas Durand",
      role: "Responsable Formation",
      company: "Hôtel Grand Palace",
    },
    {
      quote: "La formation 'IA Générative et Prompt Engineering' a été révélatrice pour notre équipe marketing. Contenu actualisé et directement applicable.",
      name: "Sophie Martin",
      role: "CMO",
      company: "DigitalNow",
    },
  ];

  // Données pour les formations phares
  const featuredCourses = [
    {
      title: "Sales Hacking et Cycle de Vente",
      description: "Maîtrisez les techniques avancées d'acquisition client et optimisez votre processus de vente de A à Z.",
      slug: "sales-hacking",
      category: "Compétences commerciales",
      duration: "2 jours (14h)",
      format: "Présentiel ou distanciel",
    },
    {
      title: "Intelligence Émotionnelle et Productivité",
      description: "Développez votre intelligence émotionnelle pour améliorer vos relations professionnelles et votre efficacité.",
      slug: "intelligence-emotionnelle",
      category: "Développement personnel",
      duration: "2 jours (14h)",
      format: "Présentiel ou distanciel",
    },
    {
      title: "IA Générative et Prompt Engineering",
      description: "Exploitez tout le potentiel des IA génératives dans votre contexte professionnel pour gagner en productivité.",
      slug: "ia-generative",
      category: "Innovation",
      duration: "2 jours (14h)",
      format: "Présentiel ou distanciel",
    },
  ];

  const ikigai = [
    { title: "Impact", description: "Transformer positivement la vie professionnelle de nos apprenants", icon: <Target className="h-8 w-8 mx-auto" /> },
    { title: "Innovation", description: "Proposer des formations à la pointe des dernières avancées technologiques", icon: <Lightbulb className="h-8 w-8 mx-auto" /> },
    { title: "Excellence", description: "Maintenir un niveau d'exigence et de qualité irréprochable", icon: <Award className="h-8 w-8 mx-auto" /> },
    { title: "Passion", description: "Partager notre enthousiasme et expertise pour chaque domaine enseigné", icon: <Heart className="h-8 w-8 mx-auto" /> },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-esed-blue to-[#1a65c9] text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Formations professionnelles orientées résultats
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Développez les compétences clés de vos équipes grâce à notre méthode "Learning by doing"
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/catalogue" className="btn-secondary">
                  Découvrir nos formations
                </Link>
                <Link to="/contact" className="bg-white text-esed-blue hover:bg-opacity-90 transition-all px-6 py-3 rounded-md font-medium">
                  Demander un devis
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-esed-orange h-10 w-10 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84 51.39 51.39 0 0 0-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Certifié Qualiopi</h3>
                    <p className="text-sm text-white/80">Formation éligible au financement</p>
                  </div>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="bg-white/20 h-8 w-8 rounded-full flex items-center justify-center mr-3">
                      <Clock className="h-4 w-4" />
                    </div>
                    <span>Formation intensive : 14h sur 2 jours</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-white/20 h-8 w-8 rounded-full flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                      </svg>
                    </div>
                    <span>Formation progressive : 3h/semaine sur 1 mois</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-white/20 h-8 w-8 rounded-full flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                      </svg>
                    </div>
                    <span>Sessions individuelles ou collectives</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ikigaï Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Notre IKIGAÏ" 
            subtitle="Découvrez ce qui nous anime et guide notre vision de la formation professionnelle"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ikigai.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-esed-blue mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/notre-approche" className="inline-flex items-center text-esed-blue font-medium hover:text-esed-orange transition-colors">
              En savoir plus sur notre approche
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="ESED en chiffres" 
            subtitle="Des résultats concrets qui témoignent de notre engagement pour la qualité"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <StatsCard 
                key={index}
                value={stat.value}
                label={stat.label}
                icon={stat.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Nos formations phares" 
            subtitle="Découvrez nos formations les plus populaires, conçues pour répondre aux besoins actuels des entreprises"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <CourseCard 
                key={index}
                {...course}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/catalogue" className="btn-primary">
              Voir toutes nos formations
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Ce que nos clients disent" 
            subtitle="Découvrez les retours d'expérience de professionnels ayant suivi nos formations"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                {...testimonial}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-esed-blue to-[#1a65c9] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à développer les compétences de vos équipes ?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins en formation et obtenir un devis personnalisé.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-secondary">
              Demander un devis gratuit
            </Link>
            <Link to="/catalogue" className="bg-white text-esed-blue hover:bg-opacity-90 transition-all px-6 py-3 rounded-md font-medium">
              Explorer nos formations
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
