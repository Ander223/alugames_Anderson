let gameSelecionado;
let imagem;
let botao;
let nomeJogo;
let situacao;

function alterarStatus(ID_btn){  // função que altera o status dos botões do jogo  (Alugar ou Devolver)

    // é uma função que recupera o elemento pelo ID e salva na variavel gameClicado
    gameSelecionado = document.getElementById(`game-${ID_btn}`);  //qdo o botão for clicado seleciona o elemento do ID do game passando por parametro o ID do botão
                                                      //classe que recupera o botão do game que foi clicado
    imagem = gameSelecionado.querySelector('.dashboard__item__img'); // o "gameSelecionado" esta referenciando os elementos do ID e a querySelector esta procurando uma classe com elemento dashboard__item__img no game Selecionado e salvando na variavel imagem O . do '.dashboard__item__button' significa que é uma classe.
                                            // ('.dashboard__item__img') esta é uma classe que faz o game ficar com uma cor diferenciada quando alugada. OBS: o ponto antes da dashboard__item__button significa que é uma CLASSE
    botao = gameSelecionado.querySelector('.dashboard__item__button'); // o "gameSelecionado" esta referenciando os elementos do ID, imagem e atribuindo ao botão.
                                        // esta é a classe do botao que foi clicado
    
    nomeJogo = gameSelecionado.querySelector('.dashboard__item__name');// atribuindo todos os elementos anteriores ao nome do jogo
                                                    //a querySelector recupera o nome do jogo 
///    alert(nomeJogo.textContent);  // (nomeJogo.textContent) nomeJogo exibe o que esta dentro da variavel, no caso a tagHtml <p>
                                // (nomeJogo.textContent)  .textContent exibe o texto que esta dentro da tagHtml Takenoko ( <p class="dashboard__item__name">Takenoko</p> )

                           


    if(imagem.classList.contains('dashboard__item__img--rented')){  // verifica se a classe imagem contem a classe de rentend
     

        

                                 //OBSERCAÇÃO: A CLASSE classList exibe as classes existentes para as TAGS html-
        imagem.classList.remove ('dashboard__item__img--rented');  // remove a imagem opaca e deixa brilhante
        botao.classList.remove('dashboard__item__button--return'); // no caso remove a classe ('dashboard__item__button--return')  altera a cor do botao quando devolvido (deixa claro)
        botao.textContent= 'Alugar';                                //o "textContent" inseres dentro do botao uma palavra = Alugar


       
       
                                           
       
      } else {

            
          //imagem.classList.remove ('dashboard__item__img');
             imagem.classList.add ('dashboard__item__img--rented');  // altera a cor da imagem para opaco(alugado)
             botao.classList.add('dashboard__item__button--return'); // altera a cor do botao quando alugado(deixa escuro)
             botao.textContent='Devolver';  //o "textContent" inseres dentro do botao uma palavra = Devolver

      }     
        
}