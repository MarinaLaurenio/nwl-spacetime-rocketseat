import "dotenv/config"
import fastify from "fastify";
import cors from "@fastify/cors"
import jwt from "@fastify/jwt"
import multipart from '@fastify/multipart'
import { memoriesRoutes } from "./routes/memories";
import { authRoutes } from "./routes/auth";
import { uploadRoutes } from "./routes/upload";
import { resolve } from "node:path";

const app = fastify();

app.register(multipart)

app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
})


app.register(cors, {
  origin: true, // todas as URLs de front-end poderão acessar o back-end (mudando para um http definido)
})

app.register(jwt, {
  secret: "spacetime",  // DIFERENCIAR OS TOKENS GERADOS POR ESSE BACKEND DOS GERADOS POR OUTROS BACKENDS  
})


app.register(authRoutes);
app.register(memoriesRoutes);
app.register(uploadRoutes);

app
  .listen({
    port: 3333,
    host: "0.0.0.0", //para funcionar no mobile
  })
  .then(() => {
    console.log("🚀 HTTP server running on http://localhost:3333");
  });
