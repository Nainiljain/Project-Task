const register = () => {
    var Firstname = document.getElementById("firstname").value;
    var Lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;    
<<<<<<< HEAD
    var password = document.getElementById("password").value;
=======
    var password = document.getElementById("password").value
>>>>>>> c7ddc5a983b72a6104315629f08a61d261c15f12

    var user = {
        Firstname: Firstname,
        Lastname: Lastname,
        email: email,
        password: password
    };
    var json = JSON.stringify(user);
    localStorage.setItem(email, json);
<<<<<<< HEAD
    console log("User added:", user);
=======
    console.log("User added:", user);
>>>>>>> c7ddc5a983b72a6104315629f08a61d261c15f12
    alert("Registration successful!");

    window.location.href="signin.html";
};