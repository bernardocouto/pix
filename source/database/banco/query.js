export default `
    GetBancoByIspb(ispb: String!): Banco @cypher(statement: "MATCH (b:Banco) WHERE b.ispb = $ispb RETURN b")
    GetBancoByNumero(numero: String!): Banco @cypher(statement: "MATCH (b:Banco) WHERE b.numero = $numero RETURN b")
`;
