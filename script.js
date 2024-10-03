const dadosPessoa = {
    "nome": "Taynara Aparecida Sauner",
    "cpf": "00123456789",
    "endereco": "Em Algum Lugar Por Ai",
    "numero": 10,
    "complemento": "Queria saber",
    "cep": 123456789,
    "bairro": "Centro",
    "cidade": "Pato Branco",
    "estado": "Paraná",
    "sexo": "Feminino",
    "estadoCivil": "Casada",
    "profissao": "Analista de Suporte",
    "email": "thaynara.sauner@email.com",
    "telefone": "46991234567",
    "dataNascimento": "01/01/1980",
    "urls": ["https://github.com/TaynaraSauner", "https://linkedin.com/TaynaraSauner"]
}
//Montagem da div title
const divTitle = document.getElementById("title")
const h1Nome = document.createElement("h1")
h1Nome.textContent = dadosPessoa.nome
divTitle.appendChild(h1Nome)
const spanProfissao = document.createElement("span")
spanProfissao.textContent = dadosPessoa.profissao
divTitle.appendChild(spanProfissao)

//Montagem da div contact
const divContact = document.getElementById("contact")


//lista não ordenada
const listaContato = document.createElement("ul")


//Item de lista  para endereço completo
const itemEndereco = document.createElement("li")
itemEndereco.textContent = `${dadosPessoa.endereco}, ${dadosPessoa.numero}`
listaContato.appendChild(itemEndereco)

//Item de lista para o e mail
const itemEmail = document.createElement("li")
itemEmail.textContent = dadosPessoa.email
listaContato.appendChild(itemEmail)


//Item de lista para o telefone
const itemTelefone = document.createElement("li")
itemTelefone.textContent = dadosPessoa.telefone
listaContato.appendChild(itemTelefone)



//Item de lista com link para cada link da lista de links
for (url of dadosPessoa.urls) {
    const ancora = document.createElement("a")
    ancora.textContent = url
    ancora.setAttribute("href" , url)

    const itemLink = document.createElement("li")
    itemLink.appendChild(ancora)
    
    listaContato.appendChild(itemLink)
}



divContact.appendChild(listaContato)



