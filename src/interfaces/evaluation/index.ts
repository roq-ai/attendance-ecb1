import { StudentInterface } from 'interfaces/student';
import { GetQueryInterface } from 'interfaces';

export interface EvaluationInterface {
  id?: string;
  student_id: string;
  evaluation_period: string;
  attendance_percentage: number;
  created_at?: any;
  updated_at?: any;

  student?: StudentInterface;
  _count?: {};
}

export interface EvaluationGetQueryInterface extends GetQueryInterface {
  id?: string;
  student_id?: string;
  evaluation_period?: string;
}
