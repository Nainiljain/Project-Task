const register = () => 
{
    var Firstname = document.getElementById("firstname").value;
    var Lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;    
    var password = document.getElementById("password").value;

    var user = {
        Firstname= Firstname,
        Lastname= Lastname,
        email= email,
        password= password
    };
    var json = JSON.stringify(user);
    localStorage.setItem("email", json);
    console.log("User added:", user);
    alert("Registration successful!")

    window.location.href="signin.html";
};