import { useState, useEffect } from 'react';
import { Job, JobListFilter, PaginatedResponse } from '../types';
import { jobService } from '../services';

export const useJobs = (filters?: JobListFilter) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    total_pages: 0,
  });

  const fetchJobs = async (newFilters?: JobListFilter) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await jobService.getJobs({ ...filters, ...newFilters });
      
      setJobs(response.data);
      setPagination(response.pagination);
    } catch (err: any) {
      setError(err.message || 'Erro ao carregar vagas');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const refetch = (newFilters?: JobListFilter) => {
    fetchJobs(newFilters);
  };

  return {
    jobs,
    loading,
    error,
    pagination,
    refetch,
  };
};

export const useJob = (id: string) => {
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await jobService.getJobById(id);
        setJob(response);
      } catch (err: any) {
        setError(err.message || 'Erro ao carregar vaga');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchJob();
    }
  }, [id]);

  const refetch = () => {
    if (id) {
      const fetchJob = async () => {
        try {
          setLoading(true);
          setError(null);
          
          const response = await jobService.getJobById(id);
          setJob(response);
        } catch (err: any) {
          setError(err.message || 'Erro ao carregar vaga');
        } finally {
          setLoading(false);
        }
      };
      
      fetchJob();
    }
  };

  return {
    job,
    loading,
    error,
    refetch,
  };
};
