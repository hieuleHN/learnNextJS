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
"[project]/src/graphql/postgraphile/queries/roleQueries.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// graphql/queries/employeeQueries.js
__turbopack_context__.s([
    "GET_ROLE",
    ()=>GET_ROLE
]);
const GET_ROLE = `
  query {
  allRoles {
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
"[project]/src/services/postgraphile/rolePostgraphileService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRoles",
    ()=>getRoles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$postgraphile$2f$postgraphileClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/postgraphile/postgraphileClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$postgraphile$2f$queries$2f$roleQueries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/graphql/postgraphile/queries/roleQueries.js [app-client] (ecmascript)");
;
;
async function getRoles() {
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$postgraphile$2f$postgraphileClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchPostGraphile"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$postgraphile$2f$queries$2f$roleQueries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GET_ROLE"]);
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
                            lineNumber: 114,
                            columnNumber: 15
                        }, this),
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-base",
                            children: "Thêm mới nhân viên"
                        }, void 0, false, {
                            fileName: "[project]/app/components/EmployeeForm.jsx",
                            lineNumber: 114,
                            columnNumber: 58
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/EmployeeForm.jsx",
                    lineNumber: 113,
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
                                                    lineNumber: 121,
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
                                                                    lineNumber: 126,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                lineNumber: 125,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                                            lineNumber: 124,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "file",
                                                            id: "avatar-upload",
                                                            placeholder: "Tải ảnh lên",
                                                            className: "hidden"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                                            lineNumber: 129,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "avatar-upload",
                                                            className: "px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 cursor-pointer inline-block",
                                                            children: "Tải ảnh lên"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                                            lineNumber: 130,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                    lineNumber: 123,
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
                                                                    lineNumber: 137,
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
                                                                    lineNumber: 138,
                                                                    columnNumber: 21
                                                                }, this),
                                                                errors.firstName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500 text-sm",
                                                                    children: errors.firstName.message
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                    lineNumber: 139,
                                                                    columnNumber: 42
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                                            lineNumber: 136,
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
                                                                    lineNumber: 143,
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
                                                                    lineNumber: 144,
                                                                    columnNumber: 21
                                                                }, this),
                                                                errors.lastName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500 text-sm",
                                                                    children: errors.lastName.message
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                    lineNumber: 145,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                                            lineNumber: 142,
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
                                                                    lineNumber: 148,
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
                                                                    lineNumber: 149,
                                                                    columnNumber: 21
                                                                }, this),
                                                                errors.dateOfBirth && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500 text-sm",
                                                                    children: errors.dateOfBirth.message
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                    lineNumber: 150,
                                                                    columnNumber: 44
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                                            lineNumber: 147,
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
                                                                    lineNumber: 153,
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
                                                                            lineNumber: 155,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            className: "text-gray-600",
                                                                            value: "Nữ",
                                                                            children: "Nữ"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                            lineNumber: 156,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                    lineNumber: 154,
                                                                    columnNumber: 23
                                                                }, this),
                                                                errors.gender && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500 text-sm",
                                                                    children: errors.gender.message
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                    lineNumber: 158,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                                            lineNumber: 152,
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
                                                                    lineNumber: 161,
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
                                                                    lineNumber: 162,
                                                                    columnNumber: 21
                                                                }, this),
                                                                errors.startDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500 text-sm",
                                                                    children: errors.startDate.message
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                    lineNumber: 163,
                                                                    columnNumber: 42
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                                            lineNumber: 160,
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
                                                                    lineNumber: 166,
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
                                                                    lineNumber: 167,
                                                                    columnNumber: 21
                                                                }, this),
                                                                errors.employeeCode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500 text-sm",
                                                                    children: errors.employeeCode.message
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                    lineNumber: 168,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                                            lineNumber: 165,
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
                                                                    lineNumber: 171,
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
                                                                            lineNumber: 173,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        levels.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: item.id,
                                                                                children: item.name
                                                                            }, item.id, false, {
                                                                                fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                                lineNumber: 175,
                                                                                columnNumber: 25
                                                                            }, this))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                    lineNumber: 172,
                                                                    columnNumber: 21
                                                                }, this),
                                                                errors.levelId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500 text-sm",
                                                                    children: errors.levelId.message
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                    lineNumber: 178,
                                                                    columnNumber: 40
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                                            lineNumber: 170,
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
                                                                    lineNumber: 181,
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
                                                                    lineNumber: 182,
                                                                    columnNumber: 21
                                                                }, this),
                                                                errors.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500 text-sm",
                                                                    children: errors.phone.message
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                    lineNumber: 186,
                                                                    columnNumber: 40
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                                            lineNumber: 180,
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
                                                                    lineNumber: 190,
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
                                                                    lineNumber: 191,
                                                                    columnNumber: 21
                                                                }, this),
                                                                errors.address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500 text-sm",
                                                                    children: errors.address.message
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                    lineNumber: 192,
                                                                    columnNumber: 40
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                                            lineNumber: 189,
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
                                                                    lineNumber: 195,
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
                                                                            lineNumber: 197,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        departments.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: item.id,
                                                                                children: item.name
                                                                            }, item.id, false, {
                                                                                fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                                lineNumber: 199,
                                                                                columnNumber: 25
                                                                            }, this))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                    lineNumber: 196,
                                                                    columnNumber: 21
                                                                }, this),
                                                                errors.departmentId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500 text-sm",
                                                                    children: errors.departmentId.message
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                    lineNumber: 203,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                                            lineNumber: 194,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                    lineNumber: 135,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                            lineNumber: 120,
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
                                                        lineNumber: 209,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm text-gray-600 mb-2",
                                                        children: "Tải bản scan giấy tờ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/EmployeeForm.jsx",
                                                        lineNumber: 210,
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
                                                                lineNumber: 213,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "px-4 py-2 border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-700 mb-2 shadow-sm ",
                                                                children: "Tải lên"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                lineNumber: 214,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-400 pointer-events-none",
                                                                children: "PDF, JPG, JPEG, PNG"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                lineNumber: 217,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/EmployeeForm.jsx",
                                                        lineNumber: 212,
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
                                                                lineNumber: 220,
                                                                columnNumber: 43
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/EmployeeForm.jsx",
                                                        lineNumber: 219,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/EmployeeForm.jsx",
                                                lineNumber: 208,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                            lineNumber: 207,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                    lineNumber: 119,
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
                                                    lineNumber: 229,
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
                                                                lineNumber: 232,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "false",
                                                                children: "nghỉ việc"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                lineNumber: 233,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/EmployeeForm.jsx",
                                                        lineNumber: 231,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                    lineNumber: 230,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                            lineNumber: 228,
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
                                                    lineNumber: 238,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm text-gray-600 mb-1",
                                                            children: "Email"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                                            lineNumber: 240,
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
                                                            lineNumber: 241,
                                                            columnNumber: 23
                                                        }, this),
                                                        errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: errors.email.message
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                                            lineNumber: 245,
                                                            columnNumber: 40
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                    lineNumber: 239,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                            lineNumber: 237,
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
                                                    lineNumber: 249,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm text-gray-600 mb-1",
                                                            children: "Vai trò"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                                            lineNumber: 251,
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
                                                                    lineNumber: 254,
                                                                    columnNumber: 27
                                                                }, this),
                                                                roles.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: item.id,
                                                                        children: item.name
                                                                    }, item.id, false, {
                                                                        fileName: "[project]/app/components/EmployeeForm.jsx",
                                                                        lineNumber: 256,
                                                                        columnNumber: 25
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                                            lineNumber: 253,
                                                            columnNumber: 23
                                                        }, this),
                                                        errors.roleId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: errors.roleId.message
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                                            lineNumber: 259,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                                    lineNumber: 250,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/EmployeeForm.jsx",
                                            lineNumber: 248,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/EmployeeForm.jsx",
                                    lineNumber: 227,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/EmployeeForm.jsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700",
                            children: isEditMode ? "Lưu thay đổi" : "Tạo mới"
                        }, void 0, false, {
                            fileName: "[project]/app/components/EmployeeForm.jsx",
                            lineNumber: 265,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/EmployeeForm.jsx",
                    lineNumber: 116,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/EmployeeForm.jsx",
            lineNumber: 112,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/EmployeeForm.jsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_s(EmployeeForm, "ix1IohawXoN7em/17BpLn4JzSe0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = EmployeeForm;
var _c;
__turbopack_context__.k.register(_c, "EmployeeForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_1kbmtss._.js.map