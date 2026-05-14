// funções e retorno exigem o termo 'return'
// permitem tornar disponiveis o daos procesados
// reaproeitamento e açõs sequenciais
// podemos armazenar as funções e retorno 
// a variaveis, funçõe, arrayas, etc.

function meuSalario(salario) {
    const contaluz = 145.0
    const aluguel = 1350.0
    const retroSalario = salario - (contaluz+aluguel)
    console.log(retroSalario) // não serve p/usuario
    return `o resto do seu salario é ${retroSalario.toFixed(2).replace(".",".")}`
}
const resto =meuSalario(15000.0)
console.log(resto)
