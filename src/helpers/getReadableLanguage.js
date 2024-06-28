export const getReadableLanguage = (code, languageReducer) => {
    for (const language of languageReducer) {
        if (code === language.code) return language.languageName;
    }
    return "Нет"
}