Feature: Cadastrar Usuário
    Como uma pessoa qualquer
    Desejo registrar informações de usuário
    Para poder manipular estas informações livremente

    Background: Acessar a tela de cadastro de usuário
        Given acessei a tela cadastrar usuário

    Scenario: Deve ser possível cadastrar um usuário informando nome e e-mail válidos
        When informo os dados válidos do usuário
            | nome  | rosicleia           |
            | email | rosicleia@email.com |
        Then visualizo a mensagem "Usuário salvo com sucesso!"

    Scenario: Deve ser possível cadastrar um usuário informando 4 caracteres válidos no nome
        When informo o nome com 4 caracteres válidos
            | nome  | rosi                |
            | email | rosicleia@email.com |
        Then visualizo a mensagem "Usuário salvo com sucesso!"

    Scenario: Deve ser possível cadastrar um usuário informando 100 caracteres válidos no nome
        When informo o nome com 100 caracteres válidos
            | nome  | Pedro de Alcântara Francisco Antônio João Carlos Xavier de Paula Miguel Raffael Joaquim José Gonzaga |
            | email | pedrodealcantara@email.com                                                                           |
        Then visualizo a mensagem "Usuário salvo com sucesso!"

    Scenario: Deve ser possível cadastrar um usuário informando 60 caracteres válidos no e-mail
        When informo o e-mail com 60 caracteres válidos
            | nome  | pedro                                                        |
            | email | pedrodealcantarafranciscoantaniojoaocarlosxavierde@email.com |
        Then visualizo a mensagem "Usuário salvo com sucesso!"

    Scenario: Não deve ser possível cadastrar um usuário com e-mail já utilizado no cadastro de outro usuário.
        When informo um e-mail já utilizado
            | nome  | rosicleia           |
            | email | rosicleia@email.com |
        Then visualizo a mensagem de erro "Este e-mail já é utilizado por outro usuário."

    Scenario: Não deve ser possível cadastrar um usuário informando caracteres numéricos no nome
        When informo o nome com caracteres numéricos
            | nome  | 1234                |
            | email | rosicleia@email.com |
        Then visualizo a mensagem de erro: Formato do nome é inválido "Formato do nome é inválido."

    Scenario: Não deve ser possível cadastrar um usuário informando caracteres especiais no nome
        When informo o nome com caracteres especiais
            | nome  | @#$%*&              |
            | email | rosicleia@email.com |
        Then visualizo a mensagem de erro: Formato do nome é inválido "Formato do nome é inválido."

    Scenario: Não deve ser possível cadastrar um usuário informando menos de 4 letras no nome
        When informo o nome com menos de 4 letras
            | nome  | ro                  |
            | email | rosicleia@email.com |
        Then visualizo a mensagem de erro: Informe pelo menos 4 letras para o nome "Informe pelo menos 4 letras para o nome."

    Scenario: Não deve ser possível cadastrar um usuário informando mais de 100 caracteres no nome
        When informo o nome com mais de 100 caracteres
            | nome  | Pedro de Alcântara Francisco Antônio João Carlos Xavier de Paula Miguel Rafael Joaquim José Gonzaga Pascoal Cipriano Serafim de Bragança e Bourbon |
            | email | rosicleia@email.com                                                                                                                                |
        Then visualizo a mensagem de erro: Informe no máximo 100 caracteres para o nome "Informe no máximo 100 caracteres para o nome"

    Scenario: Não deve ser possível cadastrar um usuário informando e-mail sem o @
        When informo o e-mail sem o @
            | nome  | rosicleia      |
            | email | rosicleiaemail |
        Then visualizo a mensagem de erro: Formato de e-mail inválido "Formato de e-mail inválido"

    Scenario: Não deve ser possível cadastrar um usuário informando e-mail sem um dominio após o @
        When informo o e-mail sem o domínio após o @
            | nome  | rosicleia  |
            | email | rosicleia@ |
        Then visualizo a mensagem de erro: Formato de e-mail inválido "Formato de e-mail inválido"

    Scenario: Não deve ser possível cadastrar um usuário informando e-mail inválido
        When informo o e-mail inválido
            | nome  | rosicleia       |
            | email | rosicleia@email |
        Then visualizo a mensagem de erro: Formato de e-mail inválido "Formato de e-mail inválido"

    Scenario: Não deve ser possível cadastrar um usuário informando e-mail sem uma parte após o ponto
        When informo o e-mail sem uma parte após o ponto
            | nome  | rosicleia        |
            | email | rosicleia@email. |
        Then visualizo a mensagem de erro: Formato de e-mail inválido "Formato de e-mail inválido"

    Scenario: Não deve ser possível cadastrar um usuário informando caracteres especiais no e-mail
        When informo o e-mail com caracteres especiais
            | nome  | rosicleia        |
            | email | !@#$% @email.com |
        Then visualizo a mensagem de erro: Formato de e-mail inválido "Formato de e-mail inválido"

    Scenario: Não deve ser possível cadastrar um usuário informando menos de 4 caracteres no e-mail
        When informo o e-mail com menos de 4 caracteres
            | nome  | rosicleia |
            | email | rs        |
        Then visualizo a mensagem de erro: Informe pelo menos 4 caracteres para o e-mail "Informe pelo menos 4 caracteres para o e-mail."

    Scenario: Não deve ser possível cadastrar um usuário informando mais de 60 caracteres no e-mail
        When informo o e-mail com mais de 60 caracteres
            | nome  | rosicleia                                                                     |
            | email | pedrodealcantarafranciscoantaniojoaocarlosxavierdepaulamiguelrafael@email.com |
        Then visualizo a mensagem de erro: Informe no máximo 60 caracteres para o e-mail "Informe no máximo 60 caracteres para o e-mail"

    Scenario: Não deve ser possível cadastrar um usuário sem informar nome e e-mail
        When não informo o nome e o e-mail
        Then visualizo a mensagem de erro: O campo nome é obrigatório "O campo nome é obrigatório."
        And visualizo a mensagem de erro: O campo e-mail é obrigatório "O campo e-mail é obrigatório."

    Scenario: Não deve ser possível cadastrar um usuário sem informar o nome
        When informo somente o e-mail válido
            | email | rosicleia@email.com |
        Then visualizo a mensagem de erro: O campo nome é obrigatório "O campo nome é obrigatório."

    Scenario: Não deve ser possível cadastrar um usuário sem informar o e-mail
        When informo somente o nome válido
            | nome | rosicleia |
        Then visualizo a mensagem de erro: O campo e-mail é obrigatório "O campo e-mail é obrigatório."