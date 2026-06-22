'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // 1. Thêm Phòng ban
    await queryInterface.bulkInsert('departments', [
      { id: 1, name: "Phòng xe tự hành" },
      { id: 2, name: "Phòng R&D UAV" },
      { id: 3, name: "Phòng PhenikaaNeo" },
      { id: 4, name: "Phòng Robotics" },
      { id: 5, name: "Phòng kinh doanh PNKX" },
      { id: 6, name: "Phòng AIOT" }
    ], {});

    // 2. Thêm Thuộc cấp
    await queryInterface.bulkInsert('levels', [
      { id: 1, name: "Tiểu học" },
      { id: 2, name: "Trung học" }
    ], {});

    // 3. Thêm Vai trò
    await queryInterface.bulkInsert('roles', [
      { id: 1, name: "Quản trị viên" },
      { id: 2, name: "Nhân sự" }
    ], {});

    // 4. Thêm 30 Nhân viên (Đã chuẩn hóa snake_case theo DB cấu trúc)
    await queryInterface.bulkInsert('employees', [
      { id: 1, last_name: "Nguyễn Minh", first_name: "Hoàng", employee_code: "PNKX365", email: "hoangnm@phenikaa-x.com", phone: "0858812541", gender: "Nam", date_of_birth: "1996-08-15", start_date: "2023-02-10", level_id: 2, address: "Hà Nội", role_id: 2, document_url: "/uploads/docs/hoangnm.pdf", department_id: 1, status: true },
      { id: 2, last_name: "Đỗ Đức", first_name: "Anh", employee_code: "HDK212", email: "anhdd@phenikaa-x.com", phone: "0902149993", gender: "Nam", date_of_birth: "1998-05-20", start_date: "2024-01-05", level_id: 1, address: "Hà Nội", role_id: 1, document_url: "/uploads/docs/anhdd.pdf", department_id: 2, status: true },
      { id: 3, last_name: "Lê Công Bảo", first_name: "Ngọc", employee_code: "HDK221", email: "ngoclcb@phenikaa-x.com", phone: "0329645776", gender: "Nam", date_of_birth: "1995-11-02", start_date: "2022-08-15", level_id: 2, address: "Hà Nội", role_id: 2, document_url: "/uploads/docs/ngoclcb.pdf", department_id: 3, status: true },
      { id: 4, last_name: "Phạm Viết", first_name: "Vinh", employee_code: "PNKX363", email: "vinhpv@phenikaa-x.com", phone: "0869674217", gender: "Nam", date_of_birth: "2000-02-01", start_date: "2026-05-25", level_id: 1, address: "Hà Nội", role_id: 1, document_url: "/uploads/docs/vinhpv.pdf", department_id: 1, status: false },
      { id: 5, last_name: "Nguyễn Tuấn", first_name: "Anh", employee_code: "PNKX362", email: "anhnt@phenikaa-x.com", phone: "0982210794", gender: "Nam", date_of_birth: "1994-07-22", start_date: "2021-03-12", level_id: 2, address: "Hà Nội", role_id: 2, document_url: "/uploads/docs/anhnt.pdf", department_id: 1, status: true },
      { id: 6, last_name: "Đào Văn", first_name: "Quang", employee_code: "PNKX361", email: "quangdv@phenikaa-x.com", phone: "0359275458", gender: "Nam", date_of_birth: "1997-09-30", start_date: "2023-06-18", level_id: 1, address: "Hà Nội", role_id: 2, document_url: null, department_id: 4, status: true },
      { id: 7, last_name: "Lê Minh", first_name: "Thảo", employee_code: "PNKX360", email: "thaolm@phenikaa-x.com", phone: "0966789605", gender: "Nữ", date_of_birth: "1999-04-12", start_date: "2024-02-20", level_id: 2, address: "Hà Nội", role_id: 2, document_url: "/uploads/docs/thaolm.pdf", department_id: 5, status: true },
      { id: 8, last_name: "Nguyễn Chấn", first_name: "Nam", employee_code: "PNKX359", email: "namnc@phenikaa-x.com", phone: "0329848671", gender: "Nam", date_of_birth: "1993-12-05", start_date: "2020-09-10", level_id: 2, address: "Hà Nội", role_id: 1, document_url: null, department_id: 4, status: false },
      { id: 9, last_name: "Hà Tiến Công", first_name: "Minh", employee_code: "PNKX358", email: "minhtc@phenikaa-x.com", phone: "0773288421", gender: "Nam", date_of_birth: "1996-03-25", start_date: "2023-11-01", level_id: 1, address: "Hà Nội", role_id: 2, document_url: "/uploads/docs/minhtc.pdf", department_id: 6, status: true },
      { id: 10, last_name: "Trần Bảo", first_name: "Khánh", employee_code: "PNKX345", email: "khanhtb@phenikaa-x.com", phone: "0946844375", gender: "Nam", date_of_birth: "1998-10-18", start_date: "2024-03-15", level_id: 2, address: "Hà Nội", role_id: 2, document_url: "/uploads/docs/khanhtb.pdf", department_id: 1, status: true },
      { id: 11, last_name: "Trần Văn", first_name: "Hải", employee_code: "PNKX344", email: "haitv@phenikaa-x.com", phone: "0912345678", gender: "Nam", date_of_birth: "1992-06-14", start_date: "2019-05-12", level_id: 1, address: "Hà Nội", role_id: 1, document_url: null, department_id: 6, status: true },
      { id: 12, last_name: "Nguyễn Thị", first_name: "Mai", employee_code: "PNKX343", email: "maint@phenikaa-x.com", phone: "0987654321", gender: "Nữ", date_of_birth: "1995-01-09", start_date: "2022-10-22", level_id: 2, address: "Hà Nội", role_id: 2, document_url: "/uploads/docs/maint.pdf", department_id: 5, status: true },
      { id: 13, last_name: "Lê Hoàng", first_name: "Long", employee_code: "HDK222", email: "longlh@phenikaa-x.com", phone: "0903334445", gender: "Nam", date_of_birth: "1997-08-27", start_date: "2023-04-10", level_id: 2, address: "Hà Nội", role_id: 2, document_url: "/uploads/docs/longlh.pdf", department_id: 2, status: false },
      { id: 14, last_name: "Phạm Thanh", first_name: "Tùng", employee_code: "PNKX342", email: "tungpt@phenikaa-x.com", phone: "0868112233", gender: "Nam", date_of_birth: "1999-12-11", start_date: "2024-06-05", level_id: 1, address: "Hà Nội", role_id: 2, document_url: null, department_id: 1, status: true },
      { id: 15, last_name: "Vũ Bích", first_name: "Ngọc", employee_code: "PNKX341", email: "ngocvb@phenikaa-x.com", phone: "0945998877", gender: "Nữ", date_of_birth: "2001-03-08", start_date: "2025-01-15", level_id: 2, address: "Hà Nội", role_id: 2, document_url: "/uploads/docs/ngocvb.pdf", department_id: 3, status: true },
      { id: 16, last_name: "Hoàng Đình", first_name: "Đạt", employee_code: "PNKX340", email: "dathd@phenikaa-x.com", phone: "0352667788", gender: "Nam", date_of_birth: "1996-07-19", start_date: "2023-09-01", level_id: 1, address: "Hà Nội", role_id: 1, document_url: null, department_id: 4, status: true },
      { id: 17, last_name: "Bùi Minh", first_name: "Tuấn", employee_code: "HDK223", email: "tuanbm@phenikaa-x.com", phone: "0834556677", gender: "Nam", date_of_birth: "1994-02-28", start_date: "2021-11-11", level_id: 2, address: "Hà Nội", role_id: 2, document_url: "/uploads/docs/tuanbm.pdf", department_id: 2, status: true },
      { id: 18, last_name: "Đặng Thị Thu", first_name: "Hà", employee_code: "PNKX339", email: "hadtt@phenikaa-x.com", phone: "0971223344", gender: "Nữ", date_of_birth: "1998-09-14", start_date: "2024-05-20", level_id: 2, address: "Hà Nội", role_id: 2, document_url: null, department_id: 5, status: false },
      { id: 19, last_name: "Ngô Chí", first_name: "Thành", employee_code: "PNKX338", email: "thanhnc@phenikaa-x.com", phone: "0962334455", gender: "Nam", date_of_birth: "1995-05-05", start_date: "2022-07-08", level_id: 1, address: "Hà Nội", role_id: 1, document_url: "/uploads/docs/thanhnc.pdf", department_id: 6, status: true },
      { id: 20, last_name: "Đỗ Minh", first_name: "Quân", employee_code: "PNKX337", email: "quandm@phenikaa-x.com", phone: "0915445566", gender: "Nam", date_of_birth: "1997-11-22", start_date: "2023-12-15", level_id: 2, address: "Hà Nội", role_id: 2, document_url: "/uploads/docs/quandm.pdf", department_id: 1, status: true },
      { id: 21, last_name: "Nguyễn Bảo", first_name: "Trâm", employee_code: "PNKX336", email: "tramnb@phenikaa-x.com", phone: "0981556677", gender: "Nữ", date_of_birth: "2000-08-30", start_date: "2025-03-01", level_id: 2, address: "Hà Nội", role_id: 2, document_url: null, department_id: 3, status: true },
      { id: 22, last_name: "Phan Văn", first_name: "Đức", employee_code: "PNKX335", email: "ducpv@phenikaa-x.com", phone: "0904667788", gender: "Nam", date_of_birth: "1993-01-16", start_date: "2020-04-25", level_id: 1, address: "Hà Nội", role_id: 1, document_url: "/uploads/docs/ducpv.pdf", department_id: 4, status: false },
      { id: 23, last_name: "Dương Hồng", first_name: "Nhung", employee_code: "PNKX334", email: "nhunghd@phenikaa-x.com", phone: "0936778899", gender: "Nữ", date_of_birth: "1996-10-10", start_date: "2023-08-14", level_id: 2, address: "Hà Nội", role_id: 2, document_url: "/uploads/docs/nhunghd.pdf", department_id: 5, status: true },
      { id: 24, last_name: "Lý Minh", first_name: "Triết", employee_code: "HDK224", email: "trietlm@phenikaa-x.com", phone: "0859889900", gender: "Nam", date_of_birth: "1998-04-04", start_date: "2024-07-20", level_id: 1, address: "Hà Nội", role_id: 2, document_url: null, department_id: 2, status: true },
      { id: 25, last_name: "Trịnh Công", first_name: "Sơn", employee_code: "PNKX333", email: "sontc@phenikaa-x.com", phone: "0392112233", gender: "Nam", date_of_birth: "1994-12-19", start_date: "2021-09-05", level_id: 2, address: "Hà Nội", role_id: 1, document_url: "/uploads/docs/sontc.pdf", department_id: 6, status: true },
      { id: 26, last_name: "Phùng Tiến", first_name: "Đạt", employee_code: "PNKX332", email: "datpt@phenikaa-x.com", phone: "0941223344", gender: "Nam", date_of_birth: "1999-06-25", start_date: "2024-10-10", level_id: 1, address: "Hà Nội", role_id: 2, document_url: "/uploads/docs/datpt.pdf", department_id: 1, status: true },
      { id: 27, last_name: "Cao Minh", first_name: "Châu", employee_code: "PNKX331", email: "chaucm@phenikaa-x.com", phone: "0975334455", gender: "Nữ", date_of_birth: "2002-02-14", start_date: "2025-06-01", level_id: 2, address: "Hà Nội", role_id: 2, document_url: null, department_id: 3, status: true },
      { id: 28, last_name: "Đinh Quang", first_name: "Vinh", employee_code: "PNKX330", email: "vinhdq@phenikaa-x.com", phone: "0968445566", gender: "Nam", date_of_birth: "1995-09-09", start_date: "2022-01-20", level_id: 1, address: "Hà Nội", role_id: 1, document_url: "/uploads/docs/vinhdq.pdf", department_id: 4, status: false },
      { id: 29, last_name: "Nguyễn Hà", first_name: "Phương", employee_code: "PNKX329", email: "phuongnh@phenikaa-x.com", phone: "0917556677", gender: "Nữ", date_of_birth: "1997-03-21", start_date: "2023-05-15", level_id: 2, address: "Hà Nội", role_id: 2, document_url: "/uploads/docs/phuongnh.pdf", department_id: 5, status: true },
      { id: 30, last_name: "Võ Hoàng", first_name: "Yến", employee_code: "PNKX328", email: "yenvh@phenikaa-x.com", phone: "0983667788", gender: "Nữ", date_of_birth: "2000-11-11", start_date: "2025-09-05", level_id: 1, address: "Hà Nội", role_id: 2, document_url: null, department_id: 6, status: true }
    ], {});
  },

  async down(queryInterface) {
    // Thứ tự xóa phải ngược lại khi thêm để tránh lỗi ràng buộc khóa ngoại
    await queryInterface.bulkDelete('employees', null, {});
    await queryInterface.bulkDelete('roles', null, {});
    await queryInterface.bulkDelete('levels', null, {});
    await queryInterface.bulkDelete('departments', null, {});
  }
};