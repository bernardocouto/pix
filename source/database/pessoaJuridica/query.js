export default `
    GetPessoaJuridicaByCnpj(cnpj: String!): PessoaJuridica @cypher(statement: "MATCH (p:PessoaJuridica) WHERE p.cnpj = $cnpj RETURN p")
`;
