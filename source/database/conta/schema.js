export default `
    type Conta {
        numero: String!
        agencia: Agencia @relation(name: "CONTA", direction: "IN")
        pessoaFisica: [PessoaFisica] @relation(name: "PESSOA_FISICA", direction: "IN")
    }
`;
