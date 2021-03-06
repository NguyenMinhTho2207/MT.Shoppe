//Hàm validator(Đối tượng `validator`)
function Validator (options) {
    var formElement = document.querySelector(options.form);

    if(formElement){

      options.rules.forEach((rule) => {
        var inputElement = formElement.querySelector(rule.selector);
        
        if(inputElement){
          inputElement.onblur = () => {
            console.log(inputElement.value)
          }
        }
      })
    };
}
// Định nghĩa các rules
Validator.isRequired = function (selector) {
    return {
      selector: selector,
      test () {

      }
    };
}

Validator.isEmail = function (selector) {
  return {
    selector: selector,
    test () {

    }
  };
}