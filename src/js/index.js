/* 

Objetivo - quando clicarmos na aba temos que mostrar  conteudo da aba que foi clicada
pelo usuárioe esconder o conteúdo da aba anterior

- passo 1: dar o jeito de pegar os elementos que representam as abas no html

- passo 2: dar um jeito de identificar o clique no elemento da aba

- passo 3: quando o usuario clicar, desmarcar a aba selecionada

- passo 4: marcar a aba clicada como selecionado

- passo 5: esconter o conteúdo anterior

- passo 6: mostrar o conteudo da aba selecionada

*/

// passo 1
const abas = document.querySelectorAll(".aba");

// passo 2
abas.forEach((aba => {
    aba.addEventListener("click", function(){

        if(aba.classList.contains("selecionado")){
            return;
        }

        selecionarAba(aba)
        
        mostrarInformacoesDaAba(aba)

    });
}));

function selecionarAba(aba){
           // passo 3
           const abaSelecionada = document.querySelector(".aba.selecionado");
           abaSelecionada.classList.remove("selecionado");
    
           //passo 4
           aba.classList.add("selecionado")
}

function mostrarInformacoesDaAba(aba){
           //passo 5
           const informacaoSelecionada = document.querySelector(".informacao.selecionado");
           informacaoSelecionada.classList.remove("selecionado");
   
           //passo 6
           const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`
   
           const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
           informacaoASerMostrada.classList.add("selecionado");
           
}