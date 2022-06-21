let url_clientes = 'https://mockapiajax.herokuapp.com/cliente'

function newElement(tagName, className) {
	const elemento = document.createElement(tagName)
	elemento.className = className

	return elemento
}

function fillFields(response) {
	response.forEach(cliente => {
		const newCliente = newElement('div', 'clientes')

		const id = newElement('div', 'id')
		const nome = newElement('div', 'nome')
		const email = newElement('div', 'email')
		const estado = newElement('div', 'estado')
		const rg = newElement('div', 'rg')
		const cpf = newElement('div', 'cpf')

		id.innerHTML = 'id: ' + cliente.id
		nome.innerHTML = 'nome: ' + cliente.nome_completo
		email.innerHTML = 'email: ' + cliente.email
		estado.innerHTML = 'estado: ' + cliente.estado
		rg.innerHTML = 'rg: ' + cliente.rg
		cpf.innerHTML = 'cpf: ' + cliente.cpf

		newCliente.appendChild(id)
		newCliente.appendChild(nome)
		newCliente.appendChild(email)
		newCliente.appendChild(estado)
		newCliente.appendChild(rg)

		const clientes = document.querySelector('.clientes')

		clientes.appendChild(newCliente)
	})
}

function getClientes() {
	fetch(url_clientes)
		.then(response => response.json())
		// .then(response => console.log(response))
		.then(response => fillFields(response))
		.catch(error => alert(error))
}

getClientes()

function cadastraCliente() {
	fetch(url_clientes, {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		method: 'POST',
		body: JSON.stringify({
			cpf: '123321123',
			data_atualizacao: '',
			data_criacao: '19/06/2022',
			ddd: '31',
			email: 'jao@gmail.com',
			estado: 'Desativo',
			id: '777',
			nome_completo: 'Jao',
			relefone: '777777777',
			rg: 'MG777777',
		}),
	})
		.then(res => console.log(res))
		.catch(error => alert(error))
}

function deletaCliente() {
	fetch(url_clientes + '/777', {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		method: 'DELETE',
	})
		.then(res => console.log(res))
		.catch(error => alert(error))
}

function atualizaCliente() {
	fetch(url_clientes + '/777', {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		method: 'PUT',
		body: JSON.stringify({
			cpf: '77777777',
			data_atualizacao: '',
			data_criacao: '77/77/777',
			ddd: '31',
			email: 'jao@gmail.com',
			estado: 'Desativo',
			nome_completo: 'Jao',
			relefone: '777777777',
			rg: 'MG777777',
		}),
	})
		.then(res => console.log(res))
		.catch(error => alert(error))
}
