import { schema } from './database/schema';

import { ApolloServer } from 'apollo-server';
import { auth, driver as neo4j } from 'neo4j-driver';

import dotenv from 'dotenv';

dotenv.config();

const driver = neo4j(
    `bolt://${process.env.NEO4J_URL}:7687`,
    auth.basic(
        'neo4j',
        process.env.NEO4J_PASSWORD
    )
);

const server = new ApolloServer({
    context: ({ request }) => {
        try {
            return Object.assign({
                driver,
                request
            });
        } catch (error) {
            console.error(error);
        }
    },
    introspection: true,
    playground: true,
    schema: schema
});

server.listen(4004, '0.0.0.0').then(({ url }) => console.log(`GraphQL API ready aat ${url}`));
