/**
 * Created with JetBrains PhpStorm.
 * User: Jake
 */


    export default (function(){
        /**
         * Creates a LineSeg2DObj object
         * @constructor
         */
        function LineSeg2DObj($ax, $ay, $bx, $by){
	        this.ax = $ax;
	        this.ay = $ay;
	        this.bx = $bx;
	        this.by = $by;
        }
        
        
        //Return constructor
        return LineSeg2DObj;
    })();

