import { GraphQLObjectType } from "graphql";
import { CreateAccount } from "../modules/account/create-account.resolves";

export const Mutation = new GraphQLObjectType({
	name: "Mutation",
	fields: {
		createAccount: CreateAccount,
	},
});
