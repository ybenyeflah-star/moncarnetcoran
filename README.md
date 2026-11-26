# Mon Carnet Coran 💜 — version GitHub Pages

Application mobile en HTML/CSS/JavaScript, sans serveur ni compte.

## Mise en ligne (GitHub Pages)

1. Sur https://github.com/new, crée un dépôt **Public** nommé `mon-carnet-coran` (tu peux choisir un autre nom).
2. Dans le dépôt, clique **Add file → Upload files**. Dépose les fichiers **extraits** de ce dossier (`index.html`, `manifest.webmanifest`, `icon-192.png`, `icon-512.png`, `sw.js`, `.nojekyll` et éventuellement `README.md`). Ne dépose **pas** le fichier ZIP lui-même.
3. Confirme avec **Commit changes** sur la branche `main`.
4. Ouvre **Settings → Pages → Build and deployment**, sélectionne **Deploy from a branch**, branche `main`, dossier `/(root)`, puis **Save**.
5. Ton application sera accessible sous `https://TON-PSEUDO.github.io/mon-carnet-coran/` (avec ton pseudo et ton nom de dépôt).

## Important : données privées

- Ce dépôt ne contient aucune séance, erreur, sauvegarde ou donnée utilisateur.
- L'application enregistre le carnet dans le stockage **local du navigateur sur chaque appareil et chaque adresse web**.
- L'ancien site Netlify et le nouveau site GitHub Pages n'échangent **aucune** donnée automatiquement.
- Pour récupérer tes notes : sur **Netlify**, Paramètres → Exporter une sauvegarde ; sur **GitHub Pages**, Paramètres → Importer une sauvegarde.
- Fais régulièrement des exports. Une suppression des données du navigateur peut effacer le carnet local.
- GitHub Pages sur un dépôt public publie le code **et** le site. Ne commite jamais un fichier JSON de sauvegarde personnelle.

## Mise à jour

Pour chaque nouvelle version, remplacer les fichiers du dépôt. En cas de cache, rafraîchir le site ; le `sw.js` fait un chargement réseau en priorité lorsque la connexion est disponible.
