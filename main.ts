import { PrismaClient } from "./generated/client/deno/edge.ts";
import { Application, Router } from "https://deno.land/x/oak@v12.4.0/mod.ts";
import { load } from "https://deno.land/std@0.185.0/dotenv/mod.ts";

const envVars = await load();
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: envVars.DATABASE_URL,
    },
  },
});

const app = new Application();
const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "Hello there ✋ ✋ ✋";
});

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 5858 });
