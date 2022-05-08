# 1. O usuário a ser removido deve ser localizado através de seu identificador único.
# 2. Se um usuário não for localizado pelo identificador informado, o sistema deverá se comportar como se houvesse removido as informações do usuário.

Feature: Remover Usuário
    Como uma pessoa qualquer
    Desejo remover um usuário
    Para que suas informações não estejam mais registradas

    Background: Acessar o sistema
        Given acessei o sistema

    Scenario: Deve ser possível localizar um usuário para ser removido informando seu identificador único válido
        When informo o identificador único válido
        Then visualizo a mensagem "Atenção. Deseja realmente remover este usuário ?"

    Scenario: Não deve ser possível localizar um usuário para ser removido informando seu identificador único inválido
        When informo o identificador único inválido
        Then visualizo a mensagem "Atenção. Deseja realmente remover este usuário ?"