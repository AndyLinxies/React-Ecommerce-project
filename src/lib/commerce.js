import React from 'react';
//import de l'API commerce.js
import commerce from '@chec/commerce.js';

//Creation d'une noivelle instance de commerce
//Entre parenthèse on met le Clée API stockée dans le fichier .env et true pour l'utiliser 
export const commercez = new commerce(process.env.REACT_APP_CHEC_KEY,true);