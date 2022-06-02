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
            var formMessage = inputElement.parentElement.querySelector('.form-message')
            var errorMessage = rule.test(inputElement.value)
            if(errorMessage) {
              formMessage.textContent = errorMessage
              inputElement.parentElement.classList.add('invalid')
            }else{
              formMessage.textContent = ''
              inputElement.parentElement.classList.remove('invalid')
            }
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
        return value.trim() ? undefined : 'Vui lòng nhập tên'
      }
    };
}

Validator.isEmail = function (selector) {
  return {
    selector: selector,
    test () {
      return value.trim() ? undefined : 'Vui lòng nhập email'
    }
  };
}