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

// Função que carrega os atendimentos
loadTreats()

// Função que adiciona atendimento
newTreat()

// Função que carrega os atendimentos conforme pesquisa
loadTreatsSearch()

// Funções que ordenam os atendimentos conforme coluna
orderByNumber()

orderByPatient()

orderByAnimal()

orderByDate()

//Função que abre os detalhes ao clicar no atendimentos
document.querySelector()