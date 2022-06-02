import {TYPE_SUCCESS}from './contants.js';

function logger (log,type = TYPE_SUCCESS) {
    console[type](log)
}
export default logger;