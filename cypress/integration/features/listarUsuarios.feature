Feature: Listar Usuários
    Como uma pessoa qualquer
    Desejo consultar todos os usuários cadastrados
    Para ter as informações de todos os usuários

    Scenario: Deve ser possível listar todos os usuários cadastrados
        Given acessei o sistema
        When acessei a tela que lista os usuários
        Then visualizo a lista de todos os usuários cadastrados

    Scenario: Não deve ser possível listar usuários inexistentes
        Given acessei o sistema
        When acessei a tela que lista os usuários
        Then Não visualizo nenhum usuário
        And visualizo uma mensagem "Ops! Não existe nenhum usuário para ser exibido."
        And visualizo a opção para cadastrar um usuário