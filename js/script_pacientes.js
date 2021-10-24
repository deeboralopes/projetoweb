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

// Função que carrega os pacientes
loadPatients()

// Função que adiciona pacientes
newPatient()

// Função que carrega os pacientes conforme pesquisa
loadPatientsSearch()

// Funções que ordenam os pacientes conforme coluna
orderByNumber()

orderByPatient()

orderByAnimal()

orderByOwner()

//Função que abre os detalhes ao clicar no paciente
document.querySelector()