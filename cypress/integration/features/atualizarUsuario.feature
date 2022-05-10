Feature: Atualizar Usuário
    Como uma pessoa qualquer
    Desejo atualizar as informações de determinado usuário
    Para ter o registro de suas informações atualizadas

    Background: Acessar a tela para atualizar usuário
        Given acessei a tela para atualizar usuário

    Scenario: Deve ser possível atualizar um usuário informando nome e e-mail válidos
        When informo os dados válidos para atualizar o usuário
            | nome  | rosicleia sales          |
            | email | rosicleiasales@email.com |
        Then visualizo a mensagem: Informações atualizadas com sucesso! "Informações atualizadas com sucesso!"

    Scenario: Deve ser possível atualizar um usuário informando 4 caracteres válidos no nome
        When informo o nome com 4 caracteres válidos para atualizar o usuário
            | nome  | efgh           |
            | email | efgh@email.com |
        Then visualizo a mensagem: Informações atualizadas com sucesso! "Informações atualizadas com sucesso!"

    Scenario: Deve ser possível atualizar um usuário informando 100 caracteres válidos no nome
        When informo o nome com 100 caracteres para atualizar o usuário
            | nome  | Pedro de Alcântara Francisco Antônio João Carlos Xavier de Paula Miguel Raffael Joaquim José Gonzaga |
            | email | pedrodealcantara@email.com                                                                           |
        Then visualizo a mensagem: Informações atualizadas com sucesso! "Informações atualizadas com sucesso!"

    Scenario: Deve ser possível atualizar um usuário informando 60 caracteres válidos no e-mail
        When informo o e-mail com 60 caracteres válidos para atualizar o usuário
            | nome  | pedro                                                        |
            | email | pedrodealcantarafranciscoantaniojoaocarlosxavierde@email.com |
        Then visualizo a mensagem: Informações atualizadas com sucesso! "Informações atualizadas com sucesso!"

    Scenario: Não deve ser possível atualizar um usuário com e-mail já utilizado no cadastro de outro usuário.
        When informo um e-mail já utilizado para atualizar o usuário
            | nome  | rosicleia           |
            | email | rosicleia@email.com |
        Then visualizo a mensagem de erro: Este e-mail já é utilizado por outro usuário "Este e-mail já é utilizado por outro usuário."

    Scenario: Não deve ser possível atualizar um usuário informando caracteres numéricos no nome
        When informo o nome com caracteres numéricos para atualizar o usuário
            | nome  | 1234                |
            | email | rosicleia@email.com |
        Then visualizo a mensagem de erro: Formato do nome é inválido, ao atualizar o usuário "Formato do nome é inválido."

    Scenario: Não deve ser possível atualizar um usuário informando caracteres especiais no nome
        When informo o nome com caracteres especiais para atualizar o usuário
            | nome  | @#$%*&              |
            | email | rosicleia@email.com |
        Then visualizo a mensagem de erro: Formato do nome é inválido, ao atualizar o usuário "Formato do nome é inválido."

    Scenario: Não deve ser possível atualizar um usuário informando menos de 4 letras no nome
        When informo o nome com menos de 4 letras para atualizar o usuário
            | nome  | ro                  |
            | email | rosicleia@email.com |
        Then visualizo a mensagem de erro: Informe pelo menos 4 letras para o nome, ao atualizar o usuário "Informe pelo menos 4 letras para o nome."

    Scenario: Não deve ser possível atualizar um usuário informando mais de 100 caracteres no nome
        When informo o nome com mais de 100 caracteres para atualizar o usuário
            | nome  | Pedro de Alcântara Francisco Antônio João Carlos Xavier de Paula Miguel Rafael Joaquim José Gonzaga Pascoal Cipriano Serafim de Bragança e Bourbon |
            | email | rosicleia@email.com                                                                                                                                |
        Then visualizo a mensagem de erro: Informe no máximo 100 caracteres para o nome, ao atualizar o usuário "Informe no máximo 100 caracteres para o nome"

    Scenario: Não deve ser possível atualizar um usuário informando e-mail sem o @
        When informo o e-mail sem o @ para atualizar o usuário
            | nome  | rosicleia      |
            | email | rosicleiaemail |
        Then visualizo a mensagem de erro: Formato de e-mail inválido, ao atualizar o usuário "Formato de e-mail inválido"

    Scenario: Não deve ser possível atualizar um usuário informando e-mail sem um dominio após o @
        When informo o e-mail sem o domínio após o @ para atualizar o usuário
            | nome  | rosicleia  |
            | email | rosicleia@ |
        Then visualizo a mensagem de erro: Formato de e-mail inválido, ao atualizar o usuário "Formato de e-mail inválido"

    Scenario: Não deve ser possível atualizar um usuário informando e-mail inválido
        When informo o e-mail inválido para atualizar o usuário
            | nome  | rosicleia       |
            | email | rosicleia@email |
        Then visualizo a mensagem de erro: Formato de e-mail inválido, ao atualizar o usuário "Formato de e-mail inválido"

    Scenario: Não deve ser possível atualizar um usuário informando e-mail sem uma parte após o ponto
        When informo o e-mail sem uma parte após o ponto para atualizar o usuário
            | nome  | rosicleia        |
            | email | rosicleia@email. |
        Then visualizo a mensagem de erro: Formato de e-mail inválido, ao atualizar o usuário "Formato de e-mail inválido"

    Scenario: Não deve ser possível atualizar um usuário informando caracteres especiais no e-mail
        When informo o e-mail com caracteres especiais para atualizar o usuário
            | nome  | rosicleia        |
            | email | !@#$% @email.com |
        Then visualizo a mensagem de erro: Formato de e-mail inválido, ao atualizar o usuário "Formato de e-mail inválido"

    Scenario: Não deve ser possível atualizar um usuário informando menos de 4 caracteres no e-mail
        When informo o e-mail com menos de 4 caracteres para atualizar o usuário
            | nome  | rosicleia |
            | email | rs        |
        Then visualizo a mensagem de erro: Informe pelo menos 4 caracteres para o e-mail, ao atualizar o usuário "Informe pelo menos 4 caracteres para o e-mail."

    Scenario: Não deve ser possível atualizar um usuário informando mais de 60 caracteres no e-mail
        When informo o e-mail com mais de 60 caracteres para atualizar o usuário
            | nome  | rosicleia                                                                     |
            | email | pedrodealcantarafranciscoantaniojoaocarlosxavierdepaulamiguelrafael@email.com |
        Then visualizo a mensagem de erro: Informe no máximo 60 caracteres para o e-mail, ao atualizar o usuário "Informe no máximo 60 caracteres para o e-mail"

    Scenario: Não deve ser possível atualizar um usuário sem informar nome e e-mail
        When não informo o nome e o e-mail para atualizar o usuário
        Then visualizo a mensagem de erro: O campo nome é obrigatório, ao atualizar o usuário "O campo nome é obrigatório."
        And visualizo a mensagem de erro: O campo e-mail é obrigatório, ao atualizar o usuário "O campo e-mail é obrigatório."

    Scenario: Não deve ser possível atualizar um usuário sem informar o nome
        When informo somente o e-mail válido para atualizar o usuário
            | email | rosicleia@email.com |
        Then visualizo a mensagem de erro: O campo nome é obrigatório, ao atualizar um usuário "O campo nome é obrigatório."

    Scenario: Não deve ser possível atualizar um usuário sem informar o e-mail
        When informo somente o nome válido para atualizar o usuário
            | nome | rosicleia |
        Then visualizo a mensagem de erro: O campo e-mail é obrigatório, ao atualizar o usuário "O campo e-mail é obrigatório."

    Scenario: Deve ser possível retornar da tela de atualizar usuário para a Lista de Usuários
        When não atualizo o nome e o e-mail
        Then visualizo o botão voltar na tela de atualizar usuário
        And visualizo a lista de usuários

    Scenario: Deve ser possível ir da tela atualizar usuário para a Lista de Usuários
        When não atualizo o nome e o e-mail
        Then visualizo o logotipo na tela de atualizar usuário
        And visualizo a lista de usuários