//Hàm validator(Đối tượng `validator`)
function Validator (options) {
    console.log(options)
    options.rules.forEach((rule) => {
      console.log(rule)
    })
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