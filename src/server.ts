import { schema } from "./schema";
import Koa from "koa";
import Router from "koa-router";
import { graphqlHTTP } from "koa-graphql";
import { createServer } from "node:http";
import setupApp from "./infrastructure/config/app";
import "dotenv/config";
import { Database } from "./infrastructure/config/mongo.client";

const app = new Koa();
const router = new Router();
const database = new Database();

router.get("/status", (ctx) => {
	ctx.status = 200;
	ctx.body = "running";
});

router.all(
	"/graphql",
	graphqlHTTP({
		schema,
		graphiql: true,
	}),
);

app.use(router.routes());
setupApp(app);
(async () => {
	const server = createServer(app.callback());
	const port = process.env.PORT || 4000;
	await database.connectTest();
	server.listen(port, () => {
		console.log(`Server running on port ${port}`);
	});
})();
