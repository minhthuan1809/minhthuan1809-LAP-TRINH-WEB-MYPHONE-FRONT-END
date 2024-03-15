$(document).ready(function(){
    let password = $("#password");
    let errorMessage = $("#error-message");
    let username = $("#usename");


    console.log("Username: thuan@gmail.com", username.val());
    console.log("Password: thuan", password.val());


    $("#showpasss").click(function(){ 
        let passwordFieldType = password.attr('type');
        if (passwordFieldType === 'password') {
            password.attr('type', 'text');
        } else {
            password.attr('type', 'password');
        }
    });

    $("#DangNhap").click(function() {
        console.log("Username:", username.val());
        console.log("Password:", password.val());

        if(username.val() === "thuan@gmail.com" && password.val() === "thuan") {
            alert("Thành công");
            errorMessage.hide();
           
        } else if (password.val().length < 5 || password.val().length >= 20)  {
            password.focus();
            password.val('');
            errorMessage.text("Mật khẩu phải từ 5 đến 19 ký tự.");
            errorMessage.show();
            setTimeout(function(){ 
                errorMessage.hide(); 
            }, 3000); // Hide after 3 seconds
        } else {
            alert("Mật khẩu hoặc tên đăng nhập sai!");
        }
    });
});
