export interface Skill {
  id: string;
  name: string;
  category: string;
  created_at: string;
}

export interface JobSkill {
  id: string;
  job_id: string;
  skill_id: string;
  required_level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  is_required: boolean;
  created_at: string;
  skill?: Skill;
}

export interface Job {
  id: string;
  title: string;
  description: string;
  requirements: string;
  location: string;
  salary_min?: number;
  salary_max?: number;
  status: 'open' | 'closed';
  created_by: string;
  created_at: string;
  updated_at: string;
  skills?: JobSkill[];
}

export interface CreateJobRequest {
  title: string;
  description: string;
  requirements: string;
  location: string;
  salary_min?: number;
  salary_max?: number;
  skills: CreateJobSkillRequest[];
}

export interface CreateJobSkillRequest {
  skill_id: string;
  required_level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  is_required: boolean;
}

export interface UpdateJobRequest {
  title?: string;
  description?: string;
  requirements?: string;
  location?: string;
  salary_min?: number;
  salary_max?: number;
}

export interface UpdateJobStatusRequest {
  status: 'open' | 'closed';
}

export interface JobListFilter {
  status?: string;
  location?: string;
  title?: string;
  min_salary?: number;
  max_salary?: number;
  page?: number;
  limit?: number;
}

export interface JobResponse {
  id: string;
  title: string;
  description: string;
  requirements: string;
  location: string;
  salary_min?: number;
  salary_max?: number;
  status: string;
  created_by: string;
  created_at: string;
  updated_at: string;
  skills?: JobSkillResponse[];
}

export interface JobSkillResponse {
  skill: SkillResponse;
  required_level: string;
  is_required: boolean;
}

export interface SkillResponse {
  id: string;
  name: string;
  category: string;
}
