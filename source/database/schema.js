import agencia from './agencia';
import banco from './banco';
import conta from './conta';
import pessoaFisica from './pessoaFisica';
import pessoaJuridica from './pessoaJuridica';

import { makeAugmentedSchema } from 'neo4j-graphql-js';

const mutations = `
    type Mutation {
        ${agencia.mutation}
        ${banco.mutation}
        ${conta.mutation}
        ${pessoaFisica.mutation}
        ${pessoaJuridica.mutation}
    }
`;

const queries = `
    type Query {
        ${agencia.query}
        ${banco.query}
        ${conta.query}
        ${pessoaFisica.query}
        ${pessoaJuridica.query}
    }
`;

const resolver = {
    Query: Object.assign(
        agencia.resolver.Query,
        banco.resolver.Query,
        conta.resolver.Query,
        pessoaFisica.resolver.Query,
        pessoaJuridica.resolver.Query
    )
};

const schema = makeAugmentedSchema({
    config: {
        mutation: false,
        query: true
    },
    resolvers: resolver,
    typeDefs: [
        agencia.schema,
        banco.schema,
        conta.schema,
        pessoaFisica.schema,
        pessoaJuridica.schema,
        mutations,
        queries
    ].join('')
});

export { resolver, schema };
