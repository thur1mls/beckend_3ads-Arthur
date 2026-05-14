// funções podem ou não receber parâmetros
// são blocos reaproveitáveis

function dizOLaPessoa(){
    console.log ("olá")
}
function dizOLaPessoa(nome){
    if(typeof nome !== "string"){
        console.error("por favor, digite um valor de texto!")
    }else{
        console.log (nome + ", diz olá")
    }
}
dizOLa()
dizOLaPessoa("Pedro")
dizOLaPessoa("Maria")
dizOLaPessoa(10)