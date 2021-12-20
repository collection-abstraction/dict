import _Dict from './_Dict.js';
import _dict from './_dict.js';

const Dict = _Dict(Map); // Use native Map implementation
const dict = _dict(Dict);

export {dict, Dict};
export {default as _dict} from './_dict.js';
export {default as _Dict} from './_Dict.js';
