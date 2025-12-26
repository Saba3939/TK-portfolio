import { getAllAchievements } from "@/lib/achievements";
import ProjectsGridClient from "./ProjectsGridClient";

export default function ProjectsGrid() {
  const achievements = getAllAchievements();

  return <ProjectsGridClient achievements={achievements} />;
}
