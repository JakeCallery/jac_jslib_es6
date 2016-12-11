/**
 * Created with JetBrains PhpStorm.
 * User: Jake
 */


    export default (function(){
       var FastMath = {};

	    FastMath.abs = function($value){
		    return ($value ^ ($value >> 31)) - ($value >> 31);
	    };
        
        //Return constructor
        return FastMath;
    })();

