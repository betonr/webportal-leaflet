import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

// PT-BR
const VisualizationPtBR = require('../../modules/Visualization/translations/portuguese.js').default
let modulesPtBR = {
    'ptbr': {
        ...VisualizationPtBR
    }
}

// ENGLISH
const VisualizationEn = require('../../modules/Visualization/translations/english.js').default
let modulesEn = {
    'en': {
        ...VisualizationEn
    }
}

const i18n = new VueI18n({
    locale: 'en', // set locale default
    messages: {
        ...modulesPtBR,
        ...modulesEn
    }
})

export default i18n