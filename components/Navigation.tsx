import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white tracking-widest uppercase">
              Portfolio
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-12">
              <a href="#hero" className="text-sm font-medium text-gray-400 hover:text-white transition-colors tracking-wide">ホーム</a>
              <a href="#achievements" className="text-sm font-medium text-gray-400 hover:text-white transition-colors tracking-wide">実績</a>
              <a href="#skills" className="text-sm font-medium text-gray-400 hover:text-white transition-colors tracking-wide">スキル</a>
              <a href="#contact" className="text-sm font-medium text-gray-400 hover:text-white transition-colors tracking-wide">コンタクト</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
