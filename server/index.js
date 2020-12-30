import koa from "koa";
import bodyParser from 'koa-bodyparser';
import logger from "koa-logger";
import cors from "koa-cors";

import Router from "koa-router";

import  { getApiResponse, deleteCache } from "./backend"

const app = new koa();

const router = new Router();

const PORT = 3000;

app.use(bodyParser());
app.use(logger());
app.use(cors());


router.get('/healthcheck', ctx => {
    console.log(ctx);
   
    ctx.body = "Server running";
    return ctx;
});

router.post('/api/search', async ctx => {
    
		const res = await getApiResponse(ctx);
		console.log(res);
    ctx.body = {
    	data: res.data,
    	source: res.source
    };
    return ctx;
});

router.get('/api/clear-cache', async ctx => {
    
	await deleteCache();
	ctx.body = {
		message: "Cache Deleted"
	};
	return ctx;
});

app.use(router.routes());



app.listen(PORT, function () {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/", PORT, PORT);
});




