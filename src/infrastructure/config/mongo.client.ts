import { MongoClient, ServerApiVersion } from "mongodb";

const mongoUri =
	process.env.MONGO_URI || "mongodb://root:root@localhost:27017/";

export class Database extends MongoClient {
	constructor() {
		super(mongoUri, {
			serverApi: ServerApiVersion.v1,
			connectTimeoutMS: 3000,
		});
	}

	async connectTest() {
		await this.connect();
		console.log("Connected to MongoDB");
	}

}
