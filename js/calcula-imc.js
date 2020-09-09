var pacientes = document.querySelectorAll('.paciente');

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var pesoTd = paciente.querySelector('.info-peso');
    var peso = pesoTd.textContent;

    var alturaTd = paciente.querySelector('.info-altura');
    var altura = alturaTd.textContent;


    var imcTd = paciente.querySelector('.info-imc');

    if (!validaPeso(peso)) {
        pesoTd.textContent = 'Peso Inválido';
        imcTd.textContent = 'ERRO'
        paciente.classList.add('paciente-invalido')

    }
    if (!validaAltura(altura)) {
        alturaTd.textContent = 'Altura Inválida';
        imcTd.textContent = 'ERRO'

        paciente.classList.add('paciente-invalido')
    }
    if (validaPeso(peso) && validaAltura(altura)) {
        imcTd.textContent = calculaImc(peso, altura);

    }

}

function calculaImc(peso, altura) {
    var imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPeso(peso) {
    if (peso >= 0 && peso < 500) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura < 3.00) {
        return true;
    } else {
        return false;
    }
}