export const TYPE_SUCCESS = 'success';
export const TYPE_ERROR = 'error';
export const TYPE_WARNING = 'warn';
function logger (log,type = TYPE_SUCCESS) {
    console[type](log)
}
export default logger;