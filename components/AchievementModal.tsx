"use client";

import { Achievement } from "@/lib/achievements";
import { useEffect } from "react";

interface AchievementModalProps {
  achievement: Achievement;
  onClose: () => void;
}

export default function AchievementModal({ achievement, onClose }: AchievementModalProps) {
  // ESCキーでモーダルを閉じる
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />
      
      {/* Modal Content - Larger and more blog-like */}
      <div 
        className="relative bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto border border-white/10 shadow-2xl animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors backdrop-blur-sm"
          aria-label="閉じる"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Hero Image - Large */}
        {achievement.image && (
          <div className="relative w-full h-72 md:h-96 overflow-hidden rounded-t-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={achievement.image} 
              alt={achievement.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
            
            {/* Title overlay on image */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              {achievement.date && (
                <p className="text-gray-300 text-sm mb-2">{achievement.date}</p>
              )}
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                {achievement.title}
              </h2>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-8 md:p-12">
          {/* Title (if no image) */}
          {!achievement.image && (
            <>
              {achievement.date && (
                <p className="text-gray-500 text-sm mb-2">{achievement.date}</p>
              )}
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {achievement.title}
              </h2>
            </>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {achievement.tags.map(tag => (
              <span key={tag} className="text-sm font-semibold px-4 py-1.5 bg-white/10 rounded-full text-gray-300 border border-white/10">
                {tag}
              </span>
            ))}
          </div>

          {/* Description - Blog style */}
          <div className="prose prose-invert prose-lg max-w-none mb-10">
            <p className="text-gray-300 leading-relaxed whitespace-pre-wrap text-lg">
              {achievement.content}
            </p>
          </div>

          {/* Divider */}
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

          {/* Action Buttons - Larger */}
          <div className="flex flex-wrap gap-4">
            {achievement.links && achievement.links.map((link, index) => (
              <a 
                key={index}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-colors text-base"
              >
                {link.label === 'GitHub' ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                )}
                {link.label}
              </a>
            ))}
            {achievement.pdf && achievement.pdf.length > 0 && achievement.pdf.map((pdfUrl, index) => (
              <a 
                key={index}
                href={pdfUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-red-500/20 text-red-400 font-semibold rounded-xl hover:bg-red-500/30 transition-colors border border-red-500/30 text-base"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                PDF {(achievement.pdf?.length ?? 0) > 1 ? index + 1 : ''}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
