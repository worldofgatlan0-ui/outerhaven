const loginForm = document.getElementById("login-form");
const loginError = document.getElementById("login-error");

loginForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    loginError.style.display = "none";
    loginError.textContent = "";

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const { data, error } =
        await supabaseClient.auth.signInWithPassword({
            email: email,
            password: password
        });

    if (error) {

        loginError.textContent =
            "LOGIN FAILED: " + error.message;

        loginError.style.display = "block";

        return;
    }

    window.location.href = "admin-dashboard.html";
});

