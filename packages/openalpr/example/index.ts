import { config } from "./config";
import { validImage } from "./images/valid-image";

const openALPR = require('openalpr').create(config)

const values = [null, '', 'invalid string', validImage]

values.map(data => {
    openALPR.recognize(data)
        .then(r => console.log('Response', r))
        .catch(e => console.error('Error', e))
})
