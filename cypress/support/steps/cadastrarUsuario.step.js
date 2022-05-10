import { cadastrarUsuarioPage } from "../pages/cadastrarUsuario.po";

//Deve ser possível cadastrar um usuário informando nome e e-mail válidos  
Given("acessei a tela cadastrar usuário", () => {
    cadastrarUsuarioPage.acessarCadastroDeUsuario();
});

When("informo os dados válidos do usuário", (dados) => {
    var dadosUsuario = dados.rowsHash();
    cadastrarUsuarioPage.preencherCadastroESalvar(dadosUsuario.nome, dadosUsuario.email);
});

Then("visualizo a mensagem {string}", (mensagem) => {
    cadastrarUsuarioPage.exibirMensagemDeSucesso(mensagem);
});

// Deve ser possível cadastrar um usuário informando 4 caracteres válidos no nome
Given("acessei a tela cadastrar usuário", () => {
    cadastrarUsuarioPage.acessarCadastroDeUsuario();
});

When("informo o nome com 4 caracteres válidos", (dados) => {
    var dadosUsuario = dados.rowsHash();
    cadastrarUsuarioPage.preencherCadastroESalvar(dadosUsuario.nome, dadosUsuario.email);
});

Then("visualizo a mensagem {string}", (mensagem) => {
    cadastrarUsuarioPage.exibirMensagemDeSucesso(mensagem);
});

//Deve ser possível cadastrar um usuário informando 100 caracteres válidos no nome
Given("acessei a tela cadastrar usuário", () => {
    cadastrarUsuarioPage.acessarCadastroDeUsuario();
});

When("informo o nome com 100 caracteres válidos", (dados) => {
    var dadosUsuario = dados.rowsHash();
    cadastrarUsuarioPage.preencherCadastroESalvar(dadosUsuario.nome, dadosUsuario.email);
});

Then("visualizo a mensagem {string}", (mensagem) => {
    cadastrarUsuarioPage.exibirMensagemDeSucesso(mensagem);
});

//Deve ser possível cadastrar um usuário informando 60 caracteres válidos no e-mail
Given("acessei a tela cadastrar usuário", () => {
    cadastrarUsuarioPage.acessarCadastroDeUsuario();
});

When("informo o e-mail com 60 caracteres válidos", (dados) => {
    var dadosUsuario = dados.rowsHash();
    cadastrarUsuarioPage.preencherCadastroESalvar(dadosUsuario.nome, dadosUsuario.email);
});

Then("visualizo a mensagem {string}", (mensagem) => {
    cadastrarUsuarioPage.exibirMensagemDeSucesso(mensagem);
});

//Não deve ser possível cadastrar um usuário com e-mail já utilizado no cadastro de outro usuário.
Given("acessei a tela cadastrar usuário", () => {
    cadastrarUsuarioPage.acessarCadastroDeUsuario();
});

When("informo um e-mail já utilizado", (dados) => {
    var dadosUsuario = dados.rowsHash();
    cadastrarUsuarioPage.preencherCadastroEmailJaUtilizado(dadosUsuario.nome, dadosUsuario.email);
});

Then("visualizo a mensagem de erro {string}", (mensagemErro) => {
    cadastrarUsuarioPage.exibirMensagemErroEmailJaUtilizadoEFecharBotaoCancelar(mensagemErro);
});

//Não deve ser possível cadastrar um usuário informando caracteres numéricos no nome
Given("acessei a tela cadastrar usuário", () => {
    cadastrarUsuarioPage.acessarCadastroDeUsuario();
});

When("informo o nome com caracteres numéricos", (dados) => {
    var dadosUsuario = dados.rowsHash();
    cadastrarUsuarioPage.preencherNomeEmailIncorretos(dadosUsuario.nome, dadosUsuario.email);
});

Then("visualizo a mensagem de errro: Formato do nome é inválido {string}", (mensagemErro) => {
    cadastrarUsuarioPage.exibirMensagemErroFormatoNomeInvalido(mensagemErro);
});

//Não deve ser possível cadastrar um usuário informando caracteres especiais no nome
Given("acessei a tela cadastrar usuário", () => {
    cadastrarUsuarioPage.acessarCadastroDeUsuario();
});

When("informo o nome com caracteres especiais", (dados) => {
    var dadosUsuario = dados.rowsHash();
    cadastrarUsuarioPage.preencherNomeEmailIncorretos(dadosUsuario.nome, dadosUsuario.email);
});

Then("visualizo a mensagem de erro: Formato do nome é inválido {string}", (mensagemErro) => {
    cadastrarUsuarioPage.exibirMensagemErroFormatoNomeInvalido(mensagemErro);
});

//Não deve ser possível cadastrar um usuário informando menos de 4 letras no nome
Given("acessei a tela cadastrar usuário", () => {
    cadastrarUsuarioPage.acessarCadastroDeUsuario();
});

When("informo o nome com menos de 4 letras", (dados) => {
    var dadosUsuario = dados.rowsHash();
    cadastrarUsuarioPage.preencherNomeEmailIncorretos(dadosUsuario.nome, dadosUsuario.email);
});

Then("visualizo a mensagem de erro: Informe pelo menos 4 letras para o nome {string}", (mensagemErro) => {
    cadastrarUsuarioPage.exibirMensagemErroInformar4LetrasNoNome(mensagemErro);
});

//Não deve ser possível cadastrar um usuário informando mais de 100 caracteres no nome
Given("acessei a tela cadastrar usuário", () => {
    cadastrarUsuarioPage.acessarCadastroDeUsuario();
});

When("informo o nome com mais de 100 caracteres", (dados) => {
    var dadosUsuario = dados.rowsHash();
    cadastrarUsuarioPage.preencherNomeEmailIncorretos(dadosUsuario.nome, dadosUsuario.email);
});

Then("visualizo a mensagem de erro: Informe no máximo 100 caracteres para o nome {string}", (mensagemErro) => {
    cadastrarUsuarioPage.exibirMensagemErroInformarMaximo100caracteresNoNome(mensagemErro);
});

//Não deve ser possível cadastrar um usuário informando e-mail sem o @
Given("acessei a tela cadastrar usuário", () => {
    cadastrarUsuarioPage.acessarCadastroDeUsuario();
});

When("informo o e-mail sem o @", (dados) => {
    var dadosUsuario = dados.rowsHash();
    cadastrarUsuarioPage.preencherNomeEmailIncorretos(dadosUsuario.nome, dadosUsuario.email);
});

Then("visualizo a mensagem de erro: Formato de e-mail inválido {string}", (mensagemErro) => {
    cadastrarUsuarioPage.exibirMensagemErroFormatoEmailInvalido(mensagemErro);
});

//Não deve ser possível cadastrar um usuário informando e-mail sem um dominio após o @
Given("acessei a tela cadastrar usuário", () => {
    cadastrarUsuarioPage.acessarCadastroDeUsuario();
});

When("informo o e-mail sem o domínio após o @", (dados) => {
    var dadosUsuario = dados.rowsHash();
    cadastrarUsuarioPage.preencherNomeEmailIncorretos(dadosUsuario.nome, dadosUsuario.email);
});

Then("visualizo a mensagem de erro: Formato de e-mail inválido {string}", (mensagemErro) => {
    cadastrarUsuarioPage.exibirMensagemErroFormatoEmailInvalido(mensagemErro);
});

//Não deve ser possível cadastrar um usuário informando e-mail inválido
Given("acessei a tela cadastrar usuário", () => {
    cadastrarUsuarioPage.acessarCadastroDeUsuario();
});

When("informo o e-mail inválido", (dados) => {
    var dadosUsuario = dados.rowsHash();
    cadastrarUsuarioPage.preencherNomeEmailIncorretos(dadosUsuario.nome, dadosUsuario.email);
});

Then("visualizo a mensagem de erro: Formato de e-mail inválido {string}", (mensagemErro) => {
    cadastrarUsuarioPage.exibirMensagemErroFormatoEmailInvalido(mensagemErro);
});

//Não deve ser possível cadastrar um usuário informando e-mail sem uma parte após o ponto
Given("acessei a tela cadastrar usuário", () => {
    cadastrarUsuarioPage.acessarCadastroDeUsuario();
});

When("informo o e-mail sem uma parte após o ponto", (dados) => {
    var dadosUsuario = dados.rowsHash();
    cadastrarUsuarioPage.preencherNomeEmailIncorretos(dadosUsuario.nome, dadosUsuario.email);
});

Then("visualizo a mensagem de erro: Formato de e-mail inválido {string}", (mensagemErro) => {
    cadastrarUsuarioPage.exibirMensagemErroFormatoEmailInvalido(mensagemErro);
});

//Não deve ser possível cadastrar um usuário informando caracteres especiais no e-mail
Given("acessei a tela cadastrar usuário", () => {
    cadastrarUsuarioPage.acessarCadastroDeUsuario();
});

When("informo o e-mail com caracteres especiais", (dados) => {
    var dadosUsuario = dados.rowsHash();
    cadastrarUsuarioPage.preencherNomeEmailIncorretos(dadosUsuario.nome, dadosUsuario.email);
});

Then("visualizo a mensagem de erro: Formato de e-mail inválido {string}", (mensagemErro) => {
    cadastrarUsuarioPage.exibirMensagemErroFormatoEmailInvalido(mensagemErro);
});

//Não deve ser possível cadastrar um usuário informando menos de 4 caracteres no e-mail
Given("acessei a tela cadastrar usuário", () => {
    cadastrarUsuarioPage.acessarCadastroDeUsuario();
});

When("informo o e-mail com menos de 4 caracteres", (dados) => {
    var dadosUsuario = dados.rowsHash();
    cadastrarUsuarioPage.preencherNomeEmailIncorretos(dadosUsuario.nome, dadosUsuario.email);
});

Then("visualizo a mensagem de erro: Informe pelo menos 4 caracteres para o e-mail {string}", (mensagemErro) => {
    cadastrarUsuarioPage.exibirMensagemErroInformarMinimo4CaracteresNoEmail(mensagemErro);
});

//Não deve ser possível cadastrar um usuário informando mais de 60 caracteres no e-mail
Given("acessei a tela cadastrar usuário", () => {
    cadastrarUsuarioPage.acessarCadastroDeUsuario();
});

When("informo o e-mail com mais de 60 caracteres", (dados) => {
    var dadosUsuario = dados.rowsHash();
    cadastrarUsuarioPage.preencherNomeEmailIncorretos(dadosUsuario.nome, dadosUsuario.email);
});

Then("visualizo a mensagem de erro: Informe no máximo 60 caracteres para o e-mail {string}", (mensagemErro) => {
    cadastrarUsuarioPage.exibirMensagemErroInformarMaximo60CaracteresNoEmail(mensagemErro);
});

//Não deve ser possível cadastrar um usuário sem informar nome e e-mail
Given("acessei a tela cadastrar usuário", () => {
    cadastrarUsuarioPage.acessarCadastroDeUsuario();
});

When("não informo o nome e o e-mail", () => {
});

Then("visualizo a mensagem de erro: O campo nome é obrigatório {string}", (mensagemErro) => {
    cadastrarUsuarioPage.exibirMensagemErroNomeObrigatorio(mensagemErro);
});

And("visualizo a mensagem de erro: O campo e-mail é obrigatório {string}", (mensagemErro) => {
    cadastrarUsuarioPage.exibirMensagemErroEmailObrigatorio(mensagemErro);
});

//Não deve ser possível cadastrar um usuário sem informar o nome
Given("acessei a tela cadastrar usuário", () => {
    cadastrarUsuarioPage.acessarCadastroDeUsuario();
});

When("informo somente o e-mail válido", (dados) => {
    var dadosUsuario = dados.rowsHash();
    cadastrarUsuarioPage.preencherEmail(dadosUsuario.email);
});

Then("visualizo a mensagem de erro: O campo nome é obrigatório {string}", (mensagemErro) => {
    cadastrarUsuarioPage.exibirMensagemErroNomeObrigatorio(mensagemErro);
});

//Não deve ser possível cadastrar um usuário sem informar o e-mail
Given("acessei a tela cadastrar usuário", () => {
    cadastrarUsuarioPage.acessarCadastroDeUsuario();
});

When("informo somente o nome válido", (dados) => {
    var dadosUsuario = dados.rowsHash();
    cadastrarUsuarioPage.preencherNome(dadosUsuario.nome);
});

Then("visualizo a mensagem de erro: O campo e-mail é obrigatório {string}", (mensagemErro) => {
    cadastrarUsuarioPage.exibirMensagemErroNomeObrigatorio(mensagemErro);
});

//Deve ser possível retornar da tela de cadastro para a Lista de Usuários cadastrados
Given("acessei a tela cadastrar usuário", () => {
    cadastrarUsuarioPage.acessarCadastroDeUsuario();
});

When("não informo o nome e o e-mail", () => {
});

Then("visualizo o botão voltar", () => {
    cadastrarUsuarioPage.clicarEmVoltar();
});

And("visualizo a lista de usuários cadastrados", () => {
    cadastrarUsuarioPage.retornarParaListaDeUsuarios();
});

//Deve ser possível ir da tela de cadastro para a Lista de Usuários cadastrados
Given("acessei a tela cadastrar usuário", () => {
    cadastrarUsuarioPage.acessarCadastroDeUsuario();
});

When("não informo o nome e o e-mail", () => {
});

Then("visualizo o logotipo", () => {
    cadastrarUsuarioPage.clicarNoLogotipo();
});

And("visualizo a lista de usuários cadastrados", () => {
    cadastrarUsuarioPage.retornarParaListaDeUsuarios();
});