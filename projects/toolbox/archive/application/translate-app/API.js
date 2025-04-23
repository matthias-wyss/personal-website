import * as langList from "./supportLang.js";
/*****************************************************************************************************************************************/
/*                                                        LANGUAGES SUPPORT                                                              */
/*****************************************************************************************************************************************/

const supportLang = () => {

    const getSupportLanguage = new XMLHttpRequest()

    getSupportLanguage.open('GET', 'https://translate.yandex.net/api/v1.5/tr.json/getLangs?key=trnsl.1.1.20200122T074648Z.d08008cf4b7a4229.796adf547df17e8a1fc24aeb6ffcde164898cea6&ui=en', true)

    getSupportLanguage.onload = () => {

        const data = JSON.parse(getSupportLanguage.response)

        const option = document.getElementById('selectLanguage')
        Object.values(data.langs).forEach(lang => {
            option.innerHTML += `<option name=${lang}>${lang}</option>`
        });
    }

    getSupportLanguage.send()
}

const chooseLanguage = () => {

    const value = document.getElementById('selectLanguage').value
    
    const lang = langList.languageList(value)

    return lang
}

/*****************************************************************************************************************************************/
/*                                                        TRANSLATE                                                                      */
/*****************************************************************************************************************************************/


const translate = (text, detectLanguage) => {

    console.log('[!]Texte détecté: ' + text)
    console.log('[!]Langage détecté: ' + detectLanguage)

    const test = chooseLanguage()

    const translateRequest = new XMLHttpRequest();

    translateRequest.open("POST",
    'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200122T074648Z.d08008cf4b7a4229.796adf547df17e8a1fc24aeb6ffcde164898cea6&text='+ text + '&lang='+ detectLanguage +'-'+test+'&format=html&',
    true);
    
    //Envoie les informations du header adaptées avec la requête
    translateRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
    translateRequest.onload = () => {

        const translation = document.getElementById("translation")
        const lang1 = document.getElementById('lang1')

        const textTranslate = JSON.parse(translateRequest.response)

        console.log('[!]Traduction: ' + textTranslate.text[0])
        
        lang1.innerHTML = 'Langage détecté: ' + detectLanguage
        translation.innerHTML = textTranslate.text[0]
    }
     
    translateRequest.send();
}

export {translate, supportLang}


