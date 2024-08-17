import { Database } from "../../../config/mongo.client";
import type { Account } from "../../../../modules/types/types-account";
const datasource = new Database();

export const accountRepository = async (
	account: Account,
) => {
	const insert = await datasource.db("bank").collection("accounts").insertOne(account);

	return insert.insertedId.toHexString();
};
