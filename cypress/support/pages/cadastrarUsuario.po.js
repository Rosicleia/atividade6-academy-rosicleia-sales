class CadastrarUsuarioPage {
    inputNome = "input[name='name']";
    inputEmail = "input[name='email']";

    acessarSistema() {
        cy.visit("");
    }

    acessarCadastroDeUsuario() {
        cy.visit("/novo");
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

    preencherCadastroSalvar(nome, email) {
        cy.intercept('POST', "/api/v1/users", {
            statusCode: 201,
        });
        this.preencherNome(nome);
        this.preencherEmail(email);
        this.clicarEmSalvar();
    }

    exibirMensagemDeSucesso() {
        cy.contains(".go3958317564", "Usuário salvo com sucesso!").should("be.visible");
    }
}
export var cadastrarUsuarioPage = new CadastrarUsuarioPage();