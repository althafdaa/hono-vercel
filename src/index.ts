import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { HELOO } from "./something/stuff.js";

const app = new Hono();

app.get("/", (c) => {
	console.log(HELOO);
	return c.json({
		hello: "world",
	});
});

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

serve({
	fetch: app.fetch,
	port,
});
