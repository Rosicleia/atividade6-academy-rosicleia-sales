class ListarUsuariosPage {
    divListaUsuarios = "#listaUsuarios";

    acessarSistema() {
        cy.visit("");
    }

    acessarListaDeUsuarios() {
        cy.visit("");
    }

    exibirListaDeUsuarios() {
        cy.get(this.divListaUsuarios).should("be.visible");
    }

    exibirListaVaziaDeUsuarios() {
        cy.intercept("GET", "/api/v1/users", [])       
    }

    exibirMensagem(mensagem) {
        cy.contains(mensagem).should("be.visible");
    }

    exibirOpcaoCadastrar() {       
        cy.contains("Cadastre um novo usuário").should("be.visible");
    }
}
export var listarUsuariosPage = new ListarUsuariosPage();