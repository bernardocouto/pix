export default `
    CreateBanco(ispb: String!, nome: String!, numero: String!): Banco @cypher(statement: "CREATE (b:Banco { ispb: $ispb, nome: $nome, numero: $numero }) RETURN b")
`;
