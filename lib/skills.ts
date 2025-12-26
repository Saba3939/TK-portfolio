import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface SkillCategory {
  name: string;
  label: string;
  skills: string[];
}

const skillsPath = path.join(process.cwd(), 'content/skills.md');

const categoryLabels: Record<string, string> = {
  languages: 'Languages',
  frontend: 'Frontend',
  backend: 'Backend',
  tools: 'Tools',
};

export function getSkills(): SkillCategory[] {
  if (!fs.existsSync(skillsPath)) {
    return [];
  }

  const fileContents = fs.readFileSync(skillsPath, 'utf8');
  const { data } = matter(fileContents);

  const categories: SkillCategory[] = [];

  for (const [key, skills] of Object.entries(data)) {
    if (Array.isArray(skills)) {
      categories.push({
        name: key,
        label: categoryLabels[key] || key,
        skills: skills as string[],
      });
    }
  }

  return categories;
}
