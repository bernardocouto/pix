import { neo4jgraphql } from 'neo4j-graphql-js';

export default {
    Query: {
        GetBancoByIspb: neo4jgraphql,
        GetBancoByNumero: neo4jgraphql
    }
};
