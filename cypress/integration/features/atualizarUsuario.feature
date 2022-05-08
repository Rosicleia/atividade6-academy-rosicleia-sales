# 1. O usuário deve ser localizado através de seu identificador único.
# 2. Caso nenhum usuário seja localizado pelo identificador único, a atualização não deve ser realizada.
# 3. As informações necessárias para atualizar um usuário são: nome e email.
# 4. O formato aceito de e-mail segue o padrão nomeUtilizador@dominio.
# Exemplo: nome@email.com.
# Se o e-mail informado possuir um formato inválido, a operação de atualização deverá ser cancelada.
# 5. Não deve ser possível atualizar o e-mail de um usuário para um e-mail que já está em uso por outro usuário registrado.
# 6. Se houver a tentativa de atualizar um usuário para tenha um e-mail que já está em uso por outro usuário registrado, o processo deverá ser bloqueado com a mensagem: E-mail already in use.
# 7. Não deve ser possível atualizar o nome para que tenha mais de 100 caracteres.
# 8. Não deve ser possível atualizar o e-mail para que tenha mais de 60 caracteres.

Feature: Atualizar Usuário
    Como uma pessoa qualquer
    Desejo atualizar as informações de determinado usuário
    Para ter o registro de suas informações atualizadas

    Background: Acessar o sistema
        Given acessei o sistema

    Scenario: Deve ser possível localizar um usuário para ser atualizado informando seu identificador único válido
        When informo o identificador único válido
        Then visualizo a tela que exibe as informações do usuário

    Scenario: Não deve ser possível localizar um usuário para ser atualizado informando seu identificador único inválido
        When informo o identificador único inválido
        Then visualizo a mensagem de erro "Usuário não encontrado. Não foi possível localizar o usuário."

    Scenario: Deve ser possível atualizar um usuário informando nome e e-mail válidos
        Given acessei a tela atualizar usuário
        When informo os dados válidos do usuário
            | nome  | rosicleia atualizado          |
            | email | rosicleiaatualizado@email.com |
        Then visualizo a mensagem "Informações atualizadas com sucesso!"

    Scenario: Deve ser possível atualizar um usuário informando 4 caracteres válidos no nome
        Given acessei a tela atualizar usuário
        When informo nome com 4 caracteres válidos
            | nome  | rosi                |
            | email | rosicleia@email.com |
        Then visualizo a mensagem "Informações atualizadas com sucesso!"

    Scenario: Deve ser possível atualizar um usuário informando 100 caracteres válidos no nome
        Given acessei a tela atualizar usuário
        When informo nome com 100 caracteres válidos
            | nome  | Pedro de Alcântara Francisco Antônio João Carlos Xavier de Paula Miguel Raffael Joaquim José Gonzaga |
            | email | pedrodealcantara@email.com                                                                           |
        Then visualizo a mensagem "Informações atualizadas com sucesso!"

    Scenario: Deve ser possível atualizar um usuário informando 60 caracteres no e-mail
        Given acessei a tela atualizar usuário
        When informo e-mail com 60 caracteres válidos
            | nome  | rosicleia                                                    |
            | email | pedrodealcantarafranciscoantaniojoaocarlosxavierde@email.com |
        Then visualizo a mensagem "Informações atualizadas com sucesso!"

    Scenario: Não deve ser possível atualizar um usuário com e-mail já utilizado no cadastro de outro usuário.
        Given acessei a tela atualizar usuário
        When informo um e-mail já utilizado
            | nome  | rosicleia           |
            | email | rosicleia@email.com |
        Then visualizo a mensagem de erro "Este e-mail já é utilizado por outro usuário."

    Scenario: Não deve ser possível atualizar um usuário informando caracteres numéricos no nome
        Given acessei a tela atualizar usuário
        When informo o nome com caracteres numéricos
            | nome  | 1234                |
            | email | rosicleia@email.com |
        Then visualizo a mensagem de errro "Formato de nome inválido"

    Scenario: Não deve ser possível atualizar um usuário informando caracteres especiais no nome
        Given acessei a tela atualizar usuário
        When informo o nome com caracteres especiais
            | nome  | @#$%*&              |
            | email | rosicleia@email.com |
        Then visualizo a mensagem de errro "Formato de nome inválido"

    Scenario: Não deve ser possível atualizar um usuário informando menos de 4 letras no nome
        Given acessei a tela atualizar usuário
        When informo o nome com menos de 4 letras
            | nome  | ro                  |
            | email | rosicleia@email.com |
        Then visualizo a mensagem de errro "Informe pelo menos 4 letras para o nome."

    Scenario: Não deve ser possível atualizar um usuário informando mais de 100 caracteres no nome
        Given acessei a tela atualizar usuário
        When informo o nome com menos de 4 letras
            | nome  | Pedro de Alcântara Francisco Antônio João Carlos Xavier de Paula Miguel Rafael Joaquim José Gonzaga Pascoal Cipriano Serafim de Bragança e Bourbon |
            | email | rosicleia@email.com                                                                                                                                |
        Then visualizo a mensagem de errro "Informe no máximo 100 caracteres para o nome"

    Scenario: Não deve ser possível atualizar um usuário informando e-mail sem o @
        Given acessei a tela atualizar usuário
        When informo o e-mail sem o @
            | nome  | rosicleia      |
            | email | rosicleiaemail |
        Then visualizo a mensagem "Formato de e-mail inválido"
        And visualizo a mensagem de errro 'Inclua um "@" no endereço de e-mail. "xxxx" esta com um "@" faltando.'

    Scenario: Não deve ser possível atualizar um usuário informando e-mail sem um dominio após o @
        Given acessei a tela atualizar usuário
        When informo o e-mail sem o domínio após o @
            | nome  | rosicleia  |
            | email | rosicleia@ |
        Then visualizo a mensagem de errro "Formato de e-mail inválido"
        And visualizo a mensagem de errro 'Insira uma parte depois de "@". "xxxx" esta incompleto.'

    Scenario: Não deve ser possível atualizar um usuário informando e-mail inválido
        Given acessei a tela atualizar usuário
        When informo o e-mail inválido
            | nome  | rosicleia       |
            | email | rosicleia@email |
        Then visualizo a mensagem de errro "Formato de e-mail inválido"

    Scenario: Não deve ser possível atualizar um usuário informando e-mail sem uma parte após o ponto
        Given acessei a tela atualizar usuário
        When informo o e-mail sem uma parte após o ponto
            | nome  | rosicleia        |
            | email | rosicleia@email. |
        Then visualizo a mensagem de errro "Formato de e-mail inválido"
        And visualizo a mensagem de errro '"." esta sendo usado em uma posição incorreta em "xxxx.".'

    Scenario: Não deve ser possível atualizar um usuário informando caracteres especiais no e-mail
        Given acessei a tela atualizar usuário
        When informo caracteres especiais no e-mail
            | nome  | rosicleia       |
            | email | !@#$%@email.com |
        Then visualizo a mensagem de errro "Formato de e-mail inválido"

    Scenario: Não deve ser possível atualizar um usuário informando menos de 4 caracteres no e-mail
        Given acessei a tela atualizar usuário
        When informo menos de 4 caracteres no e-mail
            | nome  | rosicleia |
            | email | r         |
        Then visualizo a mensagem de errro "Informe pelo menos 4 caracteres para o e-mail."

    Scenario: Não deve ser possível atualizar um usuário informando mais de 60 caracteres no e-mail
        Given acessei a tela atualizar usuário
        When informo mais de 60 caracteres no e-mail
            | nome  | rosicleia                                                                     |
            | email | pedrodealcantarafranciscoantaniojoaocarlosxavierdepaulamiguelrafael@email.com |
        Then visualizo a mensagem de errro "Informe no máximo 60 caracteres para o e-mail"