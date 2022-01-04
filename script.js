function calcular() {
    let nome = document.querySelector('.nome').value;
    let altura = document.querySelector('.altura').value;
    let peso = document.querySelector('.peso').value;
    let resultado = document.querySelector('.resultado');

    if(nome !== '' && altura != '' && peso !== ''){
        let imc = (peso / (altura * altura));
        if(imc < 18.5){
            resultado.style.display = 'flex';
            resultado.textContent = `${nome} você está na categoria MAGREZA. Precisa comer mais!!!`;
        }
        else if(imc > 18.5 && imc < 24.9){
            resultado.style.display = 'flex';
            resultado.textContent = `${nome} você está na categoria NORMAL. Parabéns!!!`;
        }
        else if(imc > 25 && imc < 29.99){
            resultado.style.display = 'flex';
            resultado.textContent = `${nome} você está na categoria SOBREPESO. Cuidado!!!`;
        }
        else if(imc > 30 && imc < 39.9){
            resultado.style.display = 'flex';
            resultado.textContent = `${nome} você está na categoria OBESIDADE. Faça um regime!!!`;
        }
        else if(imc > 40){
            resultado.style.display = 'flex';
            resultado.textContent = `${nome} você está na categoria OBESIDADE GRAVE. Procure um médico!!!`;;
        }
    }else{
        alert('preencha todos os campos');
    }
}