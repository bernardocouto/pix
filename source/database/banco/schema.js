export default `
    type Banco {
        ispb: String!
        nome: String!
        numero: String!
        agencias: [Agencia] @relation(name: "AGENCIA", direction: "OUT")
    }
`;
