
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/ui/SectionTitle';
import CourseCard from '@/components/ui/CourseCard';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

// Données des formations
const formationsTransversales = [
  {
    title: "Sales Hacking et Cycle de Vente",
    description: "Maîtrisez les techniques avancées d'acquisition client et optimisez votre processus de vente de A à Z.",
    slug: "sales-hacking",
    category: "Commercial",
    duration: "2 jours (14h)",
    format: "Présentiel ou distanciel",
  },
  {
    title: "Manager Opérationnel",
    description: "Développez vos compétences managériales pour mieux accompagner et faire grandir votre équipe au quotidien.",
    slug: "manager-operationnel",
    category: "Management",
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
  {
    title: "Intelligence Émotionnelle et Productivité",
    description: "Développez votre intelligence émotionnelle pour améliorer vos relations professionnelles et votre efficacité.",
    slug: "intelligence-emotionnelle",
    category: "Développement personnel",
    duration: "2 jours (14h)",
    format: "Présentiel ou distanciel",
  },
  {
    title: "Marketing Digital",
    description: "Maîtrisez les fondamentaux du marketing digital pour améliorer votre présence en ligne et votre acquisition.",
    slug: "marketing-digital",
    category: "Marketing",
    duration: "2 jours (14h)",
    format: "Présentiel ou distanciel",
  },
  {
    title: "Meta Ads et Google Ads",
    description: "Optimisez vos campagnes publicitaires sur les principales plateformes pour maximiser votre ROI.",
    slug: "ads-optimization",
    category: "Marketing",
    duration: "2 jours (14h)",
    format: "Présentiel ou distanciel",
  },
];

const formationsHRC = [
  {
    title: "Sourcing et Recrutement",
    description: "Optimisez votre processus de recrutement et attirez les meilleurs talents dans le secteur de l'hôtellerie.",
    slug: "sourcing-recrutement",
    category: "RH",
    duration: "2 jours (14h)",
    format: "Présentiel ou distanciel",
  },
  {
    title: "L'Expérience Client",
    description: "Créez des expériences mémorables pour vos clients et augmentez votre taux de satisfaction et de fidélité.",
    slug: "experience-client",
    category: "Service client",
    duration: "2 jours (14h)",
    format: "Présentiel ou distanciel",
  },
  {
    title: "Revenue Management",
    description: "Optimisez votre stratégie tarifaire et maximisez vos revenus grâce aux techniques avancées de revenue management.",
    slug: "revenue-management",
    category: "Finance",
    duration: "2 jours (14h)",
    format: "Présentiel ou distanciel",
  },
  {
    title: "Marketing Digital pour HRC",
    description: "Développez une stratégie de marketing digital adaptée aux spécificités du secteur de l'hôtellerie et la restauration.",
    slug: "marketing-digital-hrc",
    category: "Marketing",
    duration: "2 jours (14h)",
    format: "Présentiel ou distanciel",
  },
  {
    title: "Leadership et Gestion de crise",
    description: "Développez votre leadership et apprenez à gérer efficacement les situations de crise dans votre établissement.",
    slug: "leadership-gestion-crise",
    category: "Management",
    duration: "2 jours (14h)",
    format: "Présentiel ou distanciel",
  },
  {
    title: "Gestion des Réseaux Sociaux pour HRC",
    description: "Optimisez votre présence sur les réseaux sociaux pour attirer et fidéliser une clientèle dans le secteur HRC.",
    slug: "reseaux-sociaux-hrc",
    category: "Marketing",
    duration: "2 jours (14h)",
    format: "Présentiel ou distanciel",
  },
];

const Catalogue = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  // Liste des catégories uniques
  const allFormations = [...formationsTransversales, ...formationsHRC];
  const categories = ['Toutes les catégories', ...new Set(allFormations.map(f => f.category))];
  
  // Filtrer les formations en fonction de la recherche et de la catégorie
  const filterFormations = (formations: typeof formationsTransversales) => {
    return formations.filter(formation => {
      const matchesSearch = formation.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            formation.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === '' || 
                              selectedCategory === 'Toutes les catégories' || 
                              formation.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  };
  
  const filteredTransversales = filterFormations(formationsTransversales);
  const filteredHRC = filterFormations(formationsHRC);
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-esed-blue to-[#1a65c9] text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">Catalogue des formations</h1>
            <p className="text-xl text-white/90 mb-8">
              Découvrez l'ensemble de nos formations professionnelles conçues pour développer les compétences clés de vos équipes.
            </p>
            
            {/* Barre de recherche */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-md text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="Rechercher une formation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filtres */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center">
              <span className="text-gray-700 font-medium mr-3">Filtrer par catégorie:</span>
              <select
                className="bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-esed-blue"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">Toutes les catégories</option>
                {categories.slice(1).map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="text-gray-700">
              {filteredTransversales.length + filteredHRC.length} formations trouvées
            </div>
          </div>
        </div>
      </section>

      {/* Formations Transversales */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Formations transversales et compétences essentielles" 
            subtitle="Développez les compétences clés nécessaires à la réussite dans tous les secteurs d'activité"
          />
          
          {filteredTransversales.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTransversales.map((formation, index) => (
                <CourseCard 
                  key={index}
                  {...formation}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-600">Aucune formation transversale ne correspond à vos critères de recherche.</p>
            </div>
          )}
        </div>
      </section>

      {/* Formations HRC */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Formations spécifiques HRC" 
            subtitle="Des formations adaptées aux besoins particuliers du secteur de l'Hôtellerie, Restauration et Café"
          />
          
          {filteredHRC.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredHRC.map((formation, index) => (
                <CourseCard 
                  key={index}
                  {...formation}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg">
              <p className="text-gray-600">Aucune formation HRC ne correspond à vos critères de recherche.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-esed-blue to-[#1a65c9] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Vous ne trouvez pas la formation adaptée à vos besoins ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nous pouvons créer une formation sur mesure pour répondre spécifiquement aux enjeux de votre entreprise.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-secondary">
              Demander une formation sur mesure
            </Link>
            <Link to="/financement" className="bg-white text-esed-blue hover:bg-opacity-90 transition-all px-6 py-3 rounded-md font-medium">
              Options de financement
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Catalogue;
