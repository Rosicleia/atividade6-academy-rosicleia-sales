class CadastrarUsuarioPage {
    inputNome = "input[name='name']";
    inputEmail = "input[name='email']";

    acessarCadastroDeUsuario() {
        cy.visit("");
        cy.get("a[href='/users/novo']").click();
    }

    preencherNome(nome) {
        cy.get(this.inputNome).type(nome);
    }

    preencherEmail(email) {
        cy.get(this.inputEmail).type(email);
    }

    clicarEmSalvar() {
        cy.contains("button", "Salvar").click();
    }

    preencherCadastroESalvar(nome, email) {
        cy.intercept('POST', "/api/v1/users", {
            statusCode: 201,
        });
        this.preencherNome(nome);
        this.preencherEmail(email);
        this.clicarEmSalvar();
    }

    preencherCadastroEmailJaUtilizado(nome, email) {
        cy.intercept('POST', "/api/v1/users", {
            statusCode: 422,
        });
        this.preencherNome(nome);
        this.preencherEmail(email);
        this.clicarEmSalvar();
    }

    preencherNomeEmailIncorretos(nome, email) {
        this.preencherNome(nome);
        this.preencherEmail(email);
        this.clicarEmSalvar();
    }

    exibirMensagemDeSucesso() {
        cy.contains(".go3958317564", "Usuário salvo com sucesso!").should("be.visible");
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

    exibirMensagemErroNomeObrigatorio() {
        cy.get(this.inputEmail).focus();
        cy.contains(".kseTJf", "O campo nome é obrigatório.").should("be.visible");
    }

    exibirMensagemErroEmailObrigatorio() {
        this.clicarEmSalvar();
        cy.contains(".kseTJf", "O campo e-mail é obrigatório.").should("be.visible");
    }
}
export var cadastrarUsuarioPage = new CadastrarUsuarioPage();