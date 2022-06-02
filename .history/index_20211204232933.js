//Hàm validator(Đối tượng `validator`)
function Validator (options) {
  // Hàm validate
  function validate (inputElement,rule) {
    var errorMessage = rule.test(inputElement.value)
    var formMessage = inputElement.parentElement.querySelector('.form-message')

    if(errorMessage) {
      formMessage.textContent = errorMessage
      inputElement.parentElement.classList.add('invalid')
    }else{
      formMessage.textContent = ''
      inputElement.parentElement.classList.remove('invalid')
    }
  }
  //Lấy element của form cần validate
    var formElement = document.querySelector(options.form);
    if(formElement){
      options.rules.forEach((rule) => {
        var inputElement = formElement.querySelector(rule.selector);
        
        if(inputElement){ 
          // xử lí trường hợp khi blur ra khỏi input
          inputElement.onblur = () => {
            validate(inputElement,rule)
            // inputElement.value
            // function test
           
          }
          //xử lí mỗi khi người dùng nhập vào input
          inputElement.oninput () => {
            var formMessage = inputElement.parentElement.querySelector('.form-message')
            formMessage.textContent = ''
            inputElement.parentElement.classList.remove('invalid')
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
    test (value) {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
      return regex.test(value) ? undefined : 'Vui lòng nhập email';
    }
  };
}