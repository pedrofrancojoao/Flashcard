function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
    <div class="cartao__conteudo">
    <h3>${categoria}</h3>
    <div class="cartao__conteudo__pergunta">
        <p>${pergunta}</p>
    </div>
    <div class="cartao__conteudo__resposta">
        <p>${resposta}</p>
    </div>
    </div>
    `

    let respostaEstaVisivel = false

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel
        cartao.classList.toggle('active', respostaEstaVisivel)
    }
    cartao.addEventListener('click', viraCartao)


    container.appendChild(cartao)

}
criaCartao(
    'Língua Portuguesa',
    'Qual a diferença entre os "porquês"?',
    '"Porque" é usado para respostas e explicações, "por que" em perguntas e frases com sentido de "pelo qual", "por quê" no final de frases, e "porquê" como substantivo, significando motivo ou razão'
)

criaCartao(
    'Geografia',
    'O que é uma indústria de base?',
    'É o setor industrial responsável por transformar matérias-primas brutas em produtos utilizados por outras indústrias'
)

criaCartao(
    'História',
    'Qual período durou o Império Romano?',
    'O Império Romano durou de 27 a.C. a 476 d.C'
)

criaCartao(
    'Lingua inglesa',
    'O que é um verbo irregular?',
    'São aqueles que não seguem o padrão de formação do passado simples e particípio passado adicionando -ed, -ied ou -d'
)

criaCartao(
    'Sociologia',
    'Quem são os clássicos da Sociologia?',
    'Émile Durkheim, Karl Marx e Max Weber'
)

criaCartao(
    'Matemática',
    'O que é uma função?',
    'é uma regra que associa cada elemento de um conjunto (chamado domínio) a um único elemento de outro conjunto (chamado contradomínio)'
)

criaCartao(
    'Química',
    'Qual o elemento mais abundante na atmosfera?',
    'Nitrogênio'
)

criaCartao(
    'Biologia',
    'Qual grupo o nome do grupo das plantas que apresentam flor e fruto?',
    'Angiospermas'
)
