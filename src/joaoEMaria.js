const { findSourceMap } = require("module");

let joao = 1;
let maria = 2;

function getMaria(){
    return maria;
}
function getJoao(){
    return joao;
}

function setMaria(valor){
    maria = valor;
}
function setJoao(valor){
    joao = valor;
}

function deJoaoParaMaria(){
    maria += joao;
    joao = 0;
}
function deMariaParaJoao(){
    joao += maria;
    maria = 0;
}

export {getJoao,getMaria,setJoao,setMaria,deJoaoParaMaria,deMariaParaJoao};