function showToast(message) {
    let toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = "1";
    }, 100);

    setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => toast.remove(), 500);
    }, 2000);
}

document.querySelectorAll(".apply-btn").forEach(button => {
    button.addEventListener("click", () => {
        showToast("✅ Application Sent!");
    });
});

document.querySelector(".send-btn").addEventListener("click", () => {
    let messageBox = document.querySelector(".contact-form textarea");
    if (messageBox.value.trim() === "") {
        showToast("⚠️ Type your message!");
    } else {
        showToast("📩 Message Sent!");
        messageBox.value = "";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let user = localStorage.getItem("loggedInUser") || sessionStorage.getItem("loggedInUser");

    if (!user) {
        console.log("No user found. Redirecting to login...");
        window.location.href = "login.html"; 
    }
});

