const Tesseract = require('tesseract.js');

Tesseract.recognize(
    'Lesseee.png', 'eng',
    { logger: m => console.log(m) }
).then(({ data: { text } }) => {
    console.log(text);
})