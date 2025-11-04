import { motion } from "framer-motion";
import { profile } from "../data";
import ProfileCard from "@/components/ProfileCard";

export default function Hero() {
  return (
    <section id="home" className="pt-28 md:pt-32">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 items-center gap-10">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Hello World, I’m <span className="text-accent">{profile.name}</span>
          </motion.h1>
          <p className="mt-4 text-lg text-white/80">{profile.title}</p>
          <p className="mt-3 text-white/70">{profile.tagline}</p>
          <div className="mt-6 flex gap-3">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href={profile.cvUrl} className="btn-ghost" target="_blank">Download CV</a>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: .96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .6, delay: .1 }}
          className="glass p-6 md:p-10"
        >
          {/* Card host box */}
          <div className="aspect-square rounded-xl bg-gradient-to-br via-transparent to-white/5 relative overflow-hidden">
            <ProfileCard className="size-sm center-x"
              name="Mikaeel Pathan"
              title="Full-Stack Developer"
              handle="mikaeel"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/myself.png"          
              miniAvatarUrl="/myself.png"      
              showUserInfo={false}
              enableTilt={true}
              enableMobileTilt={true}
              onContactClick={() =>
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }
            />
          </div>

          {/* Chips below */}
          <div className="mt-6 grid grid-cols-3 gap-2">
            {["JavaScript","React","Node.js","TypeScript","Three.js","GSAP"].map(t => (
              <span key={t} className="chip text-white/80">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
