import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const PHRASES = [
  "gets you past ATS filters.",
  "lands you more interviews.",
  "impresses real recruiters.",
  "is optimized by real AI.",
];

const TypeWriter = () => {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const phrase = PHRASES[idx];
    let t;
    if (!del && text.length < phrase.length)
      t = setTimeout(() => setText(phrase.slice(0, text.length + 1)), 52);
    else if (!del && text.length === phrase.length)
      t = setTimeout(() => setDel(true), 2000);
    else if (del && text.length > 0)
      t = setTimeout(() => setText(text.slice(0, -1)), 26);
    else if (del) {
      setDel(false);
      setIdx((i) => (i + 1) % PHRASES.length);
    }
    return () => clearTimeout(t);
  }, [text, del, idx]);
  return (
    <span className="relative">
      <span style={{ color: "var(--primary)" }}>{text}</span>
      <span className="animate-pulse ml-0.5" style={{ color: "var(--primary)" }}>
        |
      </span>
    </span>
  );
};

const Hero = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opac = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[80%] rounded-full opacity-[0.06] blur-[140px]"
          style={{ background: "var(--primary)" }}
        />
        <div
          className="absolute bottom-[-20%] right-[-5%] w-[55%] h-[70%] rounded-full opacity-[0.05] blur-[120px]"
          style={{ background: "var(--secondary)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(var(--primary) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* ─── Main Content Container ─── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-28 pb-40 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

        {/* ── LEFT COLUMN — Text Content ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border bg-blue-50/80 text-[var(--primary)] text-xs font-black uppercase tracking-widest mb-8"
            style={{ borderColor: "rgba(37,99,235,0.18)" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute h-full w-full rounded-full bg-[var(--primary)] opacity-75" />
              <span className="relative rounded-full h-2 w-2 bg-[var(--primary)]" />
            </span>
            Trusted by 10,000+ Job Seekers
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-[-0.04em] leading-[0.92] mb-6 text-[var(--text)]"
          >
            Your dream job
            <br />
            <TypeWriter />
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-semibold text-[var(--text-2)]"
          >
            ATSify is the world's most advanced AI resume checker. Scan, score, and optimize your way to more interviews.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/login")}
              className="group px-9 py-4 rounded-2xl font-black text-sm text-white shadow-xl shadow-blue-500/20 overflow-hidden relative"
              style={{ background: "linear-gradient(135deg, var(--primary), var(--primary-d))" }}
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-3">
                Analyze My Resume — Free
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" className="group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/templates")}
              className="px-9 py-4 rounded-2xl font-black text-sm text-[var(--text)] border-2 border-[var(--border)] bg-white hover:border-blue-200 hover:shadow-lg transition-all"
            >
              View Templates
            </motion.button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-8"
          >
            {[
              { value: "94%", label: "ATS Pass Rate" },
              { value: "3×", label: "More Interviews" },
              { value: "10k+", label: "Resumes Optimized" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-black text-[var(--primary)]">{stat.value}</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-[var(--text-3)] mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── RIGHT COLUMN — Hero Imagery ── */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: y2, opacity: opac }}
          className="relative hidden lg:flex items-center justify-center"
        >
          {/* Main big hero image */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div
              className="w-[420px] h-[540px] rounded-[40px] overflow-hidden shadow-2xl border border-blue-100/60"
              style={{ boxShadow: "0 32px 80px rgba(37,99,235,0.14), 0 8px 32px rgba(0,0,0,0.10)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=85"
                alt="Resume Review"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
            </div>

            {/* Inset images */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -left-14 w-44 h-36 rounded-3xl overflow-hidden shadow-xl border-2 border-white"
            >
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80" alt="Job seeker" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-6 -right-10 w-32 h-28 rounded-2xl overflow-hidden shadow-xl border-2 border-white"
            >
              <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=300&q=80" alt="Professional" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>

          {/* Badges */}
          <motion.div
            style={{ y: y1 }}
            className="absolute top-8 -left-16 p-5 rounded-2xl border border-blue-100 bg-white/95 backdrop-blur-md shadow-xl z-20"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center text-white">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <div>
                <p className="text-[9px] font-black uppercase tracking-widest text-[var(--text-3)]">ATS Score</p>
                <p className="text-sm font-black text-[var(--text)]">94 / 100</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Brand Logos Marquee (Light Strip) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-0 left-0 w-full py-8 bg-[var(--bg)] border-y border-[var(--border)] overflow-hidden flex items-center z-20"
      >
        <div className="relative flex overflow-hidden w-full">
          <motion.div
            animate={{ x: [0, -1500] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-24 whitespace-nowrap px-10"
          >
            {[...Array(5)].flatMap(() => [
              { name: "Google", color: "#4285F4" },
              { name: "Microsoft", color: "#F25022" },
              { name: "Airbnb", color: "#FF5A5F" },
              { name: "Spotify", color: "#1DB954" },
              { name: "Stripe", color: "#008CDD" },
              { name: "Uber", color: "#000000" },
              { name: "Amazon", color: "#FF9900" },
              { name: "Meta", color: "#0668E1" }
            ]).map((b, i) => (
              <div key={`${b.name}-${i}`} className="flex items-center gap-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-black text-white"
                  style={{ background: b.color }}
                >
                  {b.name.charAt(0)}
                </div>
                <span className="text-2xl font-black tracking-tighter text-black hover:text-[var(--primary)] transition-all cursor-default">
                  {b.name}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Edge fades */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[var(--bg)] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[var(--bg)] to-transparent z-10" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
