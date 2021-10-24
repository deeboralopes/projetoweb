/*----------------navbar-----------------*/
function home() {
    window.open('pag_home.html','_self')
}

function atendimentos() {
    window.open('pag_atendimentos.html','_self');
}

function pacientes() {
    window.open('pag_pacientes.html','_self');
}

function usuario() {
    window.open('pag_usuario.html','_self');
}

function logout() {
    window.open('index.html','_self');
}

// Exibir dados
firebase.auth().onAuthStateChange((user) => {
    if(!user) {
        location.replace("index.html");
    } else {
        document.getElementById("return-email").innerHTML = user.email;
    }
});

// Alterar e-mail
changeEmail()

// Alterar senha
changePassword()