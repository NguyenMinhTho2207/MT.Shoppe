const TYPE_SUCCESS = 'SUCCESS';
CONST TYPE_ERROR = 'error';
CONST TYPE_WARNING = 'WARN';
function logger (log,type = 'log') {
    console[type](log)
}
export default logger