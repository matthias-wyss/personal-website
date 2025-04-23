// Liste toutes les langues supportés puis on les exportes

const languageList = (lang) => {
    switch (lang) {
        case "Afrikaans":
            lang = "af"
            break;
        case "Amharic":
            lang = "am"
            break;
        case "Arabic":
            lang = "ar"
            break;
        case "Azerbaijani":
            lang = "az"
            break;
        case "Bashkir":
            lang = "ba"
            break;
        case "Belarusian":
            lang = "be"
            break;
        case "Bulgarian":
            lang = "bg"
            break;
        case "Bengali":
            lang = "bn"
            break;
        case "Bosnian":
            lang = "bs"
            break;
        case "Catalan":
            lang = "ca"
            break;
        case "Cebuano": 
            lang ="ceb"
            break;
        case "Czech":
            lang = "cs"
            break;
        case "Welsh":
            lang = "cy"
            break;
        case "Danish":
            lang = "da"
            break;
        case "German":
            lang = "de"
            break;
        case "Greek":
            lang = "el"
            break;
        case "English":
            lang = "en"
            break;
        case "Esperanto": 
            lang = "eo"
            break;
        case "Spanish":
            lang =  "es"
            break;
        case "Estonian":
            lang =  "et"
            break;
        case "Basque":
            lang =  "eu"
            break;
        case "Persian":
            lang =  "fa"
            break;
        case "Finnish":
            lang =  "fi"
            break;
        case "French":
            lang =  "fr"
            break;
        case "Irish":
            lang =  "ga"
            break;
        case "Scottish Gaelic":
            lang =  "gd"
            break;
        case "Galician":
            lang =  "gl"
            break;
        case "Gujarati":
            lang =  "gu"
            break;
        case "Hebrew":
            lang =  "he"
            break;
        case "Hindi":
            lang =  "hi"
            break;
        case "Croatian":
            lang =  "hr"
            break;
        case "Haitian":
            lang =  "ht"
            break;
        case "Hungarian":
            lang =  "hu"
            break;
        case "Armenian":
            lang =  "hy"
            break;
        case "Indonesian":
            lang =  "id"
            break;
        case "Icelandic":
            lang =  "is"
            break;
        case "Italian":
            lang =  "it"
            break;
        case "Japanese":
            lang =  "ja"
            break;
        case "Javanese":
            lang =  "jv"
            break;
        case "Georgian":
            lang =  "ka"
            break;
        case "Kazakh":
            lang =  "kk"
            break;
        case "Khmer":
            lang =  "km"
            break;
        case "Kannada":
            lang =  "kn"
            break;
        case "Korean":
            lang =  "ko"
            break;
        case "Kyrgyzy":
            lang =  "ky"
            break;
        case "Latin":
            lang =  "la"
            break;
        case "Luxembourgish":
            lang =  "lb"
            break;
        case "Lao":
            lang =  "lo"
            break;
        case "Lithuanian":
            lang =  "lt"
            break;
        case "Latvian":
            lang = "lv"
            break;
        case "Malagasy":
            lang = "mg"
            break;
        case "Mari":
            lang = "mhr"
            break;
        case "Maori":
            lang = "mi"
            break;
        case "Macedonian":
            lang = "mk"
            break;
        case "Malayalam":
            lang = "ml"
            break;
        case "Mongolian":
            lang = "mn"
            break;
        case "Marathi":
            lang = "mr"
            break;
        case "Hill Mari":
            lang = "mrj"
            break;
        case "Malay":
            lang = "ms"
            break;
        case "Maltese":
            lang = "mt"
            break;
        case "Burmese":
            lang = "my"
            break;
        case "Nepali":
            lang = "ne"
            break;
        case "Dutch":
            lang = "nl"
            break;
        case "Norwegian":
            lang = "no"
            break;
        case "Punjabi":
            lang = "pa"
            break;
        case "Papiamento":
            lang = "pap"
            break;
        case "Polish":
            lang = "pl"
            break;
        case "Portuguese":
            lang = "pt"
            break;
        case "Romanian":
            lang = "ro"
            break;
        case "Russian":
            lang = "ru"
            break;
        case "Sinhalese": 
            lang = "si"
            break;
        case "Slovak": 
            lang = "sk"
            break;
        case "Slovenian": 
            lang = "sl"
            break;
        case "Albanian": 
            lang = "sq"
            break;
        case "Serbian": 
            lang = "sr"
            break;
        case "Sundanese": 
            lang = "su"
            break;
        case "Swedish": 
            lang = "sv"
            break;
        case "Swahili": 
            lang = "sw"
            break;
        case "Tamil": 
            lang = "ta"
            break;
        case "Telugu": 
            lang = "te"
            break;
        case "Tajik": 
            lang = "tg"
            break;
        case "Thai": 
            lang = "th"
            break;
        case "Tagalog": 
            lang = "tl"
            break;
        case "Turkish": 
            lang = "tr"
            break;
        case "Tatar": 
            lang = "tt"
            break;
        case "Udmurt": 
            lang = "udm"
            break;
        case "Ukrainian": 
            lang = "uk"
            break;
        case "Urdu": 
            lang = "ur"
            break;
        case "Uzbek": 
            lang = "uz"
            break;
        case "Vietnamese": 
            lang = "vi"
            break;
        case "Xhosa": 
            lang = "xh"
            break;
        case "Yiddish": 
            lang = "yi"
            break;
        case "Chinese": 
            lang = "zh"
            break;
    }
    return lang
}

export { languageList }