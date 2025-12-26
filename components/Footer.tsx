export default function Footer() {
  return (
    <footer id="contact" className="py-12 border-t border-white/10 mt-20 relative overflow-hidden">
        {/* Background gradient at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="mb-4 md:mb-0">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} My Portfolio. Built with <span className="text-white">Next.js</span> & <span className="text-white">Tailwind</span>.
          </p>
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">GitHub</a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">X (Twitter)</a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Email</a>
        </div>
      </div>
    </footer>
  );
}
