import React from "react";
import SkillCarousel from "./SkillCarousel";

export default function Skills() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <p className="text-white/70 max-w-2xl mb-6">
        Tools and languages I work with day-to-day. Hover the carousel to pause.
      </p>
      <SkillCarousel />
    </div>
  );
}
