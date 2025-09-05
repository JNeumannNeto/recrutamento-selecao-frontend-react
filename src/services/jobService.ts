import { jobApi } from './api';
import {
  Job,
  CreateJobRequest,
  UpdateJobRequest,
  UpdateJobStatusRequest,
  JobListFilter,
  Skill,
  PaginatedResponse,
} from '../types';

export const jobService = {
  async createJob(data: CreateJobRequest): Promise<Job> {
    const response = await jobApi.post<Job>('/jobs', data);
    return response.data;
  },

  async getJobs(filters?: JobListFilter): Promise<PaginatedResponse<Job>> {
    const response = await jobApi.get<Job[]>('/jobs', filters);
    return response as PaginatedResponse<Job>;
  },

  async getJobById(id: string): Promise<Job> {
    const response = await jobApi.get<Job>(`/jobs/${id}`);
    return response.data;
  },

  async updateJob(id: string, data: UpdateJobRequest): Promise<Job> {
    const response = await jobApi.put<Job>(`/jobs/${id}`, data);
    return response.data;
  },

  async updateJobStatus(id: string, data: UpdateJobStatusRequest): Promise<Job> {
    const response = await jobApi.patch<Job>(`/jobs/${id}/status`, data);
    return response.data;
  },

  async deleteJob(id: string): Promise<void> {
    await jobApi.delete(`/jobs/${id}`);
  },

  async getSkills(params?: { category?: string; search?: string }): Promise<Skill[]> {
    const response = await jobApi.get<Skill[]>('/skills', params);
    return response.data;
  },
};
