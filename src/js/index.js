const abas = document.querySelectorAll(".aba");
abas.forEach(aba => {
    aba.addEventListener("click" , function() {

        if(aba.classList.contains("selecionado")){
            return;
        }
        seleionarAba(aba)
       
        mostrarInformacaoAba(aba)
    });
} );

function seleionarAba(aba){
        const abaSelecionada = document.querySelector(".aba.selecionado");
        abaSelecionada.classList.remove("selecionado");
        aba.classList.add("selecionado");
    }

function mostrarInformacaoAba(aba){
        const informacaoSelecionada = document.querySelector(".informacao.selecionado");
        informacaoSelecionada.classList.remove("selecionado");
        const idDoElementoDeIndormacoesDaAba = `informacao-${aba.id}`

        const informacaoASerMostrada = document.getElementById(idDoElementoDeIndormacoesDaAba)
        informacaoASerMostrada.classList.add("selecionado")
    }