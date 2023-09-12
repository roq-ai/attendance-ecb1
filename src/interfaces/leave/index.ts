import { StudentInterface } from 'interfaces/student';
import { GetQueryInterface } from 'interfaces';

export interface LeaveInterface {
  id?: string;
  student_id: string;
  start_date: any;
  end_date: any;
  reason?: string;
  created_at?: any;
  updated_at?: any;

  student?: StudentInterface;
  _count?: {};
}

export interface LeaveGetQueryInterface extends GetQueryInterface {
  id?: string;
  student_id?: string;
  reason?: string;
}
