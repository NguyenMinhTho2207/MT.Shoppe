//Hàm validator(Đối tượng `validator`)
function Validator (options) {
    var formElement = document.querySelector(options.form);

    if(formElement){

      options.rules.forEach((rule) => {
        var inputElement = formElement.querySelector(rule.selector);
        
        if(inputElement){
          inputElement.onblur = () => {
            // inputElement.value
            // function test
            console.log(inputElement.value)
            rule.test()
          }
        }
      })
    };
}
// Định nghĩa các rules
// Nguyên tắc của các rules:
// 1. Khi có lỗi thì trả ra message lỗi
// 2. Khi hợp lệ thì không trả ra cái gì cả.(undefined)
Validator.isRequired = function (selector) {
    return {
      selector: selector,
      test (value) {
        return value.trim() ? undifined : 'Vui lòng nhập trường này'
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