export const TYPE_SUCCESS = 'SUCCESS';
export const TYPE_ERROR = 'ERROR';
export const TYPE_WARNING = 'WARN';
function logger (log,type = TYPE_SUCCESS) {
    console[type](log)
}
export default logger