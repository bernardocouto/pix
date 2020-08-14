export default `
    CreateConta(numero: String!, agenciaNumero: String!): Conta @cypher(statement: "CREATE (c:Conta { numero: $numero }) WITH c MATCH (a:Agencia) WHERE a.numero = $agenciaNumero MERGE (a)-[:CONTA]->(c) RETURN a, c")

    AddTitularPessoaFisica(contaNumero: String!, pessoaFisicaCpf: String!): AddPessoaFisica @cypher(statement: "MATCH (c:Conta) WHERE c.numero = $contaNumero MATCH (p:PessoaFisica) WHERE p.cpf = $pessoaFisicaCpf MERGE (p)-[:PESSOA_FISICA]->(c) RETURN c, p")
`;
