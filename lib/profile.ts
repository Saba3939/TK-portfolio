import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Profile {
  name: string;
  title: string;
  bio: string;
  image?: string;
  github?: string;
  twitter?: string;
  email?: string;
}

const profilePath = path.join(process.cwd(), 'content/profile.md');

export function getProfile(): Profile {
  if (!fs.existsSync(profilePath)) {
    return {
      name: 'Your Name',
      title: 'Your Title',
      bio: 'Write your bio here.',
    };
  }

  const fileContents = fs.readFileSync(profilePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    name: data.name || 'Your Name',
    title: data.title || 'Your Title',
    bio: content.trim(),
    image: data.image || undefined,
    github: data.github || undefined,
    twitter: data.twitter || undefined,
    email: data.email || undefined,
  };
}
