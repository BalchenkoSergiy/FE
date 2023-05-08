const developerName = 'Maxim';
const programmingLanguage = 'JavaScript';

const programmingLanguages = {
    javaScript: 'JavaScript',
    nodeJS: 'NodeJS',
};

if (programmingLanguage === programmingLanguages.javaScript) {
    console.log(`${developerName} is Front-End developer`);
} else if (programmingLanguage === programmingLanguages.nodeJS) {
    console.log(`${developerName} is Back-End developer`);
} else {
    console.log(`Programming language by ${developerName} is undefined`)
}