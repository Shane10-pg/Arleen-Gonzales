function welcomeMessage() {
    window.alert("Welcome to my Web Portfolio!");
}

function toggleTheme() {

    document.body.classList.toggle("dark-mode");

    var button = document.getElementById("theme-toggle");

    if (document.body.classList.contains("dark-mode")) {
        button.innerHTML = "☀️";
    } else {
        button.innerHTML = "🌙";
    }

}