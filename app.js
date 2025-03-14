//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []; // Declaração global do array amigos

document.addEventListener('DOMContentLoaded', function() {
    const inputAmigo = document.getElementById('amigo');
    const buttonAdd = document.querySelector('.button-add');
    const buttonReset = document.querySelector('.button-reset');
    const buttonDraw = document.querySelector('.button-draw');
    const listaAmigos = document.getElementById('listaAmigos');
    const resultado = document.getElementById('resultado');

    
    function adicionarAmigo() {
        const nomeAmigoDigitado = inputAmigo.value.trim(); // Nome como digitado
        const nomeAmigoLower = nomeAmigoDigitado.toLowerCase(); // Nome em minúsculo
    
        if (nomeAmigoDigitado === '') {
            alert('Por favor, digite um nome válido.');
            return;
        }
    
        // Verificar se o nome já existe na lista (em minúsculo)
        if (amigos.map(amigo => amigo.toLowerCase()).includes(nomeAmigoLower)) {
            alert('Este nome já foi adicionado.');
            return;
        }
    
        amigos.push(nomeAmigoDigitado); // Adicionar o nome como digitado
        atualizarListaAmigos();
        inputAmigo.value = '';
        inputAmigo.focus();
    }

    // Função para atualizar a lista de amigos na página
    function atualizarListaAmigos() {
        listaAmigos.innerHTML = ''; // Limpar lista anterior
    
        amigos.forEach(amigo => {
            const amigoItem = document.createElement('li');
            amigoItem.textContent = amigo.toUpperCase(); // Converter para maiúsculo
            amigoItem.setAttribute('role', 'listitem');
            listaAmigos.appendChild(amigoItem);
            
        });
    }

    // Função para realizar o sorteio do amigo secreto
    function sortearAmigo() {
        if (amigos.length < 2) {
            alert('Adicione pelo menos dois amigos para realizar o sorteio.');
            return;
        }

        const indiceSorteado = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[indiceSorteado];
        exibirResultado(amigoSorteado);
    }

    // Função para exibir o resultado do sorteio na página
    function exibirResultado(amigoSorteado) {
        resultado.innerHTML = ''; // Limpar resultados anteriores

        const resultadoItem = document.createElement('li');
        resultadoItem.textContent = `Seu amigo secreto é: ${amigoSorteado}`;
        resultadoItem.setAttribute('role', 'listitem');
        resultado.appendChild(resultadoItem);
    }

    // Função para reiniciar o jogo
    function reiniciarJogo() {
        amigos = []; // Limpar o array de amigos
        atualizarListaAmigos(); // Limpar a lista exibida na página
        resultado.innerHTML = ''; // Limpar o resultado do sorteio
        inputAmigo.value = ''; // Limpar o campo de entrada
        inputAmigo.focus(); // Focar no campo de entrada
    }

    // Adicionar evento de clique ao botão "Adicionar"
    buttonAdd.addEventListener('click', adicionarAmigo);

    // Adicionar evento de clique ao botão "Reiniciar Jogo"
    buttonReset.addEventListener('click', reiniciarJogo);

    // Adicionar evento de clique ao botão "Sortear Amigo"
    buttonDraw.addEventListener('click', sortearAmigo);

    // Adicionar evento de tecla "Enter" no campo de entrada
    inputAmigo.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            adicionarAmigo();
        }
    });
});