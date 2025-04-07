
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="container-custom pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-esed-blue">ESED - Formation professionnelle</h3>
            <p className="text-gray-600 mb-4">
              Organisme de formation professionnelle certifié Qualiopi proposant des formations innovantes 
              et orientées résultats avec notre méthode "Learning by doing".
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-esed-blue hover:text-esed-gold transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="text-esed-blue hover:text-esed-gold transition-colors">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-esed-blue">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/notre-approche" className="text-gray-600 hover:text-esed-gold transition-colors">
                  Notre approche
                </Link>
              </li>
              <li>
                <Link to="/catalogue" className="text-gray-600 hover:text-esed-gold transition-colors">
                  Catalogue des formations
                </Link>
              </li>
              <li>
                <Link to="/financement" className="text-gray-600 hover:text-esed-gold transition-colors">
                  Options de financement
                </Link>
              </li>
              <li>
                <Link to="/equipe" className="text-gray-600 hover:text-esed-gold transition-colors">
                  Notre équipe
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-esed-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Certifications */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-esed-blue">Certifications</h3>
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-white rounded-lg shadow-sm">
                <span className="text-lg font-bold text-gray-800">Qualiopi</span>
              </div>
            </div>
            <p className="text-gray-600">
              ESED - Formation professionnelle est certifiée Qualiopi, garantissant la qualité de nos processus et de nos formations.
            </p>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-esed-blue">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-esed-blue mt-0.5 mr-2" />
                <span className="text-gray-600">
                  <a href="mailto:brice@esed-ecole.com" className="hover:text-esed-gold transition-colors">brice@esed-ecole.com</a>
                  <br />
                  <a href="mailto:contact@esed.online" className="hover:text-esed-gold transition-colors">contact@esed.online</a>
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-esed-blue mt-0.5 mr-2" />
                <span className="text-gray-600">
                  <a href="tel:+33000000000" className="hover:text-esed-gold transition-colors">+33 (0)0 00 00 00 00</a>
                </span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-esed-blue mt-0.5 mr-2" />
                <span className="text-gray-600">
                  ESED - Formation professionnelle<br />
                  Paris, France
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} ESED - Formation professionnelle. Tous droits réservés.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/mentions-legales" className="text-gray-500 text-sm hover:text-esed-blue transition-colors">
                Mentions légales
              </Link>
              <Link to="/confidentialite" className="text-gray-500 text-sm hover:text-esed-blue transition-colors">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
