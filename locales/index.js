module.exports = {
    locales: ['en', 'ar', 'fr'],
    defaultLocale: 'en',
    vueI18n: {
        fallbackLocale: 'en',
        messages: {
            en: require('./en.json'),
            ar: require('./ar.json'),
            fr: require('./fr.json'),
        }
    }
}