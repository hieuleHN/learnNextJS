(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/services/postgraphile/postgraphileClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchPostGraphile",
    ()=>fetchPostGraphile
]);
const POSTGRAPHILE_ENDPOINT = "/api/postgraphile";
async function fetchPostGraphile(query, variables = {}) {
    try {
        const response = await fetch(POSTGRAPHILE_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                query,
                variables
            })
        });
        const result = await response.json();
        if (result.errors) {
            console.error("PostGraphile Error:", result.errors);
            throw new Error(result.errors[0]?.message || "GraphQL Error");
        }
        return result.data;
    } catch (error) {
        console.error("PostGraphile Client Error:", error);
        throw error;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/graphql/postgraphile/queries/employeeQueries.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// graphql/queries/employeeQueries.js
__turbopack_context__.s([
    "GET_EMPLOYEES",
    ()=>GET_EMPLOYEES,
    "GET_EMPLOYEE_BY_ID",
    ()=>GET_EMPLOYEE_BY_ID
]);
const GET_EMPLOYEES = `
query GetEmployees {
  allEmployees {
    nodes {
      id
      email
      firstName
      lastName
      phone
      status
      employeeCode
      gender
      createdAt
      updatedAt

      departmentByDepartmentId {
        id
        name
      }
    }
  }
}
`;
const GET_EMPLOYEE_BY_ID = `
query GetEmployeeById($id: Int!) {
  employeeById(id: $id) {
    id
    email
    firstName
    lastName
    phone
    status
    employeeCode
    dateOfBirth
    address
    startDate
    gender
    levelId
    roleId
    departmentId

    createdAt
    updatedAt

    departmentByDepartmentId {
      id
      name
    }

    roleByRoleId {
      id
      name
    }

    levelByLevelId {
      id
      name
    }
  }
}
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/graphql/postgraphile/mutations/employeeMutations.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// graphql/mutations/employeeMutations.js
// 1. THÊM MỚI - Trả về đầy đủ thuộc tính để cập nhật ngay vào State UI
__turbopack_context__.s([
    "DELETE_EMPLOYEE",
    ()=>DELETE_EMPLOYEE,
    "INSERT_EMPLOYEE",
    ()=>INSERT_EMPLOYEE,
    "UPDATE_EMPLOYEE",
    ()=>UPDATE_EMPLOYEE
]);
const INSERT_EMPLOYEE = `
mutation InsertEmployee(
  $employee: EmployeeInput!
) {
  createEmployee(
    input: {
      employee: $employee
    }
  ) {
    employee {
      id
      email
      firstName
      lastName
      employeeCode
      gender
      address
      documentUrl
      dateOfBirth
      startDate
      phone
      status

      levelId
      roleId
      departmentId

      createdAt
      updatedAt

      departmentByDepartmentId {
        id
        name
      }

      roleByRoleId {
        id
        name
      }

      levelByLevelId {
        id
        name
      }
    }
  }
}
`;
const UPDATE_EMPLOYEE = `
mutation UpdateEmployee(
  $id: Int!,
  $changes: EmployeePatch!
) {
  updateEmployeeById(
    input: {
      id: $id
      employeePatch: $changes
    }
  ) {
    employee {
      id
      email
      firstName
      lastName
      phone
      status

      employeeCode
      gender
      address
      documentUrl
      dateOfBirth
      startDate

      levelId
      roleId
      departmentId

      createdAt
      updatedAt

      departmentByDepartmentId {
        id
        name
      }

      roleByRoleId {
        id
        name
      }

      levelByLevelId {
        id
        name
      }
    }
  }
}
`;
const DELETE_EMPLOYEE = `
mutation DeleteEmployee(
  $id: Int!
) {
  deleteEmployeeById(
    input: {
      id: $id
    }
  ) {
    employee {
      id
      email
      firstName
      lastName
    }
  }
}
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/postgraphile/employeePostgraphileService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createEmployee",
    ()=>createEmployee,
    "deleteEmployee",
    ()=>deleteEmployee,
    "getEmployeeById",
    ()=>getEmployeeById,
    "getEmployees",
    ()=>getEmployees,
    "updateEmployee",
    ()=>updateEmployee
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$postgraphile$2f$postgraphileClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/postgraphile/postgraphileClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$postgraphile$2f$queries$2f$employeeQueries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/graphql/postgraphile/queries/employeeQueries.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$postgraphile$2f$mutations$2f$employeeMutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/graphql/postgraphile/mutations/employeeMutations.js [app-client] (ecmascript)");
;
;
;
async function getEmployees() {
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$postgraphile$2f$postgraphileClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchPostGraphile"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$postgraphile$2f$queries$2f$employeeQueries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GET_EMPLOYEES"]);
    return data?.allEmployees?.nodes || [];
}
async function getEmployeeById(id) {
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$postgraphile$2f$postgraphileClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchPostGraphile"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$postgraphile$2f$queries$2f$employeeQueries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GET_EMPLOYEE_BY_ID"], {
        id
    });
    return data.employeeById;
}
async function createEmployee(employee) {
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$postgraphile$2f$postgraphileClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchPostGraphile"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$postgraphile$2f$mutations$2f$employeeMutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INSERT_EMPLOYEE"], {
        employee
    });
    return data.createEmployee.employee;
}
async function updateEmployee(id, changes) {
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$postgraphile$2f$postgraphileClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchPostGraphile"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$postgraphile$2f$mutations$2f$employeeMutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UPDATE_EMPLOYEE"], {
        id,
        changes
    });
    return data.updateEmployeeById.employee;
}
async function deleteEmployee(id) {
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$postgraphile$2f$postgraphileClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchPostGraphile"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$postgraphile$2f$mutations$2f$employeeMutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DELETE_EMPLOYEE"], {
        id
    });
    return data.deleteEmployeeById.employee;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/graphql/postgraphile/queries/departmentQueries.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET_ALL_DEPARTMENTS",
    ()=>GET_ALL_DEPARTMENTS
]);
const GET_ALL_DEPARTMENTS = `
query {
  allDepartments {
    nodes {
      id
      name
    }
  }
}
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/postgraphile/departmentPostgraphileService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDepartments",
    ()=>getDepartments
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$postgraphile$2f$postgraphileClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/postgraphile/postgraphileClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$postgraphile$2f$queries$2f$departmentQueries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/graphql/postgraphile/queries/departmentQueries.js [app-client] (ecmascript)");
;
;
async function getDepartments() {
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$postgraphile$2f$postgraphileClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchPostGraphile"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$postgraphile$2f$queries$2f$departmentQueries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GET_ALL_DEPARTMENTS"]);
    return data.allDepartments.nodes;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/graphql/postgraphile/queries/levelQueries.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// graphql/queries/employeeQueries.js
__turbopack_context__.s([
    "GET_LEVEL",
    ()=>GET_LEVEL
]);
const GET_LEVEL = `
  query {
  allLevels {
    nodes {
      id
      name
    }
  }
}
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/postgraphile/levelPostgraphileService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLevels",
    ()=>getLevels
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$postgraphile$2f$postgraphileClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/postgraphile/postgraphileClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$postgraphile$2f$queries$2f$levelQueries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/graphql/postgraphile/queries/levelQueries.js [app-client] (ecmascript)");
;
;
async function getLevels() {
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$postgraphile$2f$postgraphileClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchPostGraphile"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$postgraphile$2f$queries$2f$levelQueries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GET_LEVEL"]);
    return data.allLevels.nodes;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/graphql/queries/roleQueries.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// graphql/queries/employeeQueries.js
__turbopack_context__.s([
    "GET_ROLE",
    ()=>GET_ROLE
]);
const GET_ROLE = `
  query MyQuery {
  roles {
    name
    id
  }
}

`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/postgraphile/rolePostgraphileService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDepartments",
    ()=>getDepartments
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$postgraphile$2f$postgraphileClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/postgraphile/postgraphileClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$queries$2f$roleQueries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/graphql/queries/roleQueries.js [app-client] (ecmascript)");
;
;
async function getDepartments() {
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$postgraphile$2f$postgraphileClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchPostGraphile"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$queries$2f$roleQueries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GET_ROLE"]);
    return data.allRoles.nodes;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/EmployeeForm.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EmployeeForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$postgraphile$2f$employeePostgraphileService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/postgraphile/employeePostgraphileService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$postgraphile$2f$departmentPostgraphileService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/postgraphile/departmentPostgraphileService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$postgraphile$2f$levelPostgraphileService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/postgraphile/levelPostgraphileService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$postgraphile$2f$rolePostgraphileService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/postgraphile/rolePostgraphileService.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function EmployeeForm({ initialData }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const id = initialData;
    const isEditMode = !!id;
    const [levels, setLevels] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [departments, setDepartments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [roles, setRoles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [idEmployee, setIdEmployee] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EmployeeForm.useEffect": ()=>{
            ({
                "EmployeeForm.useEffect": async ()=>{
                    try {
                        if (isEditMode && id) {
                            const dataEmployee = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$postgraphile$2f$employeePostgraphileService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEmployeeById"])(Number(id));
                            setIdEmployee(Number(id));
                            reset({
                                firstName: dataEmployee.firstName,
                                lastName: dataEmployee.lastName,
                                dateOfBirth: dataEmployee.dateOfBirth,
                                gender: dataEmployee.gender,
                                startDate: dataEmployee.startDate,
                                employeeCode: dataEmployee.employeeCode,
                                levelId: dataEmployee.levelId,
                                phone: dataEmployee.phone,
                                address: dataEmployee.address,
                                departmentId: dataEmployee.departmentId,
                                email: dataEmployee.email,
                                roleId: dataEmployee.roleId,
                                status: dataEmployee.status ? "true" : "false",
                                documentUrl: dataEmployee.documentUrl
                            });
                        }
                        const dataLevel = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$postgraphile$2f$levelPostgraphileService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLevels"])();
                        setLevels(dataLevel);
                        const dataDepartments = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$postgraphile$2f$departmentPostgraphileService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDepartments"])();
                        setDepartments(dataDepartments);
                        const dataRole = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$postgraphile$2f$rolePostgraphileService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoles"])();
                        setRoles(dataRole);
                    } catch (error) {
                        console.error(error);
                    }
                }
            })["EmployeeForm.useEffect"]();
        }
    }["EmployeeForm.useEffect"], [
        id,
        reset,
        isEditMode
    ]);
    const { register, handleSubmit, reset, watch, formState: { errors } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])();
    const currentDocumentUrl = watch("documentUrl");
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const phoneRegex = /^(03|05|07|08|09)[0-9]{8}$/;
    const onSubmit = async (data)=>{
        let fileNameString = null;
        if (data.documentUrl && data.documentUrl.length > 0) {
            const fileObject = data.documentUrl[0];
            fileNameString = fileObject.name;
        } else {
            fileNameString = isEditMode ? currentDocumentUrl : null;
        }
        // Ép kiểu status về dạng boolean vì value từ select html luôn là string
        const finalData = {
            firstName: data.firstName,
            lastName: data.lastName,
            gender: data.gender,
            address: data.address,
            email: data.email,
            phone: data.phone,
            employeeCode: data.employeeCode,
            dateOfBirth: data.dateOfBirth,
            startDate: data.startDate,
            levelId: Number(data.levelId),
            roleId: Number(data.roleId),
            documentUrl: fileNameString,
            departmentId: Number(data.departmentId),
            status: data.status == "true" ? true : false
        };
        if (isEditMode && idEmployee) {
            console.log("Gọi API Update với data:", finalData);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$postgraphile$2f$employeePostgraphileService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateEmployee"])(idEmployee, finalData);
        } else {
            console.log("Gọi API Create với data:", finalData);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$postgraphile$2f$employeePostgraphileService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEmployee"])(finalData);
        }
        router.push('/');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-100 min-h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "m-10 px-5 mx-auto max-w-6xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-5 pb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "fa-solid fa-arrow-left"
                        }, void 0, false, {
                            fileName: "[project]/app/components/EmployeeForm.jsx",
                            lineNumber: 118,
                            columnNumber: 15
                        }, this),
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-base",
                            children: "Thêm mới nhân viên"
                        }, void 0, false, {
                            fileName: "[project]/app/components/EmployeeForm.jsx",
                            lineNumber: 118,
                            columnNumber: 58
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/EmployeeForm.jsx",
                    lineNumber: 117,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    action: "",
                    onSubmit: handleSubmit(onSubmit),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-7 gap-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white p-7 rounded-xl",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-lg font-semibold mb-4",
                                                    children: "Hồ sơ nhân viên"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                    lineNumber: 125,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4 mb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center overflow-hidden",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-10 h-10 text-gray-200",
                                                                fill: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                    lineNumber: 130,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                lineNumber: 129,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                                            lineNumber: 128,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "file",
                                                            id: "avatar-upload",
                                                            placeholder: "Tải ảnh lên",
                                                            className: "hidden"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                                            lineNumber: 133,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "avatar-upload",
                                                            className: "px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 cursor-pointer inline-block",
                                                            children: "Tải ảnh lên"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                                            lineNumber: 134,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                    lineNumber: 127,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "",
                                                                    className: "tex-sm text-gray-600 mb-1",
                                                                    children: "Họ và tên đệm"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                    lineNumber: 141,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    ...register("firstName", {
                                                                        required: "Bạn chưa nhập họ tên đệm"
                                                                    }),
                                                                    className: "w-full border border-gray-300 rounded-lg px-3 py-1.5 "
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                    lineNumber: 142,
                                                                    columnNumber: 21
                                                                }, this),
                                                                errors.firstName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500 text-sm",
                                                                    children: errors.firstName.message
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                    lineNumber: 143,
                                                                    columnNumber: 42
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                                            lineNumber: 140,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "",
                                                                    className: "tex-sm text-gray-600 mb-1",
                                                                    children: "Tên"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                    lineNumber: 147,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    ...register("lastName", {
                                                                        required: "Bạn chưa nhập tên"
                                                                    }),
                                                                    className: "w-full border border-gray-300 rounded-lg px-3 py-1.5 "
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                    lineNumber: 148,
                                                                    columnNumber: 21
                                                                }, this),
                                                                errors.lastName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500 text-sm",
                                                                    children: errors.lastName.message
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                    lineNumber: 149,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                                            lineNumber: 146,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "",
                                                                    className: "tex-sm text-gray-600 mb-1",
                                                                    children: "Ngày sinh"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                    lineNumber: 152,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "date",
                                                                    ...register("dateOfBirth", {
                                                                        required: "Bạn chưa nhập ngày sinh"
                                                                    }),
                                                                    className: "w-full border border-gray-300 rounded-lg px-3 py-1.5 text-gray-600"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                    lineNumber: 153,
                                                                    columnNumber: 21
                                                                }, this),
                                                                errors.dateOfBirth && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500 text-sm",
                                                                    children: errors.dateOfBirth.message
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                    lineNumber: 154,
                                                                    columnNumber: 44
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                                            lineNumber: 151,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "",
                                                                    className: "tex-sm text-gray-600 mb-1",
                                                                    children: "Giới tính"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                    lineNumber: 157,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    ...register("gender", {
                                                                        required: "Bạn chưa nhập giới tính"
                                                                    }),
                                                                    className: "w-full border border-gray-300 rounded-lg px-3 py-1.5 appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white text-gray-800",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            className: "text-gray-600",
                                                                            value: "Nam",
                                                                            children: "Nam"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                            lineNumber: 159,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            className: "text-gray-600",
                                                                            value: "Nữ",
                                                                            children: "Nữ"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                            lineNumber: 160,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                    lineNumber: 158,
                                                                    columnNumber: 23
                                                                }, this),
                                                                errors.gender && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500 text-sm",
                                                                    children: errors.gender.message
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                    lineNumber: 162,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                                            lineNumber: 156,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "",
                                                                    className: "tex-sm text-gray-600 mb-1",
                                                                    children: "Ngày bắt đầu làm việc"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                    lineNumber: 165,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "date",
                                                                    ...register("startDate", {
                                                                        required: "Bạn chưa nhập ngày bắt đầu làm việc"
                                                                    }),
                                                                    className: "w-full border border-gray-300 rounded-lg px-3 py-1.5 "
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                    lineNumber: 166,
                                                                    columnNumber: 21
                                                                }, this),
                                                                errors.startDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500 text-sm",
                                                                    children: errors.startDate.message
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                    lineNumber: 167,
                                                                    columnNumber: 42
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                                            lineNumber: 164,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "",
                                                                    className: "tex-sm text-gray-600 mb-1",
                                                                    children: "Mã nhân viên"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                    lineNumber: 170,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    ...register("employeeCode", {
                                                                        required: "Bạn chưa nhập mã nhân viên"
                                                                    }),
                                                                    className: "w-full border border-gray-300 rounded-lg px-3 py-1.5 "
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                    lineNumber: 171,
                                                                    columnNumber: 21
                                                                }, this),
                                                                errors.employeeCode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500 text-sm",
                                                                    children: errors.employeeCode.message
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                    lineNumber: 172,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                                            lineNumber: 169,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "",
                                                                    className: "tex-sm text-gray-600 mb-1",
                                                                    children: "Thuộc cấp"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                    lineNumber: 175,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    ...register("levelId", {
                                                                        required: "Bạn chưa nhập thuộc cấp"
                                                                    }),
                                                                    className: "w-full border border-gray-300 rounded-lg px-3 py-2 ",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "",
                                                                            children: "Vui lòng chọn"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                            lineNumber: 177,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        levels.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: item.id,
                                                                                children: item.name
                                                                            }, item.id, false, {
                                                                                fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                                lineNumber: 179,
                                                                                columnNumber: 25
                                                                            }, this))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                    lineNumber: 176,
                                                                    columnNumber: 21
                                                                }, this),
                                                                errors.levelId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500 text-sm",
                                                                    children: errors.levelId.message
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                    lineNumber: 182,
                                                                    columnNumber: 40
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                                            lineNumber: 174,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "",
                                                                    className: "tex-sm text-gray-600 mb-1",
                                                                    children: "Số điện thoại"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                    lineNumber: 185,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    ...register("phone", {
                                                                        required: "Bạn chưa nhập số điện thoại",
                                                                        pattern: {
                                                                            value: phoneRegex,
                                                                            message: "Số điện thoại không đúng định dạng"
                                                                        }
                                                                    }),
                                                                    className: "w-full border border-gray-300 rounded-lg px-3 py-1.5 "
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                    lineNumber: 186,
                                                                    columnNumber: 21
                                                                }, this),
                                                                errors.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500 text-sm",
                                                                    children: errors.phone.message
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                    lineNumber: 190,
                                                                    columnNumber: 40
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                                            lineNumber: 184,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "md:col-span-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "",
                                                                    className: "tex-sm text-gray-600 mb-1",
                                                                    children: "Địa chỉ"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                    lineNumber: 194,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    ...register("address", {
                                                                        required: "Bạn chưa nhập địa chỉ"
                                                                    }),
                                                                    className: "w-full border border-gray-300 rounded-lg px-3 py-1.5 "
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                    lineNumber: 195,
                                                                    columnNumber: 21
                                                                }, this),
                                                                errors.address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500 text-sm",
                                                                    children: errors.address.message
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                    lineNumber: 196,
                                                                    columnNumber: 40
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                                            lineNumber: 193,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "md:col-span-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "",
                                                                    className: "tex-sm text-gray-600 mb-1",
                                                                    children: "Phòng ban"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                    lineNumber: 199,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    ...register("departmentId", {
                                                                        required: "Bạn chưa nhập phòng ban"
                                                                    }),
                                                                    className: "w-full border border-gray-300 rounded-lg px-3 py-2 ",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "",
                                                                            children: "Vui lòng chọn"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                            lineNumber: 201,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        departments.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: item.id,
                                                                                children: item.name
                                                                            }, item.id, false, {
                                                                                fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                                lineNumber: 203,
                                                                                columnNumber: 25
                                                                            }, this))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                    lineNumber: 200,
                                                                    columnNumber: 21
                                                                }, this),
                                                                errors.departmentId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500 text-sm",
                                                                    children: errors.departmentId.message
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                    lineNumber: 207,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                                            lineNumber: 198,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                    lineNumber: 139,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                            lineNumber: 124,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white p-7 rounded-xl my-8",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white rounded-xl shadow-sm border border-gray-100 p-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg font-semibold mb-4",
                                                        children: "Giấy tờ đính kèm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/EmployeeForm.jsx",
                                                        lineNumber: 213,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm text-gray-600 mb-2",
                                                        children: "Tải bản scan giấy tờ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/EmployeeForm.jsx",
                                                        lineNumber: 214,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-center bg-gray-100 hover:bg-gray-50 ",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "file",
                                                                ...register("documentUrl"),
                                                                className: "absolute w-full h-full opacity-0 "
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                lineNumber: 217,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "px-4 py-2 border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-700 mb-2 shadow-sm ",
                                                                children: "Tải lên"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                lineNumber: 218,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-400 pointer-events-none",
                                                                children: "PDF, JPG, JPEG, PNG"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                lineNumber: 221,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/EmployeeForm.jsx",
                                                        lineNumber: 216,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: !isEditMode ? "hidden" : "mt-2 text-sm text-gray-600",
                                                        children: [
                                                            "Giấy tờ hiện tại: ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: currentDocumentUrl,
                                                                target: "_blank",
                                                                rel: "noreferrer",
                                                                className: "text-blue-600 underline",
                                                                children: "Xem file"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                lineNumber: 224,
                                                                columnNumber: 43
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/EmployeeForm.jsx",
                                                        lineNumber: 223,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/EmployeeForm.jsx",
                                                lineNumber: 212,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                            lineNumber: 211,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: !isEditMode ? "hidden" : "bg-white p-7 rounded-xl mb-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-base font-semibold mb-4",
                                                    children: "Trang thái làm việc"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                    lineNumber: 233,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        ...register("status"),
                                                        className: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white text-gray-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "true",
                                                                children: "Đang làm việc"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                lineNumber: 236,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "false",
                                                                children: "nghỉ việc"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                lineNumber: 237,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/EmployeeForm.jsx",
                                                        lineNumber: 235,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                    lineNumber: 234,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                            lineNumber: 232,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white p-7 rounded-xl mb-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-base font-semibold mb-4",
                                                    children: "Tài khoản đăng nhập SSO"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                    lineNumber: 242,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm text-gray-600 mb-1",
                                                            children: "Email"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                                            lineNumber: 244,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            ...register("email", {
                                                                required: "Bạn chưa nhập email",
                                                                pattern: {
                                                                    value: emailRegex,
                                                                    message: "Email không đúng định dạng"
                                                                }
                                                            }),
                                                            type: "email",
                                                            className: "w-full border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-700"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                                            lineNumber: 245,
                                                            columnNumber: 23
                                                        }, this),
                                                        errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: errors.email.message
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                                            lineNumber: 249,
                                                            columnNumber: 40
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                    lineNumber: 243,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                            lineNumber: 241,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white p-7 rounded-xl mb-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-base font-semibold mb-4",
                                                    children: "Vai trò khác"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                    lineNumber: 253,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm text-gray-600 mb-1",
                                                            children: "Vai trò"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                                            lineNumber: 255,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            ...register("roleId", {
                                                                required: "Bạn chưa nhập vai trò"
                                                            }),
                                                            className: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white text-gray-500",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: "Vui lòng chọn"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                    lineNumber: 258,
                                                                    columnNumber: 27
                                                                }, this),
                                                                roles.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: item.id,
                                                                        children: item.name
                                                                    }, item.id, false, {
                                                                        fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                        lineNumber: 260,
                                                                        columnNumber: 25
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                                            lineNumber: 257,
                                                            columnNumber: 23
                                                        }, this),
                                                        errors.roleId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: errors.roleId.message
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                                            lineNumber: 263,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                    lineNumber: 254,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                            lineNumber: 252,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                    lineNumber: 231,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/EmployeeForm.jsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700",
                            children: isEditMode ? "Lưu thay đổi" : "Tạo mới"
                        }, void 0, false, {
                            fileName: "[project]/app/components/EmployeeForm.jsx",
                            lineNumber: 269,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/EmployeeForm.jsx",
                    lineNumber: 120,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/EmployeeForm.jsx",
            lineNumber: 116,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/EmployeeForm.jsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_s(EmployeeForm, "5ao+Slv0JQ30jsgN8GmTqDhnMrM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = EmployeeForm;
var _c;
__turbopack_context__.k.register(_c, "EmployeeForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0149219._.js.map