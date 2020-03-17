function formatar(mascara, documento) {
    let i = documento.value.length;
    let saida = mascara.substring(0, 1);
    let texto = mascara.substring(i)
  
    if (texto.substring(0, 1) != saida) {
      documento.value += texto.substring(0, 1);
    }
}

function validarEmail() {
    let value = document.getElementById("email").value;
    let re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!re.test(value)) {
        // campo inválido, retorna false para o formulário não ser submetido
        document.getElementById("email-inv").innerText = 'E-mail inválido'
        document.getElementById("email-inv").style.display = 'block';
        document.form.email.focus();
        return false;
    }
    document.getElementById("email-inv").style.display = 'none';
    return true;
}

function validarNomeResp() {
    let value = document.getElementById("nomeResp").value;
    let re = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s]+$/;
    if (!re.test(value)) {
        // campo inválido, retorna false para o formulário não ser submetido
        document.getElementById("nomeR-inv").innerText = 'Nome do responsável inválido'
        document.getElementById("nomeR-inv").style.display = 'block';
        document.form.nomeResp.focus();
        return false;
    }
    document.getElementById("nomeR-inv").style.display = 'none';
    return true;
}

function validarNomeAluno() {
    let value = document.getElementById("nomeAluno").value;
    let re = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s]+$/;
    if (!re.test(value)) {
        // campo inválido, retorna false para o formulário não ser submetido
        document.getElementById("nomeA-inv").innerText = 'Nome do aluno inválido'
        document.getElementById("nomeA-inv").style.display = 'block';
        document.form.nomeAluno.focus();
        return false;
    }
    document.getElementById("nomeA-inv").style.display = 'none';
    return true;
}

function validarTel() {
    let value = document.getElementById("tel").value;
    let re = /^[0-9]{2}-[0-9]{5}-[0-9]{4}/g;
    if (!re.test(value)) {
        // campo inválido, retorna false para o formulário não ser submetido
        document.getElementById("cel-inv").innerText = 'Celular inválido'
        document.getElementById("cel-inv").style.display = 'block';
        document.form.tel.focus();
        return false;
    }
    document.getElementById("cel-inv").style.display = 'none';
    return true;
}
  
function validarDtNasc() {
    let value = document.getElementById("nascimento").value;
    let re = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
    if (!re.test(value)) {
        // campo inválido, retorna false para o formulário não ser submetido
        document.getElementById("data-inv").innerText = 'Data inválida'
        document.getElementById("data-inv").style.display = 'block';
        document.form.nascimento.focus();
        return false;
    }
    document.getElementById("data-inv").style.display = 'none';
    return true;
}


// chama a funcao validaTudo() ao clicar no botao
let enviarBtn = document.getElementById('enviar');
enviarBtn.addEventListener('click', function(){
    event.preventDefault()
    var check = validarTudo();
    if(check){
        let enviaForm = document.getElementById('form');
        enviaForm.submit()
    }
});

  // valida todos os campos
function validarTudo() {
    // se um deles for inválido, retorna false e o form não é submetido
    return validarEmail() && validarNomeResp() && validarTel() && validarNomeAluno() && validarDtNasc();
}