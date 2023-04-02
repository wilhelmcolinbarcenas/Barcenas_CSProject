function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var message

    if (username == "" && password != ""){
        document.getElementById("error").innerHTML = "Please enter your username";
    } else if (username != "" && password == ""){
        document.getElementById("error").innerHTML = "Please enter your password";
    } else if (username == "" && password == ""){
        document.getElementById("error").innerHTML = "Please enter your username and password";
    } else if (username != "" && password != ""){
        location.href= "index.html"
    } else {
        message = "Login error."
        document.getElementById("error").innerHTML = "Login Error";
    }

}
