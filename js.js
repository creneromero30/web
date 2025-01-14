document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const studentName = document.getElementById("studentName").value;

    if (studentName) {
        localStorage.setItem("studentName", studentName); // Guardamos el nombre en el localStorage
        document.getElementById("loginForm").reset();
        showMenu();
    }
});

function showMenu() {
    document.querySelector("h1").style.display = "none";
    document.querySelector(".card").style.display = "none";
    document.getElementById("menu").style.display = "block";
    document.body.classList.remove("login"); // Quitamos la clase de fondo de inicio de sesión
    document.body.classList.add("menu"); // Añadimos la clase de fondo del menú
    const studentName = localStorage.getItem("studentName");
    document.querySelector("h2").innerText = `Bienvenido, ${studentName}`;
}

document.getElementById("mathBtn").addEventListener("click", function () {
    window.location.href = "mate.html";
});

document.getElementById("writingBtn").addEventListener("click", function () {
    window.location.href = "menuli.html";
});

document.getElementById("gamesBtn").addEventListener("click", function () {
    window.location.href = "juegomenu.html";
});
