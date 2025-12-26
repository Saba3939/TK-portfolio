import { getSkills } from "@/lib/skills";
import SkillsClient from "./SkillsClient";

export default function Skills() {
  const categories = getSkills();

  return <SkillsClient categories={categories} />;
}
