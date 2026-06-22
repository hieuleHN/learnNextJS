import EmployeeForm from "@/app/components/EmployeeForm";
//import { EmployeeService } from "../../../src/services/employeeService";

export default async function EditEmployeePage({ params }) {
  const { id } = await params;

  // let employeeData = null;
  // try {
  //   employeeData = await EmployeeService.getById(Number(id));
  // } catch (error) {
  //   console.error("Lỗi khi lấy dữ liệu nhân viên từ Server:", error);
  // }
  // if (!employeeData) {
  //   return (
  //     <div className="p-10 text-center text-red-500 font-medium">
  //       Không tìm thấy thông tin nhân viên này trong hệ thống!
  //     </div>
  //   );
  // }
  
  

  return <EmployeeForm initialData={id} isEdit={true} />;
}