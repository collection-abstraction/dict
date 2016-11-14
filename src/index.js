import _Dict from './_Dict' ;
import _dict from './_dict' ;

const Dict = _Dict( Map ) ; // use native Map implementation
const dict = _dict( Dict ) ;

export default dict ;

export {
	dict ,
	Dict ,
	_dict ,
	_Dict ,
} ;
