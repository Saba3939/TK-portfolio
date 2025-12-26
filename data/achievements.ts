export interface Achievement {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  link?: string;
}

export const achievements: Achievement[] = [
  {
    id: "1",
    title: "AI Hackathon 優勝",
    description: "革新的なAIツールを開発し、500チームの中で1位を獲得しました。Next.jsとOpenAI APIを活用した即時翻訳アプリです。",
    tags: ["Next.js", "AI", "Tailwind"],
    link: "https://github.com",
    image: "https://placehold.co/600x400/000000/ffffff?text=Hackathon+Winner"
  },
  {
    id: "2",
    title: "エコ・トラッキングアプリ",
    description: "個人のCO2排出量を可視化するモバイルアプリ。App Storeのおすすめアプリに選出されました。",
    tags: ["React Native", "Firebase"],
    link: "https://github.com",
    image: "https://placehold.co/600x400/1e1e1e/ffffff?text=Eco+App"
  },
  {
    id: "3",
    title: "ポートフォリオ v1",
    description: "HTML/CSSのみで構築した初期のポートフォリオサイト。Web制作の基礎をここで学びました。",
    tags: ["HTML", "CSS"],
    image: "https://placehold.co/600x400/0a0a0a/ffffff?text=Portfolio+v1"
  }
];
