var campoFiltro = document.querySelector('#filtra-paciente');

campoFiltro.addEventListener('input', function() {
    var pacientes = document.querySelectorAll('.paciente');

    for (var i = 0; i < pacientes.length; i++) {

        var paciente = pacientes[i];

        var nomeTd = paciente.querySelector('.info-nome');
        var nome = nomeTd.textContent;

        var expressao = new RegExp(this.value, 'i')

        if (!expressao.test(nome)) {
            paciente.classList.add('invisivel');
        } else {
            paciente.classList.remove('invisivel')
        }

    }

})