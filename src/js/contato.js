const btnEnviar = document.querySelector("#btn-enviar");
const inputNome = document.querySelector("#nome");
toastr.options.positionClass = "toast-top-right";

btnEnviar.onclick = ()=> {
    if (!inputNome.value) {
        return toastr.error("Dados inválidos, preencha corretamente!");
    }

    toastr.success("Sua mensagem foi enviada com sucesso!");
};