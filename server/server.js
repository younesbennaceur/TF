import dotenv from 'dotenv';
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Configuration Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Fonction pour générer le HTML de l'email
function generateEmailHTML(formData) {
  const getProjetLabel = (value) => {
    const projets = {
      renovation: "Rénovation de toiture",
      isolation: "Isolation",
      charpente: "Charpente",
      fenetre: "Fenêtre de toit",
      demoussage: "Démoussage",
    };
    return projets[value] || value;
  };

  const getToitureLabel = (value) => {
    const toitures = {
      tuile: "Tuile",
      ardoise: "Ardoise",
      zinc: "Zinc",
      "bac-acier": "Bac acier",
      shingle: "Shingle",
    };
    return toitures[value] || value;
  };

  const getConnaissanceLabel = (value) => {
    const sources = {
      google: "Google (moteur de recherche)",
      "pages-jaunes": "Pages Jaunes",
      annuaire: "Annuaire",
      "bouche-a-oreille": "Bouche-à-oreille",
      autre: "Autre",
    };
    return sources[value] || value;
  };

  return `
  <!DOCTYPE html>
  <html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
      .container { max-width: 600px; margin: 0 auto; background-color: #f5f5f5; padding: 20px; }
      .header { background-color: #0565C4; color: white; padding: 30px; text-align: center; border-radius: 5px 5px 0 0; }
      .content { background-color: white; padding: 30px; border-radius: 0 0 5px 5px; }
      .section { margin-bottom: 25px; border-bottom: 1px solid #e0e0e0; padding-bottom: 20px; }
      .section:last-child { border-bottom: none; }
      .section-title { font-size: 16px; font-weight: bold; color: #0565C4; margin-bottom: 12px; text-transform: uppercase; }
      .info-row { display: flex; justify-content: space-between; margin-bottom: 8px; padding: 8px 0; }
      .info-label { font-weight: bold; color: #555; width: 40%; }
      .info-value { color: #333; width: 60%; text-align: right; }
      .badge { display: inline-block; background-color: #0565C4; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; margin-right: 5px; margin-bottom: 5px; }
      .footer { background-color: #f0f0f0; padding: 20px; text-align: center; font-size: 12px; color: #666; border-radius: 5px; margin-top: 20px; }
      .important { background-color: #fff3cd; border-left: 4px solid #ffc107; padding: 12px; margin: 20px 0; border-radius: 3px; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>🏠 Nouvelle Demande de Devis</h1>
        <p>Tf Couverture - Demande de RDV</p>
      </div>

      <div class="content">
        <p>Bonjour,</p>
        <p>Merci pour votre demande de devis auprès de <strong>Tf Couverture</strong>.
        Nous vous contacterons prochainement pour confirmer le rendez-vous.</p>

        <div class="section">
          <div class="section-title">📋 Informations personnelles</div>
          <div class="info-row"><span class="info-label">Nom :</span><span class="info-value">${formData.nom}</span></div>
          <div class="info-row"><span class="info-label">Prénom :</span><span class="info-value">${formData.prenom}</span></div>
          <div class="info-row"><span class="info-label">Adresse :</span><span class="info-value">${formData.adresse}, ${formData.codePostal} ${formData.ville}</span></div>
          <div class="info-row"><span class="info-label">Téléphone :</span><span class="info-value">${formData.telephone}</span></div>
          <div class="info-row"><span class="info-label">Email :</span><span class="info-value">${formData.email}</span></div>
        </div>

        <div class="section">
          <div class="section-title">🔧 Détails du projet</div>
          <div class="info-row"><span class="info-label">Type de Projet :</span><span class="info-value">${getProjetLabel(formData.projet)}</span></div>
          <div class="info-row"><span class="info-label">Type de toiture :</span><span class="info-value">${getToitureLabel(formData.typeToiture)}</span></div>
          <div

        <div class="section">
          <div class="section-title">📝 Description du projet</div>
          <p style="white-space: pre-wrap; background-color: #f9f9f9; padding: 12px; border-radius: 3px; border-left: 3px solid #0565C4;">
${formData.description}
          </p>
        </div>

        

       

        <div class="important">
          <strong>ℹ️ Important :</strong> Vos données sont confidentielles et ne seront jamais partagées.
        </div>

        <p style="margin-top: 30px;">Cordialement,<br><strong>L'équipe Tf Couverture</strong></p>
      </div>

      <div class="footer">
        <p>Tf Couverture | Rénovation & Isolation de Toiture</p>
        <p>© ${new Date().getFullYear()} Tf Couverture. Tous droits réservés.</p>
      </div>
    </div>
  </body>
  </html>
  `;
}

// Route pour envoyer l'email
app.post('/api/send-quote-request', async (req, res) => {
  try {
    const formData = req.body;

    // Validation basique
    if (!formData.email || !formData.nom) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email et nom sont requis' 
      });
    }

    const htmlContent = generateEmailHTML(formData);

    // Email au destinataire (l'email du client)
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: formData.email, // ✅ Email dynamique du client
      subject: `Nouvelle demande de devis - ${formData.nom} ${formData.prenom}`,
      html: htmlContent,
    });

    // Email de confirmation au client
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: formData.email,
      subject: 'Confirmation de votre demande de devis - Tf Couverture',
      html: `
        <h2>Merci ${formData.prenom} !</h2>
        <p>Nous avons bien reçu votre demande de devis.</p>
        <p>Un représentant de Tf Couverture vous contactera très bientôt pour confirmer votre rendez-vous.</p>
        <p>Cordialement,<br><strong>L'équipe Tf Couverture</strong></p>
      `,
    });

    res.json({ 
      success: true, 
      message: 'Demande envoyée avec succès!' 
    });

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Erreur lors de l\'envoi de la demande',
      error: error.message 
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});