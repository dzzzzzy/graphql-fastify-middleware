import { GraphQLOptions } from "apollo-server-core";
export declare type FastifyGraphQLOptionFunction = (req?: any, res?: any) => GraphQLOptions;
export declare function fastifyGraphQL(options: FastifyGraphQLOptionFunction): (req?: any, res?: any, next?: any) => any;
