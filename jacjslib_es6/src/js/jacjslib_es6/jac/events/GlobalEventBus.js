/**
 * Created with JetBrains PhpStorm.
 * User: Jake
 */

import EventDispatcher from 'jac/events/EventDispatcher';
import ObjUtils from 'jac/utils/ObjUtils';
    export default (function(){
        /**
         * Creates a GlobalEventBus Singleton object
         * to use ALWAYS new it up geb = new GlobalEventBus()
         * @extends {EventDispatcher}
         * @constructor
         */
        function GlobalEventBus(){
	        if(GlobalEventBus.prototype._singletonInstance){
		        return GlobalEventBus.prototype._singletonInstance;
	        }

	        //super
	        EventDispatcher.call(this);
	        GlobalEventBus.prototype._singletonInstance = this;
        }
        
        //Inherit / Extend
        ObjUtils.inheritPrototype(GlobalEventBus,EventDispatcher);
        
        //Return constructor
        return GlobalEventBus;
    })();

