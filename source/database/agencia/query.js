export default `
    GetAgenciaByNumero(numero: String!): Banco @cypher(statement: "MATCH (a:Agencia) WHERE a.numero = $numero RETURN a")
`;
