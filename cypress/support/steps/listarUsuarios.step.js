import { listarUsuariosPage } from "../pages/listarUsuarios.po";

Given("acessei o sistema", () => {
    listarUsuariosPage.acessarSistema();
});

When("acessei a tela que lista os usuários", () => {
    listarUsuariosPage.acessarListaDeUsuarios();
});

Then("visualizo a lista de todos os usuários cadastrados", () => {
    listarUsuariosPage.exibirListaDeUsuarios();
});

Given("acessei o sistema", () => {
    listarUsuariosPage.acessarSistema();
});

When("acessei a tela que lista os usuários", () => {
    listarUsuariosPage.acessarListaDeUsuarios();
});

Then("Não visualizo nenhum usuário", () => {
    listarUsuariosPage.exibirListaVaziaDeUsuarios();
});

And("visualizo uma mensagem {string}", (mensagem) => {
    listarUsuariosPage.exibirMensagem(mensagem);
});

And("visualizo a opção para cadastrar um usuário", () => {
    listarUsuariosPage.exibirOpcaoCadastrar();
});