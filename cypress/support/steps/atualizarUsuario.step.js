import { atualizarUsuarioPage } from "../pages/atualizarUsuario.po";

//Deve ser possível atualizar um usuário informando nome e e-mail válidos  
Given("acessei a tela para atualizar usuário", () => {
    atualizarUsuarioPage.acessarSistemaEAtualizarUsuario();
});

When("informo os dados válidos para atualizar o usuário", (dados) => {
    var dadosAtualizadoUsuario = dados.rowsHash();
    atualizarUsuarioPage.atualizarDadosESalvar(dadosAtualizadoUsuario.nome, dadosAtualizadoUsuario.email);
});

Then("visualizo a mensagem: Informações atualizadas com sucesso! {string}", (mensagem) => {
    atualizarUsuarioPage.exibirMensagemDeSucesso(mensagem);
});

// Deve ser possível atualizar um usuário informando 4 caracteres válidos no nome
Given("acessei a tela para atualizar usuário", () => {
    atualizarUsuarioPage.acessarSistemaEAtualizarUsuario();
});

When("informo o nome com 4 caracteres válidos para atualizar o usuário", (dados) => {
    var dadosUsuario = dados.rowsHash();
    atualizarUsuarioPage.atualizarDadosESalvar(dadosUsuario.nome, dadosUsuario.email);
});

Then("visualizo a mensagem: Informações atualizadas com sucesso! {string}", (mensagem) => {
    atualizarUsuarioPage.exibirMensagemDeSucesso(mensagem);
});

//Deve ser possível atualizar um usuário informando 100 caracteres válidos no nome
Given("acessei a tela para atualizar usuário", () => {
    atualizarUsuarioPage.acessarSistemaEAtualizarUsuario();
});

When("informo o nome com 100 caracteres para atualizar o usuário", (dados) => {
    var dadosUsuario = dados.rowsHash();
    atualizarUsuarioPage.atualizarDadosESalvar(dadosUsuario.nome, dadosUsuario.email);
});

Then("visualizo a mensagem: Informações atualizadas com sucesso! {string}", (mensagem) => {
    atualizarUsuarioPage.exibirMensagemDeSucesso(mensagem);
});

//Deve ser possível atualizar um usuário informando 60 caracteres válidos no e-mail
Given("acessei a tela para atualizar usuário", () => {
    atualizarUsuarioPage.acessarSistemaEAtualizarUsuario();
});

When("informo o e-mail com 60 caracteres válidos para atualizar o usuário", (dados) => {
    var dadosUsuario = dados.rowsHash();
    atualizarUsuarioPage.atualizarDadosESalvar(dadosUsuario.nome, dadosUsuario.email);
});

Then("visualizo a mensagem: Informações atualizadas com sucesso! {string}", (mensagem) => {
    atualizarUsuarioPage.exibirMensagemDeSucesso(mensagem);
});

//Não deve ser possível atualizar um usuário com e-mail já utilizado no cadastro de outro usuário.
Given("acessei a tela atualizar usuário", () => {
    atualizarUsuarioPage.acessarSistemaEAtualizarUsuario();
});

When("informo um e-mail já utilizado para atualizar o usuário", (dados) => {
    var dadosUsuario = dados.rowsHash();
    atualizarUsuarioPage.atualizarEmailJaUtilizado(dadosUsuario.nome, dadosUsuario.email);
});

Then("visualizo a mensagem de erro: Este e-mail já é utilizado por outro usuário {string}", (mensagemErro) => {
    atualizarUsuarioPage.exibirMensagemErroEmailJaUtilizadoEFecharBotaoCancelar(mensagemErro);
});

//Não deve ser possível atualizar um usuário informando caracteres numéricos no nome
Given("acessei a tela para atualizar usuário", () => {
    atualizarUsuarioPage.acessarSistemaEAtualizarUsuario();
});

When("informo o nome com caracteres numéricos para atualizar o usuário", (dados) => {
    var dadosUsuario = dados.rowsHash();
    atualizarUsuarioPage.atualizarEmailJaUtilizado(dadosUsuario.nome, dadosUsuario.email);
});

Then("visualizo a mensagem de erro: Formato do nome é inválido, ao atualizar o usuário {string}", (mensagemErro) => {
    atualizarUsuarioPage.exibirMensagemErroFormatoNomeInvalido(mensagemErro);
});

//Não deve ser possível atualizar um usuário informando caracteres especiais no nome
Given("acessei a tela para atualizar usuário", () => {
    atualizarUsuarioPage.acessarSistemaEAtualizarUsuario();
});

When("informo o nome com caracteres especiais para atualizar o usuário", (dados) => {
    var dadosUsuario = dados.rowsHash();
    atualizarUsuarioPage.atualizarEmailJaUtilizado(dadosUsuario.nome, dadosUsuario.email);
});

Then("visualizo a mensagem de erro: Formato do nome é inválido, ao atualizar o usuário {string}", (mensagemErro) => {
    atualizarUsuarioPage.exibirMensagemErroFormatoNomeInvalido(mensagemErro);
});

//Não deve ser possível atualizar um usuário informando menos de 4 letras no nome
Given("acessei a tela para atualizar usuário", () => {
    atualizarUsuarioPage.acessarSistemaEAtualizarUsuario();
});

When("informo o nome com menos de 4 letras para atualizar o usuário", (dados) => {
    var dadosUsuario = dados.rowsHash();
    atualizarUsuarioPage.atualizarNomeEmailIncorretos(dadosUsuario.nome, dadosUsuario.email);
});

Then("visualizo a mensagem de erro: Informe pelo menos 4 letras para o nome, ao atualizar o usuário {string}", (mensagemErro) => {
    atualizarUsuarioPage.exibirMensagemErroInformar4LetrasNoNome(mensagemErro);
});

//Não deve ser possível atualizar um usuário informando mais de 100 caracteres no nome
Given("acessei a tela para atualizar usuário", () => {
    atualizarUsuarioPage.acessarSistemaEAtualizarUsuario();
});

When("informo o nome com mais de 100 caracteres para atualizar o usuário", (dados) => {
    var dadosUsuario = dados.rowsHash();
    atualizarUsuarioPage.atualizarNomeEmailIncorretos(dadosUsuario.nome, dadosUsuario.email);
});

Then("visualizo a mensagem de erro: Informe no máximo 100 caracteres para o nome, ao atualizar o usuário {string}", (mensagemErro) => {
    atualizarUsuarioPage.exibirMensagemErroInformarMaximo100caracteresNoNome(mensagemErro);
});

//Não deve ser possível atualizar um usuário informando e-mail sem o @
Given("acessei a tela para atualizar usuário", () => {
    atualizarUsuarioPage.acessarSistemaEAtualizarUsuario();
});

When("informo o e-mail sem o @ para atualizar o usuário", (dados) => {
    var dadosUsuario = dados.rowsHash();
    atualizarUsuarioPage.atualizarNomeEmailIncorretos(dadosUsuario.nome, dadosUsuario.email);
});

Then("visualizo a mensagem de erro: Formato de e-mail inválido, ao atualizar o usuário {string}", (mensagemErro) => {
    atualizarUsuarioPage.exibirMensagemErroFormatoEmailInvalido(mensagemErro);
});

//Não deve ser possível atualizar um usuário informando e-mail sem um dominio após o @
Given("acessei a tela para atualizar usuário", () => {
    atualizarUsuarioPage.acessarSistemaEAtualizarUsuario();
});

When("informo o e-mail sem o domínio após o @ para atualizar o usuário", (dados) => {
    var dadosUsuario = dados.rowsHash();
    atualizarUsuarioPage.atualizarNomeEmailIncorretos(dadosUsuario.nome, dadosUsuario.email);
});

Then("visualizo a mensagem de erro: Formato de e-mail inválido, ao atualizar o usuário {string}", (mensagemErro) => {
    atualizarUsuarioPage.exibirMensagemErroFormatoEmailInvalido(mensagemErro);
});

//Não deve ser possível atualizar um usuário informando e-mail inválido
Given("acessei a tela para atualizar usuário", () => {
    atualizarUsuarioPage.acessarSistemaEAtualizarUsuario();
});

When("informo o e-mail inválido para atualizar o usuário", (dados) => {
    var dadosUsuario = dados.rowsHash();
    atualizarUsuarioPage.atualizarNomeEmailIncorretos(dadosUsuario.nome, dadosUsuario.email);
});

Then("visualizo a mensagem de erro: Formato de e-mail inválido, ao atualizar o usuário {string}", (mensagemErro) => {
    atualizarUsuarioPage.exibirMensagemErroFormatoEmailInvalido(mensagemErro);
});

//Não deve ser possível atualizar um usuário informando e-mail sem uma parte após o ponto
Given("acessei a tela para atualizar usuário", () => {
    atualizarUsuarioPage.acessarSistemaEAtualizarUsuario();
});

When("informo o e-mail sem uma parte após o ponto para atualizar o usuário", (dados) => {
    var dadosUsuario = dados.rowsHash();
    atualizarUsuarioPage.atualizarNomeEmailIncorretos(dadosUsuario.nome, dadosUsuario.email);
});

Then("visualizo a mensagem de erro: Formato de e-mail inválido, ao atualizar o usuário {string}", (mensagemErro) => {
    atualizarUsuarioPage.exibirMensagemErroFormatoEmailInvalido(mensagemErro);
});

//Não deve ser possível atualizar um usuário informando caracteres especiais no e-mail
Given("acessei a tela para atualizar usuário", () => {
    atualizarUsuarioPage.acessarSistemaEAtualizarUsuario();
});

When("informo o e-mail com caracteres especiais para atualizar o usuário", (dados) => {
    var dadosUsuario = dados.rowsHash();
    atualizarUsuarioPage.atualizarNomeEmailIncorretos(dadosUsuario.nome, dadosUsuario.email);
});

Then("visualizo a mensagem de erro: Formato de e-mail inválido, ao atualizar o usuário {string}", (mensagemErro) => {
    atualizarUsuarioPage.exibirMensagemErroFormatoEmailInvalido(mensagemErro);
});

//Não deve ser possível atualizar um usuário informando menos de 4 caracteres no e-mail
Given("acessei a tela para atualizar usuário", () => {
    atualizarUsuarioPage.acessarSistemaEAtualizarUsuario();
});

When("informo o e-mail com menos de 4 caracteres para atualizar o usuário", (dados) => {
    var dadosUsuario = dados.rowsHash();
    atualizarUsuarioPage.atualizarNomeEmailIncorretos(dadosUsuario.nome, dadosUsuario.email);
});

Then("visualizo a mensagem de erro: Informe pelo menos 4 caracteres para o e-mail, ao atualizar o usuário {string}", (mensagemErro) => {
    atualizarUsuarioPage.exibirMensagemErroInformarMinimo4CaracteresNoEmail(mensagemErro);
});

//Não deve ser possível atualizar um usuário informando mais de 60 caracteres no e-mail
Given("acessei a tela para atualizar usuário", () => {
    atualizarUsuarioPage.acessarSistemaEAtualizarUsuario();
});

When("informo o e-mail com mais de 60 caracteres para atualizar o usuário", (dados) => {
    var dadosUsuario = dados.rowsHash();
    atualizarUsuarioPage.atualizarNomeEmailIncorretos(dadosUsuario.nome, dadosUsuario.email);
});

Then("visualizo a mensagem de erro: Informe no máximo 60 caracteres para o e-mail, ao atualizar o usuário {string}", (mensagemErro) => {
    atualizarUsuarioPage.exibirMensagemErroInformarMaximo60CaracteresNoEmail(mensagemErro);
});

//Não deve ser possível atualizar um usuário sem informar nome e e-mail
Given("acessei a tela para atualizar usuário", () => {
    atualizarUsuarioPage.acessarSistemaEAtualizarUsuario();
});

When("não informo o nome e o e-mail para atualizar o usuário", () => {
});

Then("visualizo a mensagem de erro: O campo nome é obrigatório, ao atualizar o usuário {string}", (mensagemErro) => {
    atualizarUsuarioPage.exibirMensagemErroCamposObrigatorios(mensagemErro);
});

And("visualizo a mensagem de erro: O campo e-mail é obrigatório, ao atualizar o usuário {string}", (mensagemErro) => {
    atualizarUsuarioPage.exibirMensagemErroEmailObrigatorio1(mensagemErro);
});

//Não deve ser possível atualizar um usuário sem informar o nome
Given("acessei a tela para atualizar usuário", () => {
    atualizarUsuarioPage.acessarSistemaEAtualizarUsuario();
});

When("informo somente o e-mail válido para atualizar o usuário", (dados) => {
    var dadosUsuario = dados.rowsHash();
    atualizarUsuarioPage.atualizarSomenteEmail(dadosUsuario.email);
});

Then("visualizo a mensagem de erro: O campo nome é obrigatório, ao atualizar um usuário {string}", (mensagemErro) => {
    atualizarUsuarioPage.exibirMensagemErroNomeObrigatorio(mensagemErro);
});

//Não deve ser possível atualizar um usuário sem informar o e-mail
Given("acessei a tela para atualizar usuário", () => {
    atualizarUsuarioPage.acessarSistemaEAtualizarUsuario();
});

When("informo somente o nome válido para atualizar o usuário", (dados) => {
    var dadosUsuario = dados.rowsHash();
    atualizarUsuarioPage.atualizarSomenteNome(dadosUsuario.nome);
});

Then("visualizo a mensagem de erro: O campo e-mail é obrigatório, ao atualizar o usuário {string}", (mensagemErro) => {
    atualizarUsuarioPage.exibirMensagemErroEmailObrigatorio(mensagemErro);
});

//Deve ser possível retornar da tela de atualizar usuário para a Lista de Usuários
Given("acessei a tela para atualizar usuário", () => {
    atualizarUsuarioPage.acessarSistemaEAtualizarUsuario();
});

When("não atualizo o nome e o e-mail", () => {
});

Then("visualizo o botão voltar na tela de atualizar usuário", () => {
    atualizarUsuarioPage.clicarEmVoltar();
});

And("visualizo a lista de usuários", () => {
    atualizarUsuarioPage.retornarParaListaDeUsuarios();
});

//Deve ser possível ir da tela atualizar usuário para a Lista de Usuários
Given("acessei a tela para atualizar usuário", () => {
    atualizarUsuarioPage.acessarSistemaEAtualizarUsuario();
});

When("não atualizo o nome e o e-mail", () => {
});

Then("visualizo o logotipo na tela de atualizar usuário", () => {
    atualizarUsuarioPage.clicarNoLogotipo();
});

And("visualizo a lista de usuários", () => {
    atualizarUsuarioPage.retornarParaListaDeUsuarios();
});