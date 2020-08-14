export default `
    CreateAgencia(numero: String!, bancoIspb: String!): Banco @cypher(statement: "CREATE (a:Agencia { numero: $numero }) WITH a MATCH (b:Banco) WHERE b.ispb = $bancoIspb MERGE (b)-[:AGENCIA]->(a) RETURN a, b")
`;
