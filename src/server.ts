import { schema } from "./schema";
import Koa from "koa";
import Router from "koa-router";
import { graphqlHTTP } from "koa-graphql";
import { createServer } from "node:http";

const app = new Koa();
const router = new Router();

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

(async () => {
	const server = createServer(app.callback());
	const port = 4000;
	server.listen(port, () => {
		console.log(`Server running on port ${port}`);
	});
})();
