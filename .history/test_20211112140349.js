var email = 'EM';
var myInfo = {
    name: 'Nguyễn Minh Thọ',
    class:'DHHTTT14',
    MSSV: '18068681',
    [email]:'gmail',
    getName: function() {
        return this.EM;
    }
}
delete myInfo.name;
// function -> phương thức method
// others -> thuộc tính property
console.log(myInfo.getName());




