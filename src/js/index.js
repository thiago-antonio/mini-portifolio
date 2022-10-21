/* 
OBJETIVO - quando clicarmos na aba temos que mostrar o 
conteudo da aba que foi selecionada pelo usuario e 
esconder p conteudo a aba annterior

- passo 1 - dar um jeito de pegar os elementos que representam
as abas no HTML

- passo 2 -  dar um jeito de indentificar o 
clique no elemento aba 

- passo 3 - quando o usuario clicar, desmarcar a aba 
selecionada 

- passo 4 - marcar a aba clicada como selecionada 

- passo 5 - esconder o conteudo anterior 

- passo 6 - mostrar p conteudo da aba selecionada 
*/

// passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML

const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {

    // passo 2 -  dar um jeito de indentificar o clique no elemento aba 
    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionada")){
            return;
        }

        selecionarAba(aba)
        mostrarInformacoesDaAba(aba)
       })
});

function selecionarAba(aba){
     // passo 3 - quando o usuario clicar, desmarcar a aba selecionada 
     const abaSelecionada = document.querySelector(".aba.selecionada");
     abaSelecionada.classList.remove("selecionada")

     // passo 4 - marcar a aba clicada como selecionada
     aba.classList.add("selecionada")
}

function mostrarInformacoesDaAba(aba){
    // passo 5 - esconder o conteudo anterior 
    const informacaoSelecionada = document.
    querySelector(".informacao.selecionada");
    informacaoSelecionada.classList.remove("selecionada")  
    
    //  passo 6 - mostrar p conteudo da aba selecionada 
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

    const informacaoASerMostrada = 
    document.getElementById(idDoElementoDeInformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionada")

}