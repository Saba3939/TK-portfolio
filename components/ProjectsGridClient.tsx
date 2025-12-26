"use client";

import { useState } from "react";
import { Achievement } from "@/lib/achievements";
import Card from "./Card";
import AchievementModal from "./AchievementModal";

interface ProjectsGridClientProps {
  achievements: Achievement[];
}

export default function ProjectsGridClient({ achievements }: ProjectsGridClientProps) {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  return (
    <>
      <section id="achievements" className="py-24 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wider">
            ACHIEVEMENTS
          </h2>
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
          <p className="mt-4 text-gray-500 text-sm tracking-widest">これまでの実績</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item) => (
            <div 
              key={item.id} 
              className="h-full cursor-pointer"
              onClick={() => setSelectedAchievement(item)}
            >
              <Card item={item} />
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedAchievement && (
        <AchievementModal 
          achievement={selectedAchievement} 
          onClose={() => setSelectedAchievement(null)} 
        />
      )}
    </>
  );
}
