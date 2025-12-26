"use client";

import { SkillCategory } from "@/lib/skills";

// 技術名からアイコンURL（Simple Icons CDN）を取得
function getIconUrl(name: string): string {
  const iconMap: Record<string, string> = {
    // Languages
    'TypeScript': 'typescript',
    'JavaScript': 'javascript',
    'Python': 'python',
    'C': 'c',
    'C++': 'cplusplus',
    // Frontend
    'Next.js': 'nextdotjs',
    'React': 'react',
    'Tailwind CSS': 'tailwindcss',
    'HTML': 'html5',
    'CSS': 'css',
    'Vue': 'vuedotjs',
    // Backend
    'Firebase': 'firebase',
    'Supabase': 'supabase',
    'Node.js': 'nodedotjs',
    'Unity': 'unity',
    'PostgreSQL': 'postgresql',
    // Tools
    'Git': 'git',
    'GitHub': 'github',
    'Cursor': 'cursor',
    'Claude Code': 'anthropic',
    'Vim': 'vim',
    'Docker': 'docker',
    'Figma': 'figma',
  };
  
  const slug = iconMap[name] || name.toLowerCase().replace(/\s+/g, '').replace(/\./g, 'dot');
  return `https://cdn.simpleicons.org/${slug}/white`;
}

interface SkillsClientProps {
  categories: SkillCategory[];
}

export default function SkillsClient({ categories }: SkillsClientProps) {
  return (
    <section id="skills" className="py-24 px-4 max-w-5xl mx-auto">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wider">
          SKILLS
        </h2>
        <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
        <p className="mt-4 text-gray-500 text-sm tracking-widest">技術スタック</p>
      </div>

      <div className="space-y-12">
        {categories.map((category) => (
          <div key={category.name}>
            <h3 className="text-lg font-semibold text-gray-400 mb-6 text-center tracking-wider">
              {category.label}
            </h3>
            
            <div className="flex flex-wrap justify-center gap-6">
              {category.skills.map((skill) => (
                <div 
                  key={skill} 
                  className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={getIconUrl(skill)} 
                    alt={skill}
                    className="w-10 h-10 opacity-80 group-hover:opacity-100 transition-opacity"
                    onError={(e) => {
                      // フォールバック: アイコンが見つからない場合は非表示
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
