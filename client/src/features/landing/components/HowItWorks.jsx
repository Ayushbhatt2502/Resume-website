import { motion } from "framer-motion";

const STEPS = [
  {
    step: "01", title: "Upload Resume", desc: "Drag and drop your PDF or Word document. Our AI instantly parses your entire career history.", gradient: "from-blue-500 to-indigo-600",
    icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
  },
  {
    step: "02", title: "AI Deep Scan", desc: "Our engine compares your data against 500+ industry-specific ATS checkpoints and recruiter benchmarks.", gradient: "from-violet-500 to-purple-600",
    icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
  },
  {
    step: "03", title: "Get Results", desc: "Receive a detailed breakdown of your score, missing keywords, and actionable rewriting tips.", gradient: "from-emerald-500 to-teal-600",
    icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
  },
];

const HowItWorks = () => (
  <section id="how" className="py-32 relative overflow-hidden" style={{ background: "var(--bg-2)" }}>
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full blur-[140px] opacity-[0.05] -translate-y-1/2" style={{ background: "var(--primary)" }} />
    </div>

    <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-20">
        {/* Left */}
        <div className="lg:w-1/2">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50/80 text-[var(--primary)] text-xs font-black uppercase tracking-[0.2em] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" /> The Process
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tight text-[var(--text)] mb-8 leading-tight">
            How it works in <br /><span style={{ color: "var(--primary)" }}>3 Simple Steps</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-[var(--text-2)] text-xl mb-14 font-semibold leading-relaxed">
            Getting past the ATS shouldn't be a mystery. We've simplified the process.
          </motion.p>

          <div className="flex flex-col gap-4">
            {STEPS.map((s, i) => (
              <motion.div key={s.step}
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.3 }}
                whileHover={{ x: 8, transition: { duration: 0.2 } }}
                className="flex items-start gap-6 p-7 rounded-3xl border border-transparent hover:border-blue-100 hover:bg-white transition-all group cursor-pointer hover:shadow-xl hover:shadow-blue-500/[0.04]">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center text-white shadow-lg flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {s.icon}
                </div>
                <div>
                  <h3 className="text-xl font-black text-[var(--text)] mb-2 group-hover:text-[var(--primary)] transition-colors">{s.title}</h3>
                  <p className="text-[var(--text-2)] font-medium leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right — Professional Mockup Image */}
        <div className="lg:w-1/2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Decorative background glow */}
            <div
              className="absolute -inset-10 rounded-full opacity-[0.08] blur-[100px] pointer-events-none"
              style={{ background: "var(--primary)" }}
            />

            {/* Laptop/Dashboard Image Mockup */}
            <div className="relative z-10 rounded-[32px] overflow-hidden border border-[var(--border)] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1000&q=80"
                alt="Dashboard Preview"
                className="w-full h-auto object-cover"
              />
              {/* Overlay for "AI Processing" look */}
              <div className="absolute inset-0 bg-blue-500/5 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Floating UI Elements over image */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 p-4 rounded-2xl bg-white shadow-xl border border-blue-100 z-20 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-[var(--text-3)]">Optimization</p>
                <p className="text-sm font-black text-emerald-600">94/100 Score</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-6 p-5 rounded-2xl bg-white shadow-xl border border-blue-100 z-20"
            >
              <div className="flex flex-col gap-2">
                <p className="text-[10px] font-black uppercase tracking-widest text-[var(--text-3)] mb-1">Keywords Detected</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-50 text-[var(--primary)] text-[10px] font-bold rounded-full border border-blue-100">React.js</span>
                  <span className="px-3 py-1 bg-blue-50 text-[var(--primary)] text-[10px] font-bold rounded-full border border-blue-100">Node.js</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </div>
  </section>
);

export default HowItWorks;
