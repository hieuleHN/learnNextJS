import { fetchPostGraphile }
from "./postgraphileClient";

import {
  GET_ALL_DEPARTMENTS
}
from "../../graphql/postgraphile/queries/departmentQueries";

export async function getDepartments() {
  const data = await fetchPostGraphile(GET_ALL_DEPARTMENTS);
  return data.allDepartments.nodes;
}
