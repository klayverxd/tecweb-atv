// ======= 01 =======

function isDivisibleByThree(value) {
	return value % 3 === 0
}

// console.log(isDivisibleByThree(4))

// ======= 02 =======

const aumento = (plano, salario) => {
	let novoSalario = salario
	switch (plano) {
		case 'A':
			novoSalario += salario / 10
			break
		case 'B':
			novoSalario += salario / 15
			break
		case 'C':
			novoSalario += salario / 20
			break

		default:
			console.log('Plano errado')
	}

	return novoSalario
}

// console.log(aumento('A', 100))

// ======= 03 =======

const notas = valor => {
	let notas100 = 0
	let notas50 = 0
	let notas10 = 0
	let notas5 = 0
	let notas1 = 0

	console.log(`${valor} reais`)

	while (valor !== 0) {
		if (valor > 100) {
			notas100 = Math.floor(valor / 100)
			valor -= 100 * notas100

			notas100 !== console.log(`${notas100} nota(s) de R$100.`)
		} else if (valor >= 50) {
			notas50 = Math.floor(valor / 50)
			valor -= 50 * notas50
			notas50 !== console.log(`${notas50} nota(s) de R$50.`)
		} else if (valor >= 10) {
			notas10 = Math.floor(valor / 10)
			valor -= 10 * notas10
			notas10 !== console.log(`${notas10} nota(s) de R$10.`)
		} else if (valor >= 5) {
			notas5 = Math.floor(valor / 5)
			valor -= 5 * notas5
			notas5 !== console.log(`${notas5} nota(s) de R$5.`)
		} else if (valor >= 1) {
			notas1 = Math.floor(valor / 1)
			valor -= 1 * notas1
			notas1 !== console.log(`${notas1} nota(s) de R$1.`)
		}
	}
}

// notas(18)

// ======= 04 =======

function aprovacao(codigo, nota1, nota2, nota3) {
	let maiorNota = 0
	let total = 0

	if (nota1 > nota2) {
		if (nota1 > nota3) {
			maiorNota = nota1 * 4
			total = maiorNota + nota2 * 3 + nota3 * 3
		} else {
			maiorNota = nota3 * 4
			total = maiorNota + nota1 * 3 + nota2 * 3
		}
	} else {
		if (nota2 > nota3) {
			maiorNota = nota2 * 4
			total = maiorNota + nota1 * 3 + nota3 * 3
		} else {
			maiorNota = nota3 * 4
			total = maiorNota + nota1 * 3 + nota2 * 3
		}
	}

	let media = total / 10

	console.log(
		`Código: ${codigo}\nNotas: ${nota1} ${nota2} ${nota3}\nMédia: ${media}\nAprovação: ${
			media >= 5 ? 'APROVADO' : 'REPROVADO'
		}`
	)
}

// aprovacao(12345, 10, 10, 10)

// ======= 05 =======

const imprimeImpares = (inicio = 0, fim = 100) => {
	if (inicio > fim) {
		let auxTroca = inicio
		inicio = fim
		fim = auxTroca
	}

	let aux = inicio
	while (aux !== fim) {
		aux % 2 !== 0 && console.log(`${aux}`)
		aux++
	}
}

// imprimeImpares(0, 10)

// ======= 06 =======

function conceitoNotas(notas) {
	const conceitoD = notas.filter(nota => nota >= 0.0 && nota <= 4.9)
	const conceitoC = notas.filter(nota => nota >= 5.0 && nota <= 6.9)
	const conceitoB = notas.filter(nota => nota >= 7.0 && nota <= 8.9)
	const conceitoA = notas.filter(nota => nota >= 9.0 && nota <= 10.0)

	console.log(
		`Notas conceito D: ${conceitoD}\nNotas conceito C: ${conceitoC}\nNotas conceito B: ${conceitoB}\nNotas conceito A: ${conceitoA}`
	)
}

// conceitoNotas([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

// ======= 07 =======

let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]
vetorPilha = vetorPilha.concat(vetorAdiciona)
// console.log(vetorPilha)

// ======= 08 =======

const multiplicaInteiro = (valores, inteiro) =>
	valores.map(valor => valor * inteiro)

// console.log(multiplicaInteiro([1, 2, 3], 2))

const multiplicaInteiroSeMaiorCinco = (valores, inteiro) =>
	valores.map(valor => (valor > 5 ? valor * inteiro : valor))

// console.log(multiplicaInteiroSeMaiorCinco([1, 2, 3, 6, 7, 8], 2))

// ======= 09 =======

function Carro(velAtual = 10, velMaxima = 100) {
	this.velAtual = velAtual
	this.velMaxima = velMaxima

	this.acelerar = velocidade => (this.velAtual = velocidade)
	this.statusVelocidade = () => this.velAtual
}

const ferrari = new Carro()
ferrari.cor = 'vermelho'
ferrari.modelo = 'italia'
ferrari.acelerar = velocidade => (ferrari.velAtual = velocidade * 2)

const volvo = new Carro()
volvo.cilindradas = 'vermelho'
volvo.ligarTurbo = velocidade => (volvo.velAtual = velocidade * 4)

// ======= 10 =======

class Carro {
	constructor(velAtual = 10, velMaxima = 100) {
		this._velAtual = velAtual
		this._velMaxima = velMaxima
	}

	set acelerar(velocidade) {
		this._velAtual = velocidade
	}

	get statusVelocidade() {
		return this._velAtual
	}
}

const ferrari = new Carro()
ferrari.cor = 'vermelho'
ferrari.modelo = 'italia'
ferrari.acelerar = velocidade => (ferrari.velAtual = velocidade * 2)

const volvo = new Carro()
volvo.cilindradas = 'vermelho'
volvo.ligarTurbo = velocidade => (this._velAtual = velocidade * 4)

// ======= 11 =======

let produtos = [
	{
		codigo: 01,
		nome: 'Produto01',
		preco: 10,
		quantidade: 10,
	},
	{
		codigo: 02,
		nome: 'Produto02',
		preco: 20,
		quantidade: 20,
	},
	{
		codigo: 03,
		nome: 'Produto03',
		preco: 30,
		quantidade: 30,
	},
	{
		codigo: 04,
		nome: 'Produto04',
		preco: 40,
		quantidade: 40,
	},
	{
		codigo: 05,
		nome: 'Produto05',
		preco: 50,
		quantidade: 50,
	},
]

function pedido(codigo, qtdPedido) {
	let indexProdutoEscolhido = produtos.findIndex(
		produto => produto.codigo === codigo
	)

	if (indexProdutoEscolhido !== -1) {
		if (produtos[indexProdutoEscolhido].quantidade >= qtdPedido) {
			console.log('Produto disponível')
			produtos[indexProdutoEscolhido].quantidade -= qtdPedido
		} else {
			console.log('Produto não disponível')
		}
	} else {
		console.log('Produto não encontrado')
	}
}

// pedido(01, 8)

// ======= 12 =======
let pessoas = [
	{
		nome: 'Klayver',
		email: 'klayver@gmail.com',
		endereco: {
			rua: 'Rua xxx',
			numero: 000,
			bairro: 'Bairro xxx',
			cidade: 'Cidade xxx',
		},
		telefone: 'Telefone xxx',
		dataAniversario: {
			dia: 27,
			mes: 05,
			ano: 2001,
		},
		favorito: false,
	},
	{
		nome: 'Klayver',
		email: 'klayver@gmail.com',
		endereco: {
			rua: 'Rua xxx',
			numero: 000,
			bairro: 'Bairro xxx',
			cidade: 'Cidade xxx',
		},
		telefone: 'Telefone xxx',
		dataAniversario: {
			dia: 27,
			mes: 05,
			ano: 2001,
		},
		favorito: false,
	},
	{
		nome: 'Maria',
		email: 'maria@gmail.com',
		endereco: {
			rua: 'Rua Maria',
			numero: 000,
			bairro: 'Bairro Maria',
			cidade: 'Cidade Maria',
		},
		telefone: 'Telefone Maria',
		dataAniversario: {
			dia: 27,
			mes: 05,
			ano: 2001,
		},
		favorito: false,
	},
	{
		nome: 'Joao',
		email: 'joao@gmail.com',
		endereco: {
			rua: 'Rua Joao',
			numero: 000,
			bairro: 'Bairro Joao',
			cidade: 'Cidade Joao',
		},
		telefone: 'Telefone Joao',
		dataAniversario: {
			dia: 23,
			mes: 08,
			ano: 2005,
		},
		favorito: true,
	},
]

function imprimeDados(nome) {
	pessoas.forEach(pessoa => {
		nome ? pessoa.nome === nome && console.log(pessoa) : console.log(pessoa)
	})
}

// imprimeDados('Maria')

function imprimeDadosAniversario(mes) {
	pessoas.forEach(pessoa => {
		pessoa.dataAniversario.mes === mes && console.log(pessoa)
	})
}

// imprimeDadosAniversario(08)

function imprimeNomesOrdem() {
	let nomesPessoas = []
	pessoas.forEach(pessoa => nomesPessoas.push(pessoa.nome))

	nomesPessoas.sort()

	console.log(nomesPessoas)
}

// imprimeNomesOrdem()

function imprimeFavoritos() {
	pessoas.forEach(pessoa => pessoa.favorito && console.log(pessoa))
}

// imprimeFavoritos()
