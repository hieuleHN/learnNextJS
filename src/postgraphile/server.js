import express from "express";
import { postgraphile } from "postgraphile";

const app = express();

app.use(
  postgraphile(
    "postgres://admin:admin123@localhost:5433/crud",
    "public",
    {
      graphiql: true,
      enhanceGraphiql: true,
      watchPg: true,
    }
  )
);

app.listen(5000, () => {
  console.log("PostGraphile running on port 5000");
});


//run away
//node src/postgraphile/server.js