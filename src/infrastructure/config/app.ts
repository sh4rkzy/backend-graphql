import type Koa from "koa";
import cors from "@koa/cors";

export default (app: Koa): void => {
	app.use(
		cors({
			origin: "*",
			allowMethods: ["GET", "POST", "PUT", "DELETE"],
			allowHeaders: ["Content-Type", "Authorization"],
		}),
	);
};
