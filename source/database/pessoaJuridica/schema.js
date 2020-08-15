export default `
    type PessoaJuridica {
        cnpj: String!
        nomeEmpresarial: String!
        nomeFantasia: String
        contas: [Conta] @relation(name: "PESSOA_JURIDICA", direction: "OUT")
    }
`;
