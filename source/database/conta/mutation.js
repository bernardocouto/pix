export default `
    CreateConta(numero: String!, agenciaNumero: String!): Conta @cypher(statement: "CREATE (c:Conta { numero: $numero }) WITH c MATCH (a:Agencia) WHERE a.numero = $agenciaNumero MERGE (a)-[:CONTA]->(c) RETURN a, c")
`;
