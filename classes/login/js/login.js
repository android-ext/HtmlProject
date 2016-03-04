/**
 * Created by Ext on 2015/12/7.
 */

window.onload = function(){
    var loginBtn = document.getElementById('submitInput');
    loginBtn.onclick = function(){
        var phone = document.getElementsByClassName('inputText')[0];
        if (phone.value == '' || phone.value == null) {
            alert('请输入电话号码');
            return;
        }
        var validateCode = document.getElementsByClassName('passwordInput')[0];
        if (validateCode.value == '' || validateCode.value == null) {
            alert('请输入验证码');
            return;
        }
//        window.location = '';
        alert('一大波妹子即将来袭');
    };


};
