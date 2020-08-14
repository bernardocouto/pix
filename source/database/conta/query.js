export default `
    GetContaByNumero(numero: String!): Conta @cypher(statement: "MATCH (c:Conta) WHERE c.numero = $numero RETURN c")
`;
