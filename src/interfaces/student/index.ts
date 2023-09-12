import { AttendanceInterface } from 'interfaces/attendance';
import { EvaluationInterface } from 'interfaces/evaluation';
import { LeaveInterface } from 'interfaces/leave';
import { SchoolInterface } from 'interfaces/school';
import { GetQueryInterface } from 'interfaces';

export interface StudentInterface {
  id?: string;
  name: string;
  birthdate: any;
  division: string;
  group_name: string;
  school_id: string;
  created_at?: any;
  updated_at?: any;
  attendance?: AttendanceInterface[];
  evaluation?: EvaluationInterface[];
  leave?: LeaveInterface[];
  school?: SchoolInterface;
  _count?: {
    attendance?: number;
    evaluation?: number;
    leave?: number;
  };
}

export interface StudentGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  division?: string;
  group_name?: string;
  school_id?: string;
}
