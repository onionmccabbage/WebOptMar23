import DoStuff from './b' // the default export
import {pi, phi} from './b' // non-defaults go in {}
import DoStuff, {sqtTwo} from './b' // ...
import * as util from './b' // avoid - not obvious

// use the imported code
console.log(`We have imported ${pi} ${phi} and ${sqtTwo}`)