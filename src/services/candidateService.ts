import { candidateApi } from './api';
import {
  Candidate,
  CreateCandidateRequest,
  UpdateCandidateRequest,
  AddSkillRequest,
  AddWorkExperienceRequest,
  AddEducationRequest,
  CreateJobApplicationRequest,
  Resume,
  JobApplication,
} from '../types';

export const candidateService = {
  async createCandidate(data: CreateCandidateRequest): Promise<Candidate> {
    const response = await candidateApi.post<Candidate>('/candidates', data);
    return response.data;
  },

  async getCandidateById(id: string): Promise<Candidate> {
    const response = await candidateApi.get<Candidate>(`/candidates/${id}`);
    return response.data;
  },

  async updateCandidate(id: string, data: UpdateCandidateRequest): Promise<Candidate> {
    const response = await candidateApi.put<Candidate>(`/candidates/${id}`, data);
    return response.data;
  },

  async addSkill(candidateId: string, data: AddSkillRequest): Promise<void> {
    await candidateApi.post(`/candidates/${candidateId}/skills`, data);
  },

  async removeSkill(candidateId: string, skillId: string): Promise<void> {
    await candidateApi.delete(`/candidates/${candidateId}/skills/${skillId}`);
  },

  async addWorkExperience(candidateId: string, data: AddWorkExperienceRequest): Promise<void> {
    await candidateApi.post(`/candidates/${candidateId}/work-experiences`, data);
  },

  async updateWorkExperience(candidateId: string, experienceId: string, data: AddWorkExperienceRequest): Promise<void> {
    await candidateApi.put(`/candidates/${candidateId}/work-experiences/${experienceId}`, data);
  },

  async removeWorkExperience(candidateId: string, experienceId: string): Promise<void> {
    await candidateApi.delete(`/candidates/${candidateId}/work-experiences/${experienceId}`);
  },

  async addEducation(candidateId: string, data: AddEducationRequest): Promise<void> {
    await candidateApi.post(`/candidates/${candidateId}/education`, data);
  },

  async updateEducation(candidateId: string, educationId: string, data: AddEducationRequest): Promise<void> {
    await candidateApi.put(`/candidates/${candidateId}/education/${educationId}`, data);
  },

  async removeEducation(candidateId: string, educationId: string): Promise<void> {
    await candidateApi.delete(`/candidates/${candidateId}/education/${educationId}`);
  },

  async uploadResume(candidateId: string, file: File): Promise<Resume> {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await candidateApi.upload<Resume>(`/candidates/${candidateId}/resume`, formData);
    return response.data;
  },

  async deleteResume(candidateId: string, resumeId: string): Promise<void> {
    await candidateApi.delete(`/candidates/${candidateId}/resumes/${resumeId}`);
  },

  async applyToJob(candidateId: string, data: CreateJobApplicationRequest): Promise<JobApplication> {
    const response = await candidateApi.post<JobApplication>(`/candidates/${candidateId}/applications`, data);
    return response.data;
  },

  async getApplications(candidateId: string): Promise<JobApplication[]> {
    const response = await candidateApi.get<JobApplication[]>(`/candidates/${candidateId}/applications`);
    return response.data;
  },

  async withdrawApplication(candidateId: string, applicationId: string): Promise<void> {
    await candidateApi.delete(`/candidates/${candidateId}/applications/${applicationId}`);
  },
};
