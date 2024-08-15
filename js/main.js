function login() {

    let username = document.getElementById("usuario").value;
    let password = document.getElementById("contraseña").value;

    if (username == "ACCadmin" && password =="admin123") {
        window.location="../pages/admin.html";
    } else {
        alert("Usuario y/o contraseña incorrectos");
        return;
    }
}