var leonardo = window.document.getElementById('leonardo');
var samantha = window.document.getElementById('samantha');
var bruna = window.document.getElementById('bruna');
var setaDireita = window.document.getElementById('setaDireita');
var setaEsquerda = window.document.getElementById('setaEsquerda');
function rolarparaDireita(){
    samantha.style = "display: none";
    bruna.style = "display: flex";
    setaDireita.style = "opacity: 0.01; cursor: inherit";
    setaEsquerda.style = "display: flex; margin-top: 55px; opacity: 1; cursor: pointer";


}
function rolarparaEsquerda(){
    samantha.style = "display: flex";
    bruna.style = "display: none";
    setaEsquerda.style = "opacity: 0.01; cursor: inherit";
    setaDireita.style = "display: flex; margin-top: 55px; opacity: 1; cursor: pointer";


}