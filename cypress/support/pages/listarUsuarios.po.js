class ListarUsuariosPage {
    divListaUsuarios = "#listaUsuarios";
    usuario = {
        id: "0fc5b193-4278-4876-81e0-c653873a6c21",
        name: "rosicleia sales",
        email: "rosicleiasales@email.com",
        createdAt: "2022-05-10T02:07:01.874Z",
        updatedAt: "2022-05-10T02:17:03.787Z"
    };

    acessarSistema() {
        cy.visit("");
    }

    acessarListaDeUsuarios() {
        cy.intercept("GET", "/api/v1/users", [this.usuario]); 
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