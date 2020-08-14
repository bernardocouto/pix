import agencia from './agencia';
import banco from './banco';
import conta from './conta';

import { makeAugmentedSchema } from 'neo4j-graphql-js';

const mutations = `
    type Mutation {
        ${agencia.mutation}
        ${banco.mutation}
        ${conta.mutation}
    }
`;

const queries = `
    type Query {
        ${agencia.query}
        ${banco.query}
        ${conta.query}
    }
`;

const resolver = {
    Query: Object.assign(
        agencia.resolver.Query,
        banco.resolver.Query,
        conta.resolver.Query
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
        mutations,
        queries
    ].join('')
});

export { resolver, schema };
