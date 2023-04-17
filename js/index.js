const tituloVideo = document.querySelector('#textovideo');
tituloVideo.onmouseover = () => {
    tituloVideo.className += " animate__animated animate__flash";
}

const btnCadastrar = document.querySelector('#btnCadastrar');
const nome = document.querySelector('#nome');
const senha = document.querySelector('#senha');
const confirmasenha = document.querySelector('#confirmasenha');
const email = document.querySelector('#email');

const hoje = new Date();

const hojeFormatado = dateFns.format(hoje, "DD/MM/YYYY")

toastr.options = {
    "showDuration": "150",
    "hideDuration": "500",
    "timeOut": "2500",
    "extendedTimeOut": "500",
  }

btnCadastrar.onclick = () => {
    if (!nome.value) {
        return toastr.error("Preencha o campo nome");
    } else if (!senha.value){
        return toastr.error("Preencha o campo senha");
    } else if (!confirmasenha.value){
        return toastr.error("Preencha o campo confirma senha");
    }else if (!email.value){
        return toastr.error("Preencha o campo email");
    }
    toastr.success(`Cadastro realizado com sucesso em ${hojeFormatado}`)
}

