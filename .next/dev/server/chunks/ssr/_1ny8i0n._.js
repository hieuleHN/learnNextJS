module.exports = [
"[project]/src/services/hasuraClient.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchGraphQL",
    ()=>fetchGraphQL
]);
// services/hasuraClient.js
const HASURA_ENDPOINT = 'http://localhost:8080/v1/graphql';
async function fetchGraphQL(query, variables = {}) {
    try {
        const response = await fetch(HASURA_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query,
                variables
            })
        });
        const result = await response.json();
        if (result.errors) {
            console.error('Lỗi từ Hasura GraphQL:', result.errors);
            throw new Error('Không thể fetch dữ liệu từ Hasura');
        }
        return result.data;
    } catch (error) {
        console.error('Lỗi hệ thống khi gọi API:', error);
        throw error;
    }
}
}),
"[project]/src/services/employeeService.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmployeeService",
    ()=>EmployeeService
]);
// services/employeeService.js
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hasuraClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/hasuraClient.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/graphql/queries/employeeQueries'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/graphql/mutations/employeeMutations'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
const EmployeeService = {
    // LẤY DANH SÁCH (READ)
    getAll: async ()=>{
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hasuraClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchGraphQL"])(GET_EMPLOYEES);
        return data?.employees || [];
    },
    // LẤY THEO ID (READ)
    getById: async (id)=>{
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hasuraClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchGraphQL"])(GET_EMPLOYEE_BY_ID, {
            id
        });
        return data?.employees_by_pk || null;
    },
    // THÊM MỚI (CREATE)
    create: async (employeeData)=>{
        // employeeData truyền vào dạng object ví dụ: { email: "abc@gmail.com", first_name: "John" }
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hasuraClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchGraphQL"])(INSERT_EMPLOYEE, {
            object: employeeData
        });
        return data?.insert_employees_one || null;
    },
    // SỬA THÔNG TIN (UPDATE)
    update: async (id, changes)=>{
        // changes truyền vào các cột muốn sửa ví dụ: { phone: "099999", status: "active" }
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hasuraClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchGraphQL"])(UPDATE_EMPLOYEE, {
            id,
            changes
        });
        return data?.update_employees_by_pk || null;
    },
    // XÓA (DELETE)
    delete: async (id)=>{
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hasuraClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchGraphQL"])(DELETE_EMPLOYEE, {
            id
        });
        return data?.delete_employees_by_pk || null;
    }
};
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$employeeService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/employeeService.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Home() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [limit, setLimit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(10);
    const [employeesChange, setEmployeesChange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [phongBan, setPhongBan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [statusButton, setStatusButton] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const currentSort = params.get('sort') || "moi-nhat";
    // 1. Mảng danh sách Phòng ban
    const departments = [
        {
            id: 1,
            name: "Phòng xe tự hành"
        },
        {
            id: 2,
            name: "Phòng R&D UAV"
        },
        {
            id: 3,
            name: "Phòng PhenikaaNeo"
        },
        {
            id: 4,
            name: "Phòng Robotics"
        },
        {
            id: 5,
            name: "Phòng kinh doanh PNKX"
        },
        {
            id: 6,
            name: "Phòng AIOT"
        }
    ];
    // 2. Mảng danh sách Thuộc cấp (Mới tách riêng)
    const levels = [
        {
            id: 1,
            name: "Tiểu học"
        },
        {
            id: 2,
            name: "Trung học"
        }
    ];
    // 3. Mảng danh sách Vai trò
    const roles = [
        {
            id: 1,
            name: "Quản trị viên"
        },
        {
            id: 2,
            name: "Nhân sự"
        }
    ];
    // 4. Mảng nhân viên chuẩn hóa sử dụng ID để liên kết giữa các bảng
    const employees = [
        {
            id: 1,
            lastName: "Nguyễn Minh",
            firstName: "Hoàng",
            employeeCode: "PNKX365",
            email: "hoangnm@phenikaa-x.com",
            phone: "0858812541",
            gender: "Nam",
            dateOfBirth: "1996-08-15",
            startDate: "2023-02-10",
            levelId: 2,
            address: "Hà Nội",
            roleId: 2,
            documentUrl: "/uploads/docs/hoangnm.pdf",
            departmentId: 1,
            status: true
        },
        {
            id: 2,
            lastName: "Đỗ Đức",
            firstName: "Anh",
            employeeCode: "HDK212",
            email: "anhdd@phenikaa-x.com",
            phone: "0902149993",
            gender: "Nam",
            dateOfBirth: "1998-05-20",
            startDate: "2024-01-05",
            levelId: 1,
            address: "Hà Nội",
            roleId: 1,
            documentUrl: "/uploads/docs/anhdd.pdf",
            departmentId: 2,
            status: true
        },
        {
            id: 3,
            lastName: "Lê Công Bảo",
            firstName: "Ngọc",
            employeeCode: "HDK221",
            email: "ngoclcb@phenikaa-x.com",
            phone: "0329645776",
            gender: "Nam",
            dateOfBirth: "1995-11-02",
            startDate: "2022-08-15",
            levelId: 2,
            address: "Hà Nội",
            roleId: 2,
            documentUrl: "/uploads/docs/ngoclcb.pdf",
            departmentId: 3,
            status: true
        },
        {
            id: 4,
            lastName: "Phạm Viết",
            firstName: "Vinh",
            employeeCode: "PNKX363",
            email: "vinhpv@phenikaa-x.com",
            phone: "0869674217",
            gender: "Nam",
            dateOfBirth: "2000-02-01",
            startDate: "2026-05-25",
            levelId: 1,
            address: "Hà Nội",
            roleId: 1,
            documentUrl: "/uploads/docs/vinhpv.pdf",
            departmentId: 1,
            status: false
        },
        {
            id: 5,
            lastName: "Nguyễn Tuấn",
            firstName: "Anh",
            employeeCode: "PNKX362",
            email: "anhnt@phenikaa-x.com",
            phone: "0982210794",
            gender: "Nam",
            dateOfBirth: "1994-07-22",
            startDate: "2021-03-12",
            levelId: 2,
            address: "Hà Nội",
            roleId: 2,
            documentUrl: "/uploads/docs/anhnt.pdf",
            departmentId: 1,
            status: true
        },
        {
            id: 6,
            lastName: "Đào Văn",
            firstName: "Quang",
            employeeCode: "PNKX361",
            email: "quangdv@phenikaa-x.com",
            phone: "0359275458",
            gender: "Nam",
            dateOfBirth: "1997-09-30",
            startDate: "2023-06-18",
            levelId: 1,
            address: "Hà Nội",
            roleId: 2,
            documentUrl: null,
            departmentId: 4,
            status: true
        },
        {
            id: 7,
            lastName: "Lê Minh",
            firstName: "Thảo",
            employeeCode: "PNKX360",
            email: "thaolm@phenikaa-x.com",
            phone: "0966789605",
            gender: "Nữ",
            dateOfBirth: "1999-04-12",
            startDate: "2024-02-20",
            levelId: 2,
            address: "Hà Nội",
            roleId: 2,
            documentUrl: "/uploads/docs/thaolm.pdf",
            departmentId: 5,
            status: true
        },
        {
            id: 8,
            lastName: "Nguyễn Chấn",
            firstName: "Nam",
            employeeCode: "PNKX359",
            email: "namnc@phenikaa-x.com",
            phone: "0329848671",
            gender: "Nam",
            dateOfBirth: "1993-12-05",
            startDate: "2020-09-10",
            levelId: 2,
            address: "Hà Nội",
            roleId: 1,
            documentUrl: null,
            departmentId: 4,
            status: false
        },
        {
            id: 9,
            lastName: "Hà Tiến Công",
            firstName: "Minh",
            employeeCode: "PNKX358",
            email: "minhtc@phenikaa-x.com",
            phone: "0773288421",
            gender: "Nam",
            dateOfBirth: "1996-03-25",
            startDate: "2023-11-01",
            levelId: 1,
            address: "Hà Nội",
            roleId: 2,
            documentUrl: "/uploads/docs/minhtc.pdf",
            departmentId: 6,
            status: true
        },
        {
            id: 10,
            lastName: "Trần Bảo",
            firstName: "Khánh",
            employeeCode: "PNKX345",
            email: "khanhtb@phenikaa-x.com",
            phone: "0946844375",
            gender: "Nam",
            dateOfBirth: "1998-10-18",
            startDate: "2024-03-15",
            levelId: 2,
            address: "Hà Nội",
            roleId: 2,
            documentUrl: "/uploads/docs/khanhtb.pdf",
            departmentId: 1,
            status: true
        },
        {
            id: 11,
            lastName: "Trần Văn",
            firstName: "Hải",
            employeeCode: "PNKX344",
            email: "haitv@phenikaa-x.com",
            phone: "0912345678",
            gender: "Nam",
            dateOfBirth: "1992-06-14",
            startDate: "2019-05-12",
            levelId: 1,
            address: "Hà Nội",
            roleId: 1,
            documentUrl: null,
            departmentId: 6,
            status: true
        },
        {
            id: 12,
            lastName: "Nguyễn Thị",
            firstName: "Mai",
            employeeCode: "PNKX343",
            email: "maint@phenikaa-x.com",
            phone: "0987654321",
            gender: "Nữ",
            dateOfBirth: "1995-01-09",
            startDate: "2022-10-22",
            levelId: 2,
            address: "Hà Nội",
            roleId: 2,
            documentUrl: "/uploads/docs/maint.pdf",
            departmentId: 5,
            status: true
        },
        {
            id: 13,
            lastName: "Lê Hoàng",
            firstName: "Long",
            employeeCode: "HDK222",
            email: "longlh@phenikaa-x.com",
            phone: "0903334445",
            gender: "Nam",
            dateOfBirth: "1997-08-27",
            startDate: "2023-04-10",
            levelId: 2,
            address: "Hà Nội",
            roleId: 2,
            documentUrl: "/uploads/docs/longlh.pdf",
            departmentId: 2,
            status: false
        },
        {
            id: 14,
            lastName: "Phạm Thanh",
            firstName: "Tùng",
            employeeCode: "PNKX342",
            email: "tungpt@phenikaa-x.com",
            phone: "0868112233",
            gender: "Nam",
            dateOfBirth: "1999-12-11",
            startDate: "2024-06-05",
            levelId: 1,
            address: "Hà Nội",
            roleId: 2,
            documentUrl: null,
            departmentId: 1,
            status: true
        },
        {
            id: 15,
            lastName: "Vũ Bích",
            firstName: "Ngọc",
            employeeCode: "PNKX341",
            email: "ngocvb@phenikaa-x.com",
            phone: "0945998877",
            gender: "Nữ",
            dateOfBirth: "2001-03-08",
            startDate: "2025-01-15",
            levelId: 2,
            address: "Hà Nội",
            roleId: 2,
            documentUrl: "/uploads/docs/ngocvb.pdf",
            departmentId: 3,
            status: true
        },
        {
            id: 16,
            lastName: "Hoàng Đình",
            firstName: "Đạt",
            employeeCode: "PNKX340",
            email: "dathd@phenikaa-x.com",
            phone: "0352667788",
            gender: "Nam",
            dateOfBirth: "1996-07-19",
            startDate: "2023-09-01",
            levelId: 1,
            address: "Hà Nội",
            roleId: 1,
            documentUrl: null,
            departmentId: 4,
            status: true
        },
        {
            id: 17,
            lastName: "Bùi Minh",
            firstName: "Tuấn",
            employeeCode: "HDK223",
            email: "tuanbm@phenikaa-x.com",
            phone: "0834556677",
            gender: "Nam",
            dateOfBirth: "1994-02-28",
            startDate: "2021-11-11",
            levelId: 2,
            address: "Hà Nội",
            roleId: 2,
            documentUrl: "/uploads/docs/tuanbm.pdf",
            departmentId: 2,
            status: true
        },
        {
            id: 18,
            lastName: "Đặng Thị Thu",
            firstName: "Hà",
            employeeCode: "PNKX339",
            email: "hadtt@phenikaa-x.com",
            phone: "0971223344",
            gender: "Nữ",
            dateOfBirth: "1998-09-14",
            startDate: "2024-05-20",
            levelId: 2,
            address: "Hà Nội",
            roleId: 2,
            documentUrl: null,
            departmentId: 5,
            status: false
        },
        {
            id: 19,
            lastName: "Ngô Chí",
            firstName: "Thành",
            employeeCode: "PNKX338",
            email: "thanhnc@phenikaa-x.com",
            phone: "0962334455",
            gender: "Nam",
            dateOfBirth: "1995-05-05",
            startDate: "2022-07-08",
            levelId: 1,
            address: "Hà Nội",
            roleId: 1,
            documentUrl: "/uploads/docs/thanhnc.pdf",
            departmentId: 6,
            status: true
        },
        {
            id: 20,
            lastName: "Đỗ Minh",
            firstName: "Quân",
            employeeCode: "PNKX337",
            email: "quandm@phenikaa-x.com",
            phone: "0915445566",
            gender: "Nam",
            dateOfBirth: "1997-11-22",
            startDate: "2023-12-15",
            levelId: 2,
            address: "Hà Nội",
            roleId: 2,
            documentUrl: "/uploads/docs/quandm.pdf",
            departmentId: 1,
            status: true
        },
        {
            id: 21,
            lastName: "Nguyễn Bảo",
            firstName: "Trâm",
            employeeCode: "PNKX336",
            email: "tramnb@phenikaa-x.com",
            phone: "0981556677",
            gender: "Nữ",
            dateOfBirth: "2000-08-30",
            startDate: "2025-03-01",
            levelId: 2,
            address: "Hà Nội",
            roleId: 2,
            documentUrl: null,
            departmentId: 3,
            status: true
        },
        {
            id: 22,
            lastName: "Phan Văn",
            firstName: "Đức",
            employeeCode: "PNKX335",
            email: "ducpv@phenikaa-x.com",
            phone: "0904667788",
            gender: "Nam",
            dateOfBirth: "1993-01-16",
            startDate: "2020-04-25",
            levelId: 1,
            address: "Hà Nội",
            roleId: 1,
            documentUrl: "/uploads/docs/ducpv.pdf",
            departmentId: 4,
            status: false
        },
        {
            id: 23,
            lastName: "Dương Hồng",
            firstName: "Nhung",
            employeeCode: "PNKX334",
            email: "nhunghd@phenikaa-x.com",
            phone: "0936778899",
            gender: "Nữ",
            dateOfBirth: "1996-10-10",
            startDate: "2023-08-14",
            levelId: 2,
            address: "Hà Nội",
            roleId: 2,
            documentUrl: "/uploads/docs/nhunghd.pdf",
            departmentId: 5,
            status: true
        },
        {
            id: 24,
            lastName: "Lý Minh",
            firstName: "Triết",
            employeeCode: "HDK224",
            email: "trietlm@phenikaa-x.com",
            phone: "0859889900",
            gender: "Nam",
            dateOfBirth: "1998-04-04",
            startDate: "2024-07-20",
            levelId: 1,
            address: "Hà Nội",
            roleId: 2,
            documentUrl: null,
            departmentId: 2,
            status: true
        },
        {
            id: 25,
            lastName: "Trịnh Công",
            firstName: "Sơn",
            employeeCode: "PNKX333",
            email: "sontc@phenikaa-x.com",
            phone: "0392112233",
            gender: "Nam",
            dateOfBirth: "1994-12-19",
            startDate: "2021-09-05",
            levelId: 2,
            address: "Hà Nội",
            roleId: 1,
            documentUrl: "/uploads/docs/sontc.pdf",
            departmentId: 6,
            status: true
        },
        {
            id: 26,
            lastName: "Phùng Tiến",
            firstName: "Đạt",
            employeeCode: "PNKX332",
            email: "datpt@phenikaa-x.com",
            phone: "0941223344",
            gender: "Nam",
            dateOfBirth: "1999-06-25",
            startDate: "2024-10-10",
            levelId: 1,
            address: "Hà Nội",
            roleId: 2,
            documentUrl: "/uploads/docs/datpt.pdf",
            departmentId: 1,
            status: true
        },
        {
            id: 27,
            lastName: "Cao Minh",
            firstName: "Châu",
            employeeCode: "PNKX331",
            email: "chaucm@phenikaa-x.com",
            phone: "0975334455",
            gender: "Nữ",
            dateOfBirth: "2002-02-14",
            startDate: "2025-06-01",
            levelId: 2,
            address: "Hà Nội",
            roleId: 2,
            documentUrl: null,
            departmentId: 3,
            status: true
        },
        {
            id: 28,
            lastName: "Đinh Quang",
            firstName: "Vinh",
            employeeCode: "PNKX330",
            email: "vinhdq@phenikaa-x.com",
            phone: "0968445566",
            gender: "Nam",
            dateOfBirth: "1995-09-09",
            startDate: "2022-01-20",
            levelId: 1,
            address: "Hà Nội",
            roleId: 1,
            documentUrl: "/uploads/docs/vinhdq.pdf",
            departmentId: 4,
            status: false
        },
        {
            id: 29,
            lastName: "Nguyễn Hà",
            firstName: "Phương",
            employeeCode: "PNKX329",
            email: "phuongnh@phenikaa-x.com",
            phone: "0917556677",
            gender: "Nữ",
            dateOfBirth: "1997-03-21",
            startDate: "2023-05-15",
            levelId: 2,
            address: "Hà Nội",
            roleId: 2,
            documentUrl: "/uploads/docs/phuongnh.pdf",
            departmentId: 5,
            status: true
        },
        {
            id: 30,
            lastName: "Võ Hoàng",
            firstName: "Yến",
            employeeCode: "PNKX328",
            email: "yenvh@phenikaa-x.com",
            phone: "0983667788",
            gender: "Nữ",
            dateOfBirth: "2000-11-11",
            startDate: "2025-09-05",
            levelId: 1,
            address: "Hà Nội",
            roleId: 2,
            documentUrl: null,
            departmentId: 6,
            status: true
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (()=>{
            setTimeout(()=>{
                if (!status) {
                    setEmployeesChange(HienThiEmployees);
                }
                if (status == "all" && phongBan == 0) {
                    setEmployeesChange(HienThiEmployees);
                } else if (status == "true" && phongBan == 0) {
                    const data = HienThiEmployees.filter((item)=>item.status == true);
                    setEmployeesChange(data);
                } else if (status == "false" && phongBan == 0) {
                    const data = HienThiEmployees.filter((item)=>item.status == false);
                    setEmployeesChange(data);
                } else if (status == "all" && phongBan) {
                    const data = HienThiEmployees.filter((item)=>item.status == true && item.departmentId == phongBan);
                    setEmployeesChange(data);
                } else if (status == "true" && phongBan) {
                    const data = HienThiEmployees.filter((item)=>item.status == true && item.departmentId == phongBan);
                    setEmployeesChange(data);
                } else if (status == "false" && phongBan) {
                    const data = HienThiEmployees.filter((item)=>item.status == false && item.departmentId == phongBan);
                    setEmployeesChange(data);
                } else if (status == "true") {
                    const data = HienThiEmployees.filter((item)=>item.status == true);
                    setEmployeesChange(data);
                } else if (status == "false") {
                    const data = HienThiEmployees.filter((item)=>item.status == false);
                    setEmployeesChange(data);
                } else if (status == "all") {
                    setEmployeesChange(HienThiEmployees);
                }
            }, 200);
        })();
    }, [
        status,
        phongBan
    ]);
    function handleChange(id) {
        setPhongBan(id);
    }
    function handleClickStatus(value) {
        setStatusButton(value);
        setStatus(value);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadEmployees = async ()=>{
            try {
                const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$employeeService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmployeeService"].getAll();
                console.log(data);
            } catch (err) {
                console.error("Lỗi khi lấy danh sách nhân viên:", err);
            }
        };
        loadEmployees();
    }, []);
    const totalRecords = employees.length;
    const totalPages = Math.ceil(totalRecords / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const HienThiEmployees = employees.slice(startIndex, endIndex);
    const HienThiStart = totalRecords === 0 ? 0 : startIndex + 1;
    const HienThiEnd = Math.min(endIndex, totalRecords);
    function handleClickRow(id) {
        console.log(123);
        router.push(`edit/${id}`);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-4 py-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-200 rounded-xl w-full h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center py-7",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-black text-xl font-bold",
                                children: "Danh sách nhân viên"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 640,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "bg-gray-300 rounded-lg px-3 py-1 cursor-pointer",
                                        children: "Tải lên"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 642,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        className: "bg-black text-white rounded-xl px-3 py-1",
                                        href: "/create",
                                        children: "Thêm mới"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 643,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 641,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 639,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            onChange: (e)=>{
                                handleChange(e.target.value);
                            },
                            className: "bg-white rounded-lg py-1 px-1 cursor-pointer",
                            name: "select",
                            id: "",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: 0,
                                    children: "Phòng ban: Tất cả"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 649,
                                    columnNumber: 21
                                }, this),
                                departments.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: item.id,
                                        children: item.name
                                    }, item.id, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 651,
                                        columnNumber: 23
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 648,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 647,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-xl grid grid-cols-3 my-5 divide-x-2 divide-gray-300 py-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        handleClickStatus("all");
                                    },
                                    className: statusButton == "all" ? "px-3 w-full rounded-xl bg-gray-200 text-left py-3" : "px-3 w-full rounded-xl hover:bg-gray-200 text-left py-3 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-500 py-5",
                                            children: "Tất cả"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 660,
                                            columnNumber: 27
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 660,
                                            columnNumber: 77
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "534"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 661,
                                            columnNumber: 27
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 659,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 658,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: " px-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        handleClickStatus("true");
                                    },
                                    className: statusButton == "true" ? "px-3 w-full rounded-xl bg-gray-200 text-left py-3" : "px-3 w-full rounded-xl hover:bg-gray-200 text-left py-3 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-500 py-5",
                                            children: "Đang làm việc"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 666,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 666,
                                            columnNumber: 90
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "482"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 667,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 665,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 664,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            handleClickStatus("false");
                                        },
                                        className: statusButton == "false" ? "px-3 w-full rounded-xl bg-gray-200 text-left py-3" : "px-3 w-full rounded-xl hover:bg-gray-200 text-left py-3 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-500 py-5",
                                                children: "Đã nghỉ việc"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 673,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 673,
                                                columnNumber: 89
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "52"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 674,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 672,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 671,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 670,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 656,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center bg-white rounded-t-xl py-2 px-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "?sort=moi-nhat",
                                                className: `rounded-xl px-3 py-1 transition-colors ${currentSort === "moi-nhat" ? "bg-gray-300" : "hover:bg-gray-200"}`,
                                                children: "Mới nhất"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 685,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "?sort=cu-nhat",
                                                className: `rounded-xl px-3 py-1 transition-colors ${currentSort === "cu-nhat" ? "bg-gray-300" : "hover:bg-gray-200"}`,
                                                children: "Cũ nhất"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 694,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 684,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-gray-600 border-1 px-2 py-1 rounded-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "18",
                                            height: "18",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "11",
                                                    cy: "11",
                                                    r: "8"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 713,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "21",
                                                    y1: "21",
                                                    x2: "16.65",
                                                    y2: "16.65"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 714,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 704,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 703,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 683,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "border-1 border-gray-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "font-bold py-3 px-5 text-left",
                                                    children: "STT"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 721,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "font-bold py-3 px-5 text-left",
                                                    children: "Họ tên"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 722,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "font-bold py-3 px-5 text-left",
                                                    children: "Mã nhân viên"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 723,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "font-bold py-3 px-5 text-left",
                                                    children: "Email"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 724,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "font-bold py-3 px-5 text-left",
                                                    children: "Số điện thoại"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 725,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "font-bold py-3 px-5 text-left",
                                                    children: "Giới tính"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 726,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "font-bold py-3 px-5 text-left",
                                                    children: "Phòng ban"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 727,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "font-bold py-3 px-5 text-left",
                                                    children: "Trạng thái"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 728,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 720,
                                            columnNumber: 25
                                        }, this),
                                        employeesChange.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                onClick: ()=>{
                                                    handleClickRow(item.id);
                                                },
                                                className: "cursor-pointer border-1 bg-white hover:bg-gray-100 border-gray-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "font-extralight py-3 px-5",
                                                        children: startIndex + index + 1
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 734,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "font-extralight py-3 px-5",
                                                        children: [
                                                            item.firstName,
                                                            " ",
                                                            item.lastName
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 735,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "font-extralight py-3 px-5",
                                                        children: item.employeeCode
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 736,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "font-extralight py-3 px-5",
                                                        children: item.email
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 737,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "font-extralight py-3 px-5",
                                                        children: item.phone
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 738,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "font-extralight py-3 px-5",
                                                        children: item.gender
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 739,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "font-extralight py-3 px-5",
                                                        children: departments.map((de)=>item.departmentId == de.id && de.name)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 740,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "font-extralight py-3 px-5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `${item.status ? "px-1 py-1 bg-emerald-300 rounded-lg flex items-center gap-2" : "px-1 py-1 bg-red-300 rounded-xl flex items-center gap-2"}`,
                                                            children: [
                                                                item.status ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    width: "14",
                                                                    height: "14",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "#22c55e",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                            cx: "12",
                                                                            cy: "12",
                                                                            r: "10"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.tsx",
                                                                            lineNumber: 753,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M8 12l2.5 2.5L16 9",
                                                                            stroke: "white",
                                                                            strokeWidth: "2",
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            fill: "none"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.tsx",
                                                                            lineNumber: 754,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 746,
                                                                    columnNumber: 54
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    width: "14",
                                                                    height: "14",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "#ef4444",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                            cx: "12",
                                                                            cy: "12",
                                                                            r: "10"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.tsx",
                                                                            lineNumber: 763,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M8 8l8 8M16 8l-8 8",
                                                                            stroke: "white",
                                                                            strokeWidth: "2",
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            fill: "none"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.tsx",
                                                                            lineNumber: 764,
                                                                            columnNumber: 49
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 762,
                                                                    columnNumber: 52
                                                                }, this),
                                                                item.status ? "Đã làm việc" : "Đã nghỉ việc"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 745,
                                                            columnNumber: 79
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 745,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, item.id, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 731,
                                                columnNumber: 33
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 719,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 718,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center bg-white border-t border-gray-200 px-5 py-4 select-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-sm text-gray-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                name: "",
                                                id: "",
                                                value: limit,
                                                onChange: (e)=>{
                                                    setLimit(Number(e.target.value));
                                                    setPage(1);
                                                },
                                                className: "bg-white border border-gray-300 rounded-lg px-2 py-1 outline-none cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "5",
                                                        children: "5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 787,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "10",
                                                        children: "10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 788,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "20",
                                                        children: "20"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 789,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 784,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "bản ghi/trang"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 791,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 783,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 text-sm text-gray-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Hiển thị ",
                                                    HienThiStart,
                                                    " - ",
                                                    HienThiEnd,
                                                    " trên ",
                                                    totalRecords,
                                                    " bản ghi"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 794,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex border border-gray-300 rounded-lg overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setPage(page - 1),
                                                        disabled: page <= 1,
                                                        className: `px-3 py-1.5 border-r border-gray-300 ${page <= 1 ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-white hover:bg-gray-100 cursor-pointer"}`,
                                                        children: "<"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 798,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setPage(page + 1),
                                                        disabled: page >= totalPages,
                                                        className: `px-3 py-1.5 ${page >= totalPages ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-white hover:bg-gray-100 cursor-pointer"}`,
                                                        children: ">"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 808,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 797,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 793,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 782,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 682,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 637,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 636,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 635,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_1ny8i0n._.js.map