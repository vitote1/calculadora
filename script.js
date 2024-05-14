function soma(){
    let num = Number(document.getElementById('n1').value);
    let num2 = Number(document.getElementById('n2').value);
    let resultado = num + num2;
    document.getElementById('div').innerHTML = `O resultado de ${num} + ${num2} é igual à ${resultado}`;
}
function subt(){
    let num = Number(document.getElementById('n1').value);
    let num2 = Number(document.getElementById('n2').value);
    let resultado = num - num2;
    document.getElementById('div').innerHTML = `O resultado de ${num} - ${num2} é igual à ${resultado}`;
}
function mult(){
    let num = Number(document.getElementById('n1').value);
    let num2 = Number(document.getElementById('n2').value);
    let resultado = num * num2;
    document.getElementById('div').innerHTML = `O resultado de ${num} * ${num2} é igual à ${resultado}`;
}
function divisao(){
    let num = Number(document.getElementById('n1').value);
    let num2 = Number(document.getElementById('n2').value);
    let resultado = num / num2;
    document.getElementById('div').innerHTML = `O resultado de ${num} : ${num2} é igual à ${resultado}`;
}