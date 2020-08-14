export default `
    GetBancoById(id: ID!): Banco @cypher(statement: "MATCH (b:Banco) WHERE b.id = $id RETURN b")
    GetBancoByIspb(ispb: String!): Banco @cypher(statement: "MATCH (b:Banco) WHERE b.ispb = $ispb RETURN b")
    GetBancoByNumero(numero: String!): Banco @cypher(statement: "MATCH (b:Banco) WHERE b.numero = $numero RETURN b")
`;
