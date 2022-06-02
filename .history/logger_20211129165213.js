import {TYPE_SUCCESS}from './contants.js';
export TYPE_SUCCESS
function logger (log,type = TYPE_SUCCESS) {
    console[type](log)
}
export default logger;