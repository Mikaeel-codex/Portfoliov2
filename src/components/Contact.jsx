import { profile } from "../data";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e){
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="glass p-6 md:p-8">
        <h3 className="font-semibold">Say hello 👋</h3>
        <p className="text-white/80 mt-2">
          Email: <a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a><br/>
          WhatsApp: <a className="underline" href={`https://wa.me/${profile.phone.replace(/\D/g,'')}`} target="_blank">{profile.phone}</a><br/>
          LinkedIn: <a className="underline" href={profile.linkedin} target="_blank">Profile</a>
        </p>
      </div>
      <form onSubmit={onSubmit} className="glass p-6 md:p-8">
        <div className="grid gap-4">
          <input required placeholder="Your name" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent" />
          <input required type="email" placeholder="Your email" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent" />
          <textarea required placeholder="Message" rows="5" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent"></textarea>
          <button className="btn-primary justify-center">Send</button>
          {sent && <p className="text-accent">Thanks! I’ll get back to you soon.</p>}
        </div>
      </form>
    </div>
  );
}
