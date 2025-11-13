function alterarStatus(ID_btn){  // função que altera o status dos botões do jogo  (Alugar ou Devolver)

    // é uma função que recupera o elemento pelo ID e salva na variavel gameClicado
    let gameSelecionado = document.getElementById(`game-${ID_btn}`);  //qdo o botão for clicado seleciona o elemento do ID do game passando por parametro o ID do botão
                                                      //classe que recupera o botão do game que foi clicado
    let imagem = gameSelecionado.querySelector('.dashboard__item__img'); // o "gameSelecionado" esta referenciando os elementos do ID e a querySelector esta procurando uma classe com elemento dashboard__item__img no game Selecionado e salvando na variavel imagem O . do '.dashboard__item__button' significa que é uma classe.
                                            // ('.dashboard__item__img') esta é uma classe que faz o game ficar com uma cor diferenciada quando alugada.
    let botao = gameSelecionado.querySelector('.dashboard__item__button'); // o "gameSelecionado" esta referenciando os elementos do ID, imagem e atribuindo ao botão.
                                        // esta é a classe do botao que foi clicado
    
    let nomeJogo = gameSelecionado.querySelector('.dashboard__item__name');// atribuindo todos os elementos anteriores ao nome do jogo
                                                    //a querySelector recupera o nome do jogo 
    alert(nomeJogo.textContent);  // (nomeJogo.textContent) nomeJogo exibe o que esta dentro da variavel, no caso a tagHtml <p>
                                // (nomeJogo.textContent)  .textContent exibe o texto que esta dentro da tagHtml Takenoko ( <p class="dashboard__item__name">Takenoko</p> )

    





}
   