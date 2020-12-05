/*  console.log("funcionando legal") */

/*  capturando os elementos que vão ser manipulados com o getElementById */

let newsletter_container = document.getElementById("newsletter")

let input_nome = document.getElementById("input_nome")

let input_sobrenome = document.getElementById("input_sobrenome")

let input_email = document.getElementById("input_email")

let botao = document.getElementById("botao_newsletter")

/* criando elementos para serem adicionados ao HTML e manipulados*/

/*  esses elementos que vão servir de alerta
para o usuário caso ele ainda precise preencher
alguma informação. 
A div container_alerta vai ficar
dentro da div newsletter_container e só vai ser exibida
se tiver alguma informação a ser preenchida. 
A variável alerta vai ficar dentro da div container_alerta
junto com a lista_erros 
*/
let container_alerta = document.createElement("div")

let alerta = document.createElement("p")

let lista_erros = document.createElement("ul")

/* estilizando o container e a lista */

container_alerta.classList.add('newsletter_alerta')

lista_erros.classList.add('newsletter_lista-erro')

/*  o alerta e a lista já são ligados ao container para que durante a 
verificação (se tiver algum campo em branco) precise apenas mudar o conteúdo
*/

container_alerta.appendChild(alerta)

container_alerta.appendChild(lista_erros)

/* criando variáveis que vão servir de li's para a lista_erro
Cada uma mostra o erro eu um dos inputs */

let nome_erro = document.createElement("li")

let sobrenome_erro = document.createElement("li")

let email_erro = document.createElement("li")

lista_erros.appendChild(nome_erro)

lista_erros.appendChild(sobrenome_erro)

lista_erros.appendChild(email_erro)

//criando arrays pra poder usar o for pra otimizar 

let inputs = [input_nome, input_sobrenome, input_email]

let erros_lis = [nome_erro, sobrenome_erro, email_erro]

let erros_lis_conteudo = ["Nome", "Sobrenome", "Email"]


/*  colocando o botao para aguardar até que o clique aconteça.
assim que acontecer, ele executa uma função que indica ao usuário
se deu tudo certo com o seu cadastro.
se tiver dado certo, ele exibe um alert, se não ele exibe um aviso
escrito em tag p (usando a variável alerta) e em li's (usando as variáveis 
nome_erro, sobrenome_erro e email_erro) mostrando qual o problema
e um alerta visual mudando a cor do campo do cadastro que o usuário precisa consertar 
    */

botao.addEventListener('click', function () {
    event.preventDefault()

    newsletter_container.appendChild(container_alerta)

    /* fazendo a verficação se não tem nenhum campo em branco */
    if (input_nome.value == "" || input_sobrenome.value == "" || input_email.value == "") {
        alerta.textContent = "Preencha as informações: "

        /* verificando cada campo individualmente. se estiver
        vazio, ele é 'pintado' de vermelho e se adiciona o nome
        dele na variável alerta pra ser exibido na tela */
        
        for (let i = 0; i <= inputs.length - 1; i++) {
            if (inputs[i].value == "") {
                inputs[i].classList.add('newsletter_input-erro')
                erros_lis[i].textContent = erros_lis_conteudo[i]
            }
            else {
                erros_lis[i].textContent = ""
                if (inputs[i].classList.contains("newsletter_input-erro"))
                    inputs[i].classList.remove('newsletter_input-erro')
            }
        }
         
    }

    /*  por fim, se tudo está preenchido, o alert é exibido e se  
        e um ou mais campos tinham a classe que indicava erro,  
        ela é removida
        o container_alerta é removido para não ser mais exibido na tela */
    else {
        /* alert só pra mostrar ao usuário que deu tudo certo */
        
        alert(`Muito obrigada pela assinatura ${input_nome.value} ${input_sobrenome.value}! Seu e-mail cadastrado foi: ${input_email.value}`)

        newsletter_container.removeChild(container_alerta)

        for (let i = 0; i <= inputs.length - 1; i++) {
            inputs[i].value = ""
        }

        for (let i = 0; i <= inputs.length - 1; i++) {
            if (inputs[i].classList.contains('newsletter_input-erro')) {
                inputs[i].classList.remove('newsletter_input-erro')
            }
        }
    }
})
