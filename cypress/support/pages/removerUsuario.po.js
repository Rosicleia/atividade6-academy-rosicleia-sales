class RemoverUsuarioPage {    
    usuario = {
        id: "0fc5b193-4278-4876-81e0-c653873a6c21",
        name: "rosicleia sales",
        email: "rosicleiasales@email.com",
        createdAt: "2022-05-10T02:07:01.874Z",
        updatedAt: "2022-05-10T02:17:03.787Z"
    };

    acessarSistema(){
        cy.intercept("GET", "/api/v1/users", [this.usuario]);
        cy.visit("");
    }

    removerUsuario() {
        cy.get('button[data-test="userDataDelete"]').click();
    }

    exibeMensagem() {
        cy.contains("Deseja realmente remover este usuário ?").should("be.visible");        
    }

    clicarEmConfirmar() {
        cy.contains("button", "Confirmar").click();
    }

    clicarEmCancelar() {
        cy.contains("button", "Cancelar").click();
    }
}
export var removerUsuarioPage = new RemoverUsuarioPage();