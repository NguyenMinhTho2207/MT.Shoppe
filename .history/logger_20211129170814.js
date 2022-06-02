import {TYPE_SUCCESS}from './contants.js';

function default (log,type = TYPE_SUCCESS) {
    console[type](log)
}
export default default;