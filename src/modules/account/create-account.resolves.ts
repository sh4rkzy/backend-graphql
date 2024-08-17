import { accountRepository } from "../../infrastructure/database/repositories/accounts/create-account.repository";
import type { Account } from "../types/types-account";
import {
	GraphQLInputObjectType,
	GraphQLObjectType,
	GraphQLString,
	type GraphQLFieldConfig,
	GraphQLInt,
} from "graphql";

export const CreateAccountInput = new GraphQLInputObjectType({
    name: "CreateAccountInput",
    fields: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        balance: { type: GraphQLInt },
    },
});

export const CreateAccountPayload = new GraphQLObjectType({
    name: "CreateAccountPayload",
    fields: {
        id: { type: GraphQLString },
    },
});

export const CreateAccount: GraphQLFieldConfig<unknown, unknown> = {
    type: CreateAccountPayload,
    args: {
        input: { type: CreateAccountInput },
    },
    resolve: async (_source, { input }) => {
        const account: Account = {
            name: input.name,
            email: input.email,
            balance: input.balance,
            created_at: new Date(),
        };

        const id = await accountRepository(account);

        return { id };
    },
};