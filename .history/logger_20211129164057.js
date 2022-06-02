const TYPE_SUCCESS = 'SUCCESS';
const TYPE_ERROR = 'ERROR';
const TYPE_WARNING = 'WARN';
function logger (log,type = TYPE_SUCCESS) {
    console[type](log)
}
export default logger