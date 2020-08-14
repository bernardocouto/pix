import banco from './banco';

import { makeAugmentedSchema } from 'neo4j-graphql-js';

const mutations = `
    type Mutation {
        ${banco.mutation}
    }
`;

const queries = `
    type Query {
        ${banco.query}
    }
`;

const resolver = {
    Query: Object.assign(
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
        banco.schema,
        mutations,
        queries
    ].join('')
});

export { resolver, schema };
