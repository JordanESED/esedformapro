
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ContactForm from '@/components/ui/ContactForm';
import { Calendar, Clock, Users, Monitor, Download, Check } from 'lucide-react';

// Données des formations (à remplacer par une vraie source de données)
const formationsData: Record<string, any> = {
  "sales-hacking": {
    title: "Sales Hacking et Cycle de Vente",
    category: "Commercial",
    duration: "2 jours (14h)",
    format: ["Présentiel", "Distanciel", "Hybride"],
    price: "1400€",
    objectifs: [
      "Maîtriser les techniques avancées d'acquisition client",
      "Optimiser chaque étape du cycle de vente",
      "Augmenter votre taux de conversion et votre efficacité commerciale",
      "Mettre en place un système de prospection efficace et automatisé"
    ],
    programme: [
      {
        jour: "Jour 1",
        modules: [
          {
            titre: "Fondamentaux du Sales Hacking",
            contenu: "Définition du Sales Hacking, principes fondamentaux, différence avec l'approche commerciale traditionnelle"
          },
          {
            titre: "Stratégie d'acquisition client",
            contenu: "Identification des cibles idéales, création de personas, analyse du parcours d'achat, positionnement stratégique"
          },
          {
            titre: "Techniques de prospection avancées",
            contenu: "Social selling, email automation, séquences de prospection, outils d'automatisation, tracking et analytics"
          },
        ]
      },
      {
        jour: "Jour 2",
        modules: [
          {
            titre: "Le cycle de vente optimisé",
            contenu: "Analyse des étapes clés, identification des points de friction, optimisation du pipeline commercial, réduction du cycle de vente"
          },
          {
            titre: "Techniques de négociation et closing",
            contenu: "Psychologie de la vente, gestion des objections, création d'urgence, techniques de closing adaptées"
          },
          {
            titre: "Mise en place d'un système de vente efficace",
            contenu: "Construction de votre propre système commercial, outils et automatisations, reporting et amélioration continue"
          },
        ]
      }
    ],
    methodesPedagogiques: [
      "Cas pratiques basés sur des situations réelles",
      "Mise en situation et jeux de rôle",
      "Templates et outils immédiatement utilisables",
      "Feedback personnalisé sur vos techniques commerciales",
      "Plan d'action concret à mettre en œuvre dès votre retour en entreprise"
    ],
    pourQui: "Commerciaux, business developers, entrepreneurs, directeurs commerciaux, responsables marketing"
  },
  "ia-generative": {
    title: "IA Générative et Prompt Engineering",
    category: "Innovation",
    duration: "2 jours (14h)",
    format: ["Présentiel", "Distanciel", "Hybride"],
    price: "1400€",
    objectifs: [
      "Comprendre le fonctionnement des IA génératives (GPT, DALL-E, Midjourney, etc.)",
      "Maîtriser l'art du prompt engineering pour obtenir les meilleurs résultats",
      "Identifier les cas d'usage pertinents pour votre activité professionnelle",
      "Mettre en place des workflows intégrant l'IA générative pour gagner en productivité"
    ],
    programme: [
      {
        jour: "Jour 1",
        modules: [
          {
            titre: "Introduction aux IA génératives",
            contenu: "Comprendre les fondamentaux, panorama des outils disponibles, forces et limites de chaque solution"
          },
          {
            titre: "L'art du prompt engineering",
            contenu: "Principes fondamentaux, structure d'un prompt efficace, techniques avancées, exemples concrets"
          },
          {
            titre: "Atelier pratique",
            contenu: "Exercices de rédaction de prompts, analyse des résultats, optimisation progressive"
          },
        ]
      },
      {
        jour: "Jour 2",
        modules: [
          {
            titre: "Applications professionnelles de l'IA générative",
            contenu: "Cas d'usage par département (marketing, commercial, RH, production, etc.), démonstrations, limites éthiques et légales"
          },
          {
            titre: "Création de workflows intégrant l'IA",
            contenu: "Identification des tâches automatisables, conception de processus optimisés, mesure de la performance et ROI"
          },
          {
            titre: "Projet d'intégration",
            contenu: "Travail sur un projet concret lié à votre contexte professionnel, implémentation d'une solution, plan d'action"
          },
        ]
      }
    ],
    methodesPedagogiques: [
      "Démonstrations en direct des différents outils d'IA",
      "Exercices pratiques adaptés à votre secteur d'activité",
      "Bibliothèque de prompts efficaces à réutiliser",
      "Construction d'un projet concret applicable dès le retour en entreprise",
      "Accès à une plateforme de ressources et de tutoriels post-formation"
    ],
    pourQui: "Professionnels de tous secteurs souhaitant intégrer l'IA générative dans leur quotidien, managers cherchant à optimiser les processus de leur équipe"
  }
};

const FormationDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Récupérer les données de la formation en fonction du slug
  const formation = formationsData[slug || ""] || {
    title: "Formation non trouvée",
    category: "",
    duration: "",
    format: [],
    price: "",
    objectifs: [],
    programme: [],
    methodesPedagogiques: [],
    pourQui: ""
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-esed-blue to-[#1a65c9] text-white py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="mb-4">
              <Link to="/catalogue" className="text-white/80 hover:text-white flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
                Retour au catalogue
              </Link>
            </div>
            <h1 className="heading-1 mb-4">{formation.title}</h1>
            
            <div className="flex flex-wrap gap-3 mb-6">
              {formation.category && (
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {formation.category}
                </span>
              )}
              
              {formation.duration && (
                <div className="inline-flex items-center bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                  <Clock className="h-3 w-3 mr-1" />
                  {formation.duration}
                </div>
              )}
            </div>
            
            <p className="text-xl text-white/90">
              Formation certifiante avec une approche 80% pratique basée sur notre méthode "Learning by doing".
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content - Formation Details */}
            <div className="lg:col-span-2">
              {/* Objectifs */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Objectifs pédagogiques</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="space-y-3">
                    {formation.objectifs.map((objectif: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <Check className="h-5 w-5 text-esed-orange" />
                        </div>
                        <p className="ml-3 text-gray-700">{objectif}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Programme */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Programme détaillé</h2>
                
                {formation.programme.map((jour: any, index: number) => (
                  <div key={index} className="mb-6">
                    <h3 className="text-xl font-semibold mb-3 text-esed-blue">{jour.jour}</h3>
                    
                    <div className="space-y-4">
                      {jour.modules.map((module: any, moduleIndex: number) => (
                        <div key={moduleIndex} className="bg-white border border-gray-200 p-4 rounded-lg">
                          <h4 className="font-medium text-lg mb-2">{module.titre}</h4>
                          <p className="text-gray-600">{module.contenu}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Méthodes pédagogiques */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Méthodes pédagogiques</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="space-y-3">
                    {formation.methodesPedagogiques.map((methode: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <Check className="h-5 w-5 text-esed-orange" />
                        </div>
                        <p className="ml-3 text-gray-700">{methode}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Pour qui */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Pour qui ?</h2>
                <p className="text-gray-700 bg-white border border-gray-200 p-6 rounded-lg">
                  {formation.pourQui}
                </p>
              </div>
            </div>
            
            {/* Right Sidebar - Info and Contact Form */}
            <div className="lg:col-span-1">
              {/* Informations pratiques */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 sticky top-24">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Informations pratiques</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Calendar className="h-5 w-5 text-esed-blue" />
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">Durée</p>
                      <p className="text-gray-600">{formation.duration}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Users className="h-5 w-5 text-esed-blue" />
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">Format</p>
                      <p className="text-gray-600">{Array.isArray(formation.format) ? formation.format.join(", ") : formation.format}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Monitor className="h-5 w-5 text-esed-blue" />
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">Tarif</p>
                      <p className="text-gray-600">{formation.price} HT par personne</p>
                      <p className="text-sm text-gray-500">Financement jusqu'à 100% possible</p>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Link to="/financement" className="text-esed-blue hover:text-esed-orange font-medium flex items-center">
                      En savoir plus sur le financement
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </Link>
                  </div>
                  
                  <div className="pt-2">
                    <button className="flex items-center text-esed-blue hover:text-esed-orange font-medium">
                      <Download className="h-4 w-4 mr-1" />
                      Télécharger la fiche (PDF)
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Demande d'information</h3>
                <p className="text-gray-600 mb-6">
                  Intéressé(e) par cette formation ? Contactez-nous pour plus d'informations ou pour vous inscrire.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-8 text-gray-800">Formations similaires</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Ajouter ici des cartes de formations similaires */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-esed-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Formez vos équipes avec ESED</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Découvrez toutes nos formations et trouvez celle qui correspond le mieux à vos besoins.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/catalogue" className="btn-secondary">
              Voir le catalogue complet
            </Link>
            <Link to="/contact" className="bg-white text-esed-blue hover:bg-opacity-90 transition-all px-6 py-3 rounded-md font-medium">
              Demander un devis personnalisé
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FormationDetail;
