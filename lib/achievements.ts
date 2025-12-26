import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Link {
  label: string;
  url: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  content: string;
  date?: string;
  image?: string;
  tags: string[];
  links?: Link[];
  pdf?: string[];
}

const achievementsDirectory = path.join(process.cwd(), 'content/achievements');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parseLinks(data: any): Link[] | undefined {
  const links: Link[] = [];
  
  // site: URL形式
  if (data.site) {
    links.push({ label: 'サイト', url: data.site });
  }
  
  // github: URL形式
  if (data.github) {
    links.push({ label: 'GitHub', url: data.github });
  }
  
  // 従来のlink: URL形式（後方互換性）
  if (data.link && !data.site && !data.github) {
    links.push({ label: '詳細', url: data.link });
  }
  
  return links.length > 0 ? links : undefined;
}

export function getAllAchievements(): Achievement[] {
  // ディレクトリが存在しない場合は空配列を返す
  if (!fs.existsSync(achievementsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(achievementsDirectory);
  const achievements = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, '');
      const fullPath = path.join(achievementsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      // 最初の段落を説明文として使用
      const description = content.trim().split('\n\n')[0] || '';

      return {
        id,
        title: data.title || 'Untitled',
        description,
        content: content.trim(),
        date: data.date,
        image: data.image,
        tags: data.tags || [],
        links: parseLinks(data),
        pdf: data.pdf ? (Array.isArray(data.pdf) ? data.pdf : [data.pdf]) : undefined,
      } as Achievement;
    });

  // 日付で降順ソート（新しいものが先）
  return achievements.sort((a, b) => {
    if (!a.date) return 1;
    if (!b.date) return -1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getAchievementBySlug(slug: string): Achievement | undefined {
  const fullPath = path.join(achievementsDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return undefined;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const description = content.trim().split('\n\n')[0] || '';

  return {
    id: slug,
    title: data.title || 'Untitled',
    description,
    content: content.trim(),
    date: data.date,
    image: data.image,
    tags: data.tags || [],
    links: parseLinks(data),
    pdf: data.pdf ? (Array.isArray(data.pdf) ? data.pdf : [data.pdf]) : undefined,
  };
}
