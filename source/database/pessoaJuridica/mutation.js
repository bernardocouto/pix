export default `
    CreatePessoaJuridica(cnpj: String!, nomeEmpresarial: String!, nomeFantasia: String): PessoaJuridica @cypher(statement: "CREATE (p:PessoaJuridica { cnpj: $cnpj, nomeEmpresarial: $nomeEmpresarial, nomeFantasia: $nomeFantasia }) RETURN p")
`;
