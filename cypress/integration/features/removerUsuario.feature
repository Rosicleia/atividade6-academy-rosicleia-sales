# 1. O usuário a ser removido deve ser localizado através de seu identificador único.
# 2. Se um usuário não for localizado pelo identificador informado, o sistema deverá se comportar como se houvesse removido as informações do usuário.

Feature: Remover Usuário
    Como uma pessoa qualquer
    Desejo remover um usuário
    Para que suas informações não estejam mais registradas

    Background: Acessar o sistema para remover um usuário
        Given acessei o sistema para remover um usuário

    Scenario: Deve ser possível remover um usuário cadastrado 
        When escolho um usuário para ser removido
        Then visualizo a mensagem para remover "Atenção. Deseja realmente remover este usuário ?"
        And confirmo a remoção do usuário

    Scenario: Não deve ser possível remover um usuário cadastrado 
        When escolho um usuário para ser removido
        Then visualizo a mensagem para remover "Atenção. Deseja realmente remover este usuário ?"
        And cancelo a remoção do usuário