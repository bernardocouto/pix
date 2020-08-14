export default `
    CreatePessoaFisica(cpf: String!, nome: String!, sobrenome: String!): PessoaFisica @cypher(statement: "CREATE (p:PessoaFisica { cpf: $cpf, nome: $nome, sobrenome: $sobrenome }) RETURN p")
`;
