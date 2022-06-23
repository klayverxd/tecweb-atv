let url_books = 'https://mockapiajax.herokuapp.com/livro'
let url_rent_books = 'https://mockapiajax.herokuapp.com/aluguel'
let url_sell_books = 'https://mockapiajax.herokuapp.com/venda'

function newElement(tagName, className) {
	const elemento = document.createElement(tagName)
	elemento.className = className

	return elemento
}

function fillFields(response) {
	response.forEach(book => {
		const newBook = newElement('div', 'book')

		const id = newElement('div', 'id')
		const titulo = newElement('div', 'titulo')
		const autor = newElement('div', 'autor')
		const descricao = newElement('div', 'descricao')
		const tipo = newElement('div', 'tipo')

		id.innerHTML = 'id: ' + book.id
		titulo.innerHTML = 'titulo: ' + book.nome_livro
		autor.innerHTML = 'autor: ' + book.autor
		descricao.innerHTML = 'descricao: ' + book.descricao
		tipo.innerHTML = 'tipo: ' + book.tipo

		newBook.appendChild(id)
		newBook.appendChild(titulo)
		newBook.appendChild(autor)
		newBook.appendChild(descricao)
		newBook.appendChild(tipo)

		const books = document.querySelector('.books')

		books.appendChild(newBook)
	})
}

function getLivros() {
	fetch(url_books)
		.then(response => response.json())
		.then(response => fillFields(response))
		.catch(error => alert(error))
}

getLivros()

function cadastraLivro() {
	fetch(url_books, {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		method: 'POST',
		body: JSON.stringify({
			id: 'kx-777',
			num_livro: '777',
			autor: 'KXD',
			nome_livro: 'Nome do livro',
			data_cadastro: '31/02/2022',
			descricao: 'Auto descrição',
			tipo: 'Computa',
			quantidade_estoque_venda: '777',
			quantidade_estoque_aluguel: '333',
			valor_venda: '77,77',
			valor_aluguel: '7,77',
		}),
	})
		.then(res => console.log(res))
		.catch(error => alert(error))
}

function deletaLivro() {
	fetch(url_books + '/3', {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		method: 'DELETE',
	})
		.then(res => console.log(res))
		.catch(error => alert(error))
}

function atualizaLivro() {
	fetch(url_rent_books, {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		method: 'PUT',
		body: JSON.stringify({
			num_livro: '777',
			autor: 'Sem autor',
			nome_livro: 'Nome do livro 2.0',
			data_cadastro: '31/02/2022',
			descricao: 'Auto descrição',
			tipo: 'Computa',
			quantidade_estoque_venda: '777',
			quantidade_estoque_aluguel: '333',
			valor_venda: '77,77',
			valor_aluguel: '7,77',
		}),
	})
		.then(res => console.log(res))
		.catch(error => alert(error))
}

function alugaLivro() {
	fetch(url_rent_books, {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		method: 'POST',
		body: JSON.stringify({
			id: '777',
			id_livro: 'kx-777',
			id_cliente: '333',
			data_aluguel: '21/06/2022',
			dias: '777',
		}),
	})
		.then(res => console.log(res))
		.catch(error => alert(error))
}

function vendeLivro() {
	fetch(url_sell_books, {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		method: 'POST',
		body: JSON.stringify({
			id: '777',
			id_livro: 'kx-777',
			id_cliente: '777',
			data_venda: '27/05/2022',
		}),
	})
		.then(res => console.log(res))
		.catch(error => alert(error))
}
