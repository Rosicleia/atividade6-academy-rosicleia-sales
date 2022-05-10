class AtualizarUsuarioPage {
    inputNome = "input[name='name']";
    inputEmail = "input[name='email']";
    usuario = {
        id: "0fc5b193-4278-4876-81e0-c653873a6c21",
        name: "rosicleia sales",
        email: "rosicleiasales@email.com",
        createdAt: "2022-05-10T02:07:01.874Z",
        updatedAt: "2022-05-10T02:17:03.787Z"
    };

    acessarSistemaEAtualizarUsuario() {
        cy.intercept("GET", "/api/v1/users", [this.usuario]);
        cy.visit("");
        cy.intercept("GET", `/api/v1/users/${this.usuario.id}`, this.usuario);
        cy.get("#userDataDetalhe").click();
    }

    clicarEmEditar() {
        cy.contains("button", "Editar").click();
        cy.get(this.inputNome).clear();
        cy.get(this.inputEmail).clear();
    }

    atualizarNome(nome) {
        cy.get(this.inputNome).type(nome);
    }

    atualizarEmail(email) {
        cy.get(this.inputEmail).type(email);
    }

    atualizarSomenteEmail(email) {
        cy.contains("button", "Editar").click();
        cy.get(this.inputNome).clear()
        cy.get(this.inputEmail).clear().type(email);
    }

    atualizarSomenteNome(nome) {
        cy.contains("button", "Editar").click();
        cy.get(this.inputEmail).clear()
        cy.get(this.inputNome).clear().type(nome);
    }

    clicarEmSalvar() {
        cy.contains("button", "Salvar").click();
    }

    atualizarDadosESalvar(nome, email) {
        cy.intercept('PUT', `/api/v1/users/${this.usuario.id}`, {
            statusCode: 200,
        });
        this.clicarEmEditar();
        this.atualizarNome(nome);
        this.atualizarEmail(email);
        this.clicarEmSalvar();
    }

    atualizarEmailJaUtilizado(nome, email) {
        cy.intercept('PUT', `/api/v1/users/${this.usuario.id}`, {
            statusCode: 422,
            body: { error: "E-mail already in use." }
        });
        this.clicarEmEditar();
        this.atualizarNome(nome);
        this.atualizarEmail(email);
        this.clicarEmSalvar();
    }

    atualizarNomeEmailIncorretos(nome, email) {
        this.clicarEmEditar();
        this.atualizarNome(nome);
        this.atualizarEmail(email);
        this.clicarEmSalvar();
    }

    exibirMensagemDeSucesso() {
        cy.contains(".go3958317564", "Informações atualizadas com sucesso!").should("be.visible");
    }   

    exibirMensagemErroEmailJaUtilizadoEFecharBotaoCancelar() {
        cy.contains(".gqUhsy", "Este e-mail já é utilizado por outro usuário.").should("be.visible");
        cy.contains("button", "Cancelar").should("be.visible").click();
    }

    exibirMensagemErroFormatoNomeInvalido() {
        cy.contains(".kseTJf", "Formato do nome é inválido.").should("be.visible");
    }

    exibirMensagemErroInformar4LetrasNoNome() {
        cy.contains(".kseTJf", "Informe pelo menos 4 letras para o nome.").should("be.visible");
    }

    exibirMensagemErroInformarMaximo100caracteresNoNome() {
        cy.contains(".kseTJf", "Informe no máximo 100 caracteres para o nome").should("be.visible");
    }

    exibirMensagemErroFormatoEmailInvalido() {
        cy.contains(".kseTJf", "Formato de e-mail inválido").should("be.visible");
    }

    exibirMensagemErroInformarMinimo4CaracteresNoEmail() {
        cy.contains(".kseTJf", "Informe pelo menos 4 caracteres para o e-mail.").should("be.visible");
    }

    exibirMensagemErroInformarMaximo60CaracteresNoEmail() {
        cy.contains(".kseTJf", "Informe no máximo 60 caracteres para o e-mail").should("be.visible");
    }

    exibirMensagemErroCamposObrigatorios() {
        this.clicarEmEditar();
        this.clicarEmSalvar();
        cy.contains(".kseTJf", "O campo nome é obrigatório.").should("be.visible");
        cy.contains(".kseTJf", "O campo e-mail é obrigatório.").should("be.visible");
    }

    exibirMensagemErroNomeObrigatorio() {
        this.clicarEmSalvar();
        cy.contains(".kseTJf", "O campo nome é obrigatório.").should("be.visible");
    }

    exibirMensagemErroEmailObrigatorio() {
        this.clicarEmSalvar();
        cy.contains(".kseTJf", "O campo e-mail é obrigatório.").should("be.visible");
    }

    exibirMensagemErroEmailObrigatorio1() {        
        cy.get(this.inputEmail).clear();
        this.clicarEmSalvar();
        cy.contains(".kseTJf", "O campo e-mail é obrigatório.").should("be.visible");
    }

    clicarEmVoltar(){
        cy.contains(".beUAqQ", "Voltar").click();
    }

    retornarParaListaDeUsuarios(){
        cy.intercept("GET", "/api/v1/users", [this.usuario]);
        cy.visit("");
    }

    clicarNoLogotipo(){
        cy.get(".jbJCFN").click();
    }
}
export var atualizarUsuarioPage = new AtualizarUsuarioPage();