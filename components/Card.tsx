import { Achievement } from "@/lib/achievements";

interface CardProps {
  item: Achievement;
}

export default function Card({ item }: CardProps) {
  return (
    <div className="glass-card flex flex-col h-full">
      <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
        {item.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover"
            />
        ) : (
            <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-500">
                No Image
            </div>
        )}
      </div>
      
      <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
      <p className="text-gray-400 mb-4 flex-grow text-sm leading-relaxed">
        {item.description}
      </p>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {item.tags.map(tag => (
          <span key={tag} className="text-xs font-semibold px-2 py-1 bg-white/5 rounded-full text-secondary border border-white/5">
            {tag}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 mt-auto flex-wrap">
        {item.links && item.links.map((link, index) => (
          <a 
            key={index}
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-center text-xs font-semibold px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
          >
            {link.label}
          </a>
        ))}
        {item.pdf && item.pdf.length > 0 && (
          <div className="flex items-center gap-1 text-xs font-semibold px-3 py-2 bg-red-500/20 rounded-lg text-red-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            PDF ({item.pdf.length})
          </div>
        )}
      </div>
    </div>
  );
}
