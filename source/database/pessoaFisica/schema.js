export default `
    type PessoaFisica {
        cpf: String!
        nome: String!
        sobrenome: String!
        contas: [Conta] @relation(name: "PESSOA_FISICA", direction: "OUT")
    }
`;
