var botao = document.querySelector('#adicionar-paciente');

botao.addEventListener('click', function(event) {
    event.preventDefault();

    var form = document.querySelector('#form-adiciona');

    var paciente = getPaciente(form);

    var pacienteTr = montaTr(paciente);

    var erros = listaErros(paciente);

    if (erros.length > 0) {
        exibeErro(erros);
        return;
    }

    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);
    form.reset();
    var ul = document.querySelector('#mensagens-erro');
    ul.innerHTML = '';

});

function getPaciente(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

    return pacienteTr;

}

function montaTd(dado, classe) {
    var td = document.createElement('td')
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function listaErros(paciente) {
    var erros = [];
    if (paciente.nome == 0) {
        erros.push('Campo Nome obrigatório');
    }
    if (paciente.peso == 0) {
        erros.push('Campo Peso obrigatório');
    }
    if (paciente.altura == 0) {
        erros.push('Campo Altura obrigatório');
    }
    if (paciente.gordura == 0) {
        erros.push('Campo Gordura obrigatório');
    }
    if (!validaPeso(paciente.peso)) {
        erros.push('Peso inválido');
    }
    if (!validaAltura(paciente.altura)) {
        erros.push('Altura Inválida')
    }
    return erros;
}

function exibeErro(erros) {
    var ul = document.querySelector('#mensagens-erro');
    ul.innerHTML = '';

    for (var i = 0; i < erros.length; i++) {
        var erro = erros[i];
        var li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    }

}
//SEGUE ABAIXO UMA ALTERNATIVA PARA O 'FOR':
/*
erros.forEach(function(erro) {
    var li = document.createElement('li');
    li.textContent = erro;
    ul.appendChild(li);
});
*/