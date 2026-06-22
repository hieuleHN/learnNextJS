import { fetchPostGraphile }
from "./postgraphileClient";

import {
  GET_ROLE
}
from "../../graphql/postgraphile/queries/roleQueries";

export async function getRoles() {
  const data = await fetchPostGraphile(GET_ROLE);
  return data.allRoles.nodes;
}
