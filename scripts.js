/* a função é um trecho de codigo, que é acionaddo quando é chamado*/

/* 
variavel é uma caixa que guardamos algo para usar em um determinado tempo
*/

/* o javascript tem o poder de doninar a dom. o dom é uma arvore de elemento 
ex: body, div, header. são os elementos que se chama de a dom
*/
/* o javascript não reconhece o html e html. ele reconhece de document. toda vez que eu for criar uma variavel, preciso colocar document para o javascrip acessar o html*/
/* para selecionar uma class do html, preciso usar a teg "queryselector"
ex:
- document - é como o javascript reconhece o html
- queryselector - usado para selecionar uma class do html
*/


const form = document.querySelector(".formulario ")
const mascara = document.querySelector(".mascara-formulario ")
const header = document.querySelector (".header ")


function cliqueinobotao() {

    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"

}

function cliqueinamascara(){
    mascara.style.visibility = "hidden"
    form.style.left =" -500px"
    form.style.transform = "translateX(-50%)"
}

function faleconosco(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

