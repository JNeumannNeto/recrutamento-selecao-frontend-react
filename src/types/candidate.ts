import { User } from './auth';
import { Skill } from './job';

export interface Candidate {
  id: string;
  user_id: string;
  phone: string;
  address: string;
  date_of_birth?: string;
  linkedin_url: string;
  github_url: string;
  created_at: string;
  updated_at: string;
  user?: User;
  skills?: CandidateSkill[];
  work_experiences?: WorkExperience[];
  education?: Education[];
  resumes?: Resume[];
  applications?: JobApplication[];
}

export interface CandidateSkill {
  id: string;
  candidate_id: string;
  skill_id: string;
  proficiency_level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  years_of_experience: number;
  created_at: string;
  skill?: Skill;
}

export interface WorkExperience {
  id: string;
  candidate_id: string;
  company_name: string;
  position: string;
  description: string;
  start_date: string;
  end_date?: string;
  is_current: boolean;
  created_at: string;
  updated_at: string;
}

export interface Education {
  id: string;
  candidate_id: string;
  institution: string;
  degree: string;
  field_of_study: string;
  start_date: string;
  end_date?: string;
  is_current: boolean;
  gpa?: number;
  created_at: string;
  updated_at: string;
}

export interface Resume {
  id: string;
  candidate_id: string;
  filename: string;
  file_path: string;
  file_size: number;
  mime_type: string;
  extracted_text?: string;
  ai_processed: boolean;
  created_at: string;
  updated_at: string;
}

export interface JobApplication {
  id: string;
  job_id: string;
  candidate_id: string;
  status: 'applied' | 'reviewing' | 'interview' | 'rejected' | 'accepted';
  cover_letter: string;
  applied_at: string;
  updated_at: string;
  job?: {
    id: string;
    title: string;
    description: string;
    location: string;
    status: string;
  };
}

export interface CreateCandidateRequest {
  phone: string;
  address: string;
  date_of_birth?: string;
  linkedin_url: string;
  github_url: string;
}

export interface UpdateCandidateRequest {
  phone?: string;
  address?: string;
  date_of_birth?: string;
  linkedin_url?: string;
  github_url?: string;
}

export interface AddSkillRequest {
  skill_id: string;
  proficiency_level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  years_of_experience: number;
}

export interface AddWorkExperienceRequest {
  company_name: string;
  position: string;
  description: string;
  start_date: string;
  end_date?: string;
  is_current: boolean;
}

export interface AddEducationRequest {
  institution: string;
  degree: string;
  field_of_study: string;
  start_date: string;
  end_date?: string;
  is_current: boolean;
  gpa?: number;
}

export interface CreateJobApplicationRequest {
  job_id: string;
  cover_letter: string;
}

export interface CandidateResponse {
  id: string;
  user: User;
  phone: string;
  address: string;
  date_of_birth?: string;
  linkedin_url: string;
  github_url: string;
  skills?: CandidateSkillResponse[];
  work_experiences?: WorkExperienceResponse[];
  education?: EducationResponse[];
  resumes?: ResumeResponse[];
  applications?: JobApplicationResponse[];
  created_at: string;
}

export interface CandidateSkillResponse {
  id: string;
  skill: Skill;
  proficiency_level: string;
  years_of_experience: number;
}

export interface WorkExperienceResponse {
  id: string;
  company_name: string;
  position: string;
  description: string;
  start_date: string;
  end_date?: string;
  is_current: boolean;
}

export interface EducationResponse {
  id: string;
  institution: string;
  degree: string;
  field_of_study: string;
  start_date: string;
  end_date?: string;
  is_current: boolean;
  gpa?: number;
}

export interface ResumeResponse {
  id: string;
  filename: string;
  file_size: number;
  mime_type: string;
  ai_processed: boolean;
  uploaded_at: string;
}

export interface JobApplicationResponse {
  id: string;
  job: {
    id: string;
    title: string;
    description: string;
    location: string;
    status: string;
  };
  status: string;
  cover_letter: string;
  applied_at: string;
}
