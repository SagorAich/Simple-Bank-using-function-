document.getElementById('login-submit').addEventListener('click',function(){
    const emailField=document.getElementById('user-email');
    console.log(emailField.value);
    const userPassword=document.getElementById('user-password');
    console.log(userPassword.value);
    if(emailField.value=='aich@gmail.com' && userPassword.value=='123456'){
        window.location.href='banking.html';
    }
    else{
        console.log('invalid user');
    }
});

