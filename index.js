require("events").EventEmitter.defaultMaxListeners = 0;
const dictionary = require("./AppModules/dictionary");

console.log(dictionary.global.hello);

const launcher = require("./AppModules/launcher");
launcher.run();
