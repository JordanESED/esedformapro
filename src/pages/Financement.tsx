import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/ui/SectionTitle';
import { Check, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ContactForm from '@/components/ui/ContactForm';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
const Financement = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formComplete, setFormComplete] = useState(false);
  const {
    toast
  } = useToast();
  const form = useForm({
    defaultValues: {
      companySize: "",
      companyType: "",
      trainingType: "",
      trainingDuration: ""
    }
  });
  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      setFormComplete(true);
      toast({
        title: "Éligibilité confirmée !",
        description: "Félicitations, vous êtes éligible à un financement."
      });
    }
  };
  return <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-esed-blue to-[#1a65c9] text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">Solutions de financement</h1>
            <p className="text-xl text-white/90 mb-8">
              Grâce à notre certification Qualiopi, nos formations sont éligibles à de nombreux dispositifs de financement, pouvant couvrir jusqu'à 100% des frais.
            </p>
          </div>
        </div>
      </section>

      {/* Gamified Eligibility Form */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle title="Évaluez votre éligibilité au financement" subtitle="Découvrez en quelques clics les options de financement adaptées à votre situation" center />
          
          <div className="max-w-2xl mx-auto mt-12 bg-gray-50 rounded-lg p-8 shadow-sm">
            {!formComplete ? <div>
                {/* Progress indicator */}
                <div className="mb-8">
                  <div className="flex justify-between mb-2">
                    {Array.from({
                  length: 4
                }).map((_, index) => <div key={index} className={`h-3 w-3 rounded-full ${index < currentStep ? 'bg-esed-blue' : 'bg-gray-300'}`} />)}
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-esed-blue rounded-full transition-all duration-500" style={{
                  width: `${currentStep * 25}%`
                }} />
                  </div>
                  <p className="text-center text-gray-500 mt-2 text-sm">Étape {currentStep} sur 4</p>
                </div>

                {/* Step 1: Company Size */}
                {currentStep === 1 && <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-gray-800 text-center">Taille de votre entreprise</h3>
                    <p className="text-center text-gray-600">Sélectionnez le nombre de salariés dans votre entreprise</p>
                    
                    <Form {...form}>
                      <form className="space-y-6">
                        <FormField control={form.control} name="companySize" render={({
                    field
                  }) => <FormItem className="space-y-3">
                              <FormControl>
                                <RadioGroup onValueChange={value => {
                        field.onChange(value);
                        setTimeout(handleNextStep, 500);
                      }} className="space-y-3">
                                  <div className="flex items-center space-x-2 bg-white p-4 rounded border border-gray-200 hover:border-esed-blue transition-all cursor-pointer">
                                    <RadioGroupItem value="less-than-50" id="r1" />
                                    <FormLabel htmlFor="r1" className="cursor-pointer w-full">Moins de 50 salariés</FormLabel>
                                  </div>
                                  <div className="flex items-center space-x-2 bg-white p-4 rounded border border-gray-200 hover:border-esed-blue transition-all cursor-pointer">
                                    <RadioGroupItem value="50-to-250" id="r2" />
                                    <FormLabel htmlFor="r2" className="cursor-pointer w-full">Entre 50 et 250 salariés</FormLabel>
                                  </div>
                                  <div className="flex items-center space-x-2 bg-white p-4 rounded border border-gray-200 hover:border-esed-blue transition-all cursor-pointer">
                                    <RadioGroupItem value="more-than-250" id="r3" />
                                    <FormLabel htmlFor="r3" className="cursor-pointer w-full">Plus de 250 salariés</FormLabel>
                                  </div>
                                </RadioGroup>
                              </FormControl>
                            </FormItem>} />
                      </form>
                    </Form>
                  </div>}

                {/* Step 2: Company Type */}
                {currentStep === 2 && <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-gray-800 text-center">Type d'entreprise</h3>
                    <p className="text-center text-gray-600">Sélectionnez le type de votre entreprise</p>
                    
                    <Form {...form}>
                      <form className="space-y-6">
                        <FormField control={form.control} name="companyType" render={({
                    field
                  }) => <FormItem className="space-y-3">
                              <FormControl>
                                <RadioGroup onValueChange={value => {
                        field.onChange(value);
                        setTimeout(handleNextStep, 500);
                      }} className="space-y-3">
                                  <div className="flex items-center space-x-2 bg-white p-4 rounded border border-gray-200 hover:border-esed-blue transition-all cursor-pointer">
                                    <RadioGroupItem value="sarl" id="t1" />
                                    <FormLabel htmlFor="t1" className="cursor-pointer w-full">SARL / EURL</FormLabel>
                                  </div>
                                  <div className="flex items-center space-x-2 bg-white p-4 rounded border border-gray-200 hover:border-esed-blue transition-all cursor-pointer">
                                    <RadioGroupItem value="sas" id="t2" />
                                    <FormLabel htmlFor="t2" className="cursor-pointer w-full">SAS / SASU</FormLabel>
                                  </div>
                                  <div className="flex items-center space-x-2 bg-white p-4 rounded border border-gray-200 hover:border-esed-blue transition-all cursor-pointer">
                                    <RadioGroupItem value="association" id="t3" />
                                    <FormLabel htmlFor="t3" className="cursor-pointer w-full">Association</FormLabel>
                                  </div>
                                  <div className="flex items-center space-x-2 bg-white p-4 rounded border border-gray-200 hover:border-esed-blue transition-all cursor-pointer">
                                    <RadioGroupItem value="public" id="t4" />
                                    <FormLabel htmlFor="t4" className="cursor-pointer w-full">Organisme public</FormLabel>
                                  </div>
                                </RadioGroup>
                              </FormControl>
                            </FormItem>} />
                      </form>
                    </Form>
                  </div>}

                {/* Step 3: Training Type */}
                {currentStep === 3 && <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-gray-800 text-center">Type de formation</h3>
                    <p className="text-center text-gray-600">Quel type de formation vous intéresse ?</p>
                    
                    <Form {...form}>
                      <form className="space-y-6">
                        <FormField control={form.control} name="trainingType" render={({
                    field
                  }) => <FormItem className="space-y-3">
                              <FormControl>
                                <RadioGroup onValueChange={value => {
                        field.onChange(value);
                        setTimeout(handleNextStep, 500);
                      }} className="space-y-3">
                                  <div className="flex items-center space-x-2 bg-white p-4 rounded border border-gray-200 hover:border-esed-blue transition-all cursor-pointer">
                                    <RadioGroupItem value="management" id="f1" />
                                    <FormLabel htmlFor="f1" className="cursor-pointer w-full">Management</FormLabel>
                                  </div>
                                  <div className="flex items-center space-x-2 bg-white p-4 rounded border border-gray-200 hover:border-esed-blue transition-all cursor-pointer">
                                    <RadioGroupItem value="commercial" id="f2" />
                                    <FormLabel htmlFor="f2" className="cursor-pointer w-full">Commercial / Vente</FormLabel>
                                  </div>
                                  <div className="flex items-center space-x-2 bg-white p-4 rounded border border-gray-200 hover:border-esed-blue transition-all cursor-pointer">
                                    <RadioGroupItem value="digital" id="f3" />
                                    <FormLabel htmlFor="f3" className="cursor-pointer w-full">Digital / Informatique</FormLabel>
                                  </div>
                                  <div className="flex items-center space-x-2 bg-white p-4 rounded border border-gray-200 hover:border-esed-blue transition-all cursor-pointer">
                                    <RadioGroupItem value="other" id="f4" />
                                    <FormLabel htmlFor="f4" className="cursor-pointer w-full">Autre</FormLabel>
                                  </div>
                                </RadioGroup>
                              </FormControl>
                            </FormItem>} />
                      </form>
                    </Form>
                  </div>}

                {/* Step 4: Training Duration */}
                {currentStep === 4 && <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-gray-800 text-center">Durée de formation</h3>
                    <p className="text-center text-gray-600">Quelle durée de formation envisagez-vous ?</p>
                    
                    <Form {...form}>
                      <form className="space-y-6">
                        <FormField control={form.control} name="trainingDuration" render={({
                    field
                  }) => <FormItem className="space-y-3">
                              <FormControl>
                                <RadioGroup onValueChange={value => {
                        field.onChange(value);
                        setTimeout(handleNextStep, 500);
                      }} className="space-y-3">
                                  <div className="flex items-center space-x-2 bg-white p-4 rounded border border-gray-200 hover:border-esed-blue transition-all cursor-pointer">
                                    <RadioGroupItem value="1-2-days" id="d1" />
                                    <FormLabel htmlFor="d1" className="cursor-pointer w-full">1-2 jours</FormLabel>
                                  </div>
                                  <div className="flex items-center space-x-2 bg-white p-4 rounded border border-gray-200 hover:border-esed-blue transition-all cursor-pointer">
                                    <RadioGroupItem value="3-5-days" id="d2" />
                                    <FormLabel htmlFor="d2" className="cursor-pointer w-full">3-5 jours</FormLabel>
                                  </div>
                                  <div className="flex items-center space-x-2 bg-white p-4 rounded border border-gray-200 hover:border-esed-blue transition-all cursor-pointer">
                                    <RadioGroupItem value="more-than-week" id="d3" />
                                    <FormLabel htmlFor="d3" className="cursor-pointer w-full">Plus d'une semaine</FormLabel>
                                  </div>
                                  <div className="flex items-center space-x-2 bg-white p-4 rounded border border-gray-200 hover:border-esed-blue transition-all cursor-pointer">
                                    <RadioGroupItem value="not-sure" id="d4" />
                                    <FormLabel htmlFor="d4" className="cursor-pointer w-full">Je ne sais pas encore</FormLabel>
                                  </div>
                                </RadioGroup>
                              </FormControl>
                            </FormItem>} />
                      </form>
                    </Form>
                  </div>}
                
                <div className="mt-8 flex justify-center">
                  <Button onClick={handleNextStep} className="bg-esed-blue hover:bg-esed-blue/90 text-white flex items-center gap-2">
                    {currentStep < 4 ? "Suivant" : "Vérifier mon éligibilité"} <ArrowRight size={16} />
                  </Button>
                </div>
              </div> : <div className="text-center py-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Félicitations !</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Vous êtes éligible à un financement pour votre formation.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg mb-8 max-w-md mx-auto">
                  <p className="text-gray-800">
                    Prenez contact dès aujourd'hui avec notre conseiller pour connaître les modalités précises :
                  </p>
                  <a href="mailto:brice@esed-ecole.com" className="text-esed-blue font-medium text-lg hover:underline">
                    brice@esed-ecole.com
                  </a>
                </div>
                <div className="flex justify-center gap-4 flex-wrap">
                  <Link to="/contact" className="btn-primary">
                    Nous contacter
                  </Link>
                  <Button onClick={() => {
                setFormComplete(false);
                setCurrentStep(1);
                form.reset();
              }} variant="outline" className="border-esed-blue text-esed-blue hover:bg-esed-blue hover:text-white">
                    Recommencer le test
                  </Button>
                </div>
              </div>}
          </div>
        </div>
      </section>

      {/* Certification Qualiopi */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle title="Notre certification Qualiopi" subtitle="Un gage de qualité pour vos financeurs" />
              
              <p className="text-gray-700 mb-6">
                La certification Qualiopi est une reconnaissance délivrée par l'État attestant de la qualité du processus 
                mis en œuvre par les organismes de formation. Cette certification est obligatoire pour tous les prestataires 
                d'actions concourant au développement des compétences souhaitant accéder à des fonds publics ou mutualisés.
              </p>
              
              <p className="text-gray-700 mb-6">
                En choisissant ESED, organisme certifié Qualiopi, vous avez l'assurance d'une formation de qualité répondant 
                aux exigences des financeurs, ce qui facilite grandement vos démarches de prise en charge.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-esed-orange" />
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-medium">Garantie de qualité</span> : Processus pédagogiques évalués et validés
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-esed-orange" />
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-medium">Éligibilité aux financements</span> : Accès facilité aux fonds publics et mutualisés
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-esed-orange" />
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-medium">Suivi rigoureux</span> : Processus d'amélioration continue de nos formations
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 p-8 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="p-6 bg-white rounded-lg shadow-sm inline-block mb-4">
                  <span className="text-3xl font-bold text-esed-blue">Qualiopi</span>
                </div>
                <p className="text-gray-600">ESED est certifié Qualiopi au titre de la catégorie "Actions de formation" et "Actions de formation par Apprentissage"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Options de financement */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionTitle title="Options de financement" subtitle="Découvrez les différentes solutions pour financer vos formations" center />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* OPCO */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-esed-blue">OPCO</h3>
              <p className="text-gray-700 mb-6">
                Les Opérateurs de Compétences (OPCO) peuvent prendre en charge tout ou partie des coûts de formation 
                selon votre branche professionnelle et la taille de votre entreprise.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-esed-orange mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Financement selon conventions collectives</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-esed-orange mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Démarches simplifiées via notre plateforme</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-esed-orange mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Possibilité de subrogation de paiement</span>
                </li>
              </ul>
              <p className="text-sm text-gray-500 italic">
                * Les montants de prise en charge varient selon votre OPCO et la taille de votre entreprise.
              </p>
            </div>
            
            {/* Pro-A */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-esed-blue">Pro-A</h3>
              <p className="text-gray-700 mb-6">
                Le dispositif de reconversion ou promotion par alternance permet aux salariés de changer de métier ou de 
                bénéficier d'une promotion sociale ou professionnelle tout en restant dans l'entreprise.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-esed-orange mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Formation en alternance avec votre activité</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-esed-orange mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Maintien du salaire pendant la formation</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-esed-orange mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Idéal pour les formations progressives</span>
                </li>
              </ul>
              <p className="text-sm text-gray-500 italic">
                * Conditions d'éligibilité spécifiques selon accord de branche.
              </p>
            </div>
            
            {/* FNE-Formation */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-esed-blue">FNE-Formation</h3>
              <p className="text-gray-700 mb-6">
                Le Fonds National de l'Emploi permet de financer les formations des salariés en activité partielle 
                ou en difficulté économique liée à la crise.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-esed-orange mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Prise en charge jusqu'à 100% des coûts</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-esed-orange mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Accessible aux entreprises en difficulté</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-esed-orange mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Processus de demande simplifié</span>
                </li>
              </ul>
              <p className="text-sm text-gray-500 italic">
                * Dispositif soumis à conditions et acceptation de votre dossier.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-6">
              Vous avez des questions sur les options de financement adaptées à votre situation ?
              Notre équipe vous accompagne dans toutes vos démarches.
            </p>
            <Link to="/contact" className="btn-primary">
              Contactez-nous pour un accompagnement
            </Link>
          </div>
        </div>
      </section>

      {/* Processus de financement */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle title="Processus de demande de financement" subtitle="Un accompagnement pas à pas pour faciliter vos démarches" />
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Ligne verticale */}
              <div className="absolute left-9 top-8 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>
              
              {/* Étapes */}
              <div className="space-y-12">
                {/* Étape 1 */}
                <div className="flex flex-col md:flex-row">
                  <div className="flex-shrink-0 flex items-center justify-center mb-4 md:mb-0">
                    <div className="w-20 h-20 rounded-full bg-esed-blue text-white flex items-center justify-center text-2xl font-bold z-10 relative">
                      1
                    </div>
                  </div>
                  <div className="md:ml-8">
                    <h3 className="text-xl font-semibold mb-2">Analyse de votre situation</h3>
                    <p className="text-gray-700">
                      Nous identifions ensemble les dispositifs de financement adaptés à votre profil (taille 
                      d'entreprise, secteur d'activité, objectifs de formation).
                    </p>
                  </div>
                </div>
                
                {/* Étape 2 */}
                <div className="flex flex-col md:flex-row">
                  <div className="flex-shrink-0 flex items-center justify-center mb-4 md:mb-0">
                    <div className="w-20 h-20 rounded-full bg-esed-blue text-white flex items-center justify-center text-2xl font-bold z-10 relative">
                      2
                    </div>
                  </div>
                  <div className="md:ml-8">
                    <h3 className="text-xl font-semibold mb-2">Élaboration du dossier</h3>
                    <p className="text-gray-700">
                      Nous vous aidons à constituer votre dossier de demande de financement avec tous les 
                      documents nécessaires (programme détaillé, devis, convention de formation).
                    </p>
                  </div>
                </div>
                
                {/* Étape 3 */}
                <div className="flex flex-col md:flex-row">
                  <div className="flex-shrink-0 flex items-center justify-center mb-4 md:mb-0">
                    <div className="w-20 h-20 rounded-full bg-esed-blue text-white flex items-center justify-center text-2xl font-bold z-10 relative">
                      3
                    </div>
                  </div>
                  <div className="md:ml-8">
                    <h3 className="text-xl font-semibold mb-2">Dépôt et suivi de la demande</h3>
                    <p className="text-gray-700">
                      Nous vous accompagnons dans le dépôt de votre dossier auprès de votre OPCO ou autre 
                      financeur, puis assurons un suivi régulier jusqu'à l'obtention de l'accord.
                    </p>
                  </div>
                </div>
                
                {/* Étape 4 */}
                <div className="flex flex-col md:flex-row">
                  <div className="flex-shrink-0 flex items-center justify-center mb-4 md:mb-0">
                    <div className="w-20 h-20 rounded-full bg-esed-blue text-white flex items-center justify-center text-2xl font-bold z-10 relative">
                      4
                    </div>
                  </div>
                  <div className="md:ml-8">
                    <h3 className="text-xl font-semibold mb-2">Formation et gestion administrative</h3>
                    <p className="text-gray-700">
                      Une fois l'accord obtenu, nous nous occupons de toute la gestion administrative liée au 
                      financement pendant et après la formation (émargements, facturation, bilan).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionTitle title="Questions fréquentes" subtitle="Retrouvez les réponses aux questions les plus courantes sur le financement" center />
          
          <div className="max-w-3xl mx-auto mt-8">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">Comment savoir si ma formation est éligible à un financement ?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2">
                  <p className="text-gray-700">
                    Toutes nos formations sont éligibles aux financements grâce à notre certification Qualiopi. 
                    Cependant, le montant de la prise en charge peut varier selon votre OPCO, la taille de votre 
                    entreprise et le type de formation. Nous analysons votre situation pour vous indiquer 
                    précisément les possibilités de financement.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">Quel est le délai pour obtenir un financement ?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2">
                  <p className="text-gray-700">
                    Les délais varient selon les organismes financeurs. En général, il faut compter entre 2 et 8 semaines 
                    pour obtenir un accord de financement. Nous vous recommandons d'anticiper vos demandes au moins 
                    1 mois avant le début de la formation. Pour certaines formations urgentes, nous pouvons mettre 
                    en place des solutions accélérées.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">Est-il possible de financer à 100% une formation ?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2">
                  <p className="text-gray-700">
                    Oui, dans de nombreux cas, un financement à 100% est possible, notamment via les OPCO pour les 
                    petites entreprises ou certains dispositifs spécifiques comme le FNE-Formation. Le montant pris 
                    en charge dépend de plusieurs critères comme la taille de l'entreprise, son secteur d'activité, 
                    et parfois la thématique de formation. Nous vous aidons à maximiser votre prise en charge.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">Que se passe-t-il si le financement est refusé ?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2">
                  <p className="text-gray-700">
                    En cas de refus, nous analysons les raisons et vous proposons des alternatives : 
                    redéposer un dossier modifié, explorer d'autres dispositifs de financement, ou 
                    adapter le format de la formation pour correspondre aux critères du financeur. 
                    Notre objectif est de trouver une solution adaptée à chaque situation.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium">Dois-je avancer les frais de formation ?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2">
                  <p className="text-gray-700">
                    Dans de nombreux cas, nous pouvons mettre en place un système de subrogation de 
                    paiement avec votre OPCO, ce qui signifie que vous n'avez pas à avancer les frais. 
                    Pour les autres dispositifs, les modalités varient. Nous vous expliquons clairement 
                    les conditions avant votre inscription et pouvons proposer des facilités de paiement 
                    si nécessaire.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle title="Besoin d'aide pour votre financement ?" subtitle="Notre équipe vous accompagne dans toutes vos démarches" />
              
              <p className="text-gray-700 mb-6">
                Comprendre les mécanismes de financement de la formation professionnelle peut être complexe. 
                C'est pourquoi notre équipe est à votre disposition pour vous guider à chaque étape du processus.
              </p>
              
              <p className="text-gray-700 mb-6">
                Contactez-nous pour bénéficier d'un accompagnement personnalisé et maximiser vos chances 
                d'obtenir un financement adapté à votre situation.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-esed-orange" />
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-medium">Analyse personnalisée</span> de votre situation et vos besoins
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-esed-orange" />
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-medium">Accompagnement administratif</span> tout au long du processus
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-esed-orange" />
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-medium">Suivi régulier</span> de votre demande de financement
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-6 text-gray-800">Contactez-nous</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Financement;