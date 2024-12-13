// My friend helped me with this code
if (window.location.pathname.endsWith("signin.html")) {
    document.querySelector('.signin-form').addEventListener('submit', (event) => {
        event.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (email === "admin@gmail.com" && password === "admin") {
            alert("Hello Khanh");
            localStorage.setItem('admin', JSON.stringify({ email, password }));
            window.location.href = "home.html";
        } else {
            alert("Invalid credentials");
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.auth-buttons');
    if (localStorage.getItem('admin')) {
        header.innerHTML = `
            <div id="logout" style="cursor: pointer;" onclick="logout()">
                Hello Khanh, <b><u>Log out?</u></b>
            </div>
        `;
    }
});

function logout() {
    localStorage.clear();
    window.location.href = "signin.html";
}