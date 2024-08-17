import { GraphQLObjectType, GraphQLString, GraphQLSchema } from "graphql";
import { Mutation } from "./schemas/mutation";

const query = new GraphQLObjectType({
	name: "Query",
	fields: {
		hello: {
			type: GraphQLString,
			resolve: () => "Hello, world!",
		},
	},
});

export const schema = new GraphQLSchema({
	query,
	mutation: Mutation,
});
