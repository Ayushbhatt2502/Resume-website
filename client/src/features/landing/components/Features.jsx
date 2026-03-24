import { motion } from "framer-motion";

const icons = {
  score: (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
    </svg>
  ),
  keyword: (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /><path d="M8 11h6" /><path d="M11 8v6" />
    </svg>
  ),
  format: (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6" /><path d="M16 13H8" /><path d="M16 17H8" /><path d="M10 9H8" />
    </svg>
  ),
  ai: (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
    </svg>
  ),
};

const FEATURES = [
  { title: "AI Resume Scoring", desc: "Get an instant ATS score based on real-world recruiter algorithms.", icon: "score", gradient: "from-blue-500 to-indigo-600" },
  { title: "Keyword Optimization", desc: "Automatically detect and insert missing high-impact keywords.", icon: "keyword", gradient: "from-sky-400 to-cyan-600" },
  { title: "Format Analysis", desc: "Ensure your resume is readable by every major ATS system.", icon: "format", gradient: "from-violet-500 to-purple-600" },
  { title: "Live AI Feedback", desc: "Contextual suggestions to rewrite bullet points for maximum impact.", icon: "ai", gradient: "from-emerald-400 to-teal-600" },
];

const Features = () => (
  <section id="features" className="py-32 relative overflow-hidden" style={{ background: "var(--bg)" }}>
    <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-20 mb-32">
        {/* Left — Text */}
        <div className="lg:w-1/2">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50/80 text-[var(--primary)] text-xs font-black uppercase tracking-[0.2em] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" /> Powerful Intelligence
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tight text-[var(--text)] mb-8 leading-[1.1]">
            Features built for <span style={{ color: "var(--primary)" }}>ATS Dominance</span>
          </motion.h2>
          <p className="text-[var(--text-2)] text-xl font-semibold leading-relaxed mb-12">
            Our AI doesn't just check for spelling. It analyzes your resume's structure, semantics, and impact using data from over 500,000 successful job applications.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {FEATURES.map((f, i) => (
              <motion.div key={f.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-3xl bg-white border border-[var(--border)] hover:border-blue-200 transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  {icons[f.icon]}
                </div>
                <h3 className="text-lg font-black text-[var(--text)] mb-2">{f.title}</h3>
                <p className="text-sm text-[var(--text-3)] font-medium leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right — Big Feature Image */}
        <div className="lg:w-1/2 relative">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute -inset-10 rounded-full bg-[var(--primary)] opacity-[0.05] blur-[120px]" />
            <div className="relative z-10 rounded-[40px] overflow-hidden border border-[var(--border)] shadow-[0_32px_80px_rgba(0,0,0,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1000&q=80"
                alt="AI Analysis"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-8 -right-8 p-6 bg-white rounded-3xl shadow-2xl border border-blue-50 z-20 max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
                </div>
                <p className="text-xs font-black text-[var(--text)]">Verified</p>
              </div>
              <p className="text-[10px] text-[var(--text-3)] font-bold">Passed Google, Meta, and Amazon ATS filters.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Another Image Section — Team/Human Touch */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { img: "/images/feature-ai.png", title: "Human-In-The-Loop", desc: "Our AI is trained by real recruiters." },
          { img: "/images/feature-templates.png", title: "Enterprise Ready", desc: "Trusted by thousands of job seekers." },
          { img: "/images/feature-scan.png", title: "Global Support", desc: "Optimizing resumes across 50+ countries." },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="group cursor-pointer"
          >
            <div className="relative h-64 rounded-[32px] overflow-hidden mb-6 border border-[var(--border)]">
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/images/feature-ai.png";
                }}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
            </div>
            <h4 className="text-xl font-black text-[var(--text)] mb-2">{item.title}</h4>
            <p className="text-sm text-[var(--text-3)] font-medium">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
