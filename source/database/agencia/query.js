export default `
    GetAgenciaByNumero(numero: String!): Agencia @cypher(statement: "MATCH (a:Agencia) WHERE a.numero = $numero RETURN a")
`;
