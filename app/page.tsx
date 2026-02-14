"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const BP = "/kat-website";

function Nav() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-black/60 backdrop-blur-md border-b border-white/5"
    >
      <a href="#hero" className="font-[family-name:var(--font-display)] text-xl tracking-wider">
        KAT<span className="text-[#C8A97E]">.</span>
      </a>
      <div className="hidden md:flex gap-8 text-sm tracking-widest uppercase">
        {["About", "Expertise", "Gallery", "Contact"].map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} className="text-white/60 hover:text-[#C8A97E] transition-colors duration-300">
            {l}
          </a>
        ))}
      </div>
      <a
        href="#contact"
        className="text-sm px-5 py-2 border border-[#C8A97E] text-[#C8A97E] rounded-full hover:bg-[#C8A97E] hover:text-black transition-all duration-300"
      >
        Let&apos;s Talk
      </a>
    </motion.nav>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
} as const;

function Section({ children, id, className = "" }: { children: React.ReactNode; id?: string; className?: string }) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp}
      className={`px-6 md:px-12 lg:px-24 ${className}`}
    >
      {children}
    </motion.section>
  );
}

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative h-screen overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={`${BP}/images/01-serhant-announcement.jpg`}
          alt="Kateryna Hamanets"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" />
      </motion.div>
      <motion.div style={{ opacity }} className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-12 lg:px-24">
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-[#C8A97E] tracking-[0.3em] uppercase text-sm mb-4"
        >
          SERHANT. · Lundgren Team
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] mb-6"
        >
          Your Home.<br />
          <span className="italic text-[#C8A97E]">Your Story.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-white/60 text-lg md:text-xl max-w-lg mb-8"
        >
          Luxury real estate in New York City &amp; Miami.
          Guided by trust, driven by results.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex gap-4"
        >
          <a href="#contact" className="px-8 py-3 bg-[#C8A97E] text-black font-medium tracking-wider uppercase text-sm hover:bg-[#D4BA94] transition-colors">
            Get in Touch
          </a>
          <a href="#about" className="px-8 py-3 border border-white/20 text-white/80 tracking-wider uppercase text-sm hover:border-[#C8A97E] hover:text-[#C8A97E] transition-colors">
            My Story
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 bg-[#C8A97E] rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" className="py-24 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div variants={fadeUp} className="space-y-6">
          <p className="text-[#C8A97E] tracking-[0.3em] uppercase text-sm">About</p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-light">
            Meet <span className="italic">Kat</span>
          </h2>
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              Born in Ukraine, shaped by the world. From modeling studios in China to the skyline of Manhattan — my journey
              has always been about understanding people, cultures, and what makes a place feel like <em>home</em>.
            </p>
            <p>
              With a degree in Economics and years navigating international markets, I bring analytical precision
              and genuine warmth to every transaction. Whether you&apos;re a first-time buyer, seasoned investor,
              or looking for your next chapter in NYC or Miami — I&apos;m here.
            </p>
            <p>
              As a member of the <strong className="text-white">Lundgren Team at SERHANT.</strong>, one of the
              nation&apos;s top-ranked real estate teams, I deliver results backed by an unmatched network
              and a relentless commitment to your goals.
            </p>
          </div>
          <div className="flex gap-8 pt-4">
            {[
              { n: "6", l: "Countries Lived" },
              { n: "3", l: "Languages" },
              { n: "NYC", l: "& Miami Markets" },
            ].map((s) => (
              <div key={s.l}>
                <p className="text-3xl font-[family-name:var(--font-display)] text-[#C8A97E]">{s.n}</p>
                <p className="text-xs text-white/40 uppercase tracking-wider mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } } }}
          className="relative"
        >
          <img
            src={`${BP}/images/03-model-throwback-2016.jpg`}
            alt="Kateryna Hamanets"
            className="w-full rounded-lg shadow-2xl"
          />
          <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-[#C8A97E]/30 rounded-lg -z-10" />
        </motion.div>
      </div>

      {/* NYC Photo */}
      <motion.div variants={fadeUp} className="mt-24 relative rounded-xl overflow-hidden">
        <img
          src={`${BP}/images/02-madison-sq-listing.jpg`}
          alt="Kat in NYC penthouse with Empire State Building"
          className="w-full h-[50vh] object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="absolute bottom-8 left-8 right-8">
          <p className="font-[family-name:var(--font-display)] text-3xl md:text-4xl italic text-white/90">
            &ldquo;I know what it means to search for home — in every sense of the word.&rdquo;
          </p>
        </div>
      </motion.div>
    </Section>
  );
}

function Expertise() {
  const markets = [
    { city: "New York City", desc: "Manhattan, Brooklyn, Financial District & beyond. From penthouses to hidden gems.", icon: "🗽" },
    { city: "Miami", desc: "South Florida luxury living. Sun, skyline, and smart investments.", icon: "🌴" },
    { city: "Connecticut", desc: "Suburban elegance with city access. The best of both worlds.", icon: "🏡" },
  ];
  const services = [
    "New Development", "Residential Sales", "Luxury Rentals",
    "Buyer Representation", "Investment Advisory", "Relocation Services",
  ];

  return (
    <Section id="expertise" className="py-24 md:py-32 bg-gradient-to-b from-black via-zinc-950 to-black">
      <p className="text-[#C8A97E] tracking-[0.3em] uppercase text-sm mb-4">Expertise</p>
      <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-light mb-16">
        Markets &amp; <span className="italic">Services</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mb-20">
        {markets.map((m, i) => (
          <motion.div
            key={m.city}
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } } }}
            className="group p-8 border border-white/10 rounded-xl hover:border-[#C8A97E]/40 transition-all duration-500 bg-white/[0.02] backdrop-blur"
          >
            <span className="text-4xl mb-4 block">{m.icon}</span>
            <h3 className="font-[family-name:var(--font-display)] text-2xl mb-3 group-hover:text-[#C8A97E] transition-colors">{m.city}</h3>
            <p className="text-white/50 leading-relaxed">{m.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        {services.map((s, i) => (
          <motion.span
            key={s}
            variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { delay: i * 0.08, duration: 0.4 } } }}
            className="px-5 py-2 border border-white/10 rounded-full text-sm text-white/60 hover:border-[#C8A97E] hover:text-[#C8A97E] transition-all cursor-default"
          >
            {s}
          </motion.span>
        ))}
      </div>

      {/* SERHANT Trust Badge */}
      <motion.div variants={fadeUp} className="mt-16 flex items-center gap-4 p-6 border border-[#C8A97E]/20 rounded-xl bg-[#C8A97E]/5 max-w-md">
        <div className="text-3xl font-[family-name:var(--font-display)] font-bold tracking-tight">SERHANT<span className="text-[#C8A97E]">.</span></div>
        <div className="text-sm text-white/50">Member of the Lundgren Team<br />Featured on Netflix</div>
      </motion.div>
    </Section>
  );
}

function Gallery() {
  const images = [
    { src: "01-serhant-announcement.jpg", alt: "Professional headshot", span: "col-span-1 row-span-2" },
    { src: "02-madison-sq-listing.jpg", alt: "NYC penthouse view", span: "col-span-1 row-span-1" },
    { src: "03-model-throwback-2016.jpg", alt: "Model portfolio", span: "col-span-1 row-span-2" },
    { src: "profile-hd.jpg", alt: "Profile", span: "col-span-1 row-span-1" },
  ];

  return (
    <Section id="gallery" className="py-24 md:py-32">
      <p className="text-[#C8A97E] tracking-[0.3em] uppercase text-sm mb-4">Gallery</p>
      <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-light mb-16">
        Moments &amp; <span className="italic">Milestones</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[250px]">
        {images.map((img, i) => (
          <motion.div
            key={img.src}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: i * 0.12, duration: 0.6 } } }}
            className={`${img.span} relative overflow-hidden rounded-lg group cursor-pointer`}
          >
            <img
              src={`${BP}/images/${img.src}`}
              alt={img.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
          </motion.div>
        ))}
      </div>
      <motion.div variants={fadeUp} className="mt-8 text-center">
        <a
          href="https://www.instagram.com/katerynahamanets"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#C8A97E] hover:text-[#D4BA94] transition-colors text-sm tracking-wider uppercase"
        >
          Follow on Instagram →
        </a>
      </motion.div>
    </Section>
  );
}

function Testimonials() {
  const quotes = [
    { text: "Kat made what could have been an overwhelming process feel seamless. Her knowledge of the NYC market is exceptional.", name: "Sarah M.", role: "First-time Buyer, Manhattan" },
    { text: "Professional, transparent, and always available. Kat found us the perfect investment property in record time.", name: "David & Elena K.", role: "Investors, Miami" },
    { text: "Her international background and attention to detail set her apart. We felt understood from day one.", name: "Thomas R.", role: "Relocation Client, FiDi" },
  ];

  return (
    <Section id="testimonials" className="py-24 md:py-32 bg-gradient-to-b from-black via-zinc-950 to-black">
      <p className="text-[#C8A97E] tracking-[0.3em] uppercase text-sm mb-4">Testimonials</p>
      <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-light mb-16">
        Client <span className="italic">Stories</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {quotes.map((q, i) => (
          <motion.div
            key={i}
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } } }}
            className="p-8 border border-white/10 rounded-xl bg-white/[0.02]"
          >
            <div className="text-4xl text-[#C8A97E] mb-4 font-[family-name:var(--font-display)]">&ldquo;</div>
            <p className="text-white/70 leading-relaxed mb-6">{q.text}</p>
            <div>
              <p className="font-medium text-white">{q.name}</p>
              <p className="text-xs text-white/40">{q.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" className="py-24 md:py-32">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <p className="text-[#C8A97E] tracking-[0.3em] uppercase text-sm mb-4">Contact</p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-light mb-8">
            Let&apos;s Find Your <span className="italic">Home</span>
          </h2>
          <div className="space-y-6 text-white/60">
            <div>
              <p className="text-white/30 text-xs uppercase tracking-wider mb-1">Phone</p>
              <a href="tel:+16464807665" className="text-lg hover:text-[#C8A97E] transition-colors">+1 (646) 480-7665</a>
            </div>
            <div>
              <p className="text-white/30 text-xs uppercase tracking-wider mb-1">Office</p>
              <p>372 West Broadway<br />New York, NY 10012</p>
            </div>
            <div>
              <p className="text-white/30 text-xs uppercase tracking-wider mb-1">Follow</p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/katerynahamanets" target="_blank" rel="noopener noreferrer" className="hover:text-[#C8A97E] transition-colors">Instagram</a>
                <a href="https://serhant.com/agents/katerynahamanets" target="_blank" rel="noopener noreferrer" className="hover:text-[#C8A97E] transition-colors">SERHANT.</a>
              </div>
            </div>
          </div>
        </div>
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          {[
            { label: "Name", type: "text", placeholder: "Your name" },
            { label: "Email", type: "email", placeholder: "your@email.com" },
            { label: "Phone", type: "tel", placeholder: "+1 (___) ___-____" },
          ].map((f) => (
            <div key={f.label}>
              <label className="block text-xs text-white/30 uppercase tracking-wider mb-2">{f.label}</label>
              <input
                type={f.type}
                placeholder={f.placeholder}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:border-[#C8A97E] focus:ring-1 focus:ring-[#C8A97E] outline-none transition"
              />
            </div>
          ))}
          <div>
            <label className="block text-xs text-white/30 uppercase tracking-wider mb-2">Message</label>
            <textarea
              rows={4}
              placeholder="Tell me about your dream home..."
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:border-[#C8A97E] focus:ring-1 focus:ring-[#C8A97E] outline-none transition resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#C8A97E] text-black font-medium tracking-wider uppercase text-sm hover:bg-[#D4BA94] transition-colors rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center text-sm text-white/30">
      <p className="font-[family-name:var(--font-display)]">KAT<span className="text-[#C8A97E]">.</span> HAMANETS</p>
      <p>© {new Date().getFullYear()} · Licensed Real Estate Salesperson · SERHANT.</p>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Expertise />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
