export default `
    type Conta {
        numero: String!
        agencia: Agencia @relation(name: "CONTA", direction: "IN")
        titularPessoaFisica: PessoaFisica @relation(name: "PESSOA_FISICA", direction: "IN")
    }

    type AddPessoaFisica {
        from: PessoaFisica
        to: Conta
    }
`;
