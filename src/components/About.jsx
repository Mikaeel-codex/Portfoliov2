import CardSwap, { Card } from "@/components/CardSwap";

export default function About() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {/* Left: about text */}
      <div className="glass p-6 md:p-8 md:col-span-2">
        <p className="text-white/80 leading-relaxed">
          I am a focused and curious third-year Computer Science student at Varsity College
          with a strong foundation in programming, data structures, and algorithms.
          I enjoy building practical, user-friendly solutions through clear and efficient code.
          Skilled in Python, Java, and modern web technologies like React, I have a keen interest in
          full-stack development and creating software that makes a difference. I am looking for opportunities
          to work on real-world projects that will grow my skills and allow me to contribute to meaningful technology solutions.
        </p>
        <p className="text-white/70 mt-4">
          Looking for opportunities on real projects where I can contribute and grow.
        </p>
      </div>

      {/* Right: Highlights as a swapping card stack */}
      <div className="relative md:col-span-1 min-h-[460px]">
        <CardSwap
          width={520}
          height={360}
          cardDistance={70}
          verticalDistance={60}
          delay={4200}
          pauseOnHover={false}
        >
          <Card customClass="overflow-hidden bg-white/5">
          <img
            src="/teamwork.jpg"
            alt="Reliable team player"
            className="absolute inset-0 h-full w-full object-cover opacity-100%"
          />
          <div className="absolute top-3 left-4 text-white/90 font-medium flex items-center gap-2">
            <span>👥</span> <span>Reliable team player</span>
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-black/40 to-transparent" />
        </Card>

        <Card customClass="overflow-hidden bg-white/5">
          <img
            src="/problem solver.jpg"
            alt="Problem solver"
            className="absolute inset-0 h-full w-full object-cover opacity-100%"
          />
          <div className="absolute top-3 left-4 text-white/90 font-medium flex items-center gap-2">
            <span>💡</span> <span>Problem solver</span>
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-black/40 to-transparent" />
        </Card>

        <Card customClass="overflow-hidden bg-white/5">
          <img
            src="/mindset.png"
            alt="Software engineer mindset"
            className="absolute inset-0 h-full w-full object-cover opacity-100%"
          />
          <div className="absolute top-3 left-4 text-white/90 font-medium flex items-center gap-2">
            <span>🧠</span> <span>Developer mindset</span>
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-black/40 to-transparent" />
        </Card>
        </CardSwap>
      </div>
    </div>
  );
}
