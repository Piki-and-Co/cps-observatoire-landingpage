# Observatoire des Compétences Psychosociales

Site vitrine pour le premier Observatoire National des Compétences Psychosociales (CPS), une initiative de [Piki & Co](https://piki-and-co.com).

## Déploiement

Le site est hébergé via **GitHub Pages** avec un sous-domaine personnalisé `observatoire.piki-and-co.com`.

### Configuration DNS (OVH)

Ajouter un enregistrement CNAME dans la zone DNS de `piki-and-co.com` :

- Sous-domaine : `observatoire`
- Cible : `<username>.github.io.`

## Stack

- HTML/CSS statique (pas de framework)
- Charte graphique Piki & Co (Montserrat, Caveat Brush, palette purple/yellow)
- Google Forms (questionnaire intégré en iframe)
- Brevo (formulaire d'inscription email)
- tarteaucitron.js (gestion du consentement cookies RGPD)
- Matomo (analytics auto-hébergé)
