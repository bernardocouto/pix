export default `
    GetPessoaFisicaByCpf(cpf: String!): PessoaFisica @cypher(statement: "MATCH (p:PessoaFisica) WHERE p.cpf = $cpf RETURN p")
`;
