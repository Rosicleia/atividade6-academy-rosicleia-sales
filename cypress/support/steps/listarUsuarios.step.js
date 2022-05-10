import { listarUsuariosPage } from "../pages/listarUsuarios.po";

//Deve ser possível listar todos os usuários cadastrados
Given("acessei o sistema", () => {
    listarUsuariosPage.acessarSistema();
});

When("acessei a tela que lista os usuários", () => {
    listarUsuariosPage.acessarListaDeUsuarios();
});

Then("visualizo a lista de todos os usuários cadastrados", () => {
    listarUsuariosPage.exibirListaDeUsuarios();
});

//Não deve ser possível listar usuários inexistentes
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