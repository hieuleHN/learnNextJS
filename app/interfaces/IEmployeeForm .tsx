export default interface IEmployeeForm {
  lastName: string;
  firstName: string;
  employeeCode: string;
  email: string;
  phone: string;
  gender: string;
  dateOfBirth: string;
  startDate: string;
  levelId: number | string;
  address: string;
  roleId: number | string;
  departmentId: number | string;
  documentUrl?: string | null;
  status: boolean;
}