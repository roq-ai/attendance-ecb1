import { StudentInterface } from 'interfaces/student';
import { GetQueryInterface } from 'interfaces';

export interface AttendanceInterface {
  id?: string;
  student_id: string;
  date: any;
  status: string;
  created_at?: any;
  updated_at?: any;

  student?: StudentInterface;
  _count?: {};
}

export interface AttendanceGetQueryInterface extends GetQueryInterface {
  id?: string;
  student_id?: string;
  status?: string;
}
