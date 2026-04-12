import { z } from "zod";

export const AcademicItemSchema = z.object({
  institution: z.string(),
  major: z.string().optional(),
  period: z.string(),
});

export const LanguageSkillSchema = z.object({
  language: z.string(),
  level: z.enum(["Native", "Fluent", "Intermediate", "Beginner"]),
});

export const ExperienceItemSchema = z.object({
  period: z.string(),
  title: z.string(),
  category: z.enum(["Abroad", "InnerSchool", "OuterSchool"]),
  imageUrl: z.string().min(1).optional(),
  description: z.string().optional(),
});

export const ProjectSchema = z.object({
  title: z.string(),
  type: z.string(),
  description: z.string().optional(),
  imageUrl: z.string().min(1).optional(),
  linkUrl: z.string().url().optional(),
});

export const ContactSchema = z.object({
  instagram: z.string().url(),
  email: z.string().email(),
});

export const PortfolioDataSchema = z.object({
  name: z.string(),
  nickname: z.string(),
  tagline: z.array(z.string()),
  academics: z.array(AcademicItemSchema),
  interests: z.array(z.string()),
  values: z.array(z.string()),
  languages: z.array(LanguageSkillSchema),
  tools: z.array(z.string()),
  experiences: z.array(ExperienceItemSchema),
  projects: z.array(ProjectSchema),
  contact: ContactSchema,
});

export type PortfolioData = z.infer<typeof PortfolioDataSchema>;