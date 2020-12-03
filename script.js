// Treinando usar comentários pra eu poder estudar/revisar dps :) 

//console.log("funcionando legal")

// capturando os elementos que vão ser manipulados com o getElementById

let newsletter_container = document.getElementById("newsletter")

let input_nome = document.getElementById("input_nome")

let input_email = document.getElementById("input_email")

let botao = document.getElementById("botao_newsletter")

// criando um elemento p que vai servir de alerta
// para o usuário caso ele ainda precise preencher
// alguma informação

let alerta = document.createElement("p")


// o alerta já é ligado ao container para que durante a 
// verificação precise apenas mudar seu conteúdo

newsletter_container.appendChild(alerta)



// colocando o botao para aguardar até que o clique aconteça.
// assim que acontecer, ele executa uma função que indica ao usuário
// se deu tudo certo com o seu cadastro.
// se tiver dado certo, ele exibe um alert, se não ele exibe um aviso
// escrito em uma tag 'p' (usando a variável alerta) mostrando qual o problema
// e um alerta visual mudando a cor do campo do cadastro que o usuário precisa consertar 

botao.addEventListener('click', function(){
    event.preventDefault()

    // fazendo a verficação se não tem nenhum campo em branco

    if (input_nome.value == "" && input_email.value == ""){
        alerta.textContent = "Preencha as informações antes de enviar!"
        alerta.classList.add('newsletter_alerta') 

        // indicando visualmente onde precisa ser preenchido
        input_nome.classList.add('newsletter_input-erro')
        input_email.classList.add('newsletter_input-erro')
    }

    else if(input_nome.value == ""){
        alerta.textContent = "Preencha o seu nome!"
        alerta.classList.add('newsletter_alerta')

        input_nome.classList.add('newsletter_input-erro')

        // se o campo Email estava em branco na primeira verificação
        // e foi preenchido depois (deixando o campo Nome ainda vazio),   
        // quando o botão é apertado novamente a classe que indica o erro é removida
        if(input_email.classList.contains('newsletter_input-erro')){
            input_email.classList.remove('newsletter_input-erro')
        }

    }
    else if (input_email.value == ""){
        alerta.textContent = "Preencha o seu E-mail!"
        alerta.classList.add('newsletter_alerta')

        input_email.classList.add('newsletter_input-erro')

        // se o campo Nome estava em branco na primeira verificação
        // e foi preenchido depois (deixando o campo Email ainda vazio),   
        // quando o botão é apertado novamente a classe que indica o erro é removida
        if(input_nome.classList.contains('newsletter_input-erro')){
            input_nome.classList.remove('newsletter_input-erro')
        }

    }
    else {
        alerta.textContent = "Prontinho!"
        alerta.classList.add('newsletter_alerta')

        // por fim, se tudo está preenchido e um ou os dois campos 
        // tinham a classe que indicava erro, ela é removida assim que 
        // o alert é exibido
        
        if(input_nome.classList.contains('newsletter_input-erro')){
            input_nome.classList.remove('newsletter_input-erro')
        }

        if(input_email.classList.contains('newsletter_input-erro')){
            input_email.classList.remove('newsletter_input-erro')
        }

        // alert só pra mostrar ao usuário que deu tudo certo
        alert(`Muito obrigada pela assinatura ${input_nome.value}! Seu e-mail cadastrado foi: ${input_email.value}`)
    }
})