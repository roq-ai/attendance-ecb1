import axios from 'axios';
import queryString from 'query-string';
import { LeaveInterface, LeaveGetQueryInterface } from 'interfaces/leave';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getLeaves = async (query?: LeaveGetQueryInterface): Promise<PaginatedInterface<LeaveInterface>> => {
  const response = await axios.get('/api/leaves', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createLeave = async (leave: LeaveInterface) => {
  const response = await axios.post('/api/leaves', leave);
  return response.data;
};

export const updateLeaveById = async (id: string, leave: LeaveInterface) => {
  const response = await axios.put(`/api/leaves/${id}`, leave);
  return response.data;
};

export const getLeaveById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/leaves/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteLeaveById = async (id: string) => {
  const response = await axios.delete(`/api/leaves/${id}`);
  return response.data;
};
