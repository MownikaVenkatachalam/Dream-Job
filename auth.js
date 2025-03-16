if (localStorage.getItem("userLoggedIn") === "true") {
    window.location.href = "dashboard.html"; 
}

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); 

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "suthamonika1984@gmail.com" && password === "mownika@2006") {
        localStorage.setItem("userLoggedIn", "true"); 
        window.location.href = "dashboard.html"; 
    } else {
        alert("Invalid credentials. Try again! ❌");
    }
});

document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault(); 

    let username = document.getElementById("username").value;
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;
    
    let user = {
        username: username,
        email: email,
        password: password
    };
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("userLoggedIn", "true");

    alert("Signup Successful! Redirecting to Dashboard...");
    window.location.href = "dashboard.html";
});
