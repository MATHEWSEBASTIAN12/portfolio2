function validateLogin() {
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let error = document.getElementById("error");

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let phonePattern = /^[0-9]{10}$/;

    if (!emailPattern.test(email)) {
        error.innerHTML = "Enter a valid email!";
        return;
    }

    if (!phonePattern.test(phone)) {
        error.innerHTML = "Enter a valid 10-digit phone number!";
        return;
    }

    localStorage.setItem("loggedIn", "true");
    window.location.href = "index.html";
}

/* Logout */
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}
