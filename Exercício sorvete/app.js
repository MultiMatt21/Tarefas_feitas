const chocolate = 5
const baunilha = 3
let n1= parseFloat(prompt('Quantos sorvetes de chocolate você gostaria de saborear?'))
let n2= parseFloat(prompt('Quantos sorvetes de baunilha você gostaria de saborear?'))
let n3= n1*chocolate
let n4= n2*baunilha
let soma= n4+n3

console.log(`Sua compra ficará'${soma}` )
document.getElementById('x').innerHTML =  (`sua compra ficará ${soma}`)