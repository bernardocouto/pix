export default `
    type Conta {
        numero: String!
        agencia: Agencia @relation(name: "CONTA", direction: "IN")
    }
`;
