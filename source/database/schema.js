import agencia from './agencia';
import banco from './banco';

import { makeAugmentedSchema } from 'neo4j-graphql-js';

const mutations = `
    type Mutation {
        ${agencia.mutation}
        ${banco.mutation}
    }
`;

const queries = `
    type Query {
        ${agencia.query}
        ${banco.query}
    }
`;

const resolver = {
    Query: Object.assign(
        agencia.resolver.Query,
        banco.resolver.Query
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
        mutations,
        queries
    ].join('')
});

export { resolver, schema };
