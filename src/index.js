import _Dict from './_Dict.js';
import _dict from './_dict.js';

const Dict = _Dict(Map); // Use native Map implementation
const dict = _dict(Dict);

export default dict;

export {dict, Dict, _dict, _Dict};
