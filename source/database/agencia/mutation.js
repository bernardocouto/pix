export default `
    CreateAgencia(numero: String!, bancoIspb: String!): Agencia @cypher(statement: "CREATE (a:Agencia { numero: $numero }) WITH a MATCH (b:Banco) WHERE b.ispb = $bancoIspb MERGE (b)-[:AGENCIA]->(a) RETURN a, b")
`;
