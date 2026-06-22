import { fetchPostGraphile } from "./postgraphileClient";

import { GET_EMPLOYEES, GET_EMPLOYEE_BY_ID} from "../../graphql/postgraphile/queries/employeeQueries";

import { INSERT_EMPLOYEE, UPDATE_EMPLOYEE, DELETE_EMPLOYEE} from "../../graphql/postgraphile/mutations/employeeMutations";

export async function getEmployees() {
  const data =
    await fetchPostGraphile(GET_EMPLOYEES);

  return (
    data?.allEmployees?.nodes || []
  );
}

export async function getEmployeeById(
  id
) {
  const data =
    await fetchPostGraphile(
      GET_EMPLOYEE_BY_ID,
      { id }
    );

  return data.employeeById;
}

export async function createEmployee(
  employee
) {
  const data =
    await fetchPostGraphile(
      INSERT_EMPLOYEE,
      {
        employee,
      }
    );

  return data.createEmployee.employee;
}

export async function updateEmployee(
  id,
  changes
) {
  const data =
    await fetchPostGraphile(
      UPDATE_EMPLOYEE,
      {
        id,
        changes,
      }
    );

  return data.updateEmployeeById.employee;
}

export async function deleteEmployee(
  id
) {
  const data =
    await fetchPostGraphile(
      DELETE_EMPLOYEE,
      {
        id,
      }
    );

  return data.deleteEmployeeById.employee;
}