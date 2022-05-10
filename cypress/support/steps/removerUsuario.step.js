import { removerUsuarioPage } from "../pages/removerUsuario.po";

//Deve ser possível remover um usuário cadastrado
Given("acessei o sistema para remover um usuário", () => {
    removerUsuarioPage.acessarSistema();
});

When("escolho um usuário para ser removido", () => {
    removerUsuarioPage.removerUsuario();
});

Then("visualizo a mensagem para remover {string}", (mensagem) => {
    removerUsuarioPage.exibeMensagem(mensagem);
});

And("confirmo a remoção do usuário", () => {
    removerUsuarioPage.clicarEmConfirmar();
});

//Não deve ser possível remover um usuário cadastrado
Given("acessei o sistema para remover um usuário", () => {
    removerUsuarioPage.acessarSistema();
});

When("escolho um usuário para ser removido", () => {
    removerUsuarioPage.removerUsuario();
});

Then("visualizo a mensagem para remover {string}", (mensagem) => {
    removerUsuarioPage.exibeMensagem(mensagem);
});

And("cancelo a remoção do usuário", () => {
    removerUsuarioPage.clicarEmCancelar();
});