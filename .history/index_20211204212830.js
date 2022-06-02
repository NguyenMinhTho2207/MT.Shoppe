//Hàm validator(Đối tượng `validator`)
function Validator (options) {
    var formElement = document.querySelector(op.form)

    if(formElement){

      options.rules.forEach((rule) => {
        var inputElement = formElement.querySelector(rule.selector);
        var emailElement = formElement.querySelector(rule.selector);

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