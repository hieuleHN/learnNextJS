import { fetchPostGraphile }
from "./postgraphileClient";

import { GET_LEVEL } from "../../graphql/postgraphile/queries/levelQueries";

export async function getLevels() {
  const data = await fetchPostGraphile(GET_LEVEL);
  return data.allLevels.nodes;
}
