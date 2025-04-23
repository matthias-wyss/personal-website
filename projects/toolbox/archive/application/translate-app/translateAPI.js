import * as api from './API.js' // Import du fichier API


// Fonction pour traduire prenant en paramètre le texte détecté
const translation = (textDect) => {

    const translation = new XMLHttpRequest();
    
    translation.open("POST",
    'https://translate.yandex.net/api/v1.5/tr.json/detect?key=trnsl.1.1.20200122T074648Z.d08008cf4b7a4229.796adf547df17e8a1fc24aeb6ffcde164898cea6&text=' + textDect,
    true);

    translation.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
    translation.send(); // Envoi de la requête préparé au-dessss

    translation.onload = () => {    
        const detection = JSON.parse(translation.response)
        // Lorqu'il y a réponse, on exécute la fonction translate de l'api
        api.translate(textDect, detection.lang)
    }
    
}

const btn = document.getElementById('submitBtn') // Handle de l'évènement au click du boutton

btn.addEventListener('click', () => {
    const textToTranslate = document.getElementById('toTranslate').value
    translation(textToTranslate)
    // on récupère le texte pour le traduire
})

api.supportLang()

// on éxécute la fonction supportLang


