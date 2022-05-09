import { cadastrarUsuarioPage } from "../pages/cadastrarUsuario.po";

Given("acessei o sistema", () => {
    cadastrarUsuarioPage.acessarSistema();
});

And("acessei a tela cadastrar usuário", () => {
    cadastrarUsuarioPage.acessarCadastroDeUsuario();
});

When("informo os dados válidos do usuário", (dados) => {
    var dadosUsuario = dados.rowsHash();
    cadastrarUsuarioPage.preencherCadastroSalvar(dadosUsuario.nome, dadosUsuario.email);
});

Then("visualizo a mensagem {string}", (mensagem) => {
    cadastrarUsuarioPage.exibirMensagemDeSucesso(mensagem);
});

Given("acessei o sistema", () => {
    cadastrarUsuarioPage.acessarSistema();
});

And("acessei a tela cadastrar usuário", () => {
    cadastrarUsuarioPage.acessarCadastroDeUsuario();
});

When("informo o nome com 4 caracteres válidos", (dados) => {
    var dadosUsuario = dados.rowsHash();
    cadastrarUsuarioPage.preencherCadastroSalvar(dadosUsuario.nome, dadosUsuario.email);
});

Then("visualizo a mensagem {string}", (mensagem) => {
    cadastrarUsuarioPage.exibirMensagemDeSucesso(mensagem);
});

Given("acessei o sistema", () => {
    cadastrarUsuarioPage.acessarSistema();
});

And("acessei a tela cadastrar usuário", () => {
    cadastrarUsuarioPage.acessarCadastroDeUsuario();
});

When("informo o nome com 100 caracteres válidos", (dados) => {
    var dadosUsuario = dados.rowsHash();
    cadastrarUsuarioPage.preencherCadastroSalvar(dadosUsuario.nome, dadosUsuario.email);
});

Then("visualizo a mensagem {string}", (mensagem) => {
    cadastrarUsuarioPage.exibirMensagemDeSucesso(mensagem);
});