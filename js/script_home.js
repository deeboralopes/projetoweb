//---------------------Calendário----------------------
const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];

const weekdays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

// Váriavel principal
let date = new Date();

// Função que retorna a data atual do calendário 
function getCurrentDate(element, asString) {
    if (element) {
        if (asString) {
            return element.textContent = weekdays[date.getDay()] + ', ' + date.getDate() + " de " + months[date.getMonth()] + " de " + date.getFullYear();
        }
        return element.value = date.toISOString().substr(0, 10);
    }
    return date;
}


// Função principal que gera o calendário
function generateCalendar() {

    // Pega um calendário e se já existir o remove
    const calendar = document.getElementById('calendar');
    if (calendar) {
        calendar.remove();
    }

    // Cria a tabela que será armazenada as datas
    const table = document.createElement("table");
    table.id = "calendar";

    // Cria os headers referentes aos dias da semana
    const trHeader = document.createElement('tr');
    trHeader.className = 'weekends';
    weekdays.map(week => {
        const th = document.createElement('th');
        const w = document.createTextNode(week.substring(0, 3));
        th.appendChild(w);
        trHeader.appendChild(th);
    });

    // Adiciona os headers na tabela
    table.appendChild(trHeader);

    //Pega o dia da semana do primeiro dia do mês
    const weekDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        1
    ).getDay();

    //Pega o ultimo dia do mês
    const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();

    let tr = document.createElement("tr");
    let td = '';
    let empty = '';
    let btn = document.createElement('button');
    let week = 0;

    // Se o dia da semana do primeiro dia do mês for maior que 0(primeiro dia da semana);
    while (week < weekDay) {
        td = document.createElement("td");
        empty = document.createTextNode(' ');
        td.appendChild(empty);
        tr.appendChild(td);
        week++;
    }

    // Vai percorrer do 1º até o ultimo dia do mês
    for (let i = 1; i <= lastDay;) {
        // Enquanto o dia da semana for < 7, ele vai adicionar colunas na linha da semana
        while (week < 7) {
            td = document.createElement('td');
            let text = document.createTextNode(i);
            btn = document.createElement('button');
            btn.className = "btn-day";
            btn.addEventListener('click', function () { changeDate(this) });
            week++;



            // Controle para ele parar exatamente no ultimo dia
            if (i <= lastDay) {
                i++;
                btn.appendChild(text);
                td.appendChild(btn)
            } else {
                text = document.createTextNode(' ');
                td.appendChild(text);
            }
            tr.appendChild(td);
        }
        // Adiciona a linha na tabela
        table.appendChild(tr);

        // Cria uma nova linha para ser usada
        tr = document.createElement("tr");

        // Reseta o contador de dias da semana
        week = 0;
    }
    // Adiciona a tabela a div que ela deve pertencer
    const content = document.getElementById('table');
    content.appendChild(table);
    changeActive();
    changeHeader(date);
    document.getElementById('date').textContent = date;
    getCurrentDate(document.getElementById("currentDate"), true);
    getCurrentDate(document.getElementById("date"), false);

    // Lista os eventos do dia selecionado
    //document.getElementById('date').textContent = date;

}

// Altera a data atráves do formulário
function setDate(form) {
    let newDate = new Date(form.date.value);
    date = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() + 1);
    generateCalendar();
    return false;
}

// Método Muda o mês e o ano do topo do calendário
function changeHeader(dateHeader) {
    const month = document.getElementById("month-header");
    if (month.childNodes[0]) {
        month.removeChild(month.childNodes[0]);
    }
    const headerMonth = document.createElement("h1");
    const textMonth = document.createTextNode(months[dateHeader.getMonth()].substring(0, 3) + " " + dateHeader.getFullYear());
    headerMonth.appendChild(textMonth);
    month.appendChild(headerMonth);
}

// Função para mudar a cor do botão do dia que está ativo
function changeActive() {
    let btnList = document.querySelectorAll('button.active');
    btnList.forEach(btn => {
        btn.classList.remove('active');
    });
    btnList = document.getElementsByClassName('btn-day');
    for (let i = 0; i < btnList.length; i++) {
        const btn = btnList[i];
        if (btn.textContent === (date.getDate()).toString()) {
            btn.classList.add('active');
        }
    }
}

// Função que pega a data atual
function resetDate() {
    date = new Date();
    generateCalendar();
}

// Muda a data pelo numero do botão clicado
function changeDate(button) {
    let newDay = parseInt(button.textContent);
    date = new Date(date.getFullYear(), date.getMonth(), newDay);
    generateCalendar(); 
}

// Funções de avançar e retroceder mês e dia
function nextMonth() {
    date = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    generateCalendar(date);
}

function prevMonth() {
    date = new Date(date.getFullYear(), date.getMonth() - 1, 1);
    generateCalendar(date);
}


function prevDay() {
    date = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1);
    generateCalendar();
}

function nextDay() {
    date = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
    generateCalendar();
}

document.onload = generateCalendar(date);

/*----------------navbar-----------------*/
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
    firebase.auth().signOut().then(login() {
        // logout successfully
    }).catch(function(error) {
        // error happened
        window.alert("Ocorreu um erro, tente novamente");
    });
}

function login() {
    window.open('index.html','_self');
}

//------------------------eventos----------------------------
window.addEventListener('load', () => {
	const form = document.querySelector("#new-event-form");
	const input = document.querySelector("#new-event-input");
	const list_el = document.querySelector("#events");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const event = input.value;

		const event_el = document.createElement('div');
		event_el.classList.add('event');

		const event_content_el = document.createElement('div');
		event_content_el.classList.add('content');

		event_el.appendChild(event_content_el);

		const event_input_el = document.createElement('input');
		event_input_el.classList.add('text');
		event_input_el.type = 'text';
		event_input_el.value = event;
		event_input_el.setAttribute('readonly', 'readonly');

		event_content_el.appendChild(event_input_el);

		const event_actions_el = document.createElement('div');
		event_actions_el.classList.add('actions');
		
		const event_edit_el = document.createElement('button');
		event_edit_el.classList.add('edit');
		event_edit_el.innerText = 'Edit';

		const event_delete_el = document.createElement('button');
		event_delete_el.classList.add('delete');
		event_delete_el.innerText = 'Delete';

		event_actions_el.appendChild(event_edit_el);
		event_actions_el.appendChild(event_delete_el);

		event_el.appendChild(event_actions_el);

		list_el.appendChild(event_el);

		input.value = '';

		event_edit_el.addEventListener('click', (e) => {
			if (event_edit_el.innerText.toLowerCase() == "edit") {
				event_edit_el.innerText = "Save";
				event_input_el.removeAttribute("readonly");
				event_input_el.focus();
			} else {
				event_edit_el.innerText = "Edit";
				event_input_el.setAttribute("readonly", "readonly");
			}
		});

		event_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(event_el);
		});
	});
});

/*--------------------------------login-------------------------------- */
firebase.auth().onAuthStateChanged((user) => {
    if(!user) {
        // Usuario conectado
        location.replace = "index.html";
    } else {
        // Usuario não conectado
    }
});

