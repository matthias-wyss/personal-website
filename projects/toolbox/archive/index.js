// Message avertissant l'utilisateur qu'il va télécharger un fichier.

const downloadLink = document.querySelectorAll('.downloadLink')

downloadLink.forEach(link => {
    link.addEventListener('click', () => alert('[!] Vous allez télécharger un dossier zip [!]'))
})