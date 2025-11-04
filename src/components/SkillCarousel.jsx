import React from "react";
import styled from "styled-components";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiDotnet,
  SiPython,
  SiKotlin,
  SiMysql,
  SiFirebase,
  SiVite,
} from "react-icons/si";

const SKILLS = [
  { label: "React", Icon: SiReact, level: 88 },
  { label: "TypeScript", Icon: SiTypescript, level: 80 },
  { label: "Tailwind", Icon: SiTailwindcss, level: 85 },
  { label: "Node.js", Icon: SiNodedotjs, level: 78 },
  { label: "C# / .NET", Icon: SiDotnet, level: 72 },
  { label: "Python", Icon: SiPython, level: 76 },
  { label: "Kotlin", Icon: SiKotlin, level: 60 },
  { label: "SQL", Icon: SiMysql, level: 73 },
  { label: "Firebase", Icon: SiFirebase, level: 69 },
  { label: "Vite", Icon: SiVite, level: 82 },
  
];

const SkillCarousel = () => {
  return (
    <StyledWrapper>
      {/* ✅ scale THIS wrapper, not .card-3d */}
      <div className="scale-wrap">
        <div className="card-3d" aria-label="Skill carousel, rotates automatically">
          {SKILLS.map(({ label, Icon, level }) => (
            <div
              key={label}
              className="card-face"
              style={{ "--level": `${level}%` }}
            >
              <div className="icon-wrap" aria-hidden>
                <Icon className="icon" />
              </div>
              <div className="label">{label}</div>
              <div className="bar" role="meter" aria-valuemin={0} aria-valuemax={100} aria-valuenow={level}>
                <div className="bar-fill" />
                <span className="bar-text">{level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 1rem;
  perspective: 900px;

  /* ---------- Scale wrapper (so animation on .card-3d isn't overridden) ---------- */
  .scale-wrap {
    transform: scale(1);
    transform-origin: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /* Desktop-only size bump */
  @media (min-width: 1024px) {
    .scale-wrap { transform: scale(1.3); }
  }
  @media (min-width: 1440px) {
    .scale-wrap { transform: scale(1.45); }
  }

  /* ---------- Animations ---------- */
  @keyframes autoRun3d {
    from { transform: rotateY(0deg); }
    to   { transform: rotateY(-360deg); }
  }
 @keyframes animateBrightness {
  0%, 100% { filter: brightness(1); }
  50%      { filter: brightness(0.85); } /* gentler */
}

.card-face {
  animation: animateBrightness 6s ease-in-out infinite;
  animation-delay: 0s !important; /* all in sync */
}


  /* ---------- Carousel ---------- */
  .card-3d {
    position: relative;
    width: 420px;
    height: 220px;
    transform-style: preserve-3d;
    animation: autoRun3d 20s linear infinite; /* this animates transform */
    will-change: transform;
  }
  .card-3d:hover,
  .card-3d:hover .card-face {
    animation-play-state: paused !important;
  }

  /* ---------- Faces ---------- */
  .card-face {
    position: absolute;
    width: 110px;
    height: 140px;
    top: 50%;
    left: 50%;
    transform-origin: center center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    background: rgba(15, 23, 42, 0.35);
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 14px;
    backdrop-filter: blur(6px);
    color: #fff;

    padding: 14px 12px 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25), inset 0 0 0 1px rgba(255,255,255,0.06);

    animation: animateBrightness 20s linear infinite;
    will-change: transform, filter;
  }

  .icon-wrap {
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    border-radius: 10px;
    background: rgba(0, 255, 210, 0.08);
    border: 1px solid rgba(0, 255, 210, 0.18);
  }
  .icon { font-size: 24px; opacity: 0.95; }
  .label {
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.2px;
    color: rgba(255,255,255,0.92);
    margin-top: 2px;
    text-align: center;
    white-space: nowrap;
  }

  /* ---------- Progress ---------- */
  .bar {
    position: relative;
    width: 90%;
    height: 8px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.14);
    overflow: hidden;
  }
  .bar-fill {
    position: absolute;
    inset: 0;
    width: var(--level, 0%);
    background: linear-gradient(90deg, #00ffd1, #27c4ff);
    box-shadow: 0 0 12px rgba(39, 196, 255, 0.45);
    transition: width 700ms cubic-bezier(.25,.8,.25,1);
  }
  .bar-text {
    position: absolute;
    top: -20px;
    right: 0;
    font-size: 0.7rem;
    color: rgba(255,255,255,0.75);
  }

  /* ---------- Responsive base ---------- */
  @media (max-width: 768px) {
    .card-3d { width: 320px; height: 190px; }
    .card-face { width: 92px; height: 122px; gap: 10px; }
    .icon-wrap { width: 40px; height: 40px; }
    .icon { font-size: 21px; }
  }
  @media (max-width: 480px) {
    .card-3d { width: 260px; height: 160px; }
    .card-face { width: 80px; height: 108px; }
    .icon-wrap { width: 36px; height: 36px; }
    .icon { font-size: 19px; }
  }

  /* ---------- 10 faces around a ring ---------- */
  .card-3d .card-face:nth-child(1)  { transform: translate(-50%, -50%) rotateY(  0deg) translateZ(180px); animation-delay:  -0s; }
  .card-3d .card-face:nth-child(2)  { transform: translate(-50%, -50%) rotateY( 36deg) translateZ(180px); animation-delay:  -2s; }
  .card-3d .card-face:nth-child(3)  { transform: translate(-50%, -50%) rotateY( 72deg) translateZ(180px); animation-delay:  -4s; }
  .card-3d .card-face:nth-child(4)  { transform: translate(-50%, -50%) rotateY(108deg) translateZ(180px); animation-delay:  -6s; }
  .card-3d .card-face:nth-child(5)  { transform: translate(-50%, -50%) rotateY(144deg) translateZ(180px); animation-delay:  -8s; }
  .card-3d .card-face:nth-child(6)  { transform: translate(-50%, -50%) rotateY(180deg) translateZ(180px); animation-delay: -10s; }
  .card-3d .card-face:nth-child(7)  { transform: translate(-50%, -50%) rotateY(216deg) translateZ(180px); animation-delay: -12s; }
  .card-3d .card-face:nth-child(8)  { transform: translate(-50%, -50%) rotateY(252deg) translateZ(180px); animation-delay: -14s; }
  .card-3d .card-face:nth-child(9)  { transform: translate(-50%, -50%) rotateY(288deg) translateZ(180px); animation-delay: -16s; }
  .card-3d .card-face:nth-child(10) { transform: translate(-50%, -50%) rotateY(324deg) translateZ(180px); animation-delay: -18s; }
`;

export default SkillCarousel;
