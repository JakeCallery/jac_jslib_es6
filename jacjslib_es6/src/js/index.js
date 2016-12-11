/**
 * Created by Jake on 12/11/2016.
 */
'use strict';

import Rectangle from 'jac/geometry/Rectangle';
import L from 'jac/logger/Logger';
import VerboseLevel from 'jac/logger/VerboseLevel';
import LogLevel from 'jac/logger/LogLevel';
import ConsoleTarget from 'jac/logger/ConsoleTarget';
import GEB from 'jac/events/GlobalEventBus';

console.log('Test');
let rect = new Rectangle(0,0,10,10);
console.log(rect.height);

L.addLogTarget(new ConsoleTarget());
L.verboseFilter = (VerboseLevel.NORMAL | VerboseLevel.TIME | VerboseLevel.LEVEL | VerboseLevel.LINE);
L.levelFilter = (LogLevel.DEBUG | LogLevel.INFO | LogLevel.WARNING | LogLevel.ERROR);
L.debug('New Live Logs UI (main)');

let geb = new GEB();
L.debug('GEB: ' + geb.time);
setTimeout(function(){
    let geb2 = new GEB();
    L.debug('GEB2: ' + geb2.time);
},4000);



