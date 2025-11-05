import { useState } from 'react';

export default function QuoteRequestForm() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    adresse: '',
    ville: '',
    codePostal: '',
    telephone: '',
    email: '',
    projet: '',
    typeToiture: '',
    isolerToiture: '',
    creditImpot: '',
    periode: '',
    description: '',
    disponibilites: [],
    horaires: [],
    connaissance: []
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e, field) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...prev[field], value]
        : prev[field].filter(item => item !== value)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await fetch('/api/send-quote-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSuccessMessage('✓ Votre demande a été envoyée avec succès ! Nous vous contacterons bientôt.');
        setFormData({
          nom: '',
          prenom: '',
          adresse: '',
          ville: '',
          codePostal: '',
          telephone: '',
          email: '',
          projet: '',
          typeToiture: '',
          isolerToiture: '',
          creditImpot: '',
          periode: '',
          description: '',
          disponibilites: [],
          horaires: [],
          connaissance: []
        });
      } else {
        setErrorMessage(`✗ Erreur: ${data.message}`);
      }
    } catch (error) {
      setErrorMessage('✗ Erreur de connexion au serveur. Vérifiez que le backend est en cours d\'exécution.');
      console.error('Erreur:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-72 overflow-hidden">
        <img 
          src="/back.png"
          alt="Qui Sommes-Nous"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0565C4]/80"></div>
        
        <div className="relative h-full flex items-center justify-center lg:mt-12 px-4">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Demander un devis
            </h1>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Demande de RDV pour un devis gratuit
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Ce formulaire a pour but de préparer efficacement notre RDV ensemble. Ces informations restent confidentielles au sein de l'entreprise Tf Couverture, et ne seront en aucun cas divulguées. Dès réception de votre demande, nous vous contacterons dans les plus brefs délais pour vous proposer un RDV.
          </p>

          {/* Messages de succès/erreur */}
          {successMessage && (
            <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nom */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Nom</label>
              <input
                required
                type="text"
                name="nom"
                placeholder="Votre nom"
                value={formData.nom}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0565C4] focus:border-transparent outline-none"
              />
            </div>

            {/* Prénom */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Prénom</label>
              <input
                required
                type="text"
                name="prenom"
                placeholder="Votre prénom"
                value={formData.prenom}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0565C4] focus:border-transparent outline-none"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Adresse</label>
              <input
                required
                type="text"
                name="adresse"
                placeholder="Adresse"
                value={formData.adresse}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0565C4] focus:border-transparent outline-none mb-3"
              />
              <input
                required
                type="text"
                name="ville"
                placeholder="Ville"
                value={formData.ville}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0565C4] focus:border-transparent outline-none mb-3"
              />
              <input
                required
                type="text"
                name="codePostal"
                placeholder="Code Postal"
                value={formData.codePostal}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0565C4] focus:border-transparent outline-none"
              />
            </div>

            {/* Téléphone */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Numéro de téléphone</label>
              <input
                required
                type="tel"
                name="telephone"
                placeholder="Numéro de téléphone"
                value={formData.telephone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0565C4] focus:border-transparent outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Adresse mail</label>
              <input
                required
                type="email"
                name="email"
                placeholder="Adresse mail"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0565C4] focus:border-transparent outline-none"
              />
            </div>

            {/* Projet */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Projet</label>
              <select
                required
                name="projet"
                value={formData.projet}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0565C4] focus:border-transparent outline-none"
              >
                <option value="">Choisissez votre projet</option>
                <option value="renovation">Rénovation de toiture</option>
                <option value="isolation">Isolation</option>
                <option value="charpente">Charpente</option>
                <option value="fenetre">Fenêtre de toit</option>
                <option value="demoussage">Démoussage</option>
              </select>
            </div>

            {/* Type de toiture */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Type de toiture</label>
              <select
                required
                name="typeToiture"
                value={formData.typeToiture}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0565C4] focus:border-transparent outline-none"
              >
                <option value="">Choisissez votre type de toiture</option>
                <option value="tuile">Tuile</option>
                <option value="ardoise">Ardoise</option>
                <option value="zinc">Zinc</option>
                <option value="bac-acier">Bac acier</option>
                <option value="shingle">Shingle</option>
              </select>
            </div>

            {/* Isolation */}
            <div>
              <label className="block text-gray-700 font-medium mb-3">
                Souhaitez-vous isoler ou ré-isoler votre toiture?
              </label>
              <div className="space-y-2">
                <label className="flex items-center cursor-pointer">
                  <input
                    required
                    type="radio"
                    name="isolerToiture"
                    value="oui"
                    checked={formData.isolerToiture === 'oui'}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-[#0565C4]"
                  />
                  <span className="ml-2 text-gray-700">Oui</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    required
                    type="radio"
                    name="isolerToiture"
                    value="non"
                    checked={formData.isolerToiture === 'non'}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-[#0565C4]"
                  />
                  <span className="ml-2 text-gray-700">Non</span>
                </label>
              </div>
            </div>

            {/* Crédit d'impôt */}
            <div>
              <label className="block text-gray-700 font-medium mb-3">
                Souhaitez-vous bénéficier du crédit d'impôt?
              </label>
              <div className="space-y-2">
                <label className="flex items-center cursor-pointer">
                  <input
                    required
                    type="radio"
                    name="creditImpot"
                    value="oui"
                    checked={formData.creditImpot === 'oui'}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-[#0565C4]"
                  />
                  <span className="ml-2 text-gray-700">Oui</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    required
                    type="radio"
                    name="creditImpot"
                    value="non"
                    checked={formData.creditImpot === 'non'}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-[#0565C4]"
                  />
                  <span className="ml-2 text-gray-700">Non</span>
                </label>
              </div>
            </div>

            {/* Période */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                A quelle période souhaitez-vous que les travaux commencent?
              </label>
              <input
                required
                type="text"
                name="periode"
                placeholder="Ex: Janvier 2024"
                value={formData.periode}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0565C4] focus:border-transparent outline-none"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Décrivez en quelques mots votre demande/projet
              </label>
              <textarea
                required
                name="description"
                placeholder="Votre projet"
                value={formData.description}
                onChange={handleInputChange}
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0565C4] focus:border-transparent outline-none resize-none"
              ></textarea>
            </div>

            {/* Disponibilités */}
            <div>
              <label className="block text-gray-700 font-medium mb-3">
                Créneaux de disponibilités pour notre RDV
              </label>
              <div className="space-y-2">
                {['mardi', 'mercredi', 'jeudi'].map((jour) => (
                  <label key={jour} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value={jour}
                      checked={formData.disponibilites.includes(jour)}
                      onChange={(e) => handleCheckboxChange(e, 'disponibilites')}
                      className="w-4 h-4 text-[#0565C4] rounded"
                    />
                    <span className="ml-2 text-gray-700 capitalize">
                      {jour === 'jeudi' ? 'Jeudi (à partir de 10h00)' : jour.charAt(0).toUpperCase() + jour.slice(1)}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Horaires */}
            <div>
              <label className="block text-gray-700 font-medium mb-3">
                Créneaux horaire pour le jour du RDV
              </label>
              <div className="space-y-2">
                {['7h00-10h00', '10h00-13h00', '13h00-16h30'].map((horaire) => (
                  <label key={horaire} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value={horaire}
                      checked={formData.horaires.includes(horaire)}
                      onChange={(e) => handleCheckboxChange(e, 'horaires')}
                      className="w-4 h-4 text-[#0565C4] rounded"
                    />
                    <span className="ml-2 text-gray-700">{horaire.replace('-', ' - ')}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Comment avez-vous connu */}
            <div>
              <label className="block text-gray-700 font-medium mb-3">
                Comment avez-vous connu la société Tf Couverture?
              </label>
              <div className="space-y-2">
                {[
                  { value: 'google', label: 'Moteur de recherche Google' },
                  { value: 'pages-jaunes', label: 'Site Pages Jaunes' },
                  { value: 'annuaire', label: 'Annuaire' },
                  { value: 'bouche-a-oreille', label: 'Bouche-à-oreille' },
                  { value: 'autre', label: 'Autre' }
                ].map((option) => (
                  <label key={option.value} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value={option.value}
                      checked={formData.connaissance.includes(option.value)}
                      onChange={(e) => handleCheckboxChange(e, 'connaissance')}
                      className="w-4 h-4 text-[#0565C4] rounded"
                    />
                    <span className="ml-2 text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Bouton Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full ${loading ? 'bg-gray-400' : 'bg-[#0565C4] hover:bg-[#045fba]'} text-white font-semibold py-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2`}
            >
              {loading ? 'Envoi en cours...' : 'Envoyer la demande'}
              {!loading && (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}