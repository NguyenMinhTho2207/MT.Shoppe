const TYPE_SUCCESS = 'SUCCESS';
const TYPE_ERROR = 'error';
const TYPE_WARNING = 'WARN';
function logger (log,type = 'log') {
    console[type](log)
}
export default logger