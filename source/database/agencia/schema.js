export default `
    type Agencia {
        numero: String!
        banco: Banco @relation(name: "AGENCIA", direction: "IN")
        contas: [Conta] @relation(name: "CONTA", direction: "OUT")
    }
`;
