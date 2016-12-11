/**
 * Created with JetBrains PhpStorm.
 * User: Jake
 */

import JacEvent from 'jac/events/JacEvent';
import ObjUtils from 'jac/utils/ObjUtils';
    export default (function(){
        /**
         * Creates a LogEvent object
         * @param {String} $type
         * @extends {JacEvent}
         * @constructor
         */
        function LogEvent($type){
            //super
            JacEvent.call(this, $type);
        }
        
        //Inherit / Extend
        ObjUtils.inheritPrototype(LogEvent,JacEvent);


	    /** @const */
		LogEvent.TARGET_UPDATED = 'logTargetUpdatedEvent';


        //Return constructor
        return LogEvent;
    })();

