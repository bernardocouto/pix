import { neo4jgraphql } from 'neo4j-graphql-js';

export default {
    Query: {
        GetBancoById: neo4jgraphql,
        GetBancoByIspb: neo4jgraphql,
        GetBancoByNumero: neo4jgraphql
    }
};
