export interface Project {
  id: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  projectUrl?: string;
  technologies?: string[];
}

export interface ProjectData {
  projects: Project[];
}

export interface HomeData {
  user?: string;
  blurp?: string;
  avatar?: string;
}

export interface Experience {
  jobTitle?: string;
  companyName?: string;
  jobDescription?: string;
  jobLocation?: string;
  startDate?: string; // ISO 8601 date string (e.g., "2023-01-15T00:00:00Z")
  endDate?: string;   // ISO 8601 date string
}

export interface AboutData {
  fullName?: string;
  age?: number;
  pronouns?: string;
  bio?: string;
  jobExperiences?: Experience[];
}

export interface ContactData {
  email?: string;
  phone?: string;
  discord?: string;
  twitter?: string;
  linkedin?: string;
}

export interface ImprintData {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface AllData {
  user?: HomeData;
  about?: AboutData;
  contact?: ContactData;
  projects?: ProjectData;
  imprint?: ImprintData;
}